<template>
  <div class="page-container">
    <div class="extect-button">
      <el-button type="Info" :icon="House" @click="goToManagement">管理平台</el-button>

    </div>
    <div class="login-Item">
      <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" status-icon :rules="rules"
        label-width="auto" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            登录
          </el-button>
          <el-button type="success" @click="goToRegister">注册</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script lang="ts" setup>

import { reactive, ref } from 'vue'
import  { type FormInstance,ElMessageBox } from 'element-plus'
import { House } from '@element-plus/icons-vue'
import { LoginStore } from '@/stores/login'
import router from '@/router'

interface RuleForm {
  username: string;
  password: string;
}

const validateUsername = (
  rule: unknown,
  value: string,
  callback: (error?: Error) => void
) => {
  if (value === '') {
    callback(new Error('请输入用户名'));
  } else if (value.length < 2) {
    callback(new Error('用户名长度不能小于2个字符'));
  } else {
    callback();
  }
};

const validatePassword = (
  rule: unknown,
  value: string,
  callback: (error?: Error) => void
) => {
  if (value === '') {
    callback(new Error('请输入密码'));
  } else if (value.length < 6) {
    callback(new Error('密码长度不能小于6个字符'));
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,}$/.test(value)) {
    callback(new Error('密码必须包含大小写字母和数字'));
  } else {
    callback();
  }
};

const rules = ref({
  username: [{ validator: validateUsername, trigger: 'blur' }],
  password: [{ validator: validatePassword, trigger: 'blur' }],
});

const ruleFormRef = ref<FormInstance>() // 表单引用

const ruleForm = reactive<RuleForm>({ // 注册表单数据
  username: '',
  password: '',
});

const authStore = LoginStore(); // 存储用户信息


const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid: boolean) => {
    if (valid) { //前端校验通过
      authStore.SendLoginInfo(ruleForm).then(() => { //请求后端数据
        if(authStore.loginResponse?.data.id == null) {
          ElMessageBox.alert('请先注册！', '错误', {
            confirmButtonText: '确定',
            type: 'error',
          });
          router.push('/management-platform');
        } else {

        }
        console.log('表单验证成功');
      }).catch((error) => {
        console.error('登录请求失败', error);
      });
    } else {
      console.log('前端表单验证失败');
    }
  });
};

const goToManagement = () => {
  router.push('/management-platform')
}

const goToRegister = () => {
  router.push('/register')
}
</script>



<style scoped>
.particle-background {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.extect-button {
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

.login-Item {
  margin-top: 200px;
  display: grid;
  place-items: center;
  /* 使用grid的place-items属性实现水平和垂直居中 */
  width: 100%;
  height: 100%;
}

.demo-ruleForm {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  /* 阴影位置；大小；颜色 */
  border-radius: 10px;
  padding: 20px;
  background-color: white;
}

.verification-code-container {
  display: flex;
  gap: 10px;
  align-items: center;
}

.verification-code {
  background: #f0f0f0;
  padding: 5px 10px;
  border-radius: 4px;
  font-family: monospace;
  font-size: 18px;
  cursor: pointer;
  user-select: none;
  min-width: 80px;
  text-align: center;
  letter-spacing: 2px;
}
</style>
