<template>
  <div id="help-center-content">
    <div class="content-top">
      <div class="top-input">
        <span class="top-span">帮助中心</span>
        <Button>查询</Button>
        <div class="input-div">
          <input class="input-ivn" placeholder="请输入您想了解的问题"/>
        </div>
      </div>
    </div>
    <div class="content-center">
      <div class="tableft-left">
        <!--<div class="items">-->
          <!--<nuxt-link to="/">-->
            <!--<div class="left-link">-->
              <!--aa-->
            <!--</div>-->
          <!--</nuxt-link>-->
        <!--</div>-->
        <Menu active-name="4-1" :open-names="['4']" accordion>
          <Submenu name="1">
            <span class="sub-span" slot="title">企业介绍</span>
            <MenuItem name="1-1"><nuxt-link to="/helpcenter/company-introduction">Option 1</nuxt-link></MenuItem>
            <!--<nuxt-link to="/helpcenter/apidocuments"><MenuItem name="1-2">Option 2</MenuItem></nuxt-link>-->
            <!--<nuxt-link to="/helpcenter/apidocuments"><MenuItem name="1-3">Option 3</MenuItem></nuxt-link>-->
            <!--<nuxt-link to="/helpcenter/apidocuments"><MenuItem name="1-4">Option 4</MenuItem></nuxt-link>-->
          </Submenu>
          <MenuItem class="MenuItem-one" name="2"><nuxt-link to="/helpcenter/guide"><span  class="sub-span">新手指南</span></nuxt-link></MenuItem>
          <MenuItem class="MenuItem-one" name="3"><nuxt-link to="/helpcenter/apiprotocol"><span  class="sub-span">API协议</span></nuxt-link></MenuItem>
          <Submenu name="4">
            <span  class="sub-span" slot="title">API文档</span>
            <MenuItem name="4-1"><nuxt-link to="/helpcenter/apidocuments">API使用说明</nuxt-link></MenuItem>
            <MenuItem name="4-2"><nuxt-link to="/helpcenter/apidocuments/sealapi">印章接口</nuxt-link></MenuItem>
            <MenuItem name="4-3"><nuxt-link to="/helpcenter/apidocuments/remotelyapi">远程签接口</nuxt-link></MenuItem>
            <MenuItem name="4-4"><nuxt-link to="/helpcenter/apidocuments/standardapi">标准签接口</nuxt-link></MenuItem>
          </Submenu>
          <MenuItem class="MenuItem-one" name="5"><nuxt-link to="/helpcenter/sdk"><span  class="sub-span">SDK介绍</span></nuxt-link></MenuItem>
        </Menu>
      </div>
      <div class="right-view">
        <div class="help-index">
          <nuxt-child/>
        </div>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>
<script>
  export default{
    layout: 'headerwhite',
    data () {
      return {
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
        padding-top:8rem;
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
      width :1200px;
      margin :0 auto;
      .ivu-menu-submenu,.MenuItem-one{
        border-bottom :1px solid #EAEAEA
        border-left :1px solid #EAEAEA
        //border-right :1px solid #EAEAEA
      }
      .tableft-left{
        float :left;
        width:15rem;
        height:27.5rem;
        background-color: white;
        margin-bottom :1rem
        .ivu-menu-item{
          font-size:0.75rem;
          font-family:MicrosoftYaHei;
          color:rgba(51,51,51,1);
          a{
            display :block
            width :100%;
            height :100%
            font-size:0.75rem;
            font-family:MicrosoftYaHei;
            color:rgba(51,51,51,1);
          }
        }
        .sub-span{
          font-size:1rem;
          font-family:MicrosoftYaHei;
          color:rgba(51,51,51,1);
        }
        .items{
          .left-link{
            width:11.25rem;
            height:3.13rem;
            line-height: 3.13rem;
            font-size:1rem;
            font-family:MicrosoftYaHei;
            color:rgba(51,51,51,1);
            cursor :pointer;
          }
          .left-link:hover{
            background-color:rgba(253,152,39,1);
            color:white;
          }
        }
        .ivu-menu-vertical.ivu-menu-light:after{
          width :0px
        }
      }
      .right-view{
        float :right;
        width:60rem;
        height:100%;
        background:rgba(255,255,255,1);
        border :1px solid #EAEAEA
        .help-index{
          margin-top :2rem;
          margin-left :1rem;
          margin-right :1rem;
        }
      }
    }
  }
  .nuxt-link-active .left-link{
    background-color:rgba(253,152,39,1);
    color:white !important;
  }
  .clear{
    clear:both;
  }


</style>
