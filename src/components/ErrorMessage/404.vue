<template>
  <div class="not-container">
    <img src="@/assets/images/404.png" class="not-img" alt="404" />
    <div class="not-detail">
      <h2>404</h2>
      <h4>抱歉，您访问的页面不存在~🤷‍♂️🤷‍♀️</h4>
      <el-button type="primary"  @click = 'returnToLogin()'>返回首页</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
const returnToLogin = () => {
  router.push('/');
};

</script>

<script lang="ts">
export default {
  name: "NotFound",
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
