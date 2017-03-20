<template>
  <div class="bar-wrap"><div :id="p_id" class="bar"></div></div>
</template>
<script>
  import echarts from 'echarts'

  let option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      top: 80,
      bottom: 30
    }
  }

  export default {
    name: 'zt-barGraph',
    data () {
      return {}
    },
    props: {
      p_id: {
        default: 'barGraph'
      },
      p_data: {
        default: option
      }
    },
    methods: {
      drawPie (id) {
        this.chart = echarts.init(document.getElementById(id))
        this.chart.setOption(this.p_data)
      },
      setOption (option) {
        this.chart.showLoading()
        this.chart.setOption({
          title: option.title,
          xAxis: option.xAxis,
          yAxis: option.yAxis,
          series: option.series
        })
        this.chart.hideLoading()
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.drawPie(this.p_id)
      })
    }
  }

</script>
<style>
  .bar-wrap{
    padding-left:5px;
  }
  .bar {
    width: 345px;
    height: 300px;
    border: solid #D01257 1px;
    box-shadow: 0 0 8px #FB90B7;
    border-radius: 10px;
  }
</style>
