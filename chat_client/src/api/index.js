import axios from 'axios'
const request=axios.create({
    baseURL:'http://127.0.0.1:8081/'
    // baseURL:'http://192.168.43.200:8081'
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
  export const chatUser = data => {
    return request({
      'Content-Type': 'application/json;charset=utf-8',
      method: 'POST',
      url: '/chatUser',
      data
    })
  }
//插入聊天内容
export const chatInsert = data => {
  return request({
    'Content-Type': 'application/json;charset=utf-8',
    method: 'POST',
    url: '/chatInsert',
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