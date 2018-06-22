<template>
    <div :class="{pcfooter:!isMobile,phonefooter:isMobile}">
      <img class="background" src="~/assets/img/blue-bg.png" alt="">
      <div class="btn-content">
        <div><img src="~/assets/img/yongxinqian-font.png" alt=""></div>
        <a class="btn">申请接入</a></div>
    </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default{
    computed: {
      ...mapGetters({
        isMobile: 'app/mobileLayout'
      })
    }
  }
</script>
<style scoped lang="stylus" type="text/stylus">
  .pcfooter{
    width:100%;
    min-width:75rem;
    position: relative;
    height:14rem;
    text-align:center;
    .background{
      width:100%;
      height:14rem;
    }
    .btn-content{
      width:100%;
      height:4rem;
      position:absolute;
      top:3rem;
      left:0;
      text-align:center;
      .btn{
        display:inline-block;
        background:transparent;
        color:#fff;
        width:9rem;
        height:3rem;
        line-height:3rem;
        margin-top:3rem;
        border:1px solid #fff;
        border-radius:0.25rem;
        font-weight:500;
        outline:none;
        font-size:1rem;
      }
      .btn:hover{
        border-color:#fff;
        background:#fff;
        color:#FD9827;
      }
    }
  }

  .phonefooter{
    width:100%;
    min-width:360px;
    position: relative;
    height:14rem;
    text-align:center;
    .background{
      width:100%;
      height:14rem;
    }
    .btn-content{
      width:100%;
      height:4rem;
      position:absolute;
      top:3rem;
      left:0;
      text-align:center;
      .btn{
        display:inline-block;
        background:transparent;
        color:#fff;
        width:9rem;
        height:3rem;
        line-height:3rem;
        margin-top:3rem;
        border:1px solid #fff;
        border-radius:0.25rem;
        font-weight:500;
        outline:none;
        font-size:1rem;
      }
      .btn:hover{
        border-color:#fff;
        background:#fff;
        color:#FD9827;
      }
    }
  }
</style>
