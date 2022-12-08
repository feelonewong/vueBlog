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
import { message } from 'ant-design-vue';
import {getCategorys} from "../Api/index"


onMounted(() => {
  handleCategorys()
})

let categorysData = reactive([])
const internalInstance = getCurrentInstance()

function handleCategorys() {
  getCategorys().then(res => {
    if (res.status == 200) {
      categorysData = res.data
    }
    internalInstance.ctx.$forceUpdate()
  }).catch(err => {
    console.log(err)
  })
}




</script>