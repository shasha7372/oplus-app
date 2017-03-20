<!--产品详情-->
<template>
  <div class="product">
    <zt-header p_title="产品详情" p_to="/components/layout/product"></zt-header>

    <div class="page-navbar">
      <div id="timeSection">
        <mt-navbar class="page-part" v-model="selected" @click.native="setData">
          <mt-tab-item id="week">本周</mt-tab-item>
          <mt-tab-item id="month">本月</mt-tab-item>
          <mt-tab-item id="quarter">本季度</mt-tab-item>
          <mt-tab-item id="halfYear">半年</mt-tab-item>
          <mt-tab-item id="year">本年</mt-tab-item>
        </mt-navbar>
      </div>

      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="week" class="ta-c">
          <barGraph p_id="week" ref="week"></barGraph>
        </mt-tab-container-item>
        <mt-tab-container-item id="month" class="ta-c">
          <lineChart p_id="month" ref="month"></lineChart>
        </mt-tab-container-item>
        <mt-tab-container-item id="quarter">
          <barGraph p_id="quarter" ref="quarter"></barGraph>
        </mt-tab-container-item>
        <mt-tab-container-item id="halfYear">
          <lineChart p_id="halfYear" ref="halfYear"></lineChart>
        </mt-tab-container-item>
        <mt-tab-container-item id="year">
          <barGraph p_id="year" ref="year"></barGraph>
        </mt-tab-container-item>
      </mt-tab-container>

      <div class="ta-l">
        <mt-cell @click.native="toProIntro" title="基本信息" label="名称，费率，销售机构，托管银行" is-link></mt-cell>
        <mt-cell title="基金经理" label="王大冰" is-link></mt-cell>
        <mt-cell title="公司介绍" label="富力投资" is-link></mt-cell>
        <mt-cell @click.native="toProNotice" title="产品公告" label="招募说明书，产品合同，成立公告" is-link></mt-cell>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .mint-navbar{
    background:#9b9b9b;
    margin-bottom: 10px;
  }
  .mint-navbar .mint-tab-item{
    padding:0;
  }
  #timeSection .mint-navbar .mint-tab-item .mint-tab-item-label{
    color:#333;
    height: 30px;
    line-height: 30px;
  }
  .mint-navbar .is-selected{
  }
  .mint-navbar .is-selected .mint-tab-item-label{
    color:green;
  }
  .mint-navbar .mint-tab-item.is-selected{
    /*border-bottom:1px solid #73859f;*/
  }
</style>
<script>
  import lineChart from 'components/zt-ui/lineChart'
  import barGraph from 'components/zt-ui/barGraph'

  let lineData = {
    title: {
      text: '产品收益变化',
      subtext: '纯属虚构'
    },
    legend: {
      data: ['产品一', '产品二'],
      right: 'center',
      bottom: 0,
      orient: 'horizontal'
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['2006', '2008', '2010', '2012', '2014', '2016', '2018']
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    series: [
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
  }

  let labelRight = {
    normal: {
      position: 'right'
    }
  }

  let barData = {
    title: {
      text: '交错正负轴标签',
      subtext: 'From ExcelHome',
      sublink: 'http://e.weibo.com/1341556070/AjwF2AgQm'
    },
    xAxis: {
      type: 'value',
      position: 'top',
      splitLine: {lineStyle: {type: 'dashed'}}
    },
    yAxis: {
      type: 'category',
      axisLine: {show: false},
      axisLabel: {show: false},
      axisTick: {show: false},
      splitLine: {show: false},
      data: ['ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']
    },
    series: [
      {
        name: '生活费',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            formatter: '{b}'
          }
        },
        data: [
          {value: -0.07, label: labelRight},
          {value: -0.09, label: labelRight},
          0.2, 0.44,
          {value: -0.23, label: labelRight},
          0.08,
          {value: -0.17, label: labelRight},
          0.47,
          {value: -0.36, label: labelRight},
          0.18
        ]
      }
    ]
  }

  export default {
    name: 'page-navbar',
    data () {
      return {
        selected: 'week'
      }
    },
    components: {
      lineChart,
      barGraph
    },
    mounted () {
      this.$nextTick(function () {
        this.$refs.week.setOption(barData)
      })
    },
    methods: {
      toProIntro: function () {
        this.$router.push({path: '/components/proIntro'})
      },
      toProNotice: function () {
        this.$router.push({path: '/components/proNotice'})
      },
      setData: function () {
        if (this.selected === 'week') {
          this.$refs.week.setOption(barData)
        } else if (this.selected === 'month') {
          this.$refs.month.setOption(lineData)
        } else if (this.selected === 'quarter') {
          this.$refs.quarter.setOption(barData)
        } else if (this.selected === 'halfYear') {
          this.$refs.halfYear.setOption(lineData)
        } else if (this.selected === 'year') {
          this.$refs.year.setOption(barData)
        }
      }
    }
  }
</script>
