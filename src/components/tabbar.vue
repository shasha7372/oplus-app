<!--底部菜单-->
<template>
    <div class="tabs">
      <div class="page-tabbar">
        <div class="page-wrap">
          <mt-tab-container class="page-tabbar-container" v-model="selected">
            <mt-tab-container-item id="tabIndex">
              <router-view></router-view>
            </mt-tab-container-item>
            <mt-tab-container-item id="tabPro">
              <router-view></router-view>
            </mt-tab-container-item>
            <mt-tab-container-item id="tabVideo">
              <router-view></router-view>
            </mt-tab-container-item>
            <mt-tab-container-item id="tabNews">
              <router-view></router-view>
            </mt-tab-container-item>
            <mt-tab-container-item id="tabInfo">
              <div class="page-part">
                <router-view></router-view>
              </div>
            </mt-tab-container-item>
          </mt-tab-container>
        </div>

        <mt-tabbar v-model="selected" fixed>
          <mt-tab-item id="tabIndex" @click.native="toOverview">
            <i class="icon-tabbar">&#xe60d;</i>
            <h5>首页</h5>
          </mt-tab-item>
          <mt-tab-item id="tabPro" @click.native="toPro">
            <i class="icon-tabbar">&#xe638;</i>
            <h5>产品</h5>
          </mt-tab-item>
          <mt-tab-item id="tabVideo" @click.native="toVideo">
            <i class="icon-tabbar">&#xe60e;</i>
            <h5>路演</h5>
          </mt-tab-item>
          <mt-tab-item id="tabNews" @click.native="toNews">
            <i class="icon-tabbar">&#xe624;</i>
            <h5>发现</h5>
          </mt-tab-item>
          <mt-tab-item id="tabInfo" @click.native="toInfo">
            <i class="icon-tabbar">&#xe69f;</i>
            <h5>我</h5>
          </mt-tab-item>
        </mt-tabbar>
      </div>
    </div>
</template>
<style>
  .mint-tabbar{
    background:#f0f0f0;
    border-top:1px solid #dedede;
  }
  .mint-tab-item-label{
    color:#9b9b9b;
  }
  .mint-tab-item-label h5{
    margin-top: 5px;
  }
  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }
  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }
  .mint-tab-item-label{
    font-size:1em;
  }
  .mint-tabbar > .mint-tab-item.is-selected{
    background:none;
  }
  .mint-tabbar > .mint-tab-item.is-selected .mint-tab-item-label{
    color:#32608a;
  }
</style>
<script>
export default {
  name: 'page-tabbar',
  data () {
    return {
      selected: 'tabIndex'
    }
  },
  methods: {
    toOverview: function () {
      this.$router.push({ path: '/components/layout/overview' })
    },
    toPro: function () {
      this.$router.push({ path: '/components/layout/product' })
    },
    toVideo: function () {
      this.$router.push({ path: '/components/layout/video' })
    },
    toNews: function () {
      this.$router.push({ path: '/components/layout/news' })
    },
    toInfo: function () {
      this.$router.push({ path: '/components/layout/info' })
    }
  }
}
// alert($(".page-tabbr").value)
</script>
