<template>
  <el-container class="home-index">
    <el-aside width="200px">
      <my-aside />
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import myAside from '@/components/home/aside'
export default {
  components: {
    myAside
  },
  computed: {
    ceshi () {
      return this.$store.getters.getCeshi
    }
  }
}
</script>

<style lang="scss">
  .home-index{
    width: 100%;
    height: 100vh;
  }
</style>

