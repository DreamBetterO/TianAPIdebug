<template>
  <div class="welcome-container">
    <div class="welcome-content">
      <h1 class="fade-in">欢迎使用天球数据库</h1>
      <p class="fade-in">天球数据库是一个高效、可靠的数据管理平台，助您轻松管理和分析数据。</p>
      <button @click="goToLogin" class="login-button bounce">登录</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'WelcomePage',
};
</script>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goToLogin = () => {
  router.push({ name: 'Login' });
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.welcome-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('@/assets/images/MainBackground.jpg') no-repeat center center;
  background-size: cover;
}

.welcome-content {
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: fadeIn 2s ease-in-out;
}

.welcome-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
  animation: fadeIn 2s ease-in-out;
}

.welcome-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #666;
  animation: fadeIn 2.5s ease-in-out;
}

.login-button {
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  animation: bounce 2s infinite;
}

.login-button:hover {
  background-color: #0056b3;
}
</style>
