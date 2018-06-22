<template>
  <div id="register-content">
    <div class="content-index">
      <step :status="status"></step>
      <companyInfo v-if="status===2" :status="status" @onchange="onchange"></companyInfo>
      <companychecking v-if="status===3" :status="status" @onchange="onchange"></companychecking>
      <companyAccount v-if="status===4" :status="status" @onchange="onchange"></companyAccount>
      <companySuccess v-if="status===5" :status="status" @onchange="onchange"></companySuccess>
    </div>
  </div>
</template>
<script>
  import step from './step.vue'
  import companyInfo from './companyinfo.vue'
  import companychecking from './companychecking.vue'
  import companyAccount from './companyaccount.vue'
  import companySuccess from './companysuccess.vue'
  export default {
    data(){
      return{
        status:2,
        verifystatus:{
          info:2,
          check:3,
          companyaccount:4,
          success:5
        }
      }
    },
    methods:{
      onchange(val){
        this.status=val;
      },
    },
    components: { step, companyInfo, companychecking, companyAccount, companySuccess }
  }
</script>
<style lang="stylus" scoped>
  #register-content{
    min-width :1200px
    text-align:center;
    min-height :84rem;
    background:url("../../assets/img/login.png") fixed;
    background-size :100% 100%
    overflow:hidden;
  .content-index{
    margin :6.5rem auto;

  }
  }

</style>
