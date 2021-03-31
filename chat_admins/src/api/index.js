import axios from 'axios'
const request=axios.create({
    baseURL:'http://127.0.0.1:8081/'
})

// 请求拦截器

// 响应拦截器
//聊天信息
  export const chatInfo = data => {
    return request({
      'Content-Type': 'application/json;charset=utf-8',
      method: 'POST',
      url: '/chat',
      data
    })
  }
  //客服配置信息
  export const serviceConfig = data => {
    return request({
      'Content-Type': 'application/json;charset=utf-8',
      method: 'POST',
      url: '/serviceConfig',
      data
    })
  }