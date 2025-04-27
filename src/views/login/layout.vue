<template>
  <div>
  <!-- <div class="extect-button">
    <el-button type="Info" :icon="House" @click="goToManagement">管理平台</el-button>
  </div> -->
  <div class="layout-container">

    <router-view  v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </transition>
    </router-view>
  </div>
</div>
</template>


<script lang="ts">
export default {
  name: 'LayoutContainer',
};
</script>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
// import { House } from '@element-plus/icons-vue';
// import router from '@/router';

const layoutStyle = ref({});


// const goToManagement = () => {
//   router.push('/management-platform')
// }

onMounted(() => {
  const updateLayoutStyle = () => {
    layoutStyle.value = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: `${window.innerHeight}px`,
    };
  };

  updateLayoutStyle();
  window.addEventListener('resize', updateLayoutStyle);

  // Cleanup on unmount
  onUnmounted(() => {
    window.removeEventListener('resize', updateLayoutStyle);
  });
});
</script>

<style scoped>
.layout-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.extect-button {
  z-index: 1000; /*层级*/
  position: fixed;
  height: 100px;
  /* 高度 */
  width: 100%;
  /* 宽度 */
  padding: 10px;
  /* 内边距 */
  display: flex;
  /* 弹性布局 */
  justify-content: flex-end;
  /* 右对齐 */
  align-items: flex-start;
  /* 上对齐 */
}
</style>
