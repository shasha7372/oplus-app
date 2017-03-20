<template>
  <div>
    <zt-header p_title="观看视频" p_to="/components/layout/video"></zt-header>
    <h3 class="video-title">东方价值2月投资报告会</h3>
    <video-player :options="p_video" @player-state-changed="playerStateChanged"></video-player>
  </div>
</template>
<style>
  .video-title{
    font-size: 18px;
    margin-top:20px;
    color:#5a5a5a;
  }
</style>
<script>

  let videoOptions = {
    source: {
      type: 'video/webm',
      src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
    },
    language: 'zh-CN',
    live: false,
    autoplay: true
  }

  export default{
    data () {
      return {}
    },
    props: {
      p_video: {
        default: function () {
          return videoOptions
        }
      }
    },
    methods: {
      playerStateChanged (playerCurrentState) {
        console.log(playerCurrentState)
      }
    },
    components: {}
  }
</script>
