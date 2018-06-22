<template>
  <div>
    <div class="pc" v-if="!isMobile">
      <div :class="{main:scroll>200,main2:scroll<200}">
        <div class="header">
          <div class="pull-left">
            <Menu mode="horizontal" active-name="1">
              <MenuItem name="0" v-if="scroll<200"><img class="logo" src="~/assets/img/logo-w.png" alt=""></MenuItem>
              <MenuItem name="0" v-if="scroll>200"><img class="logo" src="~/assets/img/logo-c.png" alt=""></MenuItem>
              <nuxt-link to="/"><MenuItem name="1">首页</MenuItem></nuxt-link>
              <nuxt-link to="/product"> <MenuItem name="2">产品中心</MenuItem></nuxt-link>
              <nuxt-link to="/cooperationcase"><MenuItem name="3">合作案例</MenuItem></nuxt-link>
              <MenuItem name="4"><a href="http://open.fangxinqian.cn" target="_blank">开放平台</a></MenuItem>
              <nuxt-link to="/newscenter"><MenuItem name="5">新闻中心</MenuItem></nuxt-link>
              <nuxt-link to="/about/companyprofile "><MenuItem name="6">关于我们</MenuItem></nuxt-link>
              <nuxt-link to="/online"><MenuItem name="7">在线验签</MenuItem></nuxt-link>
            </Menu>
          </div>
          <div class="pull-right">
            <Button style="margin-right:40px;" class="btn-login" type="ghost" @click="loginmodal=true;">登录</Button>
            <Button type="primary"  @click="registermodal=true;">注册</Button>
          </div>
        </div>
        <div class="clear"></div>
      </div>
      <div v-if="loginmodal" class="alert">
        <div class="model-content" >
          <div class="close-btn" @click="cancellogin">x</div>
          <div class="alert_header">
            <div class="alert_title">
              登录
            </div>
          </div>
          <div class="alert_content">
            <a href="http://ps.fangxinqian.cn/#/login" target="_blank" style="margin-right: 20px;">个人版</a>
            <a href="http://ep.fangxinqian.cn/" target="_blank">企业版</a>
          </div>
        </div>
      </div>
      <div v-if="registermodal" class="alert">
        <div class="model-content" >
          <div class="close-btn" @click="cancelregister">x</div>
          <div class="alert_header">
            <div class="alert_title">
              注册
            </div>
          </div>
          <div class="alert_content">
            <a href="http://ps.fangxinqian.cn/#/register" target="_blank" style="margin-right: 20px;">个人版</a>
            <a href="http://ep.fangxinqian.cn/" target="_blank">企业版</a>
          </div>
        </div>
      </div>
    </div>

    <div class="phone" v-if="isMobile">
      <div class="phone-header">
        <img  class="pull-left logo" src="~/assets/img/logo.png" alt="">
        <div class="pull-right" @click="dropvisible = !dropvisible;">
          <Icon  size="20" type="navicon-round"></Icon>
        </div>
        <div  class="dropdown" v-if="dropvisible">
          <div class="close">
            <ul>
              <li style="padding:0 1.6rem;border:0;font-size:2rem;color:#ddd;font-weight:bold;text-align:right"><span @click="dropvisible = false">x</span></li>
            </ul>
          </div>
          <ul @click="dropvisible =  false" class="nav">
            <nuxt-link to="/"><li>首页</li></nuxt-link>
            <nuxt-link to="/productphone"><li>产品中心</li></nuxt-link>
            <nuxt-link to="/cooperationcasephone"><li>合作案例</li></nuxt-link>
            <li><a href="http://open.fangxinqian.cn" target="_blank">开放平台</a></li>
            <nuxt-link to="/newscenterPhone/all" ><li>新闻中心</li></nuxt-link>
            <nuxt-link to="/newscenterPhone/company" > <li style="text-indent:1.5rem;">公司新闻</li></nuxt-link>
            <nuxt-link to="/newscenterPhone/industry" ><li style="text-indent:1.5rem;">行业新闻</li></nuxt-link>
            <nuxt-link to="/aboutphone"><li>关于我们</li></nuxt-link>
            <nuxt-link to="/aboutphone"><li style="text-indent:1.5rem;">公司介绍</li></nuxt-link>
            <nuxt-link to="/aboutphone/qualifica"><li style="text-indent:1.5rem;">企业资质</li></nuxt-link>
            <nuxt-link to="/aboutphone/post"><li style="text-indent:1.5rem;">企业里程碑</li></nuxt-link>
            <nuxt-link to="/aboutphone/link"><li style="text-indent:1.5rem;">联系我们</li></nuxt-link>
          </ul>
          <div class="btn-content">
            <Button type="default" @click="loginmodal = true">登录</Button>
            <Button type="primary" @click="registermodal = true">注册</Button>
          </div>
        </div>
      </div>
      <div class="clear-up"></div>
      <div v-if="loginmodal" class="alert">
        <div class="model-content" >
          <div class="close-btn" @click="cancellogin">x</div>
          <div class="alert_header">
            <div class="alert_title">
              登录
            </div>
          </div>
          <div class="alert_content">
            <a href="http://ps.fangxinqian.cn/#/login" target="_blank" style="margin-right: 20px;">个人版</a>
            <a href="http://ep.fangxinqian.cn/#/login" target="_blank">企业版</a>
          </div>
        </div>
      </div>
      <div v-if="registermodal" class="alert">
        <div class="model-content" >
          <div class="close-btn" @click="cancelregister">x</div>
          <div class="alert_header">
            <div class="alert_title">
              注册
            </div>
          </div>
          <div class="alert_content">
            <a href="http://ps.fangxinqian.cn/#/register" target="_blank" style="margin-right: 20px;">个人版</a>
            <a href="http://ep.fangxinqian.cn/#/register" target="_blank">企业版</a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data (){
      return {
        selected:{
          all:0,
          company:1,
          industry:2
        },
        disable:false,
        scroll:'',
        loginmodal:false,
        registermodal:false,
        dropvisible:false
      }
    },
    watch:{
      $route(){
        this.dropvisible = false;
      }
    },
    created(){
      this.dropvisible = false;
    },
    methods:{
      cancellogin(){
        this.loginmodal = false
      },
      cancelregister(){
        this.registermodal = false
      },
      menu(){
        this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
      }
    },
    computed:{
      ...mapGetters({
        isMobile:'app/mobileLayout'
      }),
      getscroll:function(){
        return this.menu()
      }
    },
    mounted(){
      window.addEventListener('scroll',this.menu)
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  @import 'index.styl'
  @import 'index-sub.styl'
  @import 'index_phone.styl'

  .pc{
    .alert{
      position: fixed;
      top:0;
      right:0;
      left:0;
      bottom: 0;
      margin:0;
      background-color: rgba(0,0,0,0.3);
      z-index:10000000000;
      .model-content{
        position: relative;
        width:28.75rem;
        height:10.55rem;
        margin:15.88rem auto 0;
        padding:1rem 1.25rem;
        border-radius:0.25rem;
        background: #fff;
      }
      .close-btn{
        position: absolute;
        top:0.56rem;
        right:0.76rem;
        color:rgba(204,204,204,1);
        cursor: pointer;
      }
      .alert_content{
        width:100%;
        margin:20px auto;
        text-align:center;
        a{
          display:inline-block;
          background:#FD9827;
          border-radius:5px;
          color:#fff;
          font-size:14px;
          width:100px;
          height:36px;
          line-height:36px;
        }
      }

      .alert_header{
        width:100%;
        text-align:center;
      }
      .alert_title{
        padding-bottom: 1rem;
        display: inline-block;
        text-align:center;
        font-size: 1.25rem;
      }
    }

  }

  .phone{
    .alert{
      position: fixed;
      top:0;
      right:0;
      left:0;
      bottom: 0;
      margin:0;
      background-color: rgba(0,0,0,0.3);
      z-index:10000000000;
      .model-content{
        position: relative;
        width:280px;
        height:10.55rem;
        margin:15.88rem auto 0;
        padding:1rem 1.25rem;
        border-radius:0.25rem;
        background: #fff;
      }
      .close-btn{
        position: absolute;
        top:0.56rem;
        right:0.76rem;
        color:rgba(204,204,204,1);
        cursor: pointer;
      }
      .alert_content{
        width:100%;
        margin:20px auto;
        text-align:center;
        a{
          display:inline-block;
          background:#FD9827;
          border-radius:5px;
          color:#fff;
          font-size:14px;
          width:100px;
          height:36px;
          line-height:36px;
        }
      }

      .alert_header{
        width:100%;
        text-align:center;
      }
      .alert_title{
        padding-bottom: 1rem;
        display: inline-block;
        text-align:center;
        font-size: 1.25rem;
      }
    }

  }
</style>
