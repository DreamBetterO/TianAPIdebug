<template>
  <div class="dashboard-container">
    <header class="dashboard-header">
      <span class="header-title theme-gradient">欢迎来到天球数据库</span>
      <span class="header-subtitle">高效、可靠的数据管理平台</span>
    </header>
    <!--按钮-->
    <section class="action-section">
      <el-button @click="LearnMore" type="primary" class="action-button-star">了解更多</el-button>
      <el-button @click="StarRightnow" type="success" class="action-button-more">立即开始</el-button>
    </section>
    <main class="dashboard-main">
      <section class="feature-section">
        <div class="feature-card fade-in">
          <div class="titie-icon"><svg t="1749540149531" class="icon" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="6853" width="200" height="200">
              <path
                d="M950 418c24.3 0 44 19.7 44 44v506c0 24.3-19.7 44-44 44H803c-24.3 0-44-19.7-44-44V462c0-24.3 19.7-44 44-44h147zM221 292c24.3 0 44 19.7 44 44v632c0 24.3-19.7 44-44 44H74c-24.3 0-44-19.7-44-44V336c0-24.3 19.7-44 44-44h147zM586 12c24.3 0 44 19.7 44 44v912c0 24.3-19.7 44-44 44H439c-24.3 0-44-19.7-44-44V56c0-24.3 19.7-44 44-44h147z"
                fill="#ffffff" p-id="6854"></path>
            </svg></div>
          <span class="titile-card">数据分析</span>
          <span>提供强大的数据分析工具，助您洞察数据价值。</span>
        </div>
        <div class="feature-card fade-in">
          <div class="titie-icon"><svg t="1749540558224" class="icon" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="7906" width="200" height="200">
              <path
                d="M351.872 395.712l113.6-113.216v424.256h87.744V282.496l113.6 113.28 61.888-61.888-219.392-219.392-219.328 219.392 61.888 61.824z m552.32 420.8c0 48.192-39.488 87.68-87.744 87.68H202.176a88 88 0 0 1-87.68-87.744v-165.376H202.24v165.376h614.272v-165.376h87.68v165.44z"
                fill="#ffffff" p-id="7907"></path>
            </svg></div>
          <h2>数据上传</h2>
          <p>支持多种格式的数据上传，轻松管理您的数据。</p>
        </div>
        <div class="feature-card fade-in">
          <div class="titie-icon"><svg t="1749540611396" class="icon" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="8972" width="200" height="200">
              <path
                d="M462.008636 800.791234A338.769101 338.769101 0 1 0 127.521272 462.115214a339.001804 339.001804 0 0 0 334.301202 338.67602z m0 123.146454a461.962096 461.962096 0 1 1 461.962096-461.962095 462.055177 462.055177 0 0 1-461.962096 461.962095z m0 0"
                fill="#FFFFFF" p-id="8973"></path>
              <path
                d="M215.622647 492.832017h123.286076v123.239536H215.622647z m184.812762-246.38599h123.239536v369.532444H400.435409z m184.812763 123.239536h123.146454v246.38599h-123.146454V369.685563z m0 0l186.16244 270.959432 252.715513 252.575891L893.393551 1023.953459l-252.575891-252.715512 130.592952-130.592952z m0 0"
                fill="#FFFFFF" p-id="8974"></path>
            </svg></div>
          <h2>数据检索</h2>
          <p>快速检索所需数据，提升工作效率。</p>
        </div>
      </section>
      <!--统计信息-->
      <section class="statistics-section">
        <div class="section-title">
          <span>系统统计</span>
        </div>

        <div class="statistics-cards">
          <div class="stat-card">
            <span>用户总数</span>
            <div class="card-num">9,366人</div>

          </div>
          <div class="stat-card">
            <span>数据总量</span>
            <div class="card-num">567 GB</div>

          </div>
          <div class="stat-card">
            <span>活跃用户数</span>
            <div class="card-num">142人</div>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DashboardPage',
};
</script>

<script lang="ts" setup>
import router from '@/router';
import '@/assets/iconfont/iconfont.js'

const LearnMore = () => {
  router.push('/data-inspection');
};
const StarRightnow = () => {
  /*跳转到登陆页面 */
  router.push('/Login');
};


</script>

<style scoped lang="scss">
@use '@/styles/font.scss';

/* 1. 让html、body无滚动条且高度100% */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.dashboard-container {
  // min-height: 100vh;
  // height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  /* background: linear-gradient(to bottom, #f5f7fa, #c3cfe2); */

  font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
  font-weight: normal;
  font-size: 20px;
  color: #FFFFFF;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

/* 2. 让主要内容区高度自适应 */
main {
  flex: 1 1 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
}

.feature-section,
.statistics-section {
  overflow: visible;
}

.dashboard-header {
  direction: flex;
  width: 576px;
  height: 127px;
  text-align: center;
  margin: 60px 0px 40px 0px;
}

.header-title {
  font-family: Noto Serif SC, Noto Serif SC;
  font-weight: bold;
  font-size: 64px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  // background: linear-gradient(90deg, #B3DAFF 0%, #80C1FF 100%);
}

.header-subtitle {
  margin-top: 0.74%;
  text-align: center;
  font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
  font-weight: normal;
  font-size: 30px;
  color: #E5E7EB;
  text-align: left;
  font-style: normal;
  text-transform: none
}

.action-section {
  width: 230px;
  height: 38px;
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
  gap: 20px;
  font-family: PingFang SC, PingFang SC;
  font-weight: 500;
  font-size: 18px;
  color: #FFFFFF;
  text-align: left;
  font-style: normal;
  text-transform: none;

  .action-button-star {
    width: 107px;
    height: 38px;
    background: #3DA1FF;
    border-radius: 4px 4px 4px 4px;
  }

  .action-button-more {
    width: 107px;
    height: 38px;
    background: #111827;
    border-radius: 4px 4px 4px 4px;
    border: 1px solid #D4D6D9;

  }
}

.dashboard-main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  flex: 0 0 auto;
}

.feature-section {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: nowrap;
  width: 1200px;
  height: 226px;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 10px;

}

.feature-card {
  display: flex;
  flex-direction: column;
  padding: 1.51%;
  gap: 2%;
  width: 389px;
  height: 200px;
  background: linear-gradient(173deg, rgba(157, 163, 193, 0.18) 0%, rgba(157, 163, 193, 0) 100%), linear-gradient(156deg, rgba(157, 163, 193, 0) 0%, rgba(157, 163, 193, 0.18) 100%), rgba(7, 14, 59, 0.48);
  border-radius: 8px 8px 8px 8px;
  border: 1px solid;
  border-image: linear-gradient(165deg, rgba(157, 163, 193, 1), rgba(157, 163, 193, 0.24)) 1 1;
}

.feature-icon {
  font-size: 2.5rem;
  color: #409eff;
  margin-bottom: 10px;
}

.statistics-section {
  direction: flex;
  flex-direction: column;


  width: 1200px;
  height: 230px;
  background: linear-gradient(173deg, rgba(157, 163, 193, 0.18) 0%, rgba(157, 163, 193, 0) 100%), linear-gradient(156deg, rgba(157, 163, 193, 0) 0%, rgba(157, 163, 193, 0.18) 100%), rgba(7, 14, 59, 0.48);
  border-radius: 8px 8px 8px 8px;
  border: 1px solid;
  border-image: linear-gradient(165deg, rgba(157, 163, 193, 1), rgba(157, 163, 193, 0.24)) 1 1;
}

.section-title {
  width: 100%;
  height: 72px;
  direction: flex;
  padding: 20px;
  background: rgba(75, 85, 99, 0.22);
  border-radius: 0px 0px 0px 0px;
  border: 1px solid #374151;

  font-family: Noto Serif SC, Noto Serif SC;
  font-weight: bold;
  font-size: 30px;
  color: #FFFFFF;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

.statistics-cards {
  margin: 2.22% 1.25% 0% 1.25%;
  display: flex;
  justify-content: space-around;

  .card-num {
    // width: 114px;
    height: 50px;
    font-family: Noto Serif SC, Noto Serif SC;
    font-weight: bold;
    font-size: 42px;
    color: #FFFFFF;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }
}

.stat-card {
  direction: flex;
  flex-direction: column;
  width: 352px;
  height: 110px;
  border-radius: 4px 4px 4px 4px;
  background-color: #004a8f00;
  color: #ffffff;
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


.titile-card {
  font-family: Noto Serif SC, Noto Serif SC;
  font-weight: bold;
  font-size: 30px;
  color: #FFFFFF;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

.titie-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #004A8F 0%, #3DA1FF 100%);

  svg {
    max-width: 100%;
    max-height: 100%;
    width: 60%;
    height: 60%;
    display: block;
  }
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
