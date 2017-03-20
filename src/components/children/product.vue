<!--产品-->
<template>
  <div class="product">
    <div class="phone-bar"></div>
    <div class="page-navbar">
      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="product">产品</mt-tab-item>
        <mt-tab-item id="manager">经理</mt-tab-item>
        <mt-tab-item id="company">公司</mt-tab-item>
      </mt-navbar>

      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="product">
          <table class="table-list" width="100%">
            <tr><th>序号</th><th>产品名称</th><th>单位净值</th><th>收益率</th></tr>
            <tr @click="toProDetail"><td>1</td><td>东方价值</td><td>2.2020</td><td>19.84%</td></tr>
            <tr @click="toProDetail"><td>2</td><td>中融信托1号</td><td>1.9820</td><td>15.84%</td></tr>
            <tr @click="toProDetail"><td>3</td><td>湖汇山一号</td><td>1.5820</td><td>10.84%</td></tr>
          </table>
        </mt-tab-container-item>
        <mt-tab-container-item id="manager">
          <table class="table-list" width="100%">
            <tr><th>序号</th><th>产品名称</th><th>单位净值</th><th>收益率</th></tr>
            <tr @click="toProDetail"><td>1</td><td>东方价值</td><td>2.2020</td><td>19.84%</td></tr>
            <tr @click="toProDetail"><td>2</td><td>中融信托1号</td><td>1.9820</td><td>15.84%</td></tr>
            <tr @click="toProDetail"><td>3</td><td>湖汇山一号</td><td>1.5820</td><td>10.84%</td></tr>
          </table>
        </mt-tab-container-item>
        <mt-tab-container-item id="company">
          <table class="table-list" width="100%">
            <tr><th>序号</th><th>产品名称</th><th>单位净值</th><th>收益率</th></tr>
            <tr @click="toProDetail"><td>1</td><td>东方价值</td><td>2.2020</td><td>19.84%</td></tr>
            <tr @click="toProDetail"><td>2</td><td>中融信托1号</td><td>1.9820</td><td>15.84%</td></tr>
            <tr @click="toProDetail"><td>3</td><td>湖汇山一号</td><td>1.5820</td><td>10.84%</td></tr>
          </table>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<style>
  .phone-bar{
    height:30px;
    background:#32608a;
  }
  .table-list{
    margin-top: 10px;
  }
  .mint-navbar{
    background:#32608a;
  }
  .mint-navbar .mint-tab-item{
    padding:0;
  }
  .mint-navbar .mint-tab-item .mint-tab-item-label{
    color:#fff;
    padding:6px 0px 10px 0px;
  }
  .mint-navbar .is-selected{
    background:#fff;
  }
  .mint-navbar .is-selected .mint-tab-item-label{
    color:#2b333f;
  }
  .mint-navbar .mint-tab-item.is-selected{
    border:none;
  }
  .product-block{
    border-bottom:1px dotted #999;
  }
</style>
<script>
export default {
  name: 'page-navbar',
  data () {
    return {
      selected: 'product'
    }
  },
  methods: {
    toProDetail: function () {
      this.$router.push({ path: '/components/proDetail' })
    }
  }
}
</script>
