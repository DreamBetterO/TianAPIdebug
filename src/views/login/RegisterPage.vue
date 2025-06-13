<template>
  <div class="register-container">
    <div class="title-Item">
      <ThemeFont :size="36">注册</ThemeFont>
      <a class="ArrowRegister" href="/Login">
        前往登录
        <el-icon>
          <ArrowRightBold />
        </el-icon>
      </a>
    </div>
    <el-form ref="registerFormRef" :model="registerForm" :rules="rules" label-width="80px"
      style="background-color: rgba(255, 255, 255, 0); box-shadow: none;">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="registerForm.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="registerForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="registerForm.email" autocomplete="off" />
      </el-form-item>
      <el-form-item label="电话号码" prop="phone">
        <el-input v-model="registerForm.phone" autocomplete="off" />
      </el-form-item>
      <el-form-item label="用户类型" prop="userType">
        <el-select v-model="registerForm.userType" placeholder="请选择用户类型">
          <el-option label="普通用户" value="普通用户" />
          <el-option label="管理用户" value="管理用户" />
          <el-option label="管理员" value="管理员" />
        </el-select>
      </el-form-item>
      <el-form-item label="注册机构" prop="organization">
        <el-input v-model="registerForm.organization" autocomplete="off" />
      </el-form-item>
      <el-button type="primary" @click="submitRegisterForm" class="register-button">注册</el-button>
    </el-form>
  </div>
</template>

<script lang="ts">
export default {
  name: 'RegisterPage',
}
</script>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import router from '@/router'
import { RegisterStore, LoginStore } from '@/stores/LoginSystem/login';
import { ElMessageBox } from 'element-plus';
import ThemeFont from '@/components/font/index.vue';
import { ArrowRightBold } from '@element-plus/icons-vue';

const registerFormRef = ref<FormInstance>() // 表单引用
const registerForm = reactive({ // 注册表单数据
  username: '',
  password: '',
  email: '',
  phone: '',
  userType: '',
  organization: '',
})

// 表单校验规则
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 2, max: 15, message: '用户名长度在 2 到 15 个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '密码长度在 6 到 20 个字符', trigger: 'blur' },
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入有效的邮箱地址', trigger: 'blur' },
  ],
  phone: [
    { required: true, message: '请输入电话号码', trigger: 'blur' },
    { pattern: /^[0-9]{10,11}$/, message: '电话号码格式不正确', trigger: 'blur' },
  ],
  userType: [{ required: true, message: '请选择用户类型', trigger: 'change' }],
  organization: [{ required: true, message: '请输入注册机构', trigger: 'blur' }],
}

const authStore = RegisterStore(); // 注册内容



//直接登录
let UseLogin = {
  username: '',
  password: '',
}

//提交注册
const submitRegisterForm = () => {
  // 校验表单
  registerFormRef.value?.validate((valid) => {
    // 如果校验通过，valid 为 true
    if (valid) {
      const user = {
        username: registerForm.username,
        password: registerForm.password,
        email: registerForm.email,
        role: registerForm.userType === '普通用户' ? 0 : registerForm.userType === '管理用户' ? 1 : 2,
        phoneNumber: registerForm.phone,
        organization: registerForm.organization,
      };
      // 将用户信息发送给后端
      authStore.SendRegisterInfo(user).then(() => {
        if (authStore.RegisterResponseStore != null) {
          UseLogin = {
            username: registerForm.username,
            password: registerForm.password,
          };

          ElMessageBox.confirm('注册成功，是否使用注册账号直接登录？', '提示', {
            confirmButtonText: '直接登录',
            cancelButtonText: '取消',
            type: 'success',
          }).then(() => {
            // 如果用户选择直接登录
            LoginStore().SendLoginInfo(UseLogin).then(() => {
              if (LoginStore().islogin == true) {
                router.push('/Home'); // 登录成功后跳转到主页
              } else {
                ElMessageBox.alert('登录失败，请重试', '错误', {
                  confirmButtonText: '确定',
                  type: 'error',
                });
              }
            });
          }).catch(() => {
            // 如果用户选择取消
            resetForm();
            UseLogin = {
              username: '',
              password: '',
            };
          });
          console.log('注册成功：', authStore.RegisterResponseStore);
        } else {
          ElMessageBox.alert('注册失败，请重试', '错误', {
            confirmButtonText: '确定',
            type: 'error',
          });
          resetForm();
        }
      });
      console.log('表单正确', user);
      router.push('/Login'); // 注册成功后跳转到登录页面
    } else {
      console.log('数据库表单获取失败');
    }
  });
};




// 清空表单内容
const resetForm = () => {
  registerForm.username = '';
  registerForm.password = '';
  registerForm.email = '';
  registerForm.phone = '';
  registerForm.userType = '';
  registerForm.organization = '';
  registerFormRef.value?.clearValidate();
};


</script>

<style scoped>
.register-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 80px;
  width: 560px;
  font-size: 14px;
  height: auto;
  background: linear-gradient(173deg, rgba(157, 163, 193, 0.18) 0%, rgba(157, 163, 193, 0) 100%), linear-gradient(156deg, rgba(157, 163, 193, 0) 0%, rgba(157, 163, 193, 0.18) 100%), rgba(7, 14, 59, 0.48);
  border-radius: 12px;
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

.ArrowRegister {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  text-decoration: none;
  width: 100px;
  height: 20px;
  font-family: Alibaba PuHuiTi 2.0, Alibaba PuHuiTi 20;
  font-weight: normal;
  font-size: 14px;
  color: #3DA1FF;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

.el-form {
  width: 400px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.register-button {
  width: 100%;
  margin-top: 20px;
}
</style>
