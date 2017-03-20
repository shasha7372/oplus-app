<template>
    <div>
      <zt-header p_title="产品公告" p_to="/components/infoMy"></zt-header>

      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="recruit"><i class="icon-recruit">&#xe60a;</i><h5>招募说明书</h5></mt-tab-item>
        <mt-tab-item id="pact"><i class="icon-pact">&#xe6a3;</i><h5>产品合同</h5></mt-tab-item>
        <mt-tab-item id="invest"><i class="icon-invest">&#xe64d;</i><h5>投资报告</h5></mt-tab-item>
      </mt-navbar>

      <mt-tab-container v-model="selected" class="ta-l">
        <mt-tab-container-item id="recruit">
          <mt-cell title="基金业协会加强私募基金信息披露" label="基金业协会  2016.12.13" is-link></mt-cell>
          <mt-cell title="2016年投资回顾及未来投资展望" label="演讲：王兵 时间：2017.02.15" is-link></mt-cell>
          <mt-cell title="2016年最受热捧的三大类私募产品" label="东兴证券  2016.12.13" is-link></mt-cell>
          <mt-cell title="货币市场利率上调对A股影响有限" label="东兴证券  2016.12.13" is-link></mt-cell>
          <mt-cell title="定增普遍破发 须多方位择优选股" label="东兴证券  2016.12.13" is-link></mt-cell>
          <mt-cell title="2016年度最赚钱的十家股票私募" label="东兴证券  2016.12.13" is-link></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="pact">
          <mt-cell title="基金业协会加强私募基金信息披露" label="基金业协会  2016.12.13" is-link></mt-cell>
          <mt-cell title="2016年投资回顾及未来投资展望" label="演讲：王兵 时间：2017.02.15" is-link></mt-cell>
          <mt-cell title="2016年最受热捧的三大类私募产品" label="东兴证券  2016.12.13" is-link></mt-cell>
          <mt-cell title="货币市场利率上调对A股影响有限" label="东兴证券  2016.12.13" is-link></mt-cell>
          <mt-cell title="定增普遍破发 须多方位择优选股" label="东兴证券  2016.12.13" is-link></mt-cell>
          <mt-cell title="2016年度最赚钱的十家股票私募" label="东兴证券  2016.12.13" is-link></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="invest">
          <mt-cell title="基金业协会加强私募基金信息披露" label="基金业协会  2016.12.13" is-link></mt-cell>
          <mt-cell title="2016年投资回顾及未来投资展望" label="演讲：王兵 时间：2017.02.15" is-link></mt-cell>
          <mt-cell title="2016年最受热捧的三大类私募产品" label="东兴证券  2016.12.13" is-link></mt-cell>
          <mt-cell title="货币市场利率上调对A股影响有限" label="东兴证券  2016.12.13" is-link></mt-cell>
          <mt-cell title="定增普遍破发 须多方位择优选股" label="东兴证券  2016.12.13" is-link></mt-cell>
          <mt-cell title="2016年度最赚钱的十家股票私募" label="东兴证券  2016.12.13" is-link></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>

    </div>
</template>
<style scoped>
  h5{
    color:#9b9b9b;
  }
  .mint-navbar{
    background:none;
  }
  .mint-navbar .mint-tab-item .mint-tab-item-label{
    color:#73859f;
  }
  .mint-navbar .is-selected .mint-tab-item-label h5{
    color:#32608a;
  }
  .mint-navbar .is-selected .mint-tab-item-label .icon-recruit,.mint-navbar .is-selected .mint-tab-item-label .icon-pact,.mint-navbar .is-selected .mint-tab-item-label .icon-invest{
    color:#32608a;
  }

</style>
<script>
    export default{
      data () {
        return {
          selected: 'recruit'
        }
      }
    }
</script>
