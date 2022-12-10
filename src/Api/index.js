import { request } from "../utils/http"

export function getCategorys() {
  return request({
    url: "/categorys/",
    method: "get",
  })
}

export function getHomeArticle() {
  return request({
    url: "/article/",
    method: "get",
  })
}