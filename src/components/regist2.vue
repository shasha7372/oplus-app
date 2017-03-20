<!--注册-风险测评-->
<template>
    <div class="test">
      <div class="welcome-regist">{{msg}}</div>
      <scantron></scantron>
      <div>
        <router-link to="/components/regist1" class="btn-link regist-prev">上一步</router-link>
        <mt-button @click.native="handleClick" class="btn-submit">确定</mt-button>
      </div>
    </div>
</template>
<style>
</style>
<script>
  import scantron from 'components/zt-ui/scantron'

  export default{
    name: 'test',
    data () {
      return {
        msg: '欢迎注册'
      }
    },
    methods: {
      handleClick: function () {
        this.$router.push({ path: '/components/login' })
      }
    },
    components: {
      scantron
    }
  }

</script>
