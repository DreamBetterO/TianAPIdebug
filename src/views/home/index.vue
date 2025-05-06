<template>
  <div class="dashboard-container">
    <header class="dashboard-header">
      <h1 class="header-title">欢迎来到天球数据库</h1>
      <p class="header-subtitle">高效、可靠的数据管理平台</p>
    </header>
    <main class="dashboard-main">
      <section class="feature-section">
        <div class="feature-card fade-in">
          <i class="el-icon-data-analysis feature-icon"></i>
          <h2>数据分析</h2>
          <p>提供强大的数据分析工具，助您洞察数据价值。</p>
        </div>
        <div class="feature-card fade-in">
          <i class="el-icon-upload feature-icon"></i>
          <h2>数据上传</h2>
          <p>支持多种格式的数据上传，轻松管理您的数据。</p>
        </div>
        <div class="feature-card fade-in">
          <i class="el-icon-search feature-icon"></i>
          <h2>数据检索</h2>
          <p>快速检索所需数据，提升工作效率。</p>
        </div>
      </section>
      <section class="statistics-section">
        <h2 class="section-title">系统统计</h2>
        <div class="statistics-cards">
          <div class="stat-card">
            <h3>用户总数</h3>
            <p>1,234</p>
          </div>
          <div class="stat-card">
            <h3>数据总量</h3>
            <p>567 GB</p>
          </div>
          <div class="stat-card">
            <h3>活跃用户</h3>
            <p>89</p>
          </div>
        </div>
      </section>
      <section class="action-section">
        <el-button link type="primary" class="action-button">了解更多</el-button>
        <el-button link type="success" class="action-button">立即开始</el-button>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DashboardPage',
};
</script>

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: linear-gradient(to bottom, #f5f7fa, #c3cfe2);
  min-height: 100vh;
}

.dashboard-header {
  text-align: center;
  margin-bottom: 40px;
}

.header-title {
  font-size: 2.5rem;
  color: #333;
  animation: fadeIn 2s ease-in-out;
}

.header-subtitle {
  font-size: 1.2rem;
  color: #666;
  animation: fadeIn 2.5s ease-in-out;
}

.feature-section {
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
  width: 100%;
}

.feature-card {
  background: #413f3f;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  width: 30%;
  animation: fadeIn 1.5s ease-in-out;
}

.feature-icon {
  font-size: 2.5rem;
  color: #409eff;
  margin-bottom: 10px;
}

.statistics-section {
  width: 100%;
  text-align: center;
}

.section-title {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
}

.statistics-cards {
  display: flex;
  justify-content: space-around;
}

.stat-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  width: 30%;
}

.stat-card h3 {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 10px;
}

.stat-card p {
  font-size: 1.5rem;
  color: #333;
  font-weight: bold;
}

.action-section {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.action-button {
  font-size: 1rem;
  padding: 10px 20px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
