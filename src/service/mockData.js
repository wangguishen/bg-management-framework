import axios from 'axios'

// 获取左侧导航栏数据
export const getLeftNavigation = params => axios.post('/sys/getLeftNavigation', params);
