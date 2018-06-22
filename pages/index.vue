<template>
  <div id="index-context">
      <div class="contexts">
        <span class="span1 span-color">开</span>
        <span class="span1 span-color-white">放</span>
        <span class="span1 span-color">平</span>
        <span class="span1 span-color-white">台</span><br>
        <span class="span-text">
          安全有保障、高效快速完成您的电子合同在线签约
        </span>
      </div>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="stylus" scoped>
  #index-context{
    height :100%;
    width :100%;
    min-height :82.8rem;
    background:url("../assets/img/about.png") fixed;
    background-size :100% 100%;
    .contexts{
      padding-top :19rem;
      padding-left :15%;
      .span1{
        font-size:5rem;
        font-family:MicrosoftYaHei;
      }
      .span-color{
        color :#FD9732;
      }
      .span-color-white{
        color :white;
      }
      .span-text{
        display :inline-block;
        padding-top :2rem;
        font-family:MicrosoftYaHei;
        color:rgba(255,255,255,1);
        font-size :1.55rem;
      }
    }
  }
  @media only screen and (max-width: 500px) {
    #index-context {
      background-color:lightblue;
    }
  }
</style>
