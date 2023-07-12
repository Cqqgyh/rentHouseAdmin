<template>
  <el-card>
    <!--    配套信息管理-->
    <SupportFacility></SupportFacility>
    <!--    标签信息管理-->
    <SupportLabel></SupportLabel>
  </el-card>
</template>

<script setup lang="tsx">
import SupportFacility from '@/views/apartmentManagement/attributeManagement/components/supportFacility.vue'
import SupportLabel from '@/views/apartmentManagement/attributeManagement/components/supportLabel.vue'
</script>
