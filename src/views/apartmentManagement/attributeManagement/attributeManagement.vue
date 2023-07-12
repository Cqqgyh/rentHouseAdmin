<template>
  <el-card>
    <!--    配套信息管理-->
    <SupportFacility></SupportFacility>
    <!--    标签信息管理-->
    <SupportLabel class="m-t-20"></SupportLabel>
    <!--    房间基本信息管理-->
    <SupportRoomBase class="m-t-20"></SupportRoomBase>
  </el-card>
</template>

<script setup lang="tsx">
import SupportFacility from '@/views/apartmentManagement/attributeManagement/components/supportFacility.vue'
import SupportLabel from '@/views/apartmentManagement/attributeManagement/components/supportLabel.vue'
import SupportRoomBase from '@/views/apartmentManagement/attributeManagement/components/supportRoomBase.vue'
</script>
