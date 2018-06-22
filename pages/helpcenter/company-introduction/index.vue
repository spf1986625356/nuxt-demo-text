<template>
  <div id="help-center-content">
    企业介绍
  </div>
</template>
<script>
  export default{
    layout: 'headerwhite',
    data () {
      return {
        value11: '',
        value12: '',
        value13: '',
        select1: 'http',
        select2: 'com',
        select3: 'day'
      }
    }
  }
</script>
<style lang="stylus" scoped>
  #help-center-content{
    background-color :white
    .content-top{
      height:14.8rem;
      background:rgba(253,117,60,1);
      text-align: center;
      .top-input{
        margin :0 auto
        padding-top:7rem;
        width:50.83rem;
        height:2rem;
        .top-span{
          font-size:1.88rem;
          float:left;
          font-family:MicrosoftYaHei;
          color:rgba(255,255,255,1);
        }
        .input-div{
          float :right
          width :34.33rem
          height:3rem;
          border : 0
          font-size:1rem;
          font-family:MicrosoftYaHei;
          color:rgba(204,204,204,1);
          background:rgba(255,255,255,1);
          border-radius: 0.25rem 0rem  0rem 0.25rem;
          .input-ivn{
            width :32rem
            height:3rem;
            border : 0;
            outline none;
          }
        }
        .ivu-btn{
          float :right
          width:7.5rem;
          border :0
          height :3rem;
          font-size:1rem;
          font-family:MicrosoftYaHei;
          color:rgba(255,255,255,1);
          background:rgba(254,208,47,1);
          border-radius: 0rem 0.25rem 0.25rem 0rem ;
        }
      }
    }
    .content-center{
      height :54rem;
      .Lable{
        width :73.1rem
        margin :0 auto
      }
    }
  }

</style>
