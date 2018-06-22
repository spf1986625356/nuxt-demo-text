<template>
  <div>
    <div v-if="scroll<43" id="header">
      <!--:class="{headertitletrue:scroll<46,headertitlefalse:scroll>46"}-->
      <div class="headertitletrue" >
        <Menu mode="horizontal" :theme="theme1" active-name="1">
          <MenuItem name="1">
            <img class="logo2" src="../../../static/img/logo2.png"/>
            <span class="logo2-title">放心平台</span>
          </MenuItem>
          <nuxt-link to="/"><MenuItem name="2">首页</MenuItem></nuxt-link>
          <nuxt-link to="/helpcenter/apidocuments/"><MenuItem name="3">
            帮助中心
          </MenuItem></nuxt-link>
          <MenuItem name="4">
            控制台
          </MenuItem>
          <nuxt-link to="/register"><Button class="button-left left-button-color2">注册</Button></nuxt-link>
          <nuxt-link to="/login"><Button class="button-left left-button-color1" >登录</Button></nuxt-link>
        </Menu>
      </div>
    </div>
    <div v-if="scroll>43" id="header2">
      <!--:class="{headertitletrue:scroll<46,headertitlefalse:scroll>46"}-->
      <div class="headertitletrue" >
        <Menu mode="horizontal" :theme="theme1" active-name="1">
          <MenuItem name="1">
            <img class="logo2" src="../../../static/img/logo1.png"/>
            <span class="logo2-title">放心平台</span>
          </MenuItem>
          <nuxt-link to="/"><MenuItem name="2">首页</MenuItem></nuxt-link>
          <nuxt-link to="/helpcenter/apidocuments/"><MenuItem name="3">
            帮助中心
          </MenuItem></nuxt-link>
          <MenuItem name="4">
            控制台
          </MenuItem>
          <nuxt-link to="/register"><Button class="button-left left-button-color2">注册</Button></nuxt-link>
          <nuxt-link to="/login"><Button class="button-left left-button-color1" >登录</Button></nuxt-link>
        </Menu>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
    export default {
      components: {},
      data (){
        return {
          theme1: 'dark',
          scroll: ''
        }
      },
      created(){
        this.dropvisible = false;
      },
      computed: {
        ...mapGetters({
          isMobile:'app/mobileLayout'
        }),
      },
      methods:{
        cancellogin(){
          this.loginmodal = false
        },
        cancelregister(){
          this.registermodal = false
        },
       menu() {
         this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
         // console.log(this.scroll)
       }
      },
      mounted() {
        window.addEventListener('scroll', this.menu)
      },
    }
</script>


<style scoped lang="stylus" type="text/stylus">
  #header{
    position :fixed;
    width :100%
    height :4rem;
    margin : 0 auto;
    z-index :10000000000
    .headertitlefalse{
      width :100%
      margin :0 auto;
      background-color :white
    }
    .headertitletrue{
      width :1200px
      margin :0 auto;
      .ivu-menu-dark{
        background :none;
        .logo2{
          float :left
          width :5rem
          height:2rem;
          margin-top :1rem
          margin-right :1rem
        }
        .logo2-title{
          float :right;
          font-size:0.88rem;
          font-family:MicrosoftYaHei;
          color:rgba(255,255,255,1);
        }
        li{
          font-family:MicrosoftYaHei;
          color:rgba(255,255,255,1);
          padding :0 2rem;
        }
        .button-left{
          float :right;
          width :5rem;
          height :2rem;
          margin :1rem 1.5rem 3rem
        }
        .left-button-color1{
          background:rgba(255,255,255,0.05rem);
          font-size:0.88rem;
          font-family:MicrosoftYaHei;
          color:rgba(255,255,255,1);
        }
        .left-button-color2{
          background:rgba(255,127,0,1);
          border-color :rgba(255,127,0,1)
          font-size:0.88rem;
          font-family:MicrosoftYaHei;
          color:rgba(255,255,255,1);
        }
      }
    }
  }
  #header2{
     position :fixed;
     width :100%
     height :3.8rem;
     margin : 0 auto;
     background-color :white
    border-bottom:1px solid #ddd;
     z-index :10000000000
     .headertitlefalse{
       width :100%
       margin :0 auto;
       background-color :white
     }
     .headertitletrue{
       width :1200px
       margin :0 auto;
       .ivu-menu-dark{
         background :white;
         .logo2{
           float :left
           width :5rem
           height:2rem;
           margin-top :1rem
           margin-right :1rem
         }
         .logo2-title{
           float :right;
           font-size:0.88rem;
           font-family:MicrosoftYaHei;
           color:#FED02F;
         }
         li{
           font-size:0.88rem;
           font-family:MicrosoftYaHei;
           color:rgba(51,51,51,1);
           padding :0 2rem;
           a{
             font-size:0.88rem;
             font-family:MicrosoftYaHei;
             color:rgba(255,255,255,1);
           }
         }
         .button-left{
           float :right;
           width :5rem;
           margin :1rem 1.5rem 3rem
           border-color :rgba(255,127,0,1)
         }
         .left-button-color1{
           background:rgba(255,255,255,0.05rem);
           font-size:0.88rem;
           font-family:MicrosoftYaHei;
           color:#FF9933;
         }
         .left-button-color2{
           background:rgba(255,127,0,1);
           border-color :rgba(255,127,0,1)
           font-size:0.88rem;
           font-family:MicrosoftYaHei;
           color:rgba(255,255,255,1);
         }
       }
     }
   }

  /*@media only screen and (max-width: 500px) {
    #header {
      background-color:rebeccapurple;
    }
  }*/
</style>
