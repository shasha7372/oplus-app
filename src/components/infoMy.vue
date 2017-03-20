<!--个人资料-->
<template>
  <div class="info">
    <zt-header p_title="我的" p_to="/components/layout/info"></zt-header>

    <div class="ta-l info-my">
      <mt-cell title="头像" is-link>
        <span style="color: green"><img src="../assets/img/face.png"></span>
      </mt-cell>
      <mt-cell title="昵称" is-link>
        <span style="color: green">沙沙</span>
      </mt-cell>
      <mt-cell title="姓名" is-link>
        <span style="color: green">黄莎</span>
      </mt-cell>
      <mt-cell title="手机号码" is-link>
        <span style="color: green">15925610351</span>
      </mt-cell>
      <mt-cell title="邮箱" is-link>
        <span style="color: green">582735891@qq.com</span>
      </mt-cell>
      <mt-cell title="性别" is-link>
        <span style="color: green">女</span>
      </mt-cell>
      <mt-cell title="地区" is-link>
        <span style="color: green">浙江杭州</span>
      </mt-cell>
      <mt-cell title="修改密码" is-link @click.native="toInfoPassword">
        <span style="color: green"></span>
      </mt-cell>
    </div>
  </div>

</template>
<style scoped>
  .info-my{
    margin-top:10px;
  }
  .mint-cell-value span{
    color:#5a5a5a!important;
  }
</style>
<script>
  export default {
    name: '',
    data () {
      return {}
    },
    methods: {
      toInfoPassword: function () {
        this.$router.push({path: '/components/infoPassword'})
      }
    },
    components: {
    }
  }
</script>
