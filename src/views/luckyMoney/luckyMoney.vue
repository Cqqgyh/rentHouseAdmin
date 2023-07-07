<template>
  <!--    表格-->
  <div>
    <el-card>
      <el-button
        type="primary"
        style="margin-bottom: 20px"
        @click="ShowOrAddDetailsRef?.add"
      >
        新增
      </el-button>
      <elTableForAllData
        :data="luckyMoneyActiveList"
        style="width: 100%"
        border
      >
        <el-table-column prop="activityKey" label="活动标识"></el-table-column>
        <el-table-column
          prop="duration"
          label="持续时长(ms)"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="generationRate"
          label="红包生成速率(ms)"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="totalMoney"
          label="红包总金额(元)"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="redPackageNumber"
          label="红包个数"
          width="150"
        ></el-table-column>
        <el-table-column prop="date" label="活动开启时间"></el-table-column>
        <el-table-column prop="" label="操作">
          <template #default="{ row }">
            <el-button type="primary" @click="ShowOrAddDetailsRef?.view(row)">
              查看详情
            </el-button>
          </template>
        </el-table-column>
      </elTableForAllData>
    </el-card>
    <show-or-add-details
      ref="ShowOrAddDetailsRef"
      :addCallback="getLuckyMoneyActiveListDInfo"
    ></show-or-add-details>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getLuckyMoneyActiveList } from '@/api/luckyMoney'
import { LuckyMoneyActive } from '@/api/luckyMoney/types'
import ElTableForAllData from '@/views/luckyMoney/components/elTableForAllData/elTableForAllData.vue'
import ShowOrAddDetails from '@/views/luckyMoney/components/showOrAddDetails/showOrAddDetails.vue'

const ShowOrAddDetailsRef = ref<InstanceType<typeof ShowOrAddDetails>>()
// 活动列表
const luckyMoneyActiveList = ref<LuckyMoneyActive[]>([])
// 获取活动列表
const getLuckyMoneyActiveListDInfo = async () => {
  const res = await getLuckyMoneyActiveList()
  luckyMoneyActiveList.value = res.data
}
onMounted(() => {
  getLuckyMoneyActiveListDInfo()
})
</script>

<style scoped lang="scss"></style>
