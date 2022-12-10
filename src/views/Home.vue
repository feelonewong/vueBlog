<template>
      <article-item v-for="(item, index) in articleDatas" :key="index"
            :title="item.title"
            :link="item.link"
      >
            <template #author>{{item.author}}</template>
            <template #category>{{item.category}}</template>
            <template #pubdate>{{item.pubdate}}</template>
      </article-item>
</template>


<script setup>
import { reactive,getCurrentInstance } from "vue";
import { onMounted } from "vue-demi";
import { getHomeArticle } from "../Api/index"

onMounted(()=>{
      ArticelInfo()
})

const internalInstance = getCurrentInstance()
let articleDatas = reactive([])
function ArticelInfo(){
  getHomeArticle().then(res=>{
      console.log(res)
      if(res.status === 200) {
            articleDatas = res.data
            internalInstance.ctx.$forceUpdate()
      }
  })
}

</script>


<style lang="scss" scoped>

</style>