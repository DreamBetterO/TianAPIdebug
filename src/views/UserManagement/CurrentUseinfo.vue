<template>
  <el-card class="user-info-card" shadow="hover">
    <header class="card-header" style="margin: -24px -24px 24px -24px;">用户信息</header>
    <el-descriptions :column="1" border>
      <el-descriptions-item label="用户ID">{{ user.id }}</el-descriptions-item>
      <el-descriptions-item label="用户名">{{ user.username }}</el-descriptions-item>
      <el-descriptions-item label="邮箱">{{ user.email }}</el-descriptions-item>
      <el-descriptions-item label="审核状态">
        <el-tag :type="user.status === 1 ? 'success' : 'warning'">
          {{ user.status === 1 ? '审核成功' : '待审核' }}
        </el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="组织名称">{{ user.organization }}</el-descriptions-item>
      <el-descriptions-item label="角色">
        <el-tag :type="roleTagType(user.role)">
          {{ roleText(user.role) }}
        </el-tag>
      </el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface LoginResponseData {
  id: number
  username: string
  email: string
  status: number
  organization: string
  role: number
}

const user = ref<LoginResponseData>({
  id: 5,
  username: 'username',
  email: '192@qlo.com',
  status: 1,
  organization: '某某组织',
  role: 1
})

function roleText(role: number) {
  switch (role) {
    case 0: return '普通用户'
    case 1: return '管理用户'
    case 2: return '管理员'
    default: return '未知'
  }
}
function roleTagType(role: number) {
  switch (role) {
    case 0: return ''
    case 1: return 'info'
    case 2: return 'danger'
    default: return ''
  }
}
</script>

<script lang="ts">
export default {
  name: 'CurrentUserInfo',
}
</script>

<style scoped>
.user-info-card {
  display: flex;
  flex-direction: column;
  color: aliceblue;
  width: 800px;
  margin: 40px;
  background-color: rgba(240, 248, 255, 0.021);
  gap: 24px;
}

/* 让 el-descriptions-item 背景透明 */
:deep(.el-descriptions__cell) {
  background-color: transparent !important;
}

:deep(.el-descriptions__label) {
  background-color: transparent !important;
}

:deep(.is-bordered-label) {
  background-color: transparent !important;
}

/* 让字体为绿色（如需白色可改为#fff） */
:deep(.el-descriptions__cell),
:deep(.el-descriptions__label) {
  color: hsl(0, 0%, 100%) !important;
  background-color: transparent !important;
}

/* 让 el-descriptions 整体背景透明 */
:deep(.el-descriptions),
:deep(.el-descriptions__body),
:deep(.el-descriptions__table) {
  background-color: transparent !important;
  border: none !important;
}
</style>
