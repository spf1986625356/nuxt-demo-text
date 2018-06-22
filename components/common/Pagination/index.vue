<template>
  <div  v-if="internalPageCount>1">
      <!--分页组件-->
    <div class="page"   >
      <div class="pagelist">
         <span class="jump" @click="jumpPage(1)" > 首页 </span>
        <span class="jump"  @click="jumpPage(--internalCurrentPage)"> ＜ </span>
        <span v-show="currentPage>5" class="jump" @click="jumpPage(1)">1</span>
        <span class="ellipsis"  v-show="efont" >...</span>
        <span class="jump" v-for="(num,index) in indexs"
              :key="index"
              :style="{
          backgroundColor: internalCurrentPage===num ?background: '',
          border: internalCurrentPage===num ? 'none' : '',
          color: internalCurrentPage === num ? '#FFFFFF': '#999999'}"
              @click="jumpPage(num)">{{num}}
        </span>
        <span class="ellipsis"  v-show="ebehind">...</span>
        <span class="jump" @click="jumpPage(++internalCurrentPage)"> ＞ </span>
        <span class="jump" @click=" jumpPage(internalPageCount) "> 末页 </span>
        <div style="display: inline" v-show="showElevator">
          <input class="jump inp" type="text" v-model="internalChangePage" @keypress="inpEnter($event)">
          <span :style="{ cursor: 'pointer' }" @click="jumpPage(internalChangePage)">跳转</span>
        </div>
        <span v-show="showPage" class=" current" >当前 {{internalCurrentPage }} / {{internalPageCount}}  页</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        internalCurrentPage: 1,
        internalChangePage: null,
      }
    },
    props: {
      currentPage: {
        type: Number,
        default: 1,
      },
      background: {
        type: String,
        default: '#FD9827'
      },
      changePage: Function,
      pageSize: {
        type: Number,
        default: 10
      },
      afterJump: Function,
      pageCount: Number,
      showElevator:{
        type: Boolean,
        default: false,
      },
      showPage:{
        type: Boolean,
        default: false,
      },
      total: {
        type: Number,
        required: true
      }
    },
    watch: {
      currentPage: {
        immediate: true,
        handler: function handler(val) {
          this.internalCurrentPage = this.checkPage(val);
        }
      },
      internalCurrentPage: {
        handler: function handler(val) {
          this.afterJump(val)
        }
      }
    },
    computed:{
      internalPageCount: function internalPageCount() {
        if (typeof this.total === 'number') {
          return Math.ceil(this.total / this.pageSize);
        } else if (typeof this.pageCount === 'number') {
          return this.pageCount;
        }
        return null;
      },
      efont: function() {
        if (this.internalPageCount <= 3) return false;
        return this.internalCurrentPage > 2
      },
      ebehind: function() {
        if (this.internalPageCount <= 3) return false;
        let nowAy = this.indexs;
        return nowAy[nowAy.length - 1] != this.internalPageCount;
      },

      indexs: function() {
        let left = 1,
          right = this.internalPageCount,
          ar = [];
        if (this.internalPageCount >= 3) {
          if (this.internalCurrentPage > 2 && this.internalCurrentPage < this.internalPageCount - 4) {
            left = Number(this.internalCurrentPage) - 2;
            right = Number(this.internalCurrentPage) + 2;
          } else {
            if (this.internalCurrentPage <= 3) {
              left = 1;
              right = 5;
            } else {
              right = this.internalPageCount;

              left = this.internalPageCount -4;
            }
          }
        }
        while (left <= right) {
          ar.push(left);
          left++;
        }
        return ar;
      },
    },
    methods: {
      inpEnter($event) {
        if ($event.keyCode === 13) {
          this.jumpPage(this.internalChangePage)
        }
      },
      jumpPage:  function(page) {
        this.internalCurrentPage = this.checkPage(parseInt(page))
      },
      checkPage(val) {
        let res = 1
        if (val <= 0) {
          res = 1
        } else if (val >= this.internalPageCount) {
          res = this.internalPageCount
        } else
          res = val
        return res
      }
    }
  }
</script>
<style lang="less" scoped>
  @std-len: 2rem;
  .juxing {
    width: 2.5rem;
    height: @std-len;
    border-radius: 4px;
  }
  .page {
    height: 40px;
    text-align: center;
    color: #888;
    margin: 20px auto 0;
    /*background: #f2f2f2;*/
  }
  .pagelist span {
    width: @std-len;
    height: @std-len;
    background: #fff;
    display: inline-block;
    line-height: @std-len;
    font-size: 14px;
  }
  .pagelist {
    font-size: 0;
    height: 50px;
    /*background: #fff;*/
    line-height: 50px;
    .ellipsis{
      margin-left: 0.62rem;
      border: 1px solid #ccc;
      .juxing();
    }
    .current{
      width: 120px;
    }
    .jump {
      margin-left: 0.62rem;
      border: 1px solid #ccc;
      cursor: pointer;
      .juxing();
      &.inp {
        cursor: default;
        width: 1.95rem;
        height: 1.95rem;
        text-align: center;
      }
    }
  }
  .pagelist .bgprimary {
    cursor: default;
    color: #fff;
    background: #FD9827;
    border-color: #337ab7;
  }
  .bgprimary {
    cursor: default;
    color: #fff;
    background: #337ab7;
    border-color: #337ab7;
  }
</style>
