<template>
  <div id="register-content">
    <div class="content-index">
      <stup :status="status"></stup>
      <accout v-if="status===0" :status="status" @onchange="onchange"></accout>
      <accountregister v-if="status===1" :status="status" @onchange="onchange"></accountregister>
    </div>
  </div>
</template>
<script>
  import stup from './stup.vue'
  import accout from './accout.vue'
  import accountregister from './accountregister.vue'
  export default {
    data(){
      return{
        status:0,
        verifystatus:{
          account:0,
          register:1,
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
    components: { stup, accout, accountregister}
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
