import axios from '@/utils/request.js'
import { formUtil } from '@/utils/publicUtil'

export const getVPTSetting = params => axios.post('/push-message/getVPTSetting', formUtil(params));
