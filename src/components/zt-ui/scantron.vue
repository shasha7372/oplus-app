<template>
  <div>
    <div id='scantron'></div>
  </div>
</template>
<style>
  .main-quiz-holder {
    margin: 0 auto;
    position: relative;
    /*background: #FCFCFC;
    border: 1px solid #dedede;
    box-shadow: 0 1px 5px #D9D9D9, inset 0 10px 20px #F1F1F1;
    -o-box-shadow: 0 1px 5px #D9D9D9, inset 0 10px 20px #F1F1F1;
    -webkit-box-shadow: 0 1px 5px #D9D9D9, inset 0 10px 20px #F1F1F1;
    -moz-box-shadow: 0 1px 5px #D9D9D9, inset 0 10px 20px #F1F1F1;
    border-radius: 20px 2px 20px 2px;*/
    /*width: 96%;*/
  }

  .main-quiz-holder * {
    margin: 0;
    padding: 0;
    font-family: "Microsoft yahei", sans-serif;
  }

  .main-quiz-holder a {
    text-decoration: none;
    color: #6C6C6C;
  }

  .main-quiz-holder .slide-container {
    /*width: 80%;*/
    padding: 20px 20px 40px;
  }

  .results-container, .intro-container {
    text-align: center;
  }

  .results-container {
  }

  .main-quiz-holder .slide-container .question, .main-quiz-holder h2.qTitle {
    margin: 40px 0 10px;
    font-size: 16px;
    font-weight: normal;
  }

  .main-quiz-holder h2.qTitle {
    font-size: 20px;
    margin-top: 60px;
    line-height: 26px
  }

  .main-quiz-holder .question-number {
    position: absolute;
    right: 10px;
    top: 10px;
    border: 1px solid #F6F6F6;
    padding: 5px 10px;
    background: #F0F0F0;
    /*text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
    -webkit-box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 0 6px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 0 6px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 0 6px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4);*/
    border-radius: 3px;
    color: #949494;
  }

  .main-quiz-holder .slide-container ul.answers {
    margin: 0px;
    padding: 5px;
    list-style: none;
  }

  .main-quiz-holder .slide-container ul.answers li {
    cursor: pointer;
    text-align: left;
    font-size: 16px;
    padding: 5px 20px;
    margin: 0px 0px 12px;
    color: #4c4c4c;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    /*text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
    -webkit-box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 0 6px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 0 6px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 0 6px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4);*/
    background: #f6f6f6;
    /*background: -webkit-gradient(linear, left top, left bottom, from(#f6f6f6), to(#d4d4d4));
    background: -webkit-linear-gradient(#f6f6f6, #d4d4d4);
    background-image: -moz-linear-gradient(top, #f6f6f6, #d4d4d4);*/
    /*border: 1px solid #a1a1a1;*/
  }

  .main-quiz-holder .slide-container ul.answers li.selected {
    background: #6fb2e5;
    color:#fff;
    /*box-shadow: 0 1px 5px #0061aa, inset 0 10px 20px #b6f9ff;
    -o-box-shadow: 0 1px 5px #0061aa, inset 0 10px 20px #b6f9ff;
    -webkit-box-shadow: 0 1px 5px #0061aa, inset 0 10px 20px #b6f9ff;
    -moz-box-shadow: 0 1px 5px #0061aa, inset 0 10px 20px #b6f9ff;*/
  }

  .main-quiz-holder .slide-container .prev, .main-quiz-holder .slide-container .next {
    /*height: 19px;*/
    cursor: pointer;
    padding: 5px 10px;
    font-size: 16px;
    color: #fff;
    border-radius: 4px;
    /*text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);*/
    background: #c1c1c1;
    /*box-shadow: 0 1px 5px #0061aa, inset 0 10px 20px #b6f9ff;
    -o-box-shadow: 0 1px 5px #0061aa, inset 0 10px 20px #b6f9ff;
    -webkit-box-shadow: 0 1px 5px #0061aa, inset 0 10px 20px #b6f9ff;
    -moz-box-shadow: 0 1px 5px #0061aa, inset 0 10px 20px #b6f9ff;*/
  }

  .main-quiz-holder .slide-container .next {
    background: #c1c1c1;
    /*box-shadow: 0 1px 5px #3caa00, inset 0 10px 20px #c9ffb6;
    -o-box-shadow: 0 1px 5px #3caa00, inset 0 10px 20px #c9ffb6;
    -webkit-box-shadow: 0 1px 5px #3caa00, inset 0 10px 20px #c9ffb6;
    -moz-box-shadow: 0 1px 5px #3caa00, inset 0 10px 20px #c9ffb6;*/
  }

  .main-quiz-holder .progress-keeper {
    width: 90%;
    margin: 0px 12px;
    /*box-shadow: 0 1px 5px #D9D9D9, inset 0 10px 20px #F1F1F1;
    -o-box-shadow: 0 1px 5px #D9D9D9, inset 0 10px 20px #F1F1F1;
    -webkit-box-shadow: 0 1px 5px #D9D9D9, inset 0 10px 20px #F1F1F1;
    -moz-box-shadow: 0 1px 5px #D9D9D9, inset 0 10px 20px #F1F1F1;*/
    border-radius: 2px;
    border: 1px solid #dedede;
  }

  .main-quiz-holder .progress {
    width: 0;
    height: 10px;
    color: #4c4c4c;
    background: #6fb2e5;
    /*background: -webkit-gradient(linear, left top, left bottom, from(#f6f6f6), to(#d4d4d4));
    background: -webkit-linear-gradient(#f6f6f6, #d4d4d4);
    background-image: -moz-linear-gradient(top, #f6f6f6, #d4d4d4);*/
  }

  .main-quiz-holder .result-keeper {
    margin: 10px;
    text-align: center;
  }

  .main-quiz-holder .notice {
    margin-top: -30px;
    color: #717171;
    position: absolute;
    right: 52px;
    bottom: 70px;
  }

  .main-quiz-holder .slide-container .prev {
    /*width: 70px;*/
    float: left;
  }

  .main-quiz-holder .slide-container .next, .main-quiz-holder .slide-container .final {
    /*width: 70px;*/
    float: right;
  }

  .main-quiz-holder .slide-container .final {
    /*width: 65px;*/
  }

  .main-quiz-holder .nav-previous {
    color:#fff;
  }

  .main-quiz-holder .nav-next {
    color:#fff;
  }

  .main-quiz-holder .nav-show-result {
    padding-left: 25px;
    background: url(/static/img/right.png) left no-repeat;
  }

  .main-quiz-holder .nav-start {
    display: block;
    margin: 40px auto 0 auto;
    line-height: 32px;
    font-size: 20px;
    font-weight: bold
  }

  .main-quiz-holder .nav-container {
    padding: 5px;
    margin: 15px 0;
  }

  .main-quiz-holder .result-row {
    width: 80px;
    margin: 10px 20px;
    float: left;
    position: relative;
    display: none;
  }

  .main-quiz-holder .result-row .resultsview-qhover {
    background: #FCFCFC;
    border: 1px solid #dedede;
    box-shadow: 0 1px 5px #D9D9D9, inset 0 10px 20px #F1F1F1;
    -o-box-shadow: 0 1px 5px #D9D9D9, inset 0 10px 20px #F1F1F1;
    -webkit-box-shadow: 0 1px 5px #D9D9D9, inset 0 10px 20px #F1F1F1;
    -moz-box-shadow: 0 1px 5px #D9D9D9, inset 0 10px 20px #F1F1F1;
    border-radius: 2px 10px 2px 10px;
    position: absolute;
    width: 250px;
    top: 50px;
    left: -80px;
    z-index: 200;
    padding: 15px 30px;
    text-align: left;
    font-size: 22px;
  }

  .main-quiz-holder .resultsview-qhover ul {
    list-style: none;
    margin: 10px 0;
  }

  .main-quiz-holder .resultsview-qhover li {
    padding: 0 28px;
    margin: 5px 0;
    min-height: 20px;
    font-size: 14px;
    background: #FCFCFC;
    border: 1px solid #F6F6F6;
    border-radius: 3px;
  }

  .main-quiz-holder .resultsview-qhover li.selected {
  }

  .main-quiz-holder .resultsview-qhover li.right {
  }

  .main-quiz-holder .correct, .main-quiz-holder .wrong {
    height: 19px;
    cursor: pointer;
    padding: 5px 10px;
    font-size: 14px;
    padding: 5px 15px;
    color: #4c4c4c;
    border-radius: 4px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
    -webkit-box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 0 6px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 0 6px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 0 6px 0 rgba(255, 255, 255, 0.3), 0 1px 2px rgba(0, 0, 0, 0.4);
  }

  .main-quiz-holder .correct {
    background: #c3e462;
    background: -webkit-gradient(linear, left top, left bottom, from(#c3e462), to(#90b61e));
    background: -webkit-linear-gradient(#c3e462, #90b61e);
    background-image: -moz-linear-gradient(top, #c3e462, #90b61e);
    border: 1px solid #bfff00;
  }

  .main-quiz-holder .wrong {
    background: #fc5e5e;
    background: -webkit-gradient(linear, left top, left bottom, from(#fc5e5e), to(#ea4646));
    background: -webkit-linear-gradient(#fc5e5e, #ea4646);
    background-image: -moz-linear-gradient(top, #fc5e5e, #ea4646);
    border: 1px solid #e36d6d;
  }

  .main-quiz-holder .correct span {
    padding: 0 10px;
    background: url(/static/img/confirm.png) 6px 2px no-repeat;
  }

  .main-quiz-holder .wrong span {
    padding: 0 10px;
    background: url(/static/img/delete.png) 6px 2px no-repeat;
    color: #474747;
  }

  .main-quiz-holder .question {
    padding-left: 5px;
    line-height: 1.3em;
    text-align: left;
  }

  .main-quiz-holder .share-button {
    display: block;
    margin: 15px 0;
  }

  .jquizzy-clear {
    clear: both;
  }

  .main-quiz-holder .right {
    float: none;
  }

  .main-quiz-holder img {
    border: none;
  }
  /*风险等级*/
  .risk-level{
    font-size: 24px;
    display: inline-block;
    margin-top:10px;
  }
</style>
<script>
  import $ from 'jquery'
  import '../../common/scantron.js'

  var init = {
    'questions': [{
      'question': '1.您的年龄在以下哪个范围内？',
      'answers': ['A.30岁以下', 'B.31岁至40岁', 'C.41岁至50岁', 'D.51岁至60岁', 'E.61岁以上'],
      'correctAnswer': 2
    }, {
      'question': '2、您的学历？',
      'answers': ['A.硕士及以上', 'B.本科', 'C.中专或大专', 'D.高中及以下'],
      'correctAnswer': 2
    }, {
      'question': '3、您的职业为？',
      'answers': ['A.金融行业一般从业人员', 'B.一般企事业单位员工', 'C.专业技术人员', 'D.普通职员', 'E.无固定职业'],
      'correctAnswer': 3
    }, {
      'question': '4、您家庭可支配年收入是多少（折合人民币）？',
      'answers': ['A.500万元以上', 'B.300-500万元', 'C.100-300万元', 'D.50-100万元', 'E.50万元以下'],
      'correctAnswer': 3
    }, {
      'question': '5、在您每年的家庭可支配收入中，可用于金融投资（储蓄存款除外）的比例为？',
      'answers': ['A.50%以上', 'B.30%至50%', 'C.20%至30%', 'D.10%至20%', 'E.10%以下'],
      'correctAnswer': 2
    }, {
      'question': '6、您的证券投资知识可描述为？',
      'answers': ['A.丰富：对金融产品及其相关风险具有丰富的知识和理解', 'B.了解：对金融产品及其相关风险有所了解，但并不深入', 'C.有限：对某一种或几种金融产品及其相关风险有初步了解', 'D.了解一种', 'E.全都不了解'],
      'correctAnswer': 2
    }, {
      'question': '7、您的投资经验可描述为？',
      'answers': ['A.参与过私募、资管、信托等产品的交易', 'B.参与过权证、期货、期权等产品的交易', 'C.参与过股票、基金等产品的交易', 'D.购买过债券、保险等理财产品', 'E.除银行储蓄外，基本没有其他投资经验'],
      'correctAnswer': 3
    }, {
      'question': '8、您有多少年证券投资经验？',
      'answers': ['A.10 年以上', 'B.5 到 10 年', 'C.3 到 5 年', 'D.1 到 3 年', 'E.1 年以内'],
      'correctAnswer': 3
    }, {
      'question': '9、您觉得下面哪个选项可以最好的描述您的投资目标？',
      'answers': ['A.激进成长', 'B.显著成长', 'C.稳健成长', 'D.谨慎成长', 'E.避免亏损'],
      'correctAnswer': 3
    }, {
      'question': '10、您计划中的基金投资期限有多长？',
      'answers': ['A.10年以上', 'B.5至10年内', 'C.3至5年', 'D.1至3年', 'E.1年内'],
      'correctAnswer': 3
    }, {
      'question': '11、以下哪项描述最符合您的投资态度？',
      'answers': ['A.希望赚取高回报，愿意为此承担较大本金损失', 'B.寻求资金的较高收益和成长性，愿意为此承担有限本金损失', 'C.保守投资，不希望本金损失，愿意承担一定幅度的收益波动', 'D.厌恶风险，不希望本金损失，希望获得稳定回报'],
      'correctAnswer': 3
    }, {
      'question': '12、假设有两种投资：投资A预期获得10%的收益，可能承担的损失非常小；投资B预期获得30%的收益，但可能承担较大亏损。您会怎么支配您的投资？',
      'answers': ['A.全部投资于收益较大且风险较大的B', 'B.同时投资于A和B，但大部分资金投资于收益较大且风险较大的B', 'C.同时投资于A和B，但大部分资金投资于收益较小且风险较小的A', 'D.全部投资于收益较小且风险较小的A'],
      'correctAnswer': 3
    }, {
      'question': '13、您认为自己能承受的最大投资损失是多少？',
      'answers': ['A.超过50%', 'B.30%-50%', 'C.10%-30%', 'D.10%以内', 'E.本金不亏损'],
      'correctAnswer': 3
    }]
  }

  export default{
    data () {
      return {}
    },
    methods: {
      initscantron: function () {
        $('#scantron').scantron({
          questions: init.questions
        })
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.initscantron()
      })
    }
  }
</script>
