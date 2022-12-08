import { request } from "../utils/http"

export function getCategorys() {
  return request({
    url: "/categorys/",
    method: "get",
  })
}