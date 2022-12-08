import axios from "axios";
import { message } from 'ant-design-vue';
export function request(config) {
  // 创建实例
  const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_BASEURL,
    timeout: 50000
  })

  // 请求拦截
  instance.interceptors.request.use(function (config) {
    // 请求拦截具体做的事
    return config
  }, function (err) {
    return Promise.reject(err)
  })

  // 返回拦截
  instance.interceptors.response.use(function (response) {
    // 返回数据做的事
    let backToFontEnd = {
      data: response.data,
      status: response.status
    }
    return backToFontEnd
  }, function (err) {
    if (err.response) {
      if (err.status === 500) {
        message.warning('服务器内部异常!');
      }
    }
    return Promise.reject(err)
  })

  // 返回一个请求
  return instance(config)
}
