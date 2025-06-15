<template>
  <div class="user-management">
    <!-- <el-button type="primary" size="small" style="margin: 40px 20px  20px 0px;" @click="refreshUserList">刷新用户列表</el-button> -->
    <header class="theme-title">| 用户管理</header>
    <el-table :data="userList" class="users-table" >
      <el-table-column prop="id" label="用户ID" />
      <el-table-column prop="username" label="用户名"  />
      <el-table-column prop="email" label="邮箱"  />
      <el-table-column prop="status" label="审核状态" width="400">
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
      <!-- 新增审核列 -->
      <el-table-column label="审核" width="120">
        <template #default="{ row }">
          <el-button
            type="primary"
            size="small"
            :disabled="row.status === 1" @click="auditUser(row)" >
            审核
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
export default {
  name: 'UserManagement',
};
</script>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { Auditlist, AuditUser } from '@/stores/LoginSystem/userlist';

const userListStore = Auditlist(); // 获取用户列表的 store
const auditUserStore = AuditUser(); // 获取单个用户审核的 store

const userList = computed(() => userListStore.userList); // 绑定到 store 的 userList
const refreshUserList = userListStore.fetchUncheckUserList; // 刷新用户列表的方法

// 审核用户的方法
const auditUser = async (row: { id: number; status: number }) => {
  try {
    console.log("审核用户");
    // 调用审核接口
    auditUserStore.AuditUncheckUser({id:row.id,status:1}); // 审核用户+刷新用户列表
    // 刷新用户列表
  } catch (error) {
    console.error('审核用户失败:', error);
  }
};

 onMounted(() => {
  // 在组件挂载时获取用户列表
  refreshUserList();
});

</script>

<style scoped lang="scss">

.user-management{
  padding: 0px 24px 24px 24px;
  max-height: 100vh;
  gap: 24px;
}
.users-table {
  width: 1827px;


}

.content-box {
  width: 100%;
  height: 400px;
}
</style>
