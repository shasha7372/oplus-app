<template>
    <div class="account">
      <zt-header p_title="资产" p_to="/components/layout"></zt-header>

      <div class="page-navbar">
        <mt-navbar class="page-part" v-model="selected">
          <mt-tab-item id="asset">资产明细</mt-tab-item>
          <mt-tab-item id="analy">投资分析</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="asset">
            <mt-cell title="淡水泉" value=""></mt-cell>
            <!--<mt-cell v-for="n in 10" :title="'内容 ' + n" />-->
            <div class="asset-block">
              <p>产品名称：至尊宝1</p>
              <p>资产净值：10,000元</p>
              <p>投资收益：1000元</p>
            </div>
            <div class="asset-block">
              <p>产品名称：至尊宝2</p>
              <p>资产净值：10,000元</p>
              <p>投资收益：1000元</p>
            </div>
            <div class="asset-block">
              <p>产品名称：至尊宝3</p>
              <p>资产净值：10,000元</p>
              <p>投资收益：1000元</p>
            </div>
            <div class="asset-block">
              <p>产品名称：至尊宝4</p>
              <p>资产净值：10,000元</p>
              <p>投资收益：1000元</p>
            </div>
            <div class="asset-block">
              <p>产品名称：至尊宝5</p>
              <p>资产净值：10,000元</p>
              <p>投资收益：1000元</p>
            </div>
            <mt-cell title="万联" value=""></mt-cell>
            <!--<mt-cell v-for="n in 10" :title="'内容 ' + n" />-->
            <div class="asset-block">
              <p>产品名称：至尊宝1</p>
              <p>资产净值：10,000元</p>
              <p>投资收益：1000元</p>
            </div>
            <div class="asset-block">
              <p>产品名称：至尊宝2</p>
              <p>资产净值：10,000元</p>
              <p>投资收益：1000元</p>
            </div>
            <div class="asset-block">
              <p>产品名称：至尊宝3</p>
              <p>资产净值：10,000元</p>
              <p>投资收益：1000元</p>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="analy" class="ta-c"></br></br></br></br>
            <lineChart p_id="month" :p_data="lineData"></lineChart>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
</template>
<style>
  .asset-block{
    border-bottom:1px dotted #999;
  }
</style>
<script>
import lineChart from 'components/zt-ui/lineChart'

let data = [
  {
    name: '产品一',
    type: 'line',
    data: [11, 11, 15, 13, 12, 13, 10],
    markPoint: {
      data: [
        {type: 'max', name: '最大值'},
        {type: 'min', name: '最小值'}
      ]
    },
    markLine: {
      data: [
        {type: 'average', name: '平均值'}
      ]
    }
  },
  {
    name: '产品二',
    type: 'line',
    data: [1, -2, 2, 5, 3, 2, 0],
    markPoint: {
      data: [
        {name: '年最低', value: -2, xAxis: 1, yAxis: -1.5}
      ]
    },
    markLine: {
      data: [
        {type: 'average', name: '平均值'}
      ]
    }
  }
]

export default {
  name: 'account',
  data () {
    return {
      selected: 'asset',
      lineData: data
    }
  },
  components: {
    lineChart
  }
}
</script>
