<template>
  <div id="verifySuccess">
    <div class="content">
      <!--<icon-svg style="width:105px;height:105px;" icon-class="verifiedcompany"></icon-svg>-->
      <div><img src="~/assets/img/success.jpg" alt=""></div>
      <h3>恭喜您，企业认证已通过！</h3>
      <p>放心签已为您向CA机构成功申请一张数字签名证书，您可以在放心签平台放心的进行签名了。 <br>
        您的企业在平台签署的合同一旦发生纠纷，可申请司法鉴定报告，一键仲裁等法律保障服务！</p>
      <el-button>确定</el-button>
    </div>
  </div>
</template>
<script>
  export default{

  }
</script>
<style scoped lang="stylus" type="text/stylus">
  #verifySuccess{
    width:75rem;
    height:52.69rem;
    margin:0 auto;
    background-color: #fff;
    .content {
      width: 37.21rem;
      margin: 0 auto;
      padding-top: 6.25rem;
      text-align: center;
      img {
        width: 6.5rem;
        height: 6.5rem;
      }
      h3 {
        font-size: 1.25rem;
        font-weight: normal;
        color: rgba(253, 152, 39, 1);
        margin-bottom:29px;
      }
      p {
        text-align:left;
        font-size: 0.88rem;
        color: rgba(204, 204, 204, 1);
      }
      .el-button {
        margin-top: 39px;
        width: 8.75rem;
        height: 2.5rem;
        color: rgba(253, 152, 39, 1);
        border-color: rgba(253, 152, 39, 1);
        border-radius: 0.25rem;
      }
    }
  }
</style>
