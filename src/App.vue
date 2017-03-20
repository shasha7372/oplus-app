<template>
  <div id="app">
    <login v-if="ifshow == true &&　isfirst" v-on:showvue="fromTemplate"></login>
    <router-view></router-view>
  </div>
</template>

<script>
  import login from 'components/login'

  export default {
    name: 'app',
    data () {
      return {
        ifshow: true,
        isfirst: this.$route.path.indexOf('/index') >= 0
      }
    },
    components: {
      login
    },
    methods: {
      fromTemplate (flag) {
        this.ifshow = flag
      }
    }
  }
</script>

<style>
  #app {
    font-family: -apple-system, SF UI Text, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .btn-submit {
    background: #ec6149;
    color: #fff;
    width: 10em;
    margin-top: 20px;
  }

  .btn-link {
    color: #969696;
    text-decoration: none;
    display: inline-block;
    padding: 5px 10px;
  }

  .btn-regist {
    color: #ec6149;
    margin-top: 10px;
    display: inline-block;
  }
</style>
