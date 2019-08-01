// 路由权限空控制
import router from '@/router/index'

router.beforeEach(async (to, from, next) => {
  next()
})

router.afterEach(() => {

})
