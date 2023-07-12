<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>房间基本信息管理</span>
      </div>
    </template>
    <el-row class="container" v-for="item in attrTypeList" :key="item">
      <el-col :span="2" class="text-center">{{ item.name }}</el-col>
      <el-col :span="22" class="item-container">
        <el-popconfirm
          v-for="item2 in item.attrValueList || []"
          :key="item2.id"
          width="220"
          confirm-button-text="删除"
          cancel-button-text="修改"
          cancel-button-type="warning"
          @confirm="deleteRoomBaseHandle(item2)"
          @cancel="editRoomBaseHandle(item2)"
          :title="`修改或删除${item2.name}`"
        >
          <template #reference>
            <div class="item m-r-10 pointer">
              <el-tag style="padding: 13px">{{ item2.name }}</el-tag>
            </div>
          </template>
        </el-popconfirm>
        <el-icon
          class="item m-r-10 m-t-5 pointer"
          :size="35"
          color="#567722"
          @click="addRoomBaseHandle(item)"
        >
          <CirclePlus />
        </el-icon>
      </el-col>
    </el-row>
    <!--    标签信息修改弹窗管理-->
    <SupportRoomBaseDialog
      ref="supportRoomBaseDialog"
      :updateRoomBase="getRoomBaseInfoListHandle"
    ></SupportRoomBaseDialog>
  </el-card>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {
  AttrInfoInfoInterface,
  AttrValueInfoInterface,
} from '@/api/apartmentManagement/types'
import { deleteAttrValueById, getAttrInfoList } from '@/api/apartmentManagement'
import SupportRoomBaseDialog from '@/views/apartmentManagement/attributeManagement/components/supportRoomBaseDialog.vue'
import { ElMessage } from 'element-plus'
const supportRoomBaseDialog = ref<InstanceType<typeof SupportRoomBaseDialog>>()
// 标签类型
const attrTypeList = ref<AttrInfoInfoInterface[]>([])
// 获取标签信息
async function getRoomBaseInfoListHandle() {
  try {
    const { data } = await getAttrInfoList()
    data.forEach((item) => {
      item.attrValueList?.forEach((item2) => {
        item2.attrKeyName = item.name
      })
    })
    attrTypeList.value = data
  } catch (error) {
    console.log(error)
  }
}
// 删除标签
const deleteRoomBaseHandle = async (item: AttrValueInfoInterface) => {
  console.log('删除', item)
  try {
    await deleteAttrValueById(item.id)
    await getRoomBaseInfoListHandle()
    ElMessage.success('操作成功')
  } catch (error) {
    console.log(error)
  }
}
// 编辑标签
const editRoomBaseHandle = (item: AttrValueInfoInterface) => {
  console.log('编辑', item)
  supportRoomBaseDialog.value?.show(item)
}
// 添加标签
const addRoomBaseHandle = (item: AttrInfoInfoInterface) => {
  console.log('添加标签', item)
  supportRoomBaseDialog.value?.show({
    attrKeyId: item.id,
    attrKeyName: item.name,
  })
}
onMounted(() => {
  getRoomBaseInfoListHandle()
})
</script>

<style scoped lang="scss">
.card-header {
  font-size: 18px;
  font-weight: bold;
}

.text-center {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
}

.container:not(:first-child) {
  margin-top: 20px;
}

.item-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 10px 15px;
  background-color: #efefef;
  border-radius: 20px;

  .item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
