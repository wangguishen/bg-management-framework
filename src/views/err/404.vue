<template>
  <div class="err_nofound cf">
    <img class="fl" src="static/404.png" alt="">
    <div class="err_nofound_right fl">
      <h3>oops!</h3>
      <p>All rights reserved <span>wallstreetcn</span></p>
      <p class="err_nofound_right_text">
        The webmaster said that you <br> can not enter this page...
      </p>
      <p>
        Please check that the URL you entered is correct,<br> or click the button below to return to the homepage
      </p>
      <el-button type="primary" @click="backHome()">Back to home</el-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    backHome () {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss">
.err_nofound{
  width: 1200px;
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%,-60%);
  img{
    width:600px;
    height:328px;
  }
  &_right{
    .err_nofound_right_text{
      font-size: 20px;
      line-height: 24px;
      color: #222;
      margin-bottom: 10px;
      -webkit-animation-delay: .1s;
      animation-delay: .1s;
      -webkit-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
    }
    h3{
      font-size: 32px;
      line-height: 40px;
      color: #1482f0;
      margin-bottom: 20px;
      -webkit-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
    }
    p{
      font-size: 13px;
      line-height: 21px;
      color: grey;
      margin-bottom: 30px;
      -webkit-animation-delay: .2s;
      animation-delay: .2s;
      -webkit-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
      span{
        color: rgb(32, 160, 255);
      }
    }
  }
}
</style>

