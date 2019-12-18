<template>
  <el-upload
    class="avatar-uploader"
    :action="action"
    :data="dataObj"
    :headers="headers"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :on-error="handleAvatarError"
    :before-upload="beforeAvatarUpload">
    <img v-if="imageUrl" :src="imageUrl" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
</template>
<script>
export default {
  name: 'SingleFileUpload',
  props: {
    action: {
      type: String,
      require: true
    },
    dataObj: {
      type: Object,
      default: () => {}
    },
    headers: {
      type: Object,
      default: () => {}
    },
  },
  data() {
    return {
      imageUrl: ''
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.$message({
        message: `上传成功!`,
        type: 'success'
      });
    },
    handleAvatarError(err, file) {
      this.$message.error(`上传失败!`);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/vnd.microsoft.icon' || file.type === 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG、ICO、PNG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  }
}
</script>
<style lang="scss" scoped>
.avatar-uploader{
  border: 1px dashed #d9d9d9;
  border-radius: 3px;
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 48px;
  height: 48px;
  &::before{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%)
  }
}
.avatar {
  width: 100%;
  height: 100%;
  display: block;
}
</style>