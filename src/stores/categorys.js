import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCategorys } from '../Api'

export const useCategoryStore = defineStore('category', () => {
  let categorysData = ref([])

  // 取数据
  const getCategoryDatas = computed(() => {
    return JSON.parse(sessionStorage.getItem('CategoryDatas')) || categorysData.value
  })

  // 存数据
  function apiCategory() { 
    return new Promise((resolve, reject) => {
      getCategorys().then(res => {
        if (res.status == 200) {
          categorysData.value = res.data          
          sessionStorage.setItem("CategoryDatas", JSON.stringify(res.data))
          resolve(200)
        }
      })
  });

  }   
  // 原数据，获取的数据，获取数据的方法
  return { categorysData, getCategoryDatas, apiCategory}
})
