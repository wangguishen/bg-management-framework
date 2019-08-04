import {
  Random
} from 'mockjs';

const asideList = [];

// 左侧栏数据
for (let i = 0; i < 20; i++) {
  asideList.push({
    id: Random.guid(),
    or: '深圳深南大道营业部',
    mobile: '13612547852',
    date: Random.date(),
    name: Random.cname(),
    card: '431103122215554851',
    sex: Random.integer(0, 1),
    customerNumber: '123456',
    channel: '渠道'
  })
}

export {
  asideList
}
