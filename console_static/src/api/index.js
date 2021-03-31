import axios from 'axios'
const request=axios.create({
    baseURL:'http://127.0.0.1:8081/'
})

// 请求拦截器

// 响应拦截器

//登录注册 
export const login = data => {
    return request({
      'Content-Type': 'application/json;charset=utf-8',
      method: 'POST',
      url: '/login',
      data
    })
  }

  export const sign = data => {
    return request({
      'Content-Type': 'application/json;charset=utf-8',
      method: 'POST',
      url: '/sign',
      data
    })
  }
//工单信息 
