<template>
  <div id="login-index">
    <div class="login-content">
      <div class="login-from">
        <span class="login-from-title">
          企业登录
        </span>
        <Form ref="formItem" :model="formItem"  :rules="ruleformItem">
          <FormItem prop="phone">
            <Input size="large" v-model="formItem.phone" placeholder="请输入您的企业邮箱账号"></Input>
          </FormItem>
          <div class="visible-div" :style="displays">
            只有企业账户，且是实名账户才能成为开发者
          </div>
          <FormItem prop="password">
            <Input size="large" v-model="formItem.password" type="password" placeholder="请输入您的密码"></Input>
          </FormItem>
          <Checkbox label="Movie" style="float: left; padding-bottom: 1rem"><span class="link-pass">记住密码</span></Checkbox>
          <span class="link-pass2">忘记密码</span>
            <Button size="large" type="primary" @click="handleSubmit('formItem')" style="width: 100%">登录</Button>
          <span class="link-pass3">还没有账号么？<nuxt-link to="/register"><span style="color:#FF7F00;cursor: pointer">立即注册</span></nuxt-link></span>
        </Form>
      </div>
    </div>
  </div>
</template>
<script>
  import http from '../../components/common/http/index'
  import { mapMutations, mapActions } from 'vuex'

  export default {
    components: {},
    data () {
      return {
        displays:'display:none',
        lastSeconds:2,
        formItem: {
          phone: '',
          password: '',
        },

        ruleformItem:{
          phone: [
            { validator:
              function(rule, value, callback) {
                let reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
                if (!(reg.test(value))) {
                  callback('请输入正确的邮箱')
                } else {
                  callback()
                }
              }, trigger: 'blur,change' }
          ],
          password: [
            { required: true, message: '密码长度8到20位', trigger: 'blur,change',min: 8,max:20},
          ]
        }
      }
    },
    methods:{
//      ...mapMutations({
//        add: 'login/add'
//      }),
      ...mapActions({
        add: 'login/add'
      }),
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            http.post('token-manager/unchk/auth/login/personal',this.formItem).then(res=>{
              if(res.data.status==20){
                this.displays='display:none'
                this.add({userid:res.data.content.user.userid})
                this.$router.push('/')
              } else {
                this.displays='display:block'
                this.successAppear()
              }
            })
          }
        })
      },
      successAppear: function () {
        let that = this
        this.Interval = setInterval(function () {
          that.lastSeconds = that.lastSeconds - 1
          if(that.lastSeconds == 0){
            clearInterval(that.Interval)
            that.displays='display:none'
            that.lastSeconds=2;
          }
        }, 1000)
      }
    }
  }
</script>
<style lang="stylus" scoped>
  #login-index{
    width :100%;
    height :100%
    min-height :84rem;
    background:url("../../assets/img/login.png") fixed;
    background-size :100% 100%
    .login-content{
      position :absolute;
      top:18rem;
      right :0;
      left :0;
      margin :0 auto;
      width :34rem;
      height :26.56rem;
      line-height :1.5rem
      background:rgba(255,255,255,1);
      .login-from{
        width :23rem;
        margin :0 auto;
        text-align :center;
        .login-from-title{
          display :block;
          padding-top :4rem;
          padding-bottom :3rem
          font-size:1rem;
          font-family:MicrosoftYaHei;
          color:rgba(51,51,51,1);
        }
        .visible-div{
          position :absolute;
          top:165px;
          left :0;
          right :0;
          width:17.81rem;
          height:1.88rem;
          margin :0 auto;
          background:rgba(0,0,0,1);
          border-radius: 0.94rem ;
          font-size:0.75rem;
          font-family:MicrosoftYaHei;
          color:rgba(255,255,255,1);
          line-height 1.88rem;
        }
        .link-pass{
          font-size:0.88rem;
          font-family:MicrosoftYaHei;
          color:rgba(255,127,0,1);
        }
        .link-pass2{
          float: right;
          padding-bottom: 1rem
          font-size:0.88rem;
          cursor :pointer
          font-family:MicrosoftYaHei;
          color:rgba(153,153,153,1);
        }
        .link-pass3{
          display :inline-block
          margin-top :1rem
          font-size:0.88rem;
          font-family:MicrosoftYaHei;
        }
      }
    }
  }
  @media only screen and (max-width: 500px) {
    #login-index {
      background-color:lightblue;
    }
  }
</style>
