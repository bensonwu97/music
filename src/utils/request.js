import axios from 'axios'


// 创建axios实例
const service = axios.create({
  baseURL: 'https://api.mtnhao.com', // api的base_url
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {



  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(

  response => {
   

    const res = response.data
    return res


  },
  error => {
    console.log('err' + error) // for debug
    console.log(error)

    return Promise.reject(error)
  }
)

export default service
