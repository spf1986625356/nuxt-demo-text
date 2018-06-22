<template>
  <div id="account-register-content">
    <div class="account-registerss">
      <div class="account-register-from">
        <Form :model="formLeft">
          <FormItem>
            <Input size="large" v-model="formLeft.input1" placeholder=" 请输入您的公司姓名"></Input>
          </FormItem>
          <FormItem >
            <Input size="large" v-model="formLeft.input2" placeholder=" 请输入管理员姓名"></Input>
          </FormItem>
          <FormItem >
            <Input size="large" v-model="formLeft.input2" placeholder=" 请输入管理员手机号"></Input>
          </FormItem>
          <FormItem>
            <Input class="vist-input" size="large" v-model="formLeft.input3" placeholder=" 请输入邮箱验证码"></Input>
            <Button class="visst-button" size="large" type="primary">发送验证码</Button>
          </FormItem>
          <FormItem>
            <Select size="large" v-model="formLeft.input2">
              <Option value="beijing">New York</Option>
              <Option value="shanghai">London</Option>
              <Option value="shenzhen">Sydney</Option>
            </Select>
          </FormItem>
          <Button class="submit-button" size="large" type="primary"  @click="commitstatus">下一步</Button>
          <Checkbox class="checkbox">我已经阅读并同意<span class="checkbox-span">《使用协议》</span>及<span  class="checkbox-span">《隐私条款》</span></Checkbox>
        </Form>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    data () {
      return {
        formLeft: {
          input1: '',
          input2: '',
          input3: ''
        },
        formRight: {
          input1: '',
          input2: '',
          input3: ''
        },
        formTop: {
          input1: '',
          input2: '',
          input3: ''
        },
        mystatus:this.status
      }
    },
    methods:{
      commitstatus(){
        this.mystatus = 2
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
    props:['status']
  }
</script>
<style lang="stylus" scoped>

  #account-register-content{
    width:75rem;
    margin: 0 auto;
    padding-bottom :4rem;
    background-color :white;
    overflow :hidden
    .account-registerss{
      width:32.5rem;
      margin :0 auto;
      margin-top :3rem
      .account-register-from{
      .vist-input{
        float :left;
        width :73%;
      }
      .visst-button{
        float :right;
        width :25%;
        background:white;
        border-color: #dddee1;
        font-size:0.88rem;
        font-family:MicrosoftYaHei;
        color:rgba(153,153,153,1);
      }
      .submit-button{
        margin-top :1rem
        width :100%;
      }
      .checkbox{
        font-size:0.75rem;
        font-family:MicrosoftYaHei;
        color:rgba(153,153,153,1);
        margin-top :1rem
        .checkbox-span{
          color #FD9827
        }
      }
    }
    }


  }
</style>
