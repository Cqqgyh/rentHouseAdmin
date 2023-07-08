<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <span>新增公寓</span>
      </div>
    </template>
    <el-form
      ref="ruleFormRef"
      :model="formData"
      :rules="rules"
      label-width="120px"
      style="max-width: 660px"
      status-icon
    >
      <el-form-item label="公寓名称" prop="name">
        <el-input v-model="formData.name" />
      </el-form-item>
      <el-form-item label="公寓介绍" prop="introduction">
        <el-input type="textarea" v-model="formData.introduction" />
      </el-form-item>
      <el-form-item label="所处区域" required>
        <div class="flex-center">
          <el-form-item prop="provinceId">
            <el-select
              v-model="formData.provinceId"
              placeholder="请选择省份"
              clearable
              @change="provinceChangeCallback"
              @clear="provinceClearCallback"
            >
              <el-option
                v-for="item in areaInfo.provinceList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="cityId">
            <el-select
              v-model="formData.cityId"
              placeholder="请选择城市"
              clearable
              @change="cityChangeCallback"
              @clear="cityClearCallback"
            >
              <el-option
                v-for="item in areaInfo.cityList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="districtId">
            <el-select
              v-model="formData.districtId"
              placeholder="请选择区域"
              clearable
              @change="districtChangeCallback"
              @clear="districtClearCallback"
            >
              <el-option
                v-for="item in areaInfo.districtList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </div>
      </el-form-item>
      <el-form-item label="详细地址" prop="introduction">
        <el-select
          v-model="formData.addressDetail"
          filterable
          remote
          placeholder="请输入详细地址查询"
          :remote-method="remoteMethod"
          style="width: 100%"
          @change="addressDetailChangeCallback"
        >
          <el-option
            v-for="item in addressDetailOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="公寓前台电话" prop="phone">
        <el-input v-model="formData.phone" />
      </el-form-item>
      <el-form-item label="是否发布" prop="name">
        <el-radio-group v-model="formData.isRelease" class="ml-4">
          <el-radio label="未发布">未发布</el-radio>
          <el-radio label="已发布">已发布</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import {
  AddressOptionsInterface,
  ApartmentInterface,
  FacilityInfoInterface,
  FeeInfoInfoInterface,
  LabelInfoInterface,
  RegionInterface,
} from '@/api/apartmentManagement/types'
import {
  getCityList,
  getDistrictList,
  getFacilityInfoList,
  getFeeInfoList,
  getLabelInfoList,
  getProvinceList,
} from '@/api/apartmentManagement'
import { useMap } from '@/hooks/useMap'
//#region <表单相关>
// 表单数据
const formData = reactive<
  Omit<ApartmentInterface, 'totalRoomCount' | 'freeRoomCount'>
>({
  id: 0,
  name: '',
  introduction: '',
  districtId: '',
  districtName: '',
  cityId: '',
  cityName: '',
  provinceId: '',
  provinceName: '',
  addressDetail: '',
  latitude: '',
  longitude: '',
  phone: '',
  isRelease: '未发布',
  facilityInfoIds: [],
  labelIds: [],
  feeValueIds: [],
  graphVoList: [
    {
      name: '',
      url: '',
    },
  ],
})
// 表单验证规则
const rules = reactive({
  name: [{ required: true, message: '请输入公寓名称', trigger: 'blur' }],
})
//#region <地区数据相关>
// 地区数据
const areaInfo = reactive({
  // 省份数据
  provinceList: [] as RegionInterface[],
  // 市区数据
  cityList: [] as RegionInterface[],
  // 区县数据
  districtList: [] as RegionInterface[],
})
//#region <省市区查询相关>
// 获取省份
async function getProvinceListHandle() {
  try {
    const { data } = await getProvinceList()
    areaInfo.provinceList = data
  } catch (error) {
    console.log(error)
    ElMessage.error((error as any)?.message || 'Has Error')
  }
}

// 获取城市
async function getCityListHandle(provinceId: number | string) {
  try {
    const { data } = await getCityList(provinceId)
    areaInfo.cityList = data
    resetDistrict()
  } catch (error) {
    console.log(error)
    ElMessage.error((error as any)?.message || 'Has Error')
  }
}

// 获取区域
async function getDistrictListHandle(cityId: number | string) {
  try {
    const { data } = await getDistrictList(cityId)
    areaInfo.districtList = data
  } catch (error) {
    console.log(error)
    ElMessage.error((error as any)?.message || 'Has Error')
  }
}

// 重置市、区数据
function resetCityAndDistrict() {
  formData.cityId = ''
  formData.districtId = ''
  areaInfo.cityList = []
  areaInfo.districtList = []
}

// 重置区数据
function resetDistrict() {
  formData.districtId = ''
  areaInfo.districtList = []
}

// 省份改变回调
const provinceChangeCallback = async () => {
  let provinceId = formData.provinceId
  provinceId && (await getCityListHandle(provinceId))
}
// 省份清除回调
const provinceClearCallback = () => {
  formData.provinceId = ''
  resetCityAndDistrict()
}
// 城市改变回调
const cityChangeCallback = async () => {
  let cityId = formData.cityId
  cityId && (await getDistrictListHandle(cityId))
}
// 城市清除回调
const cityClearCallback = () => {
  console.log('清空城市')
  formData.cityId = ''
  formData.districtId = ''
  areaInfo.districtList = []
}
// 区域改变回调
const districtChangeCallback = () => {
  console.log('区域改变')
}
// 区域清除回调
const districtClearCallback = () => {
  console.log('清空区域')
  formData.districtId = ''
}
//#endregion
//#endregion

//#endregion
//#region <高德地图相关>
// 详细地址建议列表
const addressDetailOptions = ref<AddressOptionsInterface[]>([])

// 地图实例
const { AMap } = useMap()
// 动态地址改查询
function remoteMethod(keywords: string) {
  if (keywords.trim()) {
    AMap.value.plugin('AMap.AutoComplete', function () {
      // 实例化Autocomplete
      let autoOptions = {
        city: '全国',
      }
      console.log('AMap', AMap.value)
      let autoComplete = new AMap.value.AutoComplete(autoOptions)
      autoComplete.search(keywords, function (status: any, result: any) {
        // 搜索成功时，result即是对应的匹配数据
        console.log('result', result)
        addressDetailOptions.value =
          result?.tips.map((item: any) => {
            return {
              label: item.district + item.name + item.address,
              value: item.district + item.name + item.address,
              location: item.location,
            }
          }) || []
      })
    })
  } else {
    addressDetailOptions.value = []
  }
}
// 详细地址改变回调
function addressDetailChangeCallback(value: string | number) {
  const targetObj = addressDetailOptions.value.find(
    (item) => item.value === value,
  )
  if (targetObj) {
    // lng  经度
    formData.longitude = targetObj.location?.lng || ''
    // lat  纬度
    formData.latitude = targetObj.location?.lat || ''
  }
}
//#endregion
//#region <配套信息、标签信息、杂费信息>
// 配套信息
const facilityInfoList = ref<FacilityInfoInterface[]>([])
// 标签信息
const labelInfoList = ref<LabelInfoInterface[]>([])
// 杂费信息
const feeInfoList = ref<FeeInfoInfoInterface[]>([])
// 获取配套信息
async function getFacilityInfoListHandle() {
  try {
    const { data } = await getFacilityInfoList()
    facilityInfoList.value = data
  } catch (error) {
    console.log(error)
    ElMessage.error((error as any)?.message || 'Has Error')
  }
}
// 获取标签信息
async function getLabelInfoListHandle() {
  try {
    const { data } = await getLabelInfoList()
    labelInfoList.value = data
  } catch (error) {
    console.log(error)
    ElMessage.error((error as any)?.message || 'Has Error')
  }
}
// 获取杂费信息
async function getFeeInfoListHandle() {
  try {
    const { data } = await getFeeInfoList()
    feeInfoList.value = data
  } catch (error) {
    console.log(error)
    ElMessage.error((error as any)?.message || 'Has Error')
  }
}
//#endregion
onMounted(() => {
  // 获取省份
  getProvinceListHandle()
  // 获取配套信息
  getFacilityInfoListHandle()
  // 获取标签信息
  getLabelInfoListHandle()
  // 获取杂费信息
  getFeeInfoListHandle()
})
</script>

<style scoped lang="scss">
.card-header {
  font-size: 18px;
  font-weight: bold;
}
</style>
