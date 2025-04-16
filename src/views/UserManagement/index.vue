<template>
  <div>
    <h1>用户管理</h1>
    <el-button type="primary" @click="refreshUserList"
      style="margin-bottom: 20px; background-color: #409EFF; color: white; border-radius: 5px;">
      刷新用户列表
    </el-button>
    <el-table :data="userList" style="width: 100%">
      <el-table-column prop="id" label="用户ID" width="100" />
      <el-table-column prop="username" label="用户名" width="150" />
      <el-table-column prop="email" label="邮箱" width="200" />
      <el-table-column prop="status" label="审核状态" width="120">
        <template #default="{ row }">
          <el-tag :type="row.status === 1 ? 'success' : 'warning'">
            {{ row.status === 1 ? '审核成功' : '需要审核' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="organization" label="组织名称" width="180" />
      <el-table-column prop="role" label="角色" width="120">
        <template #default="{ row }">
          <span>
            {{ row.role === 0 ? '普通用户' : row.role === 1 ? '管理用户' : '管理员' }}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="phoneNumber" label="电话号码" width="150" />
    </el-table>
  </div>
</template>

<script lang="ts">
export default {
  name: 'UserManagement',
};
</script>

<script setup lang="ts">
import { computed } from 'vue';
import { useUserListStore } from '@/stores/userlist';

const userListStore = useUserListStore(); // 获取用户列表的 store
const userList = computed(() => userListStore.userList); // 绑定到 store 的 userList

const refreshUserList = userListStore.clearUserList; // 刷新用户列表的方法

// onMounted(() => {
//   userListStore.fetchUserList(); // 组件挂载时获取用户列表
// });
</script>
