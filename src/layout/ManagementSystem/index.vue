<!-- layout/index.vue -->
<template>
  <div class="layout-container">
    <!-- 侧边菜单 -->
    <el-aside  class="sidebar">
      <div class="logo">天球数据库</div>
      <el-menu v-model="activeMenu" class="el-menu-vertical-demo" background-color="#0a192f" text-color="#fff"
        active-text-color="#409EFF" :collapse="isCollapse" @select="handleMenuSelect">
        <el-menu-item index="/home">
          <i class="el-icon-menu"></i>
          <template #title>首页</template>
        </el-menu-item>
        <el-menu-item index="/data-upload">
          <i class="el-icon-upload"></i>
          <template #title>数据上传</template>
        </el-menu-item>
        <el-menu-item index="/data-usege-status-statistics">
          <i class="el-icon-data-line"></i>
          <template #title>数据统计</template>
        </el-menu-item>
        <el-menu-item index="/data-retrieval">
          <i class="el-icon-search"></i>
          <template #title>数据检索</template>
        </el-menu-item>
        <el-menu-item index="/data-inspection">
          <i class="el-icon-check"></i>
          <template #title>数据监控</template>
        </el-menu-item>
        <el-menu-item index="/user-management">
          <i class="el-icon-user"></i>
          <template #title>用户管理</template>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <!-- 主内容区 -->
    <main class="main-content" >
      <header-component></header-component>
      <router-view v-slot="{ Component }">
        <transition name="slide-fade" mode="out-in">
          <component :is="Component" :key="$route.path"  />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<!-- 核心功能脚本 -->
<script setup lang="ts">
import { ref, watch} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import HeaderComponent from './header.vue';

// 路由相关
const router = useRouter()
const route = useRoute()
const activeMenu = ref(route.path)

// 侧边栏状态
const isCollapse = ref(false)

// 路由变化时同步激活状态
watch(
  () => route.path,
  (newPath) => {
    activeMenu.value = newPath
  }
)

// 导航方法
const handleMenuSelect = (key: string) => {
  if (key === activeMenu.value) return
  router.push(key).catch(() => { })
}

// 清理事件监听器
// onUnmounted(() => {
//   console.log('组件卸载，清理资源');
// });
</script>

<!-- 组件配置 -->
<script lang="ts">
export default {
  name: 'LayoutContainer',
  components: {
    // 可在此添加子组件
  }
}
</script>

<style lang="scss" scoped>
@import './index.scss';

.no-scrollbar {
  overflow-x: hidden; /* 禁用横向滚动条 */
}
</style>
