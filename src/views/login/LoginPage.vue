<template>
  <div class="login-Item">
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
        <el-button type="success" @click="goToRegister">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { type FormInstance } from 'element-plus';
import { LoginStore } from '@/stores/LoginSystem/login';
import router from '@/router';

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

// 跳转到注册页面
const goToRegister = () => {
  router.push('/register');
};
</script>

<style scoped>
.login-Item {
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
}

.demo-ruleForm {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  background-color: white;
}
</style>
