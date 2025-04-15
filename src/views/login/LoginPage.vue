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
        <!-- <el-form-item label="验证码" prop="verificationCode">
          <div class="verification-code-container">
            <el-input v-model="ruleForm.verificationCode" autocomplete="off" placeholder="请输入验证码" />
            <div class="verification-code" @click="refreshVerificationCode">
              {{ verificationCode }}
            </div>
          </div>
        </el-form-item> -->
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            提交
          </el-button>
          <el-button type="success" @click="goToRegister">注册</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script lang="ts" setup>

import { reactive, ref, onMounted } from 'vue'
import type { FormInstance } from 'element-plus'
import { House } from '@element-plus/icons-vue'
import type { RuleForm } from './rules'
import { createRules, generateVerificationCode } from './rules'
import router from '@/router'


const ruleFormRef = ref<FormInstance>()
const verificationCode = ref('')

const ruleForm = reactive<RuleForm>({
  username: '',
  password: '',
  verificationCode: '',
})




const refreshVerificationCode = () => {
  verificationCode.value = generateVerificationCode()
  // 当验证码刷新时，重新创建验证规则
  rules.value = createRules(verificationCode.value)
}

// 使用ref来存储规则，这样可以在验证码刷新时更新规则
const rules = ref(createRules(verificationCode.value))

const submitForm = (formEl: FormInstance | undefined) => { //提交表单
  if (!formEl) return //如果表单为空，则返回
  formEl.validate((valid: boolean) => { //验证表单
    if (valid) { //如果表单验证通过
      console.log('submit!') //打印提交信息
      // 这里可以添加登录逻辑
    } else {
      console.log('error submit!') //打印错误信息
    }
  })
}

const goToManagement = () => {
  router.push('/management-platform')
}

const goToRegister = () => {
  router.push('/register')
}

onMounted(() => {
  refreshVerificationCode()
})
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
