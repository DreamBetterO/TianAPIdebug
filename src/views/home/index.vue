<template>
  <div class="home-container">
    <img src="/images/home.jpg" alt="Home Image" class="home-image" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'HomePage',
}
// 此页面用于展示图片
</script>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.home-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>
