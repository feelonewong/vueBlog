import { message, notification } from 'ant-design-vue';
import "ant-design-vue/es/message/style/css.js"
import "ant-design-vue/es/notification/style/css.js"
import ArticleItem from './components/ArticleItem.vue'

// 挂载全局对象
export default {
  install(app){
    app.config.globalProperties.$message = message;
    app.config.globalProperties.$notification = notification;
    // 挂在全局组件
    app.component('ArticleItem', ArticleItem)
  }
}