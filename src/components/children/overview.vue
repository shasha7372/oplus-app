<!--首页-->
<template>
  <div class="overview">
    <div class="summary">
      <h3>总资产：<b class="asset-data">1000000</b>元</h3>
      <h4>上周收益：<b class="profit-data">1.2%</b> <i class="icon-account" @click="toAccount" title="资产明细">&#xe660;</i></h4>
    </div>
    <articles :p_data="speech"></articles>
  </div>
</template>
<style>
  .summary {
    border-bottom: 1px solid #999;
    padding: 30px 0px 15px 0px;
    background: #32608a;
    color: #fff;
  }
  .summary h3{
    font-size: 24px;
  }
  .summary h4{
    font-size: 20px;
  }
  .icon-account {
    margin-left: 10px;
  }
  .asset-data,.profit-data{
    margin:0px 5px;
  }

  .video-swipe {
    height: 130px;
  }
</style>
<script>
  import {SPEECH} from '../../common/constans.js'
  import articles from '../zt-ui/article.vue'

  let sdata = [
    {
      'img': require('../../assets/img/video.png'),
      'title': '东方价值2月投资报告会',
      'info': '演讲：王兵 时间：2017.2.15',
      'type': SPEECH.playlive,
      'to': '/components/zt-ui/videoPlayer',
      'path': '/components/zt-ui/videoPlayer'
    },
    {
      'img': require('../../assets/img/video2.png'),
      'title': '东方价值2月投资报告会',
      'info': '演讲：王兵 时间：2017.2.15',
      'type': SPEECH.subscribe,
      'to': '',
      'path': '/components/zt-ui/videoPlayer'
    },
    {
      'img': require('../../assets/img/video3.png'),
      'title': '东方价值2月投资报告会',
      'info': '演讲：王兵 时间：2017.2.15',
      'type': SPEECH.playback,
      'to': '',
      'path': '/components/zt-ui/videoPlayer'
    },
    {
      'img': require('../../assets/img/video.png'),
      'title': '东方价值2月投资报告会',
      'info': '演讲：王兵 时间：2017.2.15',
      'type': SPEECH.playback,
      'to': '',
      'path': '/components/zt-ui/videoPlayer'
    }
  ]

  export default {
    name: 'video-swipe',
    data () {
      return {
        msg: '欢迎来到OPLUS',
        speech: sdata
      }
    },
    components: {
      articles
    },
    methods: {
      toAccount: function () {
        this.$router.push({path: '/components/account'})
      }
    }
  }
</script>
