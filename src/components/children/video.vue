<!--路演-->
<template>
  <div class="video">
    <div class="phone-bar"></div>
    <div class="video-swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="../../assets/img/banner1.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/img/banner2.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/img/banner3.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/img/banner4.jpg"></mt-swipe-item>
      </mt-swipe>
    </div>
    <articles :p_data="speech"></articles>
  </div>
</template>
<style>
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
    name: '',
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
      tovideoplayer: function () {
        this.$router.push({path: '/components/zt-ui/videoPlayer'})
      }
    }
  }
</script>
