<template>
  <el-container class="RoleScreening" direction="vertical">
    <h3>数据角色筛选</h3>
    <el-form  :inline = 'true' :model="roleFilter" label-width="80px">
      <el-form-item label="时间范围">
        <el-select v-model="roleFilter.TimeScope" placeholder="请选择时间范围" style="width: 200px;">
          <el-option
            v-for="item in timeScopeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="数据类型">
        <el-select v-model="roleFilter.DataType" placeholder="请选择数据类型">
          <el-option
            v-for="item in dataTypeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="数据角色">
        <el-select v-model="roleFilter.DataRole" placeholder="请选择数据角色">
          <el-option
            v-for="item in dataRoleOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="StarFilter">筛选</el-button>
      </el-form-item>
    </el-form>
  <el-container class="table-container">
    <el-table :data="FormData" stripe @sort-change="handleSort">
      <el-table-column prop="DataName" label="数据名称"></el-table-column>
      <el-table-column prop="VisitTime" label="访问次数" sortable></el-table-column>
      <el-table-column prop="DownloadTimes" label="下载次数" sortable></el-table-column>
      <el-table-column prop="OperationTimes" label="操作次数" sortable></el-table-column>
    </el-table>
  </el-container>
</el-container>
</template>

<script lang="ts">
export default {
  name: 'RoleFilter',
}
</script>

<script lang="ts" setup>
import { ref } from 'vue';

interface RoleFilter {
  TimeScope: string;
  DataType: string;
  DataRole: string;
}

// interface DataForm{
//   DataName: string;
//   VisitTime: number;
//   DownloadTimes: number;
//   OperationTimes: string;
// }

const roleFilter = ref<RoleFilter>({
  TimeScope: '',
  DataType: '',
  DataRole: '',
});

// const dataForm = ref<DataForm>({
//   DataName: '',
//   VisitTime: 0,
//   DownloadTimes: 0,
//   OperationTimes: '',
// });


const timeScopeOptions = ref([
  { label: '近一周', value: 'lastWeek' },
  { label: '近一月', value: 'lastMonth' },
  { label: '近三月', value: 'lastThreeMonths' },
]);
const dataTypeOptions = ref([
  { label: '数据类型1', value: 'dataType1' },
  { label: '数据类型2', value: 'dataType2' },
  { label: '数据类型3', value: 'dataType3' },
]);
const dataRoleOptions = ref([
  { label: '数据角色1', value: 'dataRole1' },
  { label: '数据角色2', value: 'dataRole2' },
  { label: '数据角色3', value: 'dataRole3' },
]);

const FormData = ref([
  {
    DataName: '数据1',
    VisitTime: 100,
    DownloadTimes: 50,
    OperationTimes: '10次',
  },
  {
    DataName: '数据2',
    VisitTime: 200,
    DownloadTimes: 80,
    OperationTimes: '20次',
  },
]);


const StarFilter = () => {
  console.log('筛选条件:', roleFilter.value);
  // 在这里可以添加筛选逻辑
};

const handleSort = (sort: { prop: string; order: string }) => {
  console.log('排序:', sort);
  // 在这里可以添加排序逻辑
};

</script>


<style scoped>

.RoleScreening {
  margin: 0px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  background-color: aliceblue;
}

.el-form{
  margin: 20px 0 0 0;
  display: flex;
  /* justify-content: center; 水平居中 */
  align-items: center; /* 垂直居中 */

}
.el-select {
  width: 150px;
}
.table-container{
  margin: 5px 0px 0px 0px;
  /* margin: 5px 10px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); */
}


</style>
