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
import { reactive } from "@vue/reactivity";

const articleDatas = reactive([
 {
   title :"JavaScript入门③-函数(2)原理{深入}执行上下文 ",
   link: "/",
   desc: "摘要：  JavaScript入门③-函数(2)原理{深入}执行上下文被JavaScript的闭包、上下文、嵌套函数、this搞得很头痛，这语言设计的，感觉比较混乱，先勉强理解总结一下😂😂😂。● 为什么有闭包这么个东西？闭包包的是什么？● 什么是词法作用域？● 函数是如执行的呢？",
   author: "王小虎",
   category: "JavaScript",
   pubdate: "2022年12月3日"
  },
  {
   title :"CSS宝典⑦-CSS处理器 Less/Scss",
   link: "/",
   desc: "摘要：  JavaScript入门③-函数(2)原理{深入}执行上下文被JavaScript的闭包、上下文、嵌套函数、this搞得很头痛，这语言设计的，感觉比较混乱，先勉强理解总结一下😂😂😂。● 为什么有闭包这么个东西？闭包包的是什么？● 什么是词法作用域？● 函数是如执行的呢？",
   author: "韩国为",
   category: "CSS",
   pubdate: "2013年12月3日"
  }
])
</script>


<style lang="scss" scoped>

</style>