<template>
  <div id="apidocuments">
    <helptitle :title="sing"></helptitle>
    <div class="apidocuments-title">
      <span class="apidocuments-span">
        印章创建查询相关操作接口。
      </span>
    </div>
    <div class="content-top1">
      <span>描述: 平台运营方的印章在契约锁云平台上维护，您可以调用该接口获取指定的印章。</span><br>
      <span>Request URL：/seal</span><br>
      <span>Request Method：GET</span><br>
    </div>
    <div class="content-table">
      <span class="content-line-height">参数:</span>
      <table cellpadding="0" cellspacing="0">
        <tbody>
        <tr>
          <td class="table-td">名称</td>
          <td class="table-td">类型</td>
          <td class="table-td">是否必须</td>
          <td class="table-td table-right">描述</td>
        </tr>
        <tr>
          <td class="table-td table-bottom">sealId</td>
          <td class="table-td table-bottom">String</td>
          <td class="table-td table-bottom">是</td>
          <td class="table-td table-bottom table-right">印章在放心签的唯一标识</td>
        </tr>
        </tbody>
      </table>
      <span class="content-line-height">请求示例：</span>
      <div class="content-get">
        <div style="margin: 1rem">
          <span>GET /seal?sealId=2249772556456296448 HTTP/1.1</span><br>
          <span>Host: [host]</span><br>
          <span>x-qys-open-timestamp: 1482118678232</span><br>
          <span>x-qys-open-signature: 7e9c869a5d1492505036ec03ce90f6de</span><br>
          <span>x-qys-open-accesstoken:: 7EswyQzhBe</span><br>
          <span>Cache-Control: no-cache</span><br>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import helptitle from '../helptitle.vue'
  export default {
    components:{ helptitle },
    data(){
      return{
        sing:'远程签接口'
      }
    }
  }
</script>
<style lang="stylus" scoped>
  #apidocuments{
    .apidocuments-title{
      height :3.5rem;
      border-bottom :0.06rem solid #EAEAEA
      .apidocuments-span{
        font-size:0.88rem;
        font-family:MicrosoftYaHei;
        color:rgba(51,51,51,1);
        line-height: 3.5rem;
      }

    }
    .content-top1{
      margin-top :1rem;
      height :4.5rem;
      line-height :1.5rem;
      font-size:0.88rem;
      font-family:MicrosoftYaHei Regular;
      color:rgba(51,51,51,1);
    }
    .content-line-height{
      line-height :3.5rem;
    }
    .content-table {
      height :9rem;
      font-size:0.88rem;
      font-family:MicrosoftYaHei;
      color:rgba(51,51,51,1);
      .table-td{
        border-top:1px solid #EAEAEA
        border-left:1px solid #EAEAEA
        padding :0.5rem 1rem;
      }
      .table-bottom{
        border-bottom :1px solid #EAEAEA
      }
      .table-right{
        border-right :1px solid #EAEAEA
      }
      .content-get{
        width:27.31rem;
        background:rgba(247,247,247,1);
        font-size:0.88rem;
        font-family:MicrosoftYaHei;
        color:rgba(51,51,51,1);
        line-height 1.5rem;
        overflow :hidden;
      }
    }
  }
</style>
