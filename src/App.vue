<script setup lang="ts">
</script>

<template>
  <div>
    <router-view />
  </div>
</template>

<style scoped>
/* 添加全局背景样式 */
:global(body) {
  margin: 0;
  height: 100vh;
  background-image: url('@/assets/images/CutImages_2x/背景BG2x.png');

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
