<template>
  <el-header class="header">
    <div class="header-right">
      <!-- 全屏功能 -->
      <!-- <el-tooltip content="全屏" placement="bottom">
        <el-icon class="dropdown-icon"><FullScreen  @click = "toggleFullScreen"/></el-icon>
      </el-tooltip> -->
<!--动态全屏按钮-->
<label class="container">
    <input type="checkbox" @click = "toggleFullScreen" class="FullScreen" />
      <svg viewBox="0 0 448 512" height="0.7em" xmlns="http://www.w3.org/2000/svg" class="expand"><path d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"></path></svg>
      <svg viewBox="0 0 448 512" height="0.7em" xmlns="http://www.w3.org/2000/svg" class="compress"><path d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"></path></svg>
  </label>




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
// import { FullScreen } from '@element-plus/icons-vue'
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

/* 全屏按钮样式*/
.FullScreen{
  width: 30px;
  height: 30px;
  margin-right: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
  /*------ Settings ------*/
  .container {
    --color: #a5a5b0;
    --size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    font-size: var(--size);
    user-select: none;
    fill: var(--color);
  }

  .container .expand {
    position: absolute;
    animation: keyframes-fill .5s;
  }

  .container .compress {
    position: absolute;
    display: none;
    animation: keyframes-fill .5s;
  }

  /* ------ On check event ------ */
  .container input:checked ~ .expand {
    display: none;
  }

  .container input:checked ~ .compress {
    display: block;
  }

  /* ------ Hide the default checkbox ------ */
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* ------ Animation ------ */
  @keyframes keyframes-fill {
    0% {
      transform: scale(0);
      opacity: 0;
    }

    50% {
      transform: scale(1.2);
    }
  }


</style>
