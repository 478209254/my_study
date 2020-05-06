import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000/api/hy',
    baseURL: 'http://123.207.32.32:8000/api/hy',
    timeout: 5000
  })

  /**
   * 请求拦截
   *   1.当发送网络请求时, 在页面中添加一个loading组件, 作为动画
   *   2.某些请求要求用户必须登录, 判断用户是否有token, 如果没有token跳转到login页面
   *   3.对请求的参数进行序列化(取决于服务器是否需要序列化)
   *   4.等等
   */
  instance.interceptors.request.use(config => {
    // 请求拦截成功
    return config
  }, err => {
    //请求拦截失败
    return err
  })


  /**
   * 响应拦截
   *   在服务器返回登录状态失效，需要重新登录的时候，跳转到登录页等等。
   */
  instance.interceptors.response.use(response => {
    // 响应拦截成功
    return response.data
  }, err => {
    // 响应拦截失败
    console.log(err.response.status)
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求错误'
          break
        case 401:
          err.message = '未授权的访问'
          break
      }
    }
    return err.message
  })


  // 3.发送真正的网络请求
  return instance(config);
}
