<template>
  <el-upload
    class="avatar-uploader"
    :headers="{ Authorization:'Bearer '+ user.token}"
    :action="upurl"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload">
    <img v-if="image" :src="image" class="avatar" >
    <i v-else class="avatar-uploader-icon el-icon-plus"></i>
    <div class="imgs" v-if="toUpdate">修改头像</div>
  </el-upload>
</template>
<style scoped lang="less">
  .avatar-uploader .el-upload {
  // border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin-top: 42px;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .el-upload{
    position: relative;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    vertical-align:middle;
    border-radius: 50%;
  }
  .imgs{
    background-color: black;
    border-radius: 50%;
    top: 0px;
    width: 4.81rem;
    height: 4.81rem;
    position: absolute;
    z-index: 8;
    text-align: center;
    line-height: 4.81rem;
    color: white;
    opacity: 0;
  &:hover {
     opacity: 0.2;
   }
  }
</style>

<script>
  import consts from '@/common/consts'
  export default {
    data () {
      return {
        user : this.$store.state.login.userInfo,
        upurl: consts.baseUrl + 'company-api/api/employee/admincheck/uploadimg' ,
        image: ''
      };
    },
    props:['imageUrl','toUpdate'],
    created(){
      this.image = this.imageUrl;
    },
    methods: {
      handleAvatarSuccess (res, file) {
        if (res.status == 20) {
          this.image = URL.createObjectURL(file.raw);
          this.$emit('resUrl', res);
          //图片上传成功后，触发确认按钮事件
          this.$emit('isUpload')
        }
      },
      beforeAvatarUpload (file) {
        const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!')
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>
