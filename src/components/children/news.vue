<!--发现-->
<template>
  <div class="product">
    <div class="phone-bar"></div>
    <div class="page-navbar">
      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="recommend">推荐</mt-tab-item>
        <mt-tab-item id="news">要闻</mt-tab-item>
        <mt-tab-item id="interview">专访</mt-tab-item>
        <mt-tab-item id="artwork">艺术品</mt-tab-item>
      </mt-navbar>

      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="recommend" style="text-align:left;">
          <mt-cell title="基金业协会加强私募基金信息披露" label="基金业协会  2016.12.13" is-link></mt-cell>
          <mt-cell title="2016年投资回顾及未来投资展望" label="演讲：王兵 时间：2017.02.15" is-link></mt-cell>
          <mt-cell title="2016年最受热捧的三大类私募产品" label="东兴证券  2016.12.13" is-link></mt-cell>
          <mt-cell title="货币市场利率上调对A股影响有限" label="东兴证券  2016.12.13" is-link></mt-cell>
          <mt-cell title="定增普遍破发 须多方位择优选股" label="东兴证券  2016.12.13" is-link></mt-cell>
          <mt-cell title="2016年度最赚钱的十家股票私募" label="东兴证券  2016.12.13" is-link></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="news" style="text-align:left;">
          <mt-cell title="要闻：基金业协会加强私募基金信息披露" label="基金业协会  2016.12.13" is-link></mt-cell>
          <mt-cell title="要闻：2016年投资回顾及未来投资展望" label="演讲：王兵 时间：2017.02.15" is-link></mt-cell>
          <mt-cell title="要闻：2016年最受热捧的三大类私募产品" label="东兴证券  2016.12.13" is-link></mt-cell>
          <mt-cell title="要闻：货币市场利率上调对A股影响有限" label="东兴证券  2016.12.13" is-link></mt-cell>
          <mt-cell title="要闻：定增普遍破发 须多方位择优选股" label="东兴证券  2016.12.13" is-link></mt-cell>
          <mt-cell title="要闻：2016年度最赚钱的十家股票私募" label="东兴证券  2016.12.13" is-link></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="interview">
          <articles :p_data="speech"></articles>
        </mt-tab-container-item>
        <mt-tab-container-item id="artwork">
          <articles :p_data="speech"></articles>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<style>
  .mint-cell-allow-right::after{
    border:none;
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
      'type': SPEECH.subscribe,
      'to': '',
      'path': '/components/zt-ui/videoPlayer'
    },
    {
      'img': require('../../assets/img/video2.png'),
      'title': '东方价值2月投资报告会',
      'info': '演讲：王兵 时间：2017.2.15',
      'type': SPEECH.subscribe,
      'to': ''
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
    name: 'page-navbar',
    data () {
      return {
        selected: 'recommend',
        speech: sdata
      }
    },
    components: {
      articles
    }
  }
</script>
