<template>
  <div class="help-title">
    <span class="title-span">{{title}}</span>
  </div>
</template>
<script>
  export default {
    props:{
      title:{
        default:'企业介绍'
      },
    }
  }
</script>
<style lang="stylus" scoped>
  .help-title{
    height :2.5rem;
    border-bottom :0.06rem solid rgba(234,234,234,1);
    .title-span{
      font-size:1.5rem;
      font-family:MicrosoftYaHei-Bold;
      color:rgba(51,51,51,1);
      font-weight :Bold
    }
  }
</style>
