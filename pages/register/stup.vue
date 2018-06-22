<template>
  <div>
    <div class="step">
      <span class="steps" :class="{action:status===0}">① 填写账号</span>
      <span class="steps" :class="{action:status===1}">② 账号信息注册</span>
      <span class="steps" :class="{action:status===3}">③ 完成</span>
    </div>
  </div>

</template>
<script>
  export default {
    data(){
      return {
      }
    },
    props:['status']
  }
</script>
<style lang="less" scoped>
  .step{
    border-bottom:1px solid #E9E9E9;
    overflow:hidden;
    width:75rem;
    margin:0 auto;

  }
  .step .steps{
    display:inline-block;
    padding:10px 70px;
    background:white;
    color:black;
    font-family:"Microsoft YaHei";
    text-align: center;
    position:relative;
    width:33.33333%;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    float:left;
    transition:all ease-in 0.5s;
    cursor:pointer;
  }
  .step .steps::after{
    position:absolute;
    content:"";
    display:block;
    height:30px;
    width:30px;
    background:white;
    border-right:0.06rem solid #d9d9d9;
    border-bottom: 0.06rem solid #d9d9d9;
    top:5px;
    right:-15px;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    transition:all ease-in 0.5s;
  }

  .step .steps:nth-child(1){
    z-index:3;
  }
  .step .steps:nth-child(2){
    z-index:2;
  }

  .step .steps:nth-child(3){
    z-index:1;
  }
  .step .steps:last-child::after{
    display:none;
  }
  .step .steps:hover,.step .steps:hover::after{
    background:#F0F0F0;
  }
  .step .steps:active,.step .steps:active::after{
    background:#8FA35D;
    color:white;
  }
  .step .steps.action{
    color:white;
    background-color: #FED02F;
  }
  .step .steps.action::after{
    background-color: #FED02F;
  }
  .step .steps:nth-child(3)::after{
    border-bottom:1px solid #E5E5E5;
    border-right:1px solid #E5E5E5;
  }
  .step .steps.disabled,.step .steps.disabled::after{
    color:#CBCBCB;
    background:white;
  }
</style>
