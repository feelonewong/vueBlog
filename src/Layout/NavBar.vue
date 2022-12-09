<template>
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
              <div v-for="(item, index) in categorysData" :key="index">
                <a class="navbar-item" v-if="(item.children.length === 0)">
                  {{item.name}}
                </a>


                <div class="navbar-item has-dropdown is-hoverable" v-else>
                  <a class="navbar-link">
                    {{item.name}}
                  </a>
                  <div class="navbar-dropdown">
                    <a class="navbar-item" v-for="(subItem, index) in item.children" :key="index">
                      {{subItem.name}}
                    </a>
                  </div>
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
</template>

<script setup>
import { reactive, onMounted, getCurrentInstance } from "vue";
import {useCategoryStore} from "../stores/categorys"
const internalInstance = getCurrentInstance()

// 使用store取数据
const store = useCategoryStore()


onMounted(() => {
})

let categorysData = store.getCategoryDatas
if (!categorysData.length) {
  store.apiCategory().then(res => {
    if (res === 200) {
      categorysData = store.categorysData
      internalInstance.ctx.$forceUpdate()
    }
  })
}


// 全局风格管理 中英文切换 tabbar都可以使用全局状态管理
</script>