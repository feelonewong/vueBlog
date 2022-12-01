<script setup>
import { RouterView } from 'vue-router'
import { getCurrentInstance } from 'vue';
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
  <RouterView />
</template>

<style scoped>

</style>
