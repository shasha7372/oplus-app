<!--修改密码-->
<template>
  <div class="data">
    <zt-header p_title="修改密码" p_to="/components/infoMy"></zt-header>

    <mt-field label="" placeholder="请输入旧密码"></mt-field>
    <mt-field label="" placeholder="请输入新密码"></mt-field>
    <mt-field label="" placeholder="请再次输入新密码" type="tel"></mt-field>
    <div>
      <mt-button @click.native="toLogin" class="btn-submit">确定</mt-button>
    </div>
  </div>
</template>
<style scoped>
    .mint-cell{
      background:none;
    }
</style>
<script>
export default {
  name: 'data',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    toLogin: function () {
      this.$router.push({ path: '/components/login' })
    }
  }
}
</script>
