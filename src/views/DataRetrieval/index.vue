<template>
  <div>
  <el-container class="SearchMethod">
    <el-form :inline = "true" >
      <el-form-item label="观测对象">
        <el-input v-model="searchMethod.observer_object" placeholder="请输入观测对象"></el-input>
      </el-form-item>
      <el-form-item label="观测时间">
        <el-date-picker v-model="searchMethod.observer_time" type="datetime" placeholder="选择观测时间"
          format="YYYY-MM-DDTHH:mm:ssZ" value-format="YYYY-MM-DDTHH:mm:ssZ"></el-date-picker>
      </el-form-item>
      <el-form-item label="设备编号">
        <el-input v-model="searchMethod.observer__device" placeholder="请输入设备编号"></el-input>
      </el-form-item>
      <el-form-item label="数据类型">
      <el-select v-model="searchMethod.data_type" placeholder="请选择数据类型" style="width: 200px;">
        <el-option label="txt" value="type1"></el-option>
        <el-option label="pdf" value="type2"></el-option>
      </el-select>
    </el-form-item>
      <el-form-item label="数据名称">
        <el-input v-model="searchMethod.data_name" placeholder="请输入数据名称"></el-input>
      </el-form-item>
      <el-form-item label="数据等级">
        <el-input v-model="searchMethod.data_degree" placeholder="请输入数据等级"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">查询</el-button>
        <el-button type="default" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-container>
  <el-container class="SearchResult">
    <el-table :data="searchResult" stripe>
      <el-table-column prop="observer_object" label="观测对象"></el-table-column>
      <el-table-column prop="observer_time" label="观测时间"></el-table-column>
      <el-table-column prop="observer__device" label="设备编号"></el-table-column>
      <el-table-column prop="data_type" label="数据类型"></el-table-column>
      <el-table-column prop="data_name" label="数据名称"></el-table-column>
      <el-table-column prop="data_degree" label="数据等级"></el-table-column>
    </el-table>
  </el-container>
</div>
</template>

<script lang="ts">
export default {
  name: 'DataRetrieval',
}
</script>

<script setup lang="ts">
import { ref } from 'vue';

interface SearchMethod {
  observer_object: string;
  observer_time: string;
  observer__device: string;
  data_type: string;
  data_name: string;
  data_degree: string;
}
const searchMethod = ref<SearchMethod>({
  observer_object: '',
  observer_time: '',
  observer__device: '',
  data_type: '',
  data_name: '',
  data_degree: '',
});
const searchResult = ref([
  { observer_object: '对象1', observer_time: '2025-04-16 10:00', observer__device: '设备1', data_type: '类型1', data_name: '数据1', data_degree: '等级1' },
  { observer_object: '对象2', observer_time: '2025-04-16 11:30', observer__device: '设备2', data_type: '类型2', data_name: '数据2', data_degree: '等级2' },
  { observer_object: '对象3', observer_time: '2025-04-16 14:20', observer__device: '设备3', data_type: '类型3', data_name: '数据3', data_degree: '等级3' },
]);

const submit = () => {
  // 提交查询
  console.log('查询条件:', searchMethod.value);
  // 在这里添加查询逻辑
};
const reset = () => {
  // 重置查询条件
  searchMethod.value = {
    observer_object: '',
    observer_time: '',
    observer__device: '',
    data_type: '',
    data_name: '',
    data_degree: '',
  };
};


</script>

<style scoped>
@import './index.scss';
</style>






