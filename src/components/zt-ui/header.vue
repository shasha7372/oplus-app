<!--头部标题栏-->
<template>
    <div class="headerbar">
      <mt-header :title="p_title">
        <router-link :to="p_to" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button :icon="p_icon" slot="right"></mt-button>
      </mt-header>
    </div>
</template>
<style>
  .mint-header{
    background:#32608a;
    padding:25px 0px 5px 0px;
  }
</style>
<script>
  export default{
    name: 'zt-header',
    data () {
      return {
      }
    },
    props: {
      p_title: {
        default: '标题'
      },
      p_to: {
        default: '/index'
      },
      p_icon: {
        default: ''
      }
    }
  }
</script>
