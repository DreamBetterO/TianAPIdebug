<template>
  <el-header class="header">
    <div class="header-right">
      <!-- 全屏功能 -->
      <el-tooltip content="全屏" placement="bottom">
        <el-icon class="dropdown-icon"><FullScreen  @click = "toggleFullScreen"/></el-icon>
      </el-tooltip>

      <!-- 用户设置 -->
      <el-dropdown>
        <template #default>
          <span>{{ ShowName }}</span>
        </template>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command = "Info" @click="viewUserInfo">用户信息</el-dropdown-item>
            <el-dropdown-item command = "LoginOut" @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script lang="ts">
export default {
  name: 'HeaderComponent',
}
</script>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { FullScreen } from '@element-plus/icons-vue'
import {LoginStore } from '@/stores/LoginSystem/login';
import { onMounted, ref } from 'vue';
import { watch } from 'vue';

const router = useRouter();
const userinfo = LoginStore(); // 获取用户信息的 store
// const userName = userinfo.$state.loginResponseDate?.username // 获取用户名
const ShowName = ref('未登录'); // 显示的用户名


onMounted(()=>{
  userinfo.clearLoginInfo() // 获取用户名
});
// 监听用户名变化


// watch(() => userinfo.islogin, (newVal) => {
//   console.log('用户登录状态变化:', newVal);
//   console.log('用户名字:', userName);
//   if (userName != undefined) {
//     ShowName.value = userName;
//   } else {
//     ShowName.value = '未登录';
//   }
// });

watch(() => userinfo.$state.loginResponseDate?.username, (newUserName) => {
  console.log('用户名变化:', newUserName);
  if (newUserName != undefined) {
    ShowName.value = newUserName;
  } else {
    ShowName.value = '未登录';
  }
});


// 全屏功能
const toggleFullScreen = () => {
  const doc = document.documentElement;
  if (!document.fullscreenElement) {
    doc.requestFullscreen().catch((err) => {
      console.error(`Error attempting to enable full-screen mode: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
};

// 查看用户信息
const viewUserInfo = () => {
  router.push('/user-info'); // 假设有用户信息页面
};

// 退出登录
const logout = () => {
  userinfo.islogin = false; // 更新登录状态
  userinfo.loginResponseDate = null; // 清除登录信息
  console.log('退出登录');
  router.push('/');
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  padding: 5px 10px;
  background-color: rgba(255, 255, 255, 0);
  color: #000;
  font-family: 'Roboto', sans-serif;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.el-dropdown-menu {
  background-color: rgba(229, 235, 244, 0.9);
  border: none;
  color: black;
}

.el-dropdown-item {
  color: #fff;
  font-size: 14px;
  transition: background-color 0.3s, color 0.3s;
}

.el-dropdown-item:hover {
  background-color: rgba(0, 216, 255, 0.2);
  color: #00d8ff;
}

.dropdown-icon {
  margin-right: 8px;
  padding-top: 0px;
  vertical-align: middle;
  font-size: 16px;
  color: #000;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dropdown-icon:hover {
  color: #80eac3;
}
</style>
