<template>
  <div class="data-retrieval">
  <el-container class="SearchMethod">
    <el-form :inline="true" label-width="120px" class="search-form">
      <el-row :gutter="20">
      <el-col :span="8">
        <el-form-item label="文件名称">
        <el-input v-model="searchMethod.filename" placeholder="请输入文件名称" class = "IntergrityRow"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="上传用户">
        <el-input v-model="searchMethod.updateUser" placeholder="请输入上传用户" class = "IntergrityRow"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="文件大小">
        <el-input v-model="searchMethod.minSize" placeholder="最小值KB" class="MidRow" controls = "false"></el-input>
        <span style="margin: 0 5px;">~</span>
        <el-input v-model="searchMethod.maxSize" placeholder="最大值KB" class="MidRow" controls = "false"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="创建时间">
        <el-date-picker v-model="searchMethod.startCreateTime" type="datetime" placeholder="开始时间"
       style="width: 115px;" format="YYYY-MM-DDTHH:mm:ssZ" value-format="YYYY-MM-DDTHH:mm:ssZ"></el-date-picker>
        <span style="margin: 0 5px;">~</span>
        <el-date-picker v-model="searchMethod.endCreateTime" type="datetime" placeholder="结束时间"
        style="width: 115px;" format="YYYY-MM-DDTHH:mm:ssZ" value-format="YYYY-MM-DDTHH:mm:ssZ"></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="更新时间">
        <el-date-picker v-model="searchMethod.startUpdateTime" type="datetime" placeholder="开始时间"
        style="width: 115px;" format="YYYY-MM-DDTHH:mm:ssZ" value-format="YYYY-MM-DDTHH:mm:ssZ"></el-date-picker>
        <span style="margin: 0 5px;">~</span>
        <el-date-picker v-model="searchMethod.endUpdateTime" type="datetime" placeholder="结束时间"
        style="width: 115px;" format="YYYY-MM-DDTHH:mm:ssZ" value-format="YYYY-MM-DDTHH:mm:ssZ"></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="观测时间">
        <el-date-picker v-model="searchMethod.startObserveTime" type="datetime" placeholder="开始时间"
        style="width: 115px;" format="YYYY-MM-DDTHH:mm:ssZ" value-format="YYYY-MM-DDTHH:mm:ssZ"></el-date-picker>
        <span style="margin: 0 5px;">~</span>
        <el-date-picker v-model="searchMethod.endObserveTime" type="datetime" placeholder="结束时间"
        style="width: 115px;" format="YYYY-MM-DDTHH:mm:ssZ" value-format="YYYY-MM-DDTHH:mm:ssZ"></el-date-picker>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="数据类型">
        <el-select v-model="searchMethod.dataType" placeholder="请选择数据类型" class = "IntergrityRow">
          <el-option label="txt" value="txt"></el-option>
          <el-option label="pdf" value="pdf"></el-option>
        </el-select>

        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="观测设备">
        <el-input v-model="searchMethod.observeDevice" placeholder="请输入设备编号" class = "IntergrityRow"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="排序方式">
        <el-select v-model="searchMethod.sort" placeholder="请选择排序方式" class = "IntergrityRow">
          <el-option label="升序" value="asc"></el-option>
          <el-option label="降序" value="desc"></el-option>
        </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="24" class="form-actions">
        <el-form-item style="margin-left: 50px ;">
        <el-button type="primary" @click="submit">查询</el-button>
        <el-button type="default" @click="reset">重置</el-button>
        </el-form-item>
      </el-col>
      </el-row>
    </el-form>
  </el-container>
  <el-container class="search-result">
    <el-table :data="DataResponse" stripe style="width: 100%">
      <el-table-column prop="filename" label="文件名称" width="180" sortable></el-table-column>
      <el-table-column prop="size" label="文件大小(KB)" width="180" sortable></el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="180" sortable></el-table-column>
      <el-table-column prop="uploadTime" label="上传时间" width="180" sortable></el-table-column>
      <el-table-column prop="updateTime" label="更新时间" width="180" sortable></el-table-column>
      <el-table-column prop="observeTime" label="观测时间" width="180" sortable></el-table-column>
      <el-table-column prop="updateUser" label="上传用户" width="180" sortable></el-table-column>
      <el-table-column prop="bucketName" label="存储桶名称" width="180" sortable></el-table-column>
      <el-table-column prop="path" label="文件路径" width="180" sortable></el-table-column>
      <el-table-column prop="downloadUrl" label="下载链接" width="180" sortable></el-table-column>
      <el-table-column prop="observeObject" label="观测对象" width="180" sortable></el-table-column>
      <el-table-column prop="dataType" label="数据类型" width="180" sortable></el-table-column>
      <el-table-column prop="observeDevice" label="观测设备编号" width="180" sortable></el-table-column>
      <el-table-column label="操作" width="180">
        <template #default="scope">
          <el-button link type="primary" @click="handleDownload(scope.row.downloadUrl)">下载</el-button>
          <el-button link type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
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
import type { FileSearchParams, FileInfoResponse } from '@/types/DocOperation';
import { fileList as FileListStore } from '@/stores/DocSystem/fileStore';
import { ref } from 'vue';


const SearchData = FileListStore().fileList;

const searchMethod = ref<FileSearchParams>({
  filename: '',
  updateUser: '',
  minSize: 0,
  maxSize: 0,
  startCreateTime: '',
  endCreateTime: '',
  startUpdateTime: '',
  endUpdateTime: '',
  startObserveTime: '',
  endObserveTime: '',
  page: 0, //当前页码
  size: 10, //每页显示的条数
  dataType: '', //数据类型
  observeDevice: '',
  sort: '',
});

const DataResponse = ref<FileInfoResponse[]>([
  {
    id: 1,
    filename: 'example1.txt',
    size: 1024,
    createTime: '2023-01-01T12:00:00Z',
    uploadTime: '2023-01-02T12:00:00Z',
    updateTime: '2023-01-03T12:00:00Z',
    observeTime: '2023-01-04T12:00:00Z',
    updateUser: 'user1',
    bucketName: 'bucket1',
    path: '/path/to/example1.txt',
    downloadUrl: 'http://example.com/download/example1.txt',
    observeObject: 'object1',
    dataType: 'txt',
    observeDevice: 'device1',
  },
  {
    id: 2,
    filename: 'example2.pdf',
    size: 2048,
    createTime: '2023-02-01T12:00:00Z',
    uploadTime: '2023-02-02T12:00:00Z',
    updateTime: '2023-02-03T12:00:00Z',
    observeTime: '2023-02-04T12:00:00Z',
    updateUser: 'user2',
    bucketName: 'bucket2',
    path: '/path/to/example2.pdf',
    downloadUrl: 'http://example.com/download/example2.pdf',
    observeObject: 'object2',
    dataType: 'pdf',
    observeDevice: 'device2',
  },
]);





const submit = () => {
  console.log('提交查询,查询信息为：', searchMethod.value);
  FileListStore().fetchFileList(searchMethod.value);
  console.log('@@@查询结果:', SearchData);
  DataResponse.value = SearchData;
  // 在这里添加查询逻辑
};

const reset = () => {
  // 重置查询条件
  searchMethod.value = {
    filename: '',
    updateUser: '',
    minSize: 0,
    maxSize: 0,
    startCreateTime: '',
    endCreateTime: '',
    startUpdateTime: '',
    endUpdateTime: '',
    startObserveTime: '',
    endObserveTime: '',
    page: 1,
    size: 10,
    dataType: '',
    observeDevice: '',
    sort: '',
  };
};



const handleDownload = (url: string) => {
  // 处理下载逻辑
  console.log('下载链接:', url);
  // 在这里添加下载逻辑
};
const handleDelete = (id: number) => {
  // 处理删除逻辑
  console.log('删除文件ID:', id);
  // 在这里添加删除逻辑
};

</script>

<style scoped>
@import './index.scss';
span{
  color: black;
  width: 10px;
}

.IntergrityRow{
  width: 250px;
}
.MidRow{
  width: 115px;

}
/* .MidRowTime{
  width:100px;
} */



el-col{
 align-items: left;
}
</style>






