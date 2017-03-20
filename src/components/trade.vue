<!--交易-->
<template>
  <div class="product">
    <zt-header p_title="账户查询" p_to="/components/layout/info"></zt-header>

    <div class="page-navbar">
      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="tradeDetail">交易明细</mt-tab-item>
        <mt-tab-item id="profitDetail">分红明细</mt-tab-item>
      </mt-navbar>

      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="tradeDetail">
          <table class="table-list" width="100%">
            <tr><th>序号</th><th>交易日期</th><th>产品名称</th><th>交易金额</th><th>单位净值</th></tr>
            <tr><td>1</td><td>2017-02-20</td><td>东方价值</td><td>10.00万</td><td>1.05</td></tr>
            <tr><td>2</td><td>2017-02-23</td><td>东方价值</td><td>14.00万</td><td>1.60</td></tr>
            <tr><td>3</td><td>2017-02-24</td><td>东方价值</td><td>13.00万</td><td>2.50</td></tr>
            <tr><td>4</td><td>2017-02-25</td><td>东方价值</td><td>16.00万</td><td>1.70</td></tr>
            <tr><td>5</td><td>2017-02-26</td><td>东方价值</td><td>70.00万</td><td>3.10</td></tr>
            <tr><td>6</td><td>2017-02-27</td><td>东方价值</td><td>1.00万</td><td>3.11</td></tr>
          </table>
        </mt-tab-container-item>
        <mt-tab-container-item id="profitDetail">
          <table class="table-list" width="100%">
            <tr><th>序号</th><th>分红日期</th><th>产品名称</th><th>分配金额</th><th>分红方式</th></tr>
            <tr><td>1</td><td>2017-02-18</td><td>东方价值</td><td>130.00万</td><td>现金</td></tr>
            <tr><td>2</td><td>2017-02-22</td><td>东方价值</td><td>310.00万</td><td>现金</td></tr>
            <tr><td>3</td><td>2017-02-15</td><td>东方价值</td><td>610.00万</td><td>现金</td></tr>
            <tr><td>4</td><td>2017-02-24</td><td>东方价值</td><td>80.00万</td><td>配股</td></tr>
            <tr><td>5</td><td>2017-02-21</td><td>东方价值</td><td>710.00万</td><td>配股</td></tr>
            <tr><td>6</td><td>2017-02-28</td><td>东方价值</td><td>10.00万</td><td>配股</td></tr>
          </table>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<style>

</style>
<script>
export default {
  name: 'page-navbar',
  data () {
    return {
      selected: 'tradeDetail'
    }
  },
  components: {
  }
}
</script>
