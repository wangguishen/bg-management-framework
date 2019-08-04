import mock from '../mock';

import {
  asideList
} from '../data/util.js';

const _asideList = asideList;

// 获取左侧导航栏数据
mock.onPost('/sys/getLeftNavigation').reply(config => {
  const mockStock = _asideList
  return new Promise((resolve, reject) => {
    resolve([200, {
      data: mockStock
    }]);
  });
});
