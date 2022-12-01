<script setup>
import { RouterView } from 'vue-router'
import { getCurrentInstance } from 'vue';
import { StarOutlined, StepBackwardOutlined } from '@ant-design/icons-vue';
const {proxy}  = getCurrentInstance();

const info = ()=>{
  console.log("info")
  proxy.$message.info("Hello world!");
}


</script>

<template>
    <a-button type="primary" @click="info">Primary Button</a-button>
    <a-button>Default Button</a-button>
    <a-button type="dashed">Dashed Button</a-button>
    <a-button type="text">Text Button</a-button>
    <a-button type="link">Link Button</a-button>
    <star-outlined />
    <step-backward-outlined />
  <RouterView />
</template>

<style scoped>

</style>
