<template>
  <div class="register-container">
    <el-form ref="registerFormRef" :model="registerForm" :rules="rules" label-width="120px">
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
      <el-form-item>
        <el-button type="primary" @click="submitRegisterForm">注册</el-button>
        <el-button @click="goBack">返回</el-button>
      </el-form-item>
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
import { RegisterStore,LoginStore } from '@/stores/LoginSystem/login';
import { ElMessageBox } from 'element-plus';

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
        if(authStore.RegisterResponseStore!= null) {
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

const goBack = () => {
  router.push('/Login')
}
</script>

<style scoped>
.register-container {
  display: grid;
  place-items: center;
  /* 使用grid的place-items属性实现水平和垂直居中 */
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
}

.el-form {
  width: 400px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}
</style>
