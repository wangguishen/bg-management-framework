import axios from 'axios'
import { Message } from 'element-ui';
import router from '@/router/router.js'

const service = axios.create({
  timeout: 5000,
  headers: {
    'X-Custom-Header': 'foobar'
  }
})

service.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
})

service.interceptors.response.use(function (response) {
  if (!response.data.hasOwnProperty("success")) {
    return response
  }
  if (response.data.success) { //  对没有返加成功状态码的做单独处理
    return response;
  } else {
    Message({
      type: 'warning',
      message: response.data.message
    })
  }
}, function (error) {
  // service error : 404,400,500 handler
  switch (error.response.status) {
    case 404:
      router.push('/404');
      break;
    case 401:
      router.push('/login');
      break;
    case 500:
    case 501:
      router.push('/50X');
      break;
    default:
      break;
  }
  return Promise.reject(error);
})

export default service
