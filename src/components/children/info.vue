<!--个人-->
<template>
  <div id="infoMenu">
    <h3 class="slogan">{{msg}}</h3>
    <mt-cell title="我的资料" is-link value="" @click.native="toInfoMy"></mt-cell>
    <mt-cell title="账户查询" is-link value="" @click.native="toTrade"></mt-cell>
    <mt-cell title="消息提醒" is-link value=""></mt-cell>
    <mt-cell title="风险测评" is-link value="" @click.native="toTest"></mt-cell>
    <mt-cell title="咨询收藏" is-link value=""></mt-cell>
    <mt-cell title="系统设置" is-link value=""></mt-cell>
    <router-link to="/components/login"><mt-button type="danger" size="large">退出</mt-button></router-link>
  </div>
</template>
<style scoped>
  .mint-cell{
    background:#fff;
  }
  .mint-cell:hover{
    background:#eaeaea;
  }
</style>
<script>
export default {
  name: 'page-navbar',
  data () {
    return {
      msg: '投资理财小助手'
    }
  },
  methods: {
    toInfoMy: function () {
      // $("#infoMenu").hide();
      // window.document.getElementById('infoMenu').style.display === 'none'
      this.$router.push({ path: '/components/infoMy' })
    },
    toTest: function () {
      this.$router.push({ path: '/components/regist2' })
    },
    toTrade: function () {
      this.$router.push({ path: '/components/trade' })
    }
  }
}
</script>
