<template>
  <aside class="box">
    <h1 class="is-size-6">{{props.name}}</h1>
    <!-- 搜索框 -->
    <div v-if="props.type === 'search'">
      <a-input-search placeholder="请输入..."></a-input-search>
    </div>
    <!-- 文章 -->
    <div v-if="(props.type === 'news'&& props.newsData.length>0)">
      <ul>
        <li v-for="(item, index) in props.newsData" :key="index" class="border-bottom">
          <a href="" :title="item.title">{{item.title}}</a>
        </li>
      </ul>
    </div>
    <!-- 标签 -->
    <div v-if="(props.type === 'tag'&& props.tagsData.length>0)">
        <a-tag v-for="(item, index) in props.tagsData"
          :color="item.color"
          :key="index">
          {{item.name}}
        </a-tag>
    </div>
    <!-- 归档 -->
    <div v-if="(props.type === 'archive'&& props.archiveData.length>0)">
      <ul class="pl-2 pr-2">
        <li v-for="(item, index) in props.archiveData" :key="index" class="border-bottom">
          <a href="">{{item.date}}</a>
        </li>
      </ul>
    </div>
    <slot name="box" v-if="props.type === 'box'"></slot>
  </aside>
</template>


<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "搜索"
  },
  type: {
    type: String,
    default: "search",
    validator(val){
      return ["search", "news", "tag", "archive", "box"].includes(val);
    }
  },
  newsData: {
    type: Array,
    default: []
  },
  tagsData: {
    type: Array,
    default: []
  },
  archiveData: {
    type: Array,
    default: []
  }
})
</script>

<style scoped lang="scss">
.border-bottom {
  border-bottom: 1px dashed #ccc ;
  margin-bottom: 2px;
}
</style>