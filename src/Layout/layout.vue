<template>
  <div id="main">
    <header class="header">
      <nav class="navbar is-spaced has-shadow" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                width="112"
                height="28"
              />
            </a>

            <a
              role="button"
              class="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item"> Home </a>

              <a class="navbar-item"> Documentation </a>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link"> More </a>

                <div class="navbar-dropdown">
                  <a class="navbar-item"> About </a>
                  <a class="navbar-item"> Jobs </a>
                  <a class="navbar-item"> Contact </a>
                  <hr class="navbar-divider" />
                  <a class="navbar-item"> Report an issue </a>
                </div>
              </div>
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <a-space>
                    <a-button type="primary">Login</a-button>
                    <a-button>Register</a-button>
                  </a-space>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <div class="middle container">
      <a-row :gutter="[16,16]">
        <a-col :span="18">
          <a-carousel arrows>
            <template #prevArrow>
              <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
                <left-circle-outlined />
              </div>
            </template>
            <template #nextArrow>
              <div class="custom-slick-arrow" style="right: 10px">
                <right-circle-outlined />
              </div>
            </template>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </a-carousel>
          <RouterView />
        </a-col>
        <a-col :span="6">
          <aside-box type="search"></aside-box>
          <aside-box type="news" name="最新文章" :newsData="newsDataComp"></aside-box>
          <aside-box type="tag" name="标签" :tagsData="tagsData"></aside-box>
          <aside-box type="archive" name="归档" :archiveData="archiveData"></aside-box>
        </a-col>
      </a-row>
    </div>
    <footer class="container">底部</footer>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import { reactive } from '@vue/reactivity';
import { computed } from 'vue'

const newsData = reactive([
  { title: "Vue3_VueRouter_Vite_pina组件化开发实战1开发实战1开发实战1组件化开发实战1开发实战1开发实战1"},
  { title: "Vue3_VueRouter_Vite_pina组件化开发实战2开发实战2开发实战2"},
  { title: "Vue3_VueRouter_Vite_pina组件化开发实战3开发实战3开发实战3"},
])

const newsDataComp = computed(()=>{
  let tempData = []
  newsData.forEach(item=>{
    if(item.title.length>33){
      item.title = item.title.substring(0,33)+"..."
    }
    item.title.length>33 ? item.title = item.title.substring(0,33)+"...": null
    tempData.push(item)
  })
  return tempData
})

const tagsData = reactive([
  { color: "#87d068", name: "tag1"},
  { color: "#f50", name: "tag2"},
  { color: "blue", name: "tag3"}
])

const archiveData = reactive([
{ date: "2022年12月4日"},
{ date: "2003年9月2日"},
{ date: "2015年4月10日"}
])


</script>

<style lang="scss">
@import 'bulma/sass/base/minireset.sass';
@import 'bulma/sass/utilities/_all.sass';
@import 'bulma/sass/components/navbar.sass';
@import 'bulma/sass/elements/container.sass';
@import 'bulma/sass/elements/box.sass';
@import 'bulma/sass/helpers/typography.sass';
@import 'bulma/sass/helpers/spacing.sass';
</style>

<style lang="scss" scoped>
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
