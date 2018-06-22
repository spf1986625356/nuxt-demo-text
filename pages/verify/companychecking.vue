<template>
  <div>
    <div class="content">
      <div id="submitSuccess">
        <div class="content">
          <!--<icon-svg style="width:105px;height:105px;" icon-class="submitsuccess"></icon-svg>-->
          <div><img src="~/assets/img/gou.jpg" alt=""></div>

          <div class="note">
            <h2>提交成功，我们将在1个工作日完成资料审核</h2>
            <p>资料审核通过后，我们将向您的对公账户打一笔随机金额。<br>
              金额到账后你需要回到当前认证页面填写打款金额金额一致即完成企业认证。<br>
              如有疑问，请咨询客服400-0000-000</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import iconsvg from '@/components/common/Icon-svg'
  export default {
    data(){
      return {
      }
    },
    components:{
      iconsvg
    }
  }
</script>
<style scoped lang="less" type="text/less">
  body{
    background:#F4F4F4;
  }
  .content{
    width:75rem;
    margin:0 auto;
    .title{
      display: block;
      font-size:1rem;
      color:rgba(51,51,51,1);
      background-color: #EAEAEA;
      width:100%;
      height:40px;
      text-indent: 18px;
      line-height: 40px;
    }
    h4{
      color:#999;
      font-size:0.88rem;
      font-weight: 300;
      padding:0.56rem 0;
      text-indent: 1.13rem;
      margin:0;
    }
  }
  #submitSuccess{
    width:100%;
    height:56.97rem;
    background:#fff;
    .content{
      padding:6.25rem 17rem;
      display: flex;
      .note{
        padding-left:3.75rem;
        h2{
          margin:0;
          font-size:20px;
          color:#333;
          text-align:left;
          font-weight:normal;
          margin-bottom: 30px;
        }
        p{
          font-size:0.88rem;
          text-align:left;
          font-family:MicrosoftYaHei;
          color:rgba(102,102,102,1);
        }
      }
    }
  }
</style>
