<template>
  <a-typography class="box">
    <a-typography-title :level="3">
      <router-link :to="props.link">{{props.title}}</router-link>
    </a-typography-title>
    <a-space>
      
        <a-space>
          <user-outlined></user-outlined>
          <span>作者：<slot name="author">{{props.author}}</slot>  </span>
        </a-space>
      
        <a-space>
          <folder-outlined></folder-outlined>
          <span>分类：{{props.category}} <slot name="category">{{props.category}}</slot></span>
        </a-space>
      
      
        <a-space>
          <clock-circle-outlined></clock-circle-outlined>
          <span>发布时间：{{props.pubdate}} <slot name="pubdate">{{props.pubdate}}</slot></span>
        </a-space>
      
    </a-space>
    <a-typography-paragraph type="secondary">
      {{props.desc}}
    </a-typography-paragraph>
  </a-typography>
</template>


<script setup>
import {FolderOutlined, UserOutlined, ClockCircleOutlined } from "@ant-design/icons-vue"
import { RouterLink } from "vue-router";
const props = defineProps({
  title: {
    type: String,
    default: "默认文章标题"
  },
  link: {
    type: String || Object,
    default: "/"
  },
  author: {
    type: String,
    default: "张三"
  },
  category: {
    type: String,
    default: "React"
  },
  pubdate: {
    type: String,
    default: "2022年12月3日"
  },
  desc: {
    type: String,
    default: "本课程作为前端开发组件化的入门实战课程，力求精简，将通过一个博客的案例整合相关的技术点，以及每一个技术点在实战中的基础应用，以实战为最终目的，力求能带领大家快速上手"
  }
})
</script>


<style scoped lang="scss">

</style>