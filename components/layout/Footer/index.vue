<template>
  <div>foot

  </div>

</template>

<script>
  import { mapGetters } from 'vuex'
    export default {
      computed: {
        ...mapGetters({
          isMobile:'app/mobileLayout'
        }),
      },
    }
</script>

<style scoped lang="stylus">
  .pcfooter{
    width:100%;
    //min-width:1200px;
    background:#333;
    font-size:1rem;
    .footer-content{
      width:1200px;
      height:19rem;
      color:#fff;
      margin:0 auto;
    }
    .foot-col{
      height:4rem;
      padding-top:4rem;
    }
  }
  .phonefooter{
    width:100%;
    min-width:360px;
    background:#333;
    font-size:1rem;
  .footer-content{
    width:100%;
    color:#fff;
    margin:0 auto;
  }
  .foot-col{
    text-indent: 2rem;
    padding-top:0.8rem;
  }
  }
</style>
