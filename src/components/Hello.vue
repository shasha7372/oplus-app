<!--欢迎页面-->
<template>
  <div class="hello">
    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="../assets/img/swipe/1.jpg" @click="toLogin"></mt-swipe-item>
      <mt-swipe-item><img src="../assets/img/swipe/2.jpg" @click="toLogin"></mt-swipe-item>
      <mt-swipe-item><img src="../assets/img/swipe/3.jpg" @click="toLogin"></mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<style scoped>
  .hello {
    height: 1920px;
  }
</style>
<script>

  export default {
    name: 'hello',
    data () {
      return {}
    },
    components: {},
    methods: {
      toLogin: function () {
        this.$emit('showpic', false)
        this.$router.push({path: '/components/login'})
      }
    }
  }
</script>
