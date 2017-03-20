<!--登录-->
<template>
    <div class="login">
        <div class="logo"><img src="/static/img/logo.png"></div>
        <div class="welcome-login">{{msg}}</div>
        <p class="login-input-block"><i class="icon-password">&#xe607;</i><input placeholder="请输入用户名" class="login-input"/></p>
        <p class="login-input-block"><i class="icon-password">&#xe648;</i><input placeholder="请输入密码" class="login-input"/></p>
        <p><mt-button @click.native="handleClick" class="btn-submit">登录</mt-button></p>
        <span @click="registClick" class="btn-regist">新用户注册</span>
    </div>
</template>
<style>
  .logo{
    margin-top: 60px;
  }
  .welcome-login{
    margin-top: 10px;
    font-size: 20px;
  }
  .login-input-block{
    margin: 10px 60px 5px;
    border-bottom: 1px solid #d9d9d9;
  }
  .login-input{
    border:none;
    height:24px;
    line-height: 24px;
    text-indent: 1em;
    margin-left: 10px;
  }
  .btn-regist{
    margin-top:20px;
    color:#5a5a5a;
  }
</style>
<script>

  export default{
    data () {
      return {
        msg: '欢迎登录'
      }
    },
    methods: {
      handleClick: function () {
        this.$emit('showvue', false)
        this.$router.push({ path: '/components/layout' })
      },
      registClick: function () {
        this.$emit('showvue', false)
        this.$router.push({ path: '/components/regist' })
      }
    },
    components: {
    }
  }
</script>
