<!-- layout/index.vue -->
<template>
  <el-container class="layout-container">
    <!-- 顶部菜单 -->
    <el-header class="header">
      <!--图标-->
      <div class="logo">
        <div class="image-icon">
          <!-- <div class="icon">
              <img src="@/assets/images/cds.png" alt="Logo" style="width: 100%; height: 100%; object-fit: contain;" />

            </div> -->
          <svg class="icon_my" aria-hidden="true">
            <use xlink:href="#icon-cdsyunshujukuCassandraban"></use>
          </svg>
        </div>
        <div class="loge-text">天球数据库</div>
      </div>
      <!--导航菜单栏-->
      <el-menu :default-active="activeMenu" class="el-menu-vertical-demo" text-color="#ffffff"
        active-text-color="rgba(227, 232, 240, 0.9)" mode="horizontal" @select="handleMenuSelect">
        <el-menu-item index="/home">
          <svg t="1749524616357" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="7151" width="200" height="200">
            <path
              d="M436.992 140.288a153.7024 153.7024 0 0 1 146.5856 0l9.6256 5.632 352.6144 226.2528a51.2 51.2 0 0 1-55.296 86.1696L870.4 445.44V870.4a51.2 51.2 0 0 1-51.2 51.2H204.8a51.2 51.2 0 0 1-51.2-51.2V443.1872l-23.552 15.1552-4.5568 2.6112a51.2 51.2 0 0 1-54.9888-85.76l4.2496-3.072 352.6144-226.1504 9.6256-5.7344zM409.6 716.8a51.2 51.2 0 1 0 0 102.4h204.8a51.2 51.2 0 1 0 0-102.4H409.6z"
              p-id="7152" fill="#ffffff"></path>
          </svg><template #title>首页</template>
        </el-menu-item>
        <el-menu-item index="/data-upload">
          <svg t="1749524713293" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="8308" width="200" height="200">
            <path
              d="M850.96 558.536l-0.128 325.92c0 13.656-10.496 24.68-23.416 24.68L196.584 909.136c-12.928 0-23.384-11.024-23.384-24.68l-0.152-325.92 1.24 0-1.088-0.016c0-4.504 1.176-8.92 3.424-12.752L285.6 360.544c4.264-7.256 11.84-11.664 19.96-11.664l53.752 0 65.728 0 23.56 0 0 48.792L425.04 397.672l-65.728 0-40.608 0-94.64 160.864 159.344 0c12.296 0 20.704 12.872 23.792 25.432l11.08 44.904c3.048 12.528 15.664 22.784 27.96 22.784l131.408 0c12.296 0 24.912-10.256 28.024-22.784l11.08-44.904c3.112-12.56 11.488-25.432 23.792-25.432l159.44 0L706.2 397.672 575.384 397.672 575.384 348.88l144.016 0c8.192 0 15.752 4.456 20.024 11.72l107.992 185.248c2.272 3.816 3.424 8.2 3.424 12.664l-1.088 0.016L850.96 558.536 850.96 558.536zM349.072 306.536c14.888 14.96 52.496 11.984 67.608-2.92l62.904-62.92 0 272.296c0 20.8 10.28 31.472 31.48 31.472 21.176 0 31.456-10.624 31.456-31.472L542.52 240.696l60.536 66.088c15.072 14.872 39.328 14.752 54.248-0.256 14.888-15.024 14.824-39.2-0.216-54.072L535.536 132.44c-6.824-10.544-18.688-17.584-32.2-17.584-13.296 0-25.032 6.768-31.92 17.056L349.32 252.464C334.248 267.296 334.16 291.512 349.072 306.536z"
              fill="#ffffff" p-id="8309"></path>
          </svg>
          <template #title>数据上传</template>
        </el-menu-item>
        <el-menu-item index="/data-usege-status-statistics">
          <svg t="1749524768728" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="9463" width="200" height="200">
            <path
              d="M161.933635 982.016249A88.059387 88.059387 0 0 1 73.142857 894.932048V87.087126A88.059387 88.059387 0 0 1 161.933635 0.002926h396.267243v71.042374H161.933635a16.090586 16.090586 0 0 0-15.846789 16.041826v807.844922a16.090586 16.090586 0 0 0 15.846789 16.041827v71.042374zM774.984951 112.978341H238.92465a48.759351 48.759351 0 0 0-50.856003 45.492474v819.986001A48.759351 48.759351 0 0 0 238.92465 1023.94929h661.030517A48.759351 48.759351 0 0 0 950.81117 978.456816V286.51287zM442.39742 892.299043a17.9922 17.9922 0 0 1-18.235997 17.748404H358.872652a17.9922 17.9922 0 0 1-18.235997-17.748404v-101.126893a17.9922 17.9922 0 0 1 18.235997-17.748404H424.210182a17.9922 17.9922 0 0 1 18.235997 17.748404V892.299043z m178.069149 3.120599a15.066639 15.066639 0 0 1-15.212918 14.627805H533.723684a15.115399 15.115399 0 0 1-15.212918-14.627805V423.770443a15.115399 15.115399 0 0 1 15.212918-14.627806h71.529967a15.115399 15.115399 0 0 1 15.212918 14.627806v471.600439z m177.92287 3.900748a11.068373 11.068373 0 0 1-11.21465 10.727057h-79.380223a11.068373 11.068373 0 0 1-11.214651-10.922095v-251.451971a11.068373 11.068373 0 0 1 11.214651-10.922095h79.331463a11.117132 11.117132 0 0 1 11.214651 10.922095v251.647009z"
              fill="#ffffff" p-id="9464"></path>
          </svg>
          <template #title>数据统计</template>
        </el-menu-item>
        <el-menu-item index="/data-retrieval">
          <svg t="1749524831632" class="icon" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="10533" width="200" height="200">
            <path d="M1026.915065 930.601895l-93.325591 93.398105-280.049287-280.049287 93.325591-93.325591z m0 0"
              fill="#ffffff" p-id="10534"></path>
            <path
              d="M789.968133 136.529466A462.050867 462.050867 0 1 0 136.529466 789.968133c88.641183 88.641183 210.029714 135.31123 326.719334 130.684833 116.631609 4.611894 238.005637-42.058153 326.719333-130.684833a459.188013 459.188013 0 0 0 0-653.438667zM600.242356 608.653986L352.795389 407.38397 235.96074 606.40605l-75.037545-44.045038L329.068789 275.915986l251.580268 204.634668 111.106038-168.029573 72.514057 48.004306z"
              fill="#ffffff" p-id="10535"></path>
          </svg>
          <template #title>数据检索</template>
        </el-menu-item>
        <el-menu-item index="/data-inspection">
          <svg t="1749525547659" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="5756" width="200" height="200">
            <path
              d="M832 128H192a64.19 64.19 0 0 0-64 64v640a64.19 64.19 0 0 0 64 64h640a64.19 64.19 0 0 0 64-64V192a64.19 64.19 0 0 0-64-64z m0 703.89l-0.11 0.11H192.11l-0.11-0.11V768h640zM832 544H720L605.6 696.54 442.18 435.07 333.25 544H192v-64h114.75l147.07-147.07L610.4 583.46 688 480h144z m0-288H192v-63.89l0.11-0.11h639.78l0.11 0.11z"
              p-id="5757" fill="#ffffff"></path>
          </svg>
          <template #title>系统监控</template>
        </el-menu-item>
        <el-menu-item index="/user-management">
          <svg t="1749524968830" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="2583" width="200" height="200">
            <path
              d="M195.3 664.4c68.3-25.4 105.1-37.9 118.3-42.1 12.3-3.3 23.9-8.5 34.5-15.6 6-3.6 11.5-8.1 16.3-13.3v-2.3c-2.2-5.6-3.5-11.5-3.8-17.4-0.4-3.1-0.4-6.3 0-9.5l-15.2-14c-10.6-9.8-19-21.7-24.7-34.9-3.8-9.1-7.6-17.8-10.6-27.3v-6.8c-7.2-6.5-13.7-13.7-19.3-21.6-8.4-12.3-14.6-26.1-18.2-40.6-6-17.9-8.2-36.9-6.4-55.8 1.2-11.3 3.8-22.3 7.6-33 1.8-5.3 3.9-10.5 6.4-15.6 0.1-20.2 1.5-40.3 4.2-60.3 2.4-20.7 6.2-41.3 11.4-61.4h-7.6c-9.6 0.1-19.1 1.1-28.4 3-9.9 1.8-19.6 4.7-28.8 8.7-10.1 4.9-19.6 10.9-28.4 17.8-10 8.1-18.6 17.8-25.4 28.8-8.3 13-14.5 27.2-18.6 42.1-4 14.5-7 29.4-8.7 44.4-1.9 16.4-2.7 32.8-2.3 49.3-6.2 8.4-9.8 18.4-10.6 28.8-1.1 6.5-1.1 13.2 0 19.7 1.7 5.9 4.2 11.5 7.6 16.7 2.3 3.2 4.8 6.3 7.6 9.1 2.7 2 5.6 3.5 8.7 4.6l5.7 19.7c2.3 5.7 4.2 11 6.8 16.7 1.9 4.7 4.8 8.9 8.3 12.5 6.4 5.4 12.5 11.3 18.2 17.4 6 6.5 9.2 15.1 9.1 23.9v17.8c0.1 5.6-0.8 11.1-2.7 16.3-2.2 5.7-5.4 11-9.5 15.6-5.8 6.3-12.4 11.8-19.7 16.3-11.7 7.5-24.5 13.1-37.9 16.7-9.9 2.7-44 15.2-67.1 23.5v160.8h3.4c0-9.5 2.3-20.1 4.2-34.1v-3.8c3.6-32.5 19.2-62.5 43.6-84.2 20-15.8 42.8-27.8 67.1-35.3h4.9v-1.3zM922 639c-11.1-3.1-21.9-6.8-32.6-11-9.4-4-18.1-9.5-25.8-16.3-5.9-5.3-10.7-11.7-14-19-2.6-6.4-4.2-13.2-4.6-20.1-0.8-11.1 0.8-22.2 4.6-32.6 1.5-3.5 3.5-6.7 6.1-9.5 2.6-2.8 5.5-5.2 8.7-7.2l9.9-8.7c3.8-3.6 6.7-8 8.7-12.9 2.7-5.3 4.9-10.7 6.8-16.3 0-6.4 3.8-13.3 5.3-20.1 4.4-1.4 8.4-3.8 11.8-6.8 3.4-3.8 6.2-8.2 8.3-12.9 3.1-6.8 5-14.1 5.7-21.6 0.8-5.8 0.8-11.7 0-17.4-1.1-3.9-2.5-7.7-4.2-11.4-0.9-3.2-2.9-6-5.7-8 0.3-17.2-0.7-34.5-3-51.6-2.3-15.8-5.7-31.4-10.2-46.7-5.8-16.3-14.1-31.5-24.7-45.1-4.9-6.8-10.8-12.8-17.4-17.8-16.2-12.5-34.6-21.9-54.2-27.7-10.7-3-21.8-4.6-33-4.6h-15.2c5.4 18.8 9.3 37.9 11.8 57.3 2.7 19.1 4.2 38.4 4.6 57.7 6.6 11.8 11.2 24.6 13.7 37.9 2.1 14.1 2.1 28.4 0 42.5-1.9 16.1-6.1 31.8-12.5 46.7-6.9 14.6-16.8 27.6-29.2 37.9L739 482v2.3c-3.5 9.1-7.3 18.2-11.4 27.3-7.5 18.2-19.7 34.2-35.3 46.3v16.7c0 7.4-1.6 14.6-4.9 21.2 6.2 5 13.1 9.1 20.5 12.1 12.3 5.3 25 9.6 37.9 12.9 13 4 25.7 8.9 37.9 14.8l37.9 17.4 21.6 9.5c18.9 7.6 36.5 17.9 52.3 30.7 18.8 16.7 32.7 38.2 40.2 62.2 4.3 14.7 7.1 29.8 8.3 45.1 1.6 6.2 2.4 12.6 2.3 19h2.3V654.2c-12.4-5.7-25-10.8-37.9-15.2H922z"
              fill="#ffffff" p-id="2584"></path>
            <path
              d="M905.7 778.9c-4.7-14.7-13.3-27.8-25-37.9a174.2 174.2 0 0 0-40.2-23.5c-14.8-6.1-80-37.9-96.3-40.6-15.3-4.3-30.4-9.5-45.1-15.6-12.9-5.4-24.9-13-35.3-22.4-8.1-7.3-14.6-16.2-19-26.2-3.8-8.6-6-17.9-6.4-27.3-0.9-15.5 1.6-31 7.2-45.5 2-4.8 4.8-9.1 8.3-12.9 3.4-3.7 7.3-7 11.4-9.9 5-3.6 9.7-7.7 14-12.1 5-5 9.1-10.7 12.1-17.1 3.4-7.6 6.4-15.2 9.5-22.8 3-7.6 4.9-18.2 7.2-27.3 5.1-2.3 9.6-5.6 13.3-9.9 5-5.1 9.1-11 12.1-17.4 4.1-9.4 6.6-19.4 7.6-29.6 1.3-7.9 1.3-16 0-23.9-1.1-5.5-2.9-10.9-5.3-15.9-1.4-4.5-4.2-8.3-8-11 0.5-23.7-0.9-47.4-4.2-70.9-2.7-21.8-7.6-43.2-14.4-64.1-6.6-22.5-17-43.6-30.7-62.6-6.9-9.2-15.1-17.4-24.3-24.3-10.3-8.6-21.4-16-33.4-22-13.2-6.3-26.9-11.5-41-15.6-14.8-4.1-30.1-6.2-45.5-6.1-12.7 0.2-25.4 1.5-37.9 3.8-13.1 2.5-25.8 6.6-37.9 12.1-31.9 13.2-59.2 35.5-78.5 64.1-11.3 17.8-19.8 37.2-25 57.7C344.7 244 340.3 287 342.1 330c-4.2 5.6-7.6 11.9-9.9 18.6-2.7 6.2-4.7 12.7-6.1 19.3-0.8 9.1 0.3 18.2 3 26.9 1.9 8.2 5.2 16.1 9.9 23.1 3.2 4.5 6.7 8.6 10.6 12.5 3.5 2.8 7.5 4.8 11.8 6.1l8.3 27.7c2.7 7.6 5.7 15.2 8.7 22.4 2.7 6.6 6.7 12.5 11.8 17.4 8.9 7.6 17.2 15.6 25 23.9 8.1 9 12.6 20.6 12.9 32.6v25c-0.1 7.6-1.4 15.2-3.8 22.4-3.2 7.8-7.7 14.9-13.3 21.2-7.8 8.5-16.7 15.9-26.6 22a155.53 155.53 0 0 1-49.7 23.1c-19.3 5.3-102 36-119.9 42.9-17 5.8-32.8 14.7-46.7 26.2-13.7 13.2-22.4 30.8-24.7 49.7-5 22.4-6.2 45.5-3.4 68.3-0.3 15.5 4.4 30.6 13.3 43.2 13.5 6.9 28 11.8 42.9 14.8 113.7 23.5 229.5 35.4 345.5 35.7 113.8 1.4 227.2-14.2 336.4-46.3 8.7-2.4 16.8-6.8 23.5-12.9 4.4-8.9 7.3-18.5 8.3-28.4 1.9-13.2 2.7-26.5 2.7-39.8 0-13.7 0-2.7-1.9-16.3-0.8-11.6-2.9-23-6.1-34.1l1.1 1.7z m-322 85c-4.4 5.7-9.2 11-14.4 15.9-5.1 5.1-10.7 9.6-16.7 13.7-3.7 3.1-8.1 5.1-12.9 5.7-4.4-0.8-8.6-2.6-12.1-5.3-6-4.1-11.7-8.7-17.1-13.7-5.4-5-10.4-10.4-14.8-16.3-3.3-3.3-5.4-7.6-6.1-12.1 0.2-7.4 1.1-14.8 2.7-22 0-9.5 4.2-20.1 6.4-30.7s4.9-21.2 8-31.5 4.2-15.6 6.4-23.1c-5.6-5-10.6-10.8-14.8-17.1-2.9-4.1-4.5-9-4.6-14 0.1-5.1 1.6-10 4.2-14.4 2.5-4.4 5.6-8.5 9.1-12.1 4.3-4.7 9-9 14-12.9h41l14 12.9c4.2 3.6 7.7 8 10.2 12.9 3 4.2 4.6 9.2 4.6 14.4-0.2 6.2-2.2 12.3-5.7 17.4-4.6 5.9-9.8 11.2-15.6 15.9 0 6.8 3.8 14.8 5.7 25.4l6.8 31.5c0 10.2 4.2 20.1 5.7 29.2 1.2 6.1 2 12.3 2.3 18.6-0.7 4.7-2.8 9.1-6.1 12.5l-0.2-0.8z"
              fill="#ffffff" p-id="2585"></path>
          </svg>
          <template #title>用户管理</template>
        </el-menu-item>
        <el-menu-item index="/file-directories">
          <svg t="1749525494495" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="4439" width="200" height="200">
            <path d="M128 128h259.004a96 96 0 0 1 56.944 18.712L652 300H64V192c0-35.348 28.652-64 64-64z" fill="#ffffff"
              p-id="4440"></path>
            <path
              d="M128 232h768c35.348 0 64 28.652 64 64v536c0 35.348-28.652 64-64 64H128c-35.348 0-64-28.652-64-64V296c0-35.348 28.652-64 64-64z"
              fill="#ffffff" p-id="4441"></path>
            <path
              d="M128 248h768c35.348 0 64 28.652 64 64v520c0 35.348-28.652 64-64 64H128c-35.348 0-64-28.652-64-64V312c0-35.348 28.652-64 64-64z"
              fill="#ffffff" p-id="4442"></path>
          </svg>
          <template #title>
            文件目录列表
          </template>
        </el-menu-item>

      </el-menu>

      <el-dropdown class="user-info">
        <template #default>
          <span>{{ ShowName }}</span>
        </template>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="Info" @click="viewUserInfo">用户信息</el-dropdown-item>
            <el-dropdown-item command="LoginOut" @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

    </el-header>

    <!-- 主内容区 -->
    <main class="main-content">

      <router-view v-slot="{ Component }">
        <transition name="slide-fade" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
    </main>
  </el-container>
</template>

<!-- 核心功能脚本 -->
<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import '@/assets/iconfont/iconfont.js'
import { LoginStore } from '@/stores/LoginSystem/login';

// 路由相关
const router = useRouter()
const route = useRoute()
const activeMenu = ref(route.path)
const userinfo = LoginStore(); // 获取用户信息的 store
const ShowName = ref('未登录'); // 显示的用户名
// 侧边栏状态


// 路由变化时同步激活状态
watch(
  () => route.path,
  (newPath) => {
    activeMenu.value = newPath
  }
)


watch(() => userinfo.$state.loginResponseDate?.username, (newUserName) => {
  console.log('用户名变化:', newUserName);
  if (newUserName != undefined) {
    ShowName.value = newUserName;
  } else {
    ShowName.value = '未登录';
  }
});

const logout = () => {
  userinfo.islogin = false; // 更新登录状态
  userinfo.loginResponseDate = null; // 清除登录信息
  console.log('退出登录');
  router.push('/');
};

const viewUserInfo = () => {
  console.log('查看用户信息');
  // 这里可以添加查看用户信息的逻辑
  router.push('/CurrentUseinfo');
};

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
@use './index.scss';
@use '@/styles/icon.scss';

.no-scrollbar {
  overflow-x: hidden;
  /* 禁用横向滚动条 */
}
</style>
