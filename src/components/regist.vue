<!--注册协议-->
<template>
    <div class="regist">
      <div class="welcome-regist">{{msg}}</div>
      <div class="regist-msg">
        谨遵中基协《私募投资基金募集行为管理办法》规定，注册认证后的合格投资者才能访问本网站。
        阁下如有意进行私募投资基金投资且满足《私募投资基金监督管理暂行办法》关于“合规投资者”标准之规定，
        即具备相应风险识别能力和风险承担能力，投资于单只私募基金的金额不低于100万元，
        且个人金融类资产不低于300万元或者最近三年个人年均收入不低于50万元人民币。
        请阁下详细阅读本提示，并注册成为特定的合规投资者，方可获得私募投资基金产品宣传推介服务。
        我已阅读并接受此认定书。
      </div>
      <div>
        <mt-button @click.native="handleClick" class="btn-submit">确定</mt-button>
      </div>
      <router-link to="/components/login" class="btn-link">有账号，直接登录</router-link>
    </div>
</template>
<style>
  .welcome-regist{
    background:#32608a;
    padding:20px 0px 10px 0px;
    color:#fff;
    font-size: 16px;
  }
  .regist-msg{
    background:#f5f5f5;
    border:1px solid #ccc;
    padding:15px 50px;
    font-size:12px;
    line-height:18px;
    text-align:left;
    margin:30px 0px 20px;
  }
  .btn-link{
    margin-top:20px;
  }
</style>
<script>
    export default{
      data () {
        return {
          msg: '欢迎注册'
        }
      },
      methods: {
        handleClick: function () {
          // this.$toast('注册失败!')
          this.$router.push({ path: '/components/regist1' })
        }
      },
      components: {
      }
    }
</script>
