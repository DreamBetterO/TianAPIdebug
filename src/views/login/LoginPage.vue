<template>
  <div class="login-Item">
    <div class="title-Item">
      <ThemeFont :size="36">登录</ThemeFont>
      <a class="ArrowRegister" href="/register">
        注册
        <el-icon>
          <ArrowRightBold />
        </el-icon>
      </a>
    </div>

    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="60px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密  码" prop="password">
        <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
      </el-form-item>
    </el-form>
    <el-button type="primary" class="login-butten" @click="submitForm(ruleFormRef)">登录</el-button>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { type FormInstance } from 'element-plus';
import { LoginStore } from '@/stores/LoginSystem/login';
import router from '@/router';
import ThemeFont from '@/components/font/index.vue';
import { ArrowRightBold } from '@element-plus/icons-vue';


interface RuleForm {
  username: string;
  password: string;
}

// 表单校验规则
const validateUsername = (rule: unknown, value: string, callback: (error?: Error) => void) => {
  if (value === '') {
    callback(new Error('请输入用户名'));
  } else if (value.length < 1) {
    callback(new Error('用户名长度不能小于1个字符'));
  } else {
    callback();
  }
};

const validatePassword = (rule: unknown, value: string, callback: (error?: Error) => void) => {
  if (value === '') {
    callback(new Error('请输入密码'));
  } else if (value.length < 6) {
    callback(new Error('密码长度不能小于6个字符'));
  } else {
    callback();
  }
};

//表单规则引用
const rules = ref({
  username: [{ validator: validateUsername, trigger: 'blur' }],
  password: [{ validator: validatePassword, trigger: 'blur' }],
});

const ruleFormRef = ref<FormInstance>(); // 表单引用
const ruleForm = reactive<RuleForm>({
  username: '',
  password: '',
});

const authStore = LoginStore(); // 存储用户信息

// 提交表单
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid: boolean) => {
    if (valid) {
      // 前端校验通过，请求后端数据
      authStore.SendLoginInfo(ruleForm)
        .then(() => {
          if (authStore.loginResponseDate?.id == null) {
            console.log('登录失败，用户名或密码错误');
            // 清空表单内容
            resetForm();
            ;
          } else {
            console.log('登录成功');
            router.push('/home');
          }
        })
        .catch(() => {
          // 清空表单内容
          resetForm();
          // console.error('登录请求失败:', error);
        });

    } else {
      console.log('前端表单验证失败');
      // 清空表单内容
      resetForm();
    }
  });
};

// 清空表单内容
const resetForm = () => {
  ruleForm.username = '';
  ruleForm.password = '';
  ruleFormRef.value?.clearValidate();
};

// // 跳转到注册页面
// const goToRegister = () => {
//   router.push('/register');
// };
</script>

<style scoped>
.login-Item {
  display: flex;
  flex-direction: column;
  padding: 30px 50px 40px 50px;
  width: auto;
  height: 337px;
  background: linear-gradient(173deg, rgba(157, 163, 193, 0.18) 0%, rgba(157, 163, 193, 0) 100%), linear-gradient(156deg, rgba(157, 163, 193, 0) 0%, rgba(157, 163, 193, 0.18) 100%), rgba(7, 14, 59, 0.48);
  border-radius: 8px;
  border: 1px solid;
  /* border-image: linear-gradient(165deg, rgba(157, 163, 193, 1), rgba(157, 163, 193, 0.24)) 1 1; */
}

.title-Item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 43px;
  margin-bottom: 24px;
  flex-wrap: nowrap;
}

.header-title {
  font-family: Noto Serif SC, Noto Serif SC;
  font-weight: bold;
  font-size: 64px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  /* // background: linear-gradient(90deg, #B3DAFF 0%, #80C1FF 100%); */
}

.ArrowRegister {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  text-decoration: none;
  width: 50px;
  height: 20px;
  font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
  font-weight: normal;
  font-size: 14px;
  color: #3DA1FF;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

.demo-ruleForm {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1 1 auto;
  width: 400px;
  max-height: 92px;
  /* background-color: rgba(255, 255, 255, 0); */
  /* color: rgb(255, 255, 255); */
}

/* .el-form-item {
  background: #111827;
  border-radius: 4px 4px 4px 4px;
  border: 1px solid #4B5563;
}

.el-form-item:hover{
  border-color: #3DA1FF;
  box-shadow: 0 0 0 2px rgba(61, 161, 255, 0.2);
}

.el-input {
  --el-input-bg-color: #ffffff00;
  --el-input-border-color: #dcdfe600;
}

:deep(.el-form-item__label) {
  justify-content: space-around;
} */





.login-butten {
  margin-top: 40px;
  width: 400px;
}
</style>
