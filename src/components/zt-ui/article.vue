<template>
  <div>
    <ul class="order-list">
      <li class="order-item" v-for="order in p_data">
        <img @click="toVideoDetail(order.path)" :src="order.img">
        <h4>{{ order.title }}</h4>
        <p>{{ order.info }}</p>
        <router-link v-if="order.type == '1'" :to="order.to" class="btn-video-order"><i
          class="icon-video icon-video-order"></i>预约
        </router-link>
        <router-link v-if="order.type == '2'" :to="order.to" class="btn-video-back"><i
          class="icon-video icon-video-back"></i>回放
        </router-link>
        <router-link v-if="order.type == '3'" :to="order.to" class="btn-video-live"><i
          class="icon-video icon-video-live"></i>直播
        </router-link>
      </li>
    </ul>
  </div>
</template>
<style>

  .btn-video-live {
    background: #ea4646;
  }

  .btn-video-back {
    background: #ffcc66;
  }

  .btn-video-order {
    background: #4caf50;
  }

  .order-list {
    position: relative;
    top: 0px;
    height: calc(100% - 144px);
    overflow: scroll;
  }

  .order-item img {
    width: 80px;
    height: 80px;
    float: left;
    margin-left: 5px;
  }

  .order-item h4 {
    /*padding-top: 20px;
    margin-left: 110px;*/
    position: absolute;
    left: 100px;
    top: 5px;
    font-size: 16px;
  }

  .order-item {
    height: 80px;
    position: relative;
    top: 5px;
    margin-bottom: 5px;
    border-bottom: 1px solid #d9d9d9;
    padding-bottom: 5px;
  }

  .order-item p {
    position: absolute;
    bottom: 10px;
    color: #c1c1c1;
    left: 100px;
  }

  .order-item a {
    position: absolute;
    bottom: 10px;
    right: 15px;
    color: #FF0000;
    line-height: 30px;
    padding: 3px 6px;
    color: #fff;
  }
</style>
<script>
  export default{
    data () {
      return {}
    },
    props: {
      p_data: {
        default: []
      }
    },
    methods: {
      toVideoDetail: function (opath) {
        if (opath !== null) {
          this.$router.push({path: opath})
        }
      },
      tovideoplayer: function () {
        this.$router.push({path: '/components/zt-ui/videoPlayer'})
      }
    },
    components: {}
  }
</script>
