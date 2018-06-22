<template>
  <div class="contentdss-index-buchongming">
    <div class="main">
      <div class="verify">
        <div class="content">
          <div class="information">
            <el-form label-position="top" ref="form" :model="form" :rules="rules"  label-width="120px">
              <el-form-item label="企业名称">
                <el-input required readonly="readonly" v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="营业执照注册号/统一社会信用代码" prop="businesslicense">
                <el-input required v-model="form.businesslicense"></el-input>
              </el-form-item>
              <el-form-item label="组织机构带代码证/统一社会信用代码" prop="organizationcode">
                <el-input required v-model="form.organizationcode"></el-input>
              </el-form-item>
              <el-form-item label="营业执照">
                <div class="pic-box">
                  <div class="pic-content">
                    <img src="../../static/img/u485.jpg">
                    <span class="hiddenword">
                      <i class="el-icon-zoom-in" size="20" color="#FD9827"></i>
                    </span>
                  </div>
                  <div class="upload-content">
                    <p>
                    请上传png、jpg、jpeg格式的图片
                    文件最大2M
                    </p>
                    <el-upload
                    class="upload-demo"
                    :action="upurl"
                    :on-preview="handlePreview"
                    :on-remove="handleRemoveFront"
                    :on-success="handleSuccessNegative"
                    :on-error="handleError"
                    multiple
                    :limit="1"
                    :on-exceed="handleExceed"
                    accept="image/jpeg,image/png">
                    <el-button id="formPhotoTwo" size="small" class="upload-btn"
                    :class="{inactiveColor:selectedImg.businesslicenseurl}">选择图片
                    </el-button>
                    </el-upload>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label="组织机构代码证/统一社会信用代码">
                <div class="pic-box">
                  <div class="pic-content">
                    <img src="../../static/img/u485.jpg">
                    <span class="hiddenword">
                      <i class="el-icon-zoom-in" size="20" color="#FD9827"></i>
                    </span>
                  </div>
                  <div class="upload-content">
                    <p>
                      请上传png、jpg、jpeg格式的图片
                      文件最大2M
                    </p>
                    <el-upload
                      class="upload-demo"
                      :action="upurl"
                      :on-preview="handlePreview"
                      :on-remove="handleRemoveFront"
                      :on-success="handleSuccessNegative"
                      :on-error="handleError"
                      multiple
                      :limit="1"
                      :on-exceed="handleExceed"
                      accept="image/jpeg,image/png">
                      <el-button id="formPhotoTwo" size="small" class="upload-btn"
                                 :class="{inactiveColor:selectedImg.businesslicenseurl}">选择图片
                      </el-button>
                    </el-upload>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label="验证申请表">
                <div class="pic-box">
                  <div class="pic-content">
                    <img src="../../static/img/u485.jpg">
                    <span class="hiddenword">
                      <i class="el-icon-zoom-in" size="20" color="#FD9827"></i>
                    </span>
                  </div>
                  <div class="upload-content">
                    <p>
                      请上传png、jpg、jpeg格式的图片
                      文件最大2M
                    </p>
                    <el-upload
                      class="upload-demo"
                      :action="upurl"
                      :on-preview="handlePreview"
                      :on-remove="handleRemoveFront"
                      :on-success="handleSuccessNegative"
                      :on-error="handleError"
                      multiple
                      :limit="1"
                      :on-exceed="handleExceed"
                      accept="image/jpeg,image/png">
                      <el-button id="formPhotoTwo" size="small" class="upload-btn"
                                 :class="{inactiveColor:selectedImg.businesslicenseurl}">选择图片
                      </el-button>
                    </el-upload>
                  </div>
                </div>
              </el-form-item>
              <el-form-item label="对公银行账号" prop="bankpublicaccount">
                <el-input v-model="form.bankpublicaccount"></el-input>
              </el-form-item>
              <el-form-item>
                <el-col :span="11">
                  <el-form-item label="对公银行名称" prop="bankname">
                    <el-input v-model="form.bankname"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="11" :offset="2">
                  <el-form-item label="对公开户银行" prop="banksubbranch">
                    <el-input v-model="form.banksubbranch"></el-input>
                  </el-form-item>
                </el-col>
              </el-form-item>

              <div class="role-selector">
                <p >选择您的角色</p>
                <el-radio-group @change="changerole" v-model="form.type" style="margin-bottom: 15px">
                  <el-radio :label="0">我是企业法人</el-radio>
                  <el-radio :label="1">我是企业经办人</el-radio>
                </el-radio-group>
              </div>
              <div class="popver">
                <span class="angle" :class="{angle1:radioactive, angle2:!radioactive}"><em></em></span>
                <table>
                  <tbody v-if="this.form.type==this.role.legalMan">
                  <tr>
                    <td><span class="col1">法人姓名</span></td>
                    <td :colspan="2"><el-input v-model="form.legalmanname" style="width:368px;height:2rem;margin:0 0 1.25rem;"></el-input></td>
                  </tr>
                  <tr>
                    <td><span class="col1">法人身份号码</span></td>
                    <td :colspan="2"><el-input v-model="form.legalmanidentify" style="width:368px;height:2rem;margin:0 0 1.25rem;"></el-input></td>
                  </tr>
                  <tr>
                    <td>身份证正反面</td>
                    <td>
                      <el-upload
                        :action="upurl"
                        accept="image/jpeg,image/png"
                        :on-preview="handlePreview"
                        :on-success="handleSuccessIdentity"
                        :on-exceed="handleExceed"
                        :on-error="handleError"
                        multiple
                        :limit="1"
                        :show-file-list="false">
                        <el-tooltip content="支持jpg，jpeg，png格式上传，只允许上传 1 次" placement="right">
                          <el-button style="width:368px;color:#FD9827" id="formPhotoThree">上传文件</el-button>
                        </el-tooltip>
                      </el-upload>
                    </td>
                  </tr>
                  </tbody>
                  <tbody  v-if="this.form.type==this.role.resMan">
                  <tr>
                    <td><span class="col1">法人姓名</span></td>
                    <td style="padding:0 0 1.25rem" :colspan="2"><el-input v-model="form.legalmanname" style="width:348px;height:2rem;"></el-input></td>
                  </tr>
                  <tr>
                    <td><span class="col1">经办人姓名</span></td>
                    <td style="padding:0 0 1.25rem" :colspan="2"><el-input v-model="form.resmanname" style="width:348px;height:2rem;"></el-input></td>
                  </tr>
                  <tr>
                    <td><span class="col1">经办人身份号码</span></td>
                    <td style="padding:0 0 1.25rem" :colspan="2"><el-input v-model="form.legalmanidentify" style="width:348px;height:2rem;"></el-input></td>
                  </tr>
                  <tr>
                    <td><span class="col1">身份证正反面</span></td>
                    <td style="padding:0 0 1.25rem" :colspan="2">
                      <el-upload
                        :action="upurl"
                        accept="image/jpeg,image/png"
                        :on-preview="handlePreview"
                        :on-success="handleSuccessIdentity"
                        :on-exceed="handleExceed"
                        :on-error="handleError"
                        :limit="1"
                        :show-file-list="false">
                        <el-tooltip content="支持jpg，jpeg，png格式上传，只允许上传 1 次" placement="right">
                          <el-button style="width:348px;color:#FD9827"  id="formPhotoThree" >上传文件</el-button>
                        </el-tooltip>
                      </el-upload>
                    </td>
                  </tr>
                  <tr>
                    <td><span class="col1">企业授权书</span></td>
                    <td style="padding:0 0 1.25rem;width:248px">
                      <el-upload
                        text-align="left"
                        :action="upurl"
                        accept=".doc,.docx,.ppt,.pptx,.xls,.xlsx,.pdf"
                        :on-preview="handlePreview"
                        :on-success="handleSuccessPower"
                        :on-exceed="handleExceed"
                        :on-error="handleError"
                        :show-file-list="false">
                        <el-tooltip content="支持.doc，.docx，.ppt，.pptx，.xls，.xlsx，.pdf格式上传，只允许上传 1 次" placement="right">
                          <el-button  style="width:260px;color:#FD9827" id="formPhotoThree">上传文件</el-button>
                        </el-tooltip>
                      </el-upload>
                    </td>
                    <td style="padding:0 0 1.25rem;width:78px;">
                      <el-button target="_blank" style="color:#FD9827;cursor:pointer;width:80px;font-size: 0.88rem;text-align:center;padding:12px 0 ;display: inline-block;">下载模版</el-button>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </el-form>
            <p style="padding-top:10px; text-align: center">
              <!--<el-button style="margin-left: 75px;" id="formSub" @click="onSubmit('form')" class="btn-submit">确定</el-button>-->
              <el-button id="formSub" class="btn-submit"   @click="commitstatus">确定</el-button>
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>
<script>
  let defaultUrl = "static/img/u485.jpg"
  export default{
    data(){
      var checkCode = (rule,value,callback)=>{
        if ((/[^a-zA-Z0-9]/g.test(value))){
          callback(new Error('只允许输入数字、英文字母'));
        }else{
          callback();
        }
      };
      var checkNumber = (rule,value,callback)=>{
        if((/[^0-9]/g.test(value))){
          callback(new Error('只允许输入数字'));
        }else{
          callback();
        }
      };
      var checkHanzi = (rule,value,callback)=>{
        if ((/[^\u4e00-\u9fa5]/g.test(value))){
          callback(new Error('只允许输入汉字'));
        }else{
          callback();
        }
      };
      return {
        form:{
          companyid:'',
          name:'',
          businesslicense:'',
          organizationcode:'',
          businesslicenseurl:defaultUrl,
          organizationcodeurl:defaultUrl,
          applicationformurl:defaultUrl,
          bankpublicaccount:'',
          bankname:'',
          banksubbranch:'',
          type:0,
          legalmanname:'',
          legalmanidentify:'',
          resmanname:'',
          resmanidentify:'',
          identityphotofront:'',
          identityphotoreverside:'',
          powerletterurl:''
        },
        role:{
          legalMan:0,
          resMan:1
        },
        selectedImg: {businesslicenseurl: true, organizationcodeurl: true, applicationformurl: true},
        radioactive:true,
        upurl:'',
        rules: {
          businesslicense: [
            {required: true, message: '必填项', trigger: 'blur'},
            {validator:checkCode,trigger:'blur'}
          ],
          organizationcode: [
            {required: true, message: '必填项', trigger: 'blur'},
            {validator:checkCode,trigger:'blur'}
          ],
          bankpublicaccount:[
            {required: true, message: '必填项', trigger:'blur'},
            {validator:checkNumber,trigger:'blur'}
          ],
          bankname:[
            {required: true, message: '必填项', trigger:'blur'},
            {validator:checkHanzi,trigger:'blur'}
          ],
          banksubbranch:[
            {required: true, message: '必填项', trigger:'blur'},
            {validator:checkHanzi,trigger:'blur'}
          ]
        },
        mystatus:this.status
      }
    },
    watch:{
      status(val){
        this.mystatus = val
      },
      mystatus(val){
        this.$emit('onchange',val)
      }
    },
    props:['status'],
    methods:{
      commitstatus(){
        this.mystatus = 3
      },
      changerole(val){
        this.form.legalmanname ='';
        this.form.resmanname = '';
        this.form.legalmanidentify = '';
        this.form.identityphotofront = '';
        this.form.powerletterurl = '';
        this.radioactive = this.form.type ==0;
      },
      handleRemoveFront() {
        this.form.businesslicenseurl = defaultUrl;
        this.selectedImg.businesslicenseurl = true;
      },
      handleRemoveSide(){
        this.form.organizationcodeurl = defaultUrl;
        this.selectedImg.organizationcodeurl = true;
      },
      handleRemoveHand(){
        this.form.applicationformurl = defaultUrl;
        this.selectedImg.applicationformurl = true;
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files) {
//        const isJPG = file.type === 'image/jpeg';
//        const isLt2M = file.size / 1024 / 1024 < 2;

        this.$message.warning(`当前限制选择 1 个文件`);
//        if (!isJPG) {
//          this.$message.error('上传头像图片只能是 JPG 格式!');
//        }
//        if (!isLt2M) {
//          this.$message.error('上传头像图片大小不能超过 2MB!');
//        }
//        return isJPG && isLt2M;

      },
      handleSuccessNegative(res) {
        if ( res.status === 20 ){
          this.$emit('resUrl',res);
        }
        this.form.businesslicenseurl = res.content;
        this.selectedImg.businesslicenseurl = false;
        this.photo.p1 = true;
      },
      handleSuccessPositive(res) {
        if ( res.status === 20 ){
          this.$emit('resUrl',res);
        }
        this.form.organizationcodeurl = res.content;
        this.selectedImg.organizationcodeurl = false;
        this.photo.p2 = true;
      },
      handleSuccessHandheld(res) {
        if ( res.status === 20 ){
          this.$emit('resUrl',res);
        }
        this.form.applicationformurl = res.content;
        this.selectedImg.applicationformurl = false;
        this.photo.p3 = true;
      },
      handleSuccessIdentity(res){
        if(res.status === 20){
          this.$emit('resUrl',res);
        }
        this.$message('上传成功');
        this.form.identityphotofront = res.content;
      },
      handleSuccessPower(res){
        if(res.status === 20){
          this.$emit('resUrl',res);
        }
        this.$message('上传成功');
        this.form.powerletterurl = res.content;
        console.log(this.form.powerletterurl);
      },
      handleError(){
        this.$message('上传失败！');
      }
    }
  }
</script>
<style lang="less" type="text/less">
  body{
    background:#F4F4F4;
  }
  .contentdss-index-buchongming{
    width:75rem;
    margin: 0 auto;
    padding-bottom :4rem;
    background-color :white;
    .el-form-item__label{
      float:left !important;
    }
    .el-form--label-top .el-form-item__label{
      text-align: right;
      padding-right:18px;
    }
    .pic-box{
      width: 100%;
      height:150px;
      margin-top: 40px;
      padding: 5px;
      display:flex;
    }
    .pic-content{
      width:110px;
      height:150px;
      padding:5px;
      border: 1px solid #FD9827;
      position: relative;
      img{
        width:100%;
        height:100%;
      }
      .hiddenword{
        width:100%;
        height:100%;
        line-height:150px;
        text-align:center;
        position: absolute;
        top:0;
        left:0;
        z-index:100000;
        color:#FD9827;
        font-size:20px;
      }
    }
    .upload-content{
      width:189px;
      margin-left:20px;
      text-align: left;
      p{
        margin:0;
        line-height:18px;
        text-align:left;
        font-size:12px;
        color:#666;
      }
    }
    .upload-btn{
      background:#FD9827;
      width:100px;
      height:30px;
      /*line-height:30px;*/
      margin-top:20px;
      border:1px solid #FD9827;
      border-radius: 4px;
      font-size:14px;
      color:#fff;
    }
    .main{
      width:75rem;
      height: 100%;
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
    .sele-sore{
      width: 100%;
      height: 4rem;
      .sele-t{
        float: left;
      }
      .sele-left{
        margin-top: 1rem;
      }
    }
    .role-selector{
      text-align: left;
      p{
        /*text-align:left;*/
      }
      .el-radio{
        margin-top:5px;
        color:#666;
      }
    }
    .popver{
      width:100%;

      border:1px solid #ddd;
      position: relative;
      /*padding:1.65rem 1rem 1.25rem 0;*/
      padding:1.25rem 0;
      text-align:center;
      border-radius:0.25rem;
      .el-form-item{
        margin-bottom: 0;
      }
      .download{
        color:#FD9827;
        float:left;
        cursor:pointer;
        font-size: 0.88rem;
        display: inline-block;
        margin-top:0.6rem;
        margin-left:1rem;
        padding:0 1rem;
        border:1px solid #E8E8E8;
        border-radius:4px;
      }
      p{
        margin:0;
      }
      table{
        margin:0 20px;
      }
      table tr td:first-child{
        text-align: right;
        padding:0 1rem 0 0;
      }
      .el-form--label-top .el-form-item__label{
        text-align:right !important;
        margin-right:5px;
      }
      .col1{
        display: inline-block;
        font-size:0.88rem;
        text-align:right;
      }
      .angle{
        display:block;
        width:0;
        height:0;
        border-width:0 10px 10px;
        border-style:solid;
        border-color:transparent transparent #ddd;
        position:absolute;
        top:-10px;
        /*left:55px;!* 三角形居中显示 *!*/
        margin-left:-10px;/* 三角形居中显示 */
      }
      .angle1{
        left:55px;
      }
      .angle2{
        left:200px;
      }
      em{
        display:block;
        width:0;
        height:0;
        border-width:0 10px 10px;
        border-style:solid;
        border-color:transparent transparent #fff;
        position:absolute;
        top:1px;
        left:-10px;
      }
    }
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
    table{
      td{
        vertical-align: center;
      }
    }
    .el-input{
      height:2.13rem ;
    }
    h4{
      color:#999;
      font-size:0.88rem;
      font-weight: 300;
      padding:0.56rem 0;
      text-indent: 1.13rem;
      margin:0;
    }
    .verify{
      width:33rem;
      margin:0 auto;
    }
    .el-steps{
      background:#FED02F;
      padding:8px 8%;
      color:#fff !important;
      border-radius: 0 !important;
    }
    .el-step__icon.is-text{
      border:0 !important;
    }
    .content{
      width:100%;
      background:#fff;
      color:#666666;
      padding:30px 0;
      .information{

      }
    }
    p{
      font-size: 0.88rem;
    }
    .attention{
      color:#a9a9a9;
      font-size: 0.88rem;
      padding-bottom:1.19rem;
    }
    .btn-submit{
      width:520px;
      height:2.32rem;
      background-color: #FD9827;
      border-color: #FD9827;
      margin-top:20px;
      color:#fff;
    }
    .btn-cancel{
      width:7.5rem;
      height:2.32rem;
      background-color: #f4f4f4;
      border-color: #f4f4f4;
      margin-left:10px;
      color:#fff;
    }
    table tr:first-child{
      text-align: right;
    }

  }

</style>
