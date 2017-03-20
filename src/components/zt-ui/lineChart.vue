<template>
  <div class="line-wrap"><div :id="p_id" class="line"></div></div>
</template>
<script>
  import echarts from 'echarts'

  let option = {
    baseOption: {
      tooltip: {
        trigger: 'axis'
      },
      toolbox: {
        show: true,
        feature: {
          mark: {show: true},
          dataView: {show: false, readOnly: false},
          magicType: {show: false, type: ['line', 'bar']},
          restore: {show: false},
          saveAsImage: {show: false}
        }
      },
      calculable: true,
      xAxis: {
        data: []
      },
      yAxis: {},
      series: []
    }
  }

  export default {
    name: 'zt-lineChart',
    data () {
      return {}
    },
    props: {
      p_id: {
        default: 'lineChart'
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
          legend: option.legend,
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
  .line-wrap{
    padding-left:5px;
  }
  .line {
    width: 345px;
    height: 300px;
    border: solid #D01257 1px;
    box-shadow: 0 0 8px #FB90B7;
    border-radius: 10px;
  }
</style>
