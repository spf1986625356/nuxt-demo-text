<template>
  <div>
    <div class="content">
      <!--<h4><router-link >&lt;返回</router-link></h4>-->
      <!--<span class="title">企业身份认证</span>-->
      <div class="height:20px;">
        <!--<Step status="account"></Step>-->
      </div>
      <div id="accountVerify">
        <div class="content-one">
          <img style="float:left;height:105px;" src="../../assets/img/gou.jpg">
          <div class="note">
            <h2>打款成功，请填写打款金额</h2>
            <p>我们已于2017-12-15向您的对公账户成功打了一笔随机金额 <br>
              打款方为：浙江葫芦娃网络技术有限公司 <br>
              请于下方验证收款金额，如未收到打款,请联系客服：400-0000-000</p>
          </div>
        </div>
        <div class="content-two">
          <div class="row"><span>公司名称</span><input readonly="readonly" class="info" /></div>
          <div class="row"><span>银行账号</span><input readonly="readonly" class="info"/></div>
          <div style="margin-bottom: 10px" class="row"><span>收款金额</span><input /></div>
        </div>
        <div class="footer">
          <div style="margin-bottom: 16px;"><p>金额错误！您还有2次机会</p></div>
          <div><el-button class="btn-submit">确定</el-button></div>
        </div>
      </div>
    </div>
    <div v-if="true" class="content">
      <div id="verifySuccess">
        <div class="content">
          <!--<icon-svg style="width:105px;height:105px;" icon-class="verifiedcompany"></icon-svg>-->
          <h3>恭喜您，企业认证已通过！</h3>
          <p>放心签已为您向CA机构成功申请一张数字签名证书，您可以在放心签平台放心的进行签名了。 <br>
            您的企业在平台签署的合同一旦发生纠纷，可申请司法鉴定报告，一键仲裁等法律保障服务！</p>
          <!--<router-link ><el-button>确定</el-button></router-link>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  //  import http from '@/components/http.js'
  //  import Step from './step.vue'
  //  import {mapActions, mapState} from 'vuex'
  //  export default {
  //    data(){
  //      return {
  //        name:this.$store.state.companyinfo.companydetail.name,
  //        account:this.$store.state.companyinfo.companyverify.bankpublicaccount,
  //        littlemoney:'',
  //        tips:'请正确填写该金额，您只有三次填写机会',
  //        success:false,
  //        status:0,
  //      }
  //    },
  //    created(){
  //      this.getCompanyVerify()
  //      if(this.$store.state.companyinfo.companydetail.type == 1){
  //        this.success = true;
  //      }
  //    },
  //    methods:{
  //      ...mapActions([
  //        'getCompanyverify'
  //      ]),
  //      /**
  //       * 获取企业认证信息
  //       * companydetail.type：公司是否认证（0未认证，1已认证，2认证失败）
  //       * */
  //      getCompanyVerify() {
  //        this.getCompanyverify({id: this.$store.state.login.userInfo.companyid}).then(res => {
  //          this.account = this.$store.state.companyinfo.companyverify.bankpublicaccount?this.$store.state.companyinfo.companyverify.bankpublicaccount:''
  //        });
  //      },
  //      getcheck(){
  //        return http.post('company-api/api/employee/identifyCompany/queryIdentifyCompany',{companyid:this.$store.state.companyinfo.companydetail.id,littlemoney:this.littlemoney}).then(res=> {
  //          console.log(res);
  //          if(res.data.status==20){
  //            if(res.data.message=='认证失败信息删除'){
  //              this.$message('认证失败，请重新认证');
  //              this.$router.push('/')
  //            }else if(res.data.message =='证书颁发成功'){
  //              this.success = true;
  //            }else{
  //              this.tips = res.data.message;
  //            }
  //          }
  //        });
  //      }
  //    },
  //    components:{
  //      Step
  //    }
  //  }
</script>
<style lang="less" scoped>
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
  #accountVerify{
    width:100%;
    height:56.97rem;
    background:#fff;
  .content-one{
    padding:6.25rem 17rem;
  /*display: flex;*/
  img{
    float:left;
    width:7.13rem;
    height:7.13rem;
  }
  .note{
    float:left;
    padding-left:3.75rem;
  h2{
    text-align:left;
    margin:0;
    font-size:20px;
    color:#333;
    margin-bottom:30px;
    font-weight:normal;
  }
  p{
    text-align:left;
    font-size:0.88rem;
    color:#666;
    font-family:MicrosoftYaHei;
    color:rgba(102,102,102,1);
  }
  }
  }
  .content-two{
    padding:3.75rem 25rem 0;
  .row{
    margin-bottom:1.25rem;
  span{
    display: inline-block;
    width:5rem;
    padding-right:1.23rem;
  }
  .info{
    color:#ccc;
    background-color:#eaeaea;
  }
  input{
    width:13.8rem;
    height:34px;
    padding:0.63rem 0.61rem;
    border:0.06rem solid #eaeaea;
    outline:0;
    font-size:0.88rem;
    border-radius: 0.25rem ;
  }
  .info{
    background:#f4f4f4;
  }
  }

  }
  .footer{
    width:250px;
    margin:0 auto;
    padding:0 2rem  22rem 3.75rem;
    text-align:center;
    p{
      color:red;
      text-align:left;
    }
    .btn-submit{
      width:7.5rem;
      height:2.32rem;
      background-color: #FD9827;
      border-color: #FD9827;
      color:#fff;
    }
  }
  }
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
  }
  p {
    font-size: 0.88rem;
    color: rgba(204, 204, 204, 1);
  }
  .el-button {
    margin-top: 1rem;
    width: 8.75rem;
    height: 2.5rem;
    color: rgba(253, 152, 39, 1);
    border-color: rgba(253, 152, 39, 1);
    border-radius: 0.25rem;
  }
  }
  }
</style>
