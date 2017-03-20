<!--注册信息-->
<template>
  <div>
    <div class="welcome-regist">{{msg}}</div>
    <div class="regist-list">
      <mt-field label="" placeholder="请输入用户名"></mt-field>
      <mt-field label="" placeholder="请输入手机号码" type="tel"></mt-field>
      <mt-field label="" placeholder="请输入验证码" type=""></mt-field>
    </div>
    <!--<mt-button>获取验证码</mt-button>-->
    <div>
      <router-link to="/components/regist" class="btn-link regist-prev">上一步</router-link>
      <mt-button @click.native="handleClick" class="btn-submit">确定</mt-button>
    </div>
  </div>
</template>
<style>
  .regist-prev{
    margin-right: 30px;
  }
  .regist-list{
    margin: 40px 40px 10px;
  }
  .regist-list .mint-cell-wrapper{
    background: none;
    border-bottom: 1px solid #bfc7d3;
  }
</style>
<script>
  export default{
    data () {
      return {
        msg: '欢迎注册'
      }
    },
    methods: {
      handleClick: function () {
        this.$router.push({ path: '/components/regist2' })
      }
    },
    components: {
    }
  }
</script>
