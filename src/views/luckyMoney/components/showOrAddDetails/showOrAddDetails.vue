<template>
  <!--    表格-->
  <el-dialog
    v-model="dialogFormVisible"
    :title="ruleForm.activityKey ? '查看活动' : '新增活动'"
    width="600px"
  >
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="150px"
      class="demo-ruleForm"
      status-icon
      :disabled="!!ruleForm.activityKey"
    >
      <el-form-item label="持续时长(ms)" prop="duration">
        <el-input-number
          v-model="ruleForm.duration"
          :step="1000"
          :min="3000"
          step-strictly
        />
      </el-form-item>
      <el-form-item label="生成速率(ms)" prop="generationRate">
        <el-input-number
          v-model="ruleForm.generationRate"
          :step="100"
          :min="100"
          step-strictly
        />
      </el-form-item>
      <el-form-item label="红包总金额(元)" prop="totalMoney">
        <el-input-number
          v-model="ruleForm.totalMoney"
          :step="1"
          :min="1"
          step-strictly
        />
      </el-form-item>
      <el-form-item label="红包个数" prop="redPackageNumber">
        <el-input-number
          v-model="ruleForm.redPackageNumber"
          :step="1"
          :min="1"
          step-strictly
        />
      </el-form-item>
      <el-form-item label="活动开启时间" prop="date">
        <el-date-picker
          v-model="ruleForm.date"
          type="datetime"
          placeholder="开始时间"
          :disabled-date="disabledDate"
          format="YYYY-MM-DD HH:mm:ss"
          value-format="YYYY-MM-DD HH:mm:ss"
          :clearable="false"
          :shortcuts="shortcuts"
        />
      </el-form-item>
      <el-form-item
        v-if="ruleForm.activityKey"
        label="前端路由路径参数"
        prop="date"
      >
        <span
          class="pointer"
          type="info"
          @click="
            copyText(`/luckyMoneyRain?activityKey=${ruleForm.activityKey}`)
          "
        >
          {{ `/luckyMoneyRain?activityKey=${ruleForm.activityKey}` }}
        </span>
      </el-form-item>
    </el-form>
    <template #footer>
      <span v-if="ruleForm.activityKey" class="dialog-footer">
        <el-button @click="close">关闭</el-button>
      </span>
      <span v-else class="dialog-footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="addLuckyMoneyActiveHandle">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { LuckyMoneyActive } from '@/api/luckyMoney/types'
import { FormInstance, FormRules, dayjs, ElMessage } from 'element-plus'
import { addLuckyMoneyActive } from '@/api/luckyMoney'

const props = defineProps({
  addCallback: {
    type: Function,
    default: () => ({}),
  },
})

const ruleFormRef = ref<FormInstance>()
// 表单数据
const ruleForm = ref<LuckyMoneyActive>({
  duration: 5000,
  generationRate: 200,
  totalMoney: 100,
  redPackageNumber: 10,
  date: '',
})
const dialogFormVisible = ref(false)
// 表单验证规则
const rules = reactive<FormRules>({
  duration: [{ required: true, message: '请输入', trigger: 'blur' }],
  generationRate: [{ required: true, message: '请输入', trigger: 'blur' }],
  totalMoney: [{ required: true, message: '请输入', trigger: 'blur' }],
  redPackageNumber: [{ required: true, message: '请输入', trigger: 'blur' }],
  date: [{ required: true, message: '请选择', trigger: 'change' }],
})
// 禁用时间
const disabledDate = (time: Date) => {
  return time.getTime() < Date.now()
}
// 日期选择快捷选项
const shortcuts = [
  {
    text: '10秒后',
    value: () => dayjs().add(10, 'second').format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    text: '20秒后',
    value: () => dayjs().add(20, 'second').format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    text: '30秒后',
    value: () => dayjs().add(30, 'second').format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    text: '1分钟后',
    value: () => dayjs().add(1, 'minute').format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    text: '2分钟后',
    value: () => dayjs().add(2, 'minute').format('YYYY-MM-DD HH:mm:ss'),
  },
  {
    text: '3分钟后',
    value: () => dayjs().add(3, 'minute').format('YYYY-MM-DD HH:mm:ss'),
  },
]
// 点击复制文本到剪切板的功能
const copyText = async (val: string) => {
  if (navigator.clipboard && navigator.permissions) {
    await navigator.clipboard.writeText(val)
  } else {
    const textArea = document.createElement('textArea') as any
    textArea.value = val
    textArea.style.width = 0
    textArea.style.position = 'fixed'
    textArea.style.left = '-999px'
    textArea.style.top = '10px'
    textArea.setAttribute('readonly', 'readonly')
    document.body.appendChild(textArea)

    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
  }
  //   提醒复制成功
  ElMessage.success('复制成功')
}

// 新增数据
async function addLuckyMoneyActiveHandle() {
  ruleFormRef.value?.validate(async (valid, fields) => {
    if (valid) {
      const res = await addLuckyMoneyActive(ruleForm.value)
      console.log('前台路由路径参数：')
      console.log(`/luckyMoneyRain?activityKey=${res.data}`)
      props.addCallback()
      close()
    } else {
      console.log('error submit!', fields)
    }
  })
}

/**
 * 查看
 * @param params
 */
function view(params: LuckyMoneyActive) {
  ruleForm.value = params
  show()
}

// 新增
function add() {
  ruleForm.value = {
    duration: 5000,
    generationRate: 200,
    totalMoney: 100,
    redPackageNumber: 10,
    date: '',
  }
  show()
}

// 开启遮罩层
function show() {
  dialogFormVisible.value = true
}

// 关闭遮罩层
function close() {
  dialogFormVisible.value = false
}

// 对外暴露的方法
defineExpose({
  view,
  add,
})
</script>

<style scoped lang="scss"></style>
