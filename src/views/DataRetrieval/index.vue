<template>
  <div class="data-retrieval">
    <header class="theme-title">| 数据检索</header>
    <el-container class="SearchMethod">
      <!--数据检索表单-->
      <el-form :inline="true" class="search-form">
        <div class="search-form-row">
          <div class="search-form-item">
            <div><span style="color: red; margin-left: 2px;">*</span>文件名称</div>
            <el-form-item :required="true">
              <el-input v-model="searchMethodCrude.filename" placeholder="请输入文件名称"></el-input>
            </el-form-item>
          </div>
          <div class="search-form-item">
            <div>上传用户</div>
            <el-form-item>
              <el-input v-model="searchMethodCrude.updateUser" placeholder="请输入上传用户"></el-input>
            </el-form-item>
          </div>
          <div class="search-form-item">
            <div>文件大小</div>
            <el-form-item>
              <div class="mul-input">
                <el-input v-model="searchMethodCrude.minSize" placeholder="最小值KB" style="width: 110px;"
                  controls="false"></el-input>
                至
                <el-input v-model="searchMethodCrude.maxSize" placeholder="最大值KB" style="width: 110px;"
                  controls="false"></el-input>
                <el-select v-model="SearchDataSize" placeholder="单位" class="UnitSelect" :required="true">
                  <el-option label="B" value="1"></el-option>
                  <el-option label="KB" value="1024"></el-option>
                  <el-option label="MB" value="1048576"></el-option>
                  <el-option label="GB" value="1073741824"></el-option>
                </el-select>
              </div>
            </el-form-item>
          </div>
          <div class="search-form-item">
            <div>创建时间</div>
            <el-form-item>
              <div class="mul-input">
                <el-date-picker v-model="searchMethodCrude.startCreateTime" type="datetime" placeholder="开始时间"
                  style="width: 160px;" format="YYYY-MM-DD HH:mm:ss"
                  value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                至
                <el-date-picker v-model="searchMethodCrude.endCreateTime" type="datetime" placeholder="结束时间"
                  style="width: 160px;" format="YYYY-MM-DD HH:mm:ss"
                  value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
              </div>
            </el-form-item>
          </div>
          <div class="search-form-item">
            <div>更新时间</div>

            <el-form-item>
              <div class="mul-input">
                <el-date-picker v-model="searchMethodCrude.startUpdateTime" type="datetime" placeholder="开始时间"
                  style="width: 160px;" format="YYYY-MM-DD HH:mm:ss"
                  value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                至
                <el-date-picker v-model="searchMethodCrude.endUpdateTime" type="datetime" placeholder="结束时间"
                  style="width: 160px;" format="YYYY-MM-DD HH:mm:ss"
                  value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>

              </div>
            </el-form-item>
          </div>
        </div>
        <div class="search-form-row">
          <div class="search-form-item">
            <div>观测时间</div>
            <el-form-item>
              <div class="mul-input">
                <el-date-picker v-model="searchMethodCrude.startObserveTime" type="datetime" placeholder="开始时间"
                  style="width: 160px;" format="YYYY-MM-DD HH:mm:ss"
                  value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                至
                <el-date-picker v-model="searchMethodCrude.endObserveTime" type="datetime" placeholder="结束时间"
                  style="width: 160px;" format="YYYY-MM-DD HH:mm:ss"
                  value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
              </div>
            </el-form-item>
          </div>
          <div class="search-form-item">
            <div><span style="color: red; margin-left: 2px;">*</span>数据类型</div>
            <el-form-item :required="true">
              <el-select v-model="searchMethodCrude.dataType" placeholder="请选择数据类型">
                <el-option label="txt" value="txt"></el-option>
                <el-option label="pdf" value="pdf"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="search-form-item">
            <div>观测设备</div>
            <el-form-item>
              <el-input v-model="searchMethodCrude.observeDevice" placeholder="请输入设备编号"
                class="IntergrityRow"></el-input>
            </el-form-item>
          </div>
          <div class="search-form-item">
            <div>排序方式</div>
            <el-form-item>
              <el-select v-model="searchMethodCrude.sort" placeholder="请选择排序方式" class="IntergrityRow">
                <el-option label="升序" value="asc"></el-option>
                <el-option label="降序" value="desc"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="search-form-item">
            <div class="form-button">
              <el-button type="primary" @click="FilesListSearchSubmit"><svg t="1749787554812" class="icon"
                  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4252" width="200"
                  height="200">
                  <path
                    d="M448 170.666667a277.333333 277.333333 0 1 0 194.048 475.477333l1.92-2.176a30.549333 30.549333 0 0 1 2.133333-1.962667A277.333333 277.333333 0 0 0 448 170.666667z m0-85.333334a362.666667 362.666667 0 0 1 284.885333 587.136l193.28 193.365334a42.624 42.624 0 1 1-60.330666 60.330666l-193.365334-193.28A362.666667 362.666667 0 1 1 448 85.333333z"
                    fill="#ffffff" p-id="4253"></path>
                </svg>查询</el-button>
              <el-button type="default" @click="FilesListSearchReset"><svg t="1749787598937" class="icon"
                  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5303" width="200"
                  height="200">
                  <path
                    d="M948.712714 504.692147a35.363315 35.363315 0 1 0-70.2422 11.626295 364.290584 364.290584 0 0 1 4.84429 59.584763 371.072589 371.072589 0 0 1-633.63309 262.076071A371.072589 371.072589 0 0 1 511.757786 204.346187h12.595153L443.453301 285.245825a35.363315 35.363315 0 1 0 48.442897 48.442896l134.186824-134.186824a35.363315 35.363315 0 0 0 0-48.442896L493.833914 17.356605a35.363315 35.363315 0 1 0-48.442897 48.442897L509.335641 133.135129a442.283647 442.283647 0 0 0-169.550139 850.172838 442.768076 442.768076 0 0 0 581.314761-234.94805 444.221363 444.221363 0 0 0 29.065738-242.214483z"
                    fill="#5E5C5C" p-id="5304"></path>
                </svg>重置</el-button>
            </div>
          </div>
        </div>
      </el-form>
    </el-container>
    <el-container class="search-result" direction="vertical" highlight-current-row="true" fit="ture">
      <el-table :data="DataResponse" stripe class="result-table">
        <el-table-column prop="filename" label="文件名称" align="center" sortable show-overflow-tooltip></el-table-column>
        <el-table-column prop="createTime" label="创建时间" :resizable="true" sortable
          show-overflow-tooltip></el-table-column>
        <el-table-column prop="uploadTime" label="上传时间" :resizable="true" sortable
          show-overflow-tooltip></el-table-column>
        <el-table-column prop="updateTime" label="更新时间" :resizable="true" sortable
          show-overflow-tooltip></el-table-column>
        <el-table-column prop="observeTime" label="观测时间" :resizable="true" sortable
          show-overflow-tooltip></el-table-column>
        <el-table-column prop="updateUser" label="上传用户"></el-table-column>
        <el-table-column prop="bucketName" label="存储桶名称"></el-table-column>
        <el-table-column prop="path" label="文件路径" sortable show-overflow-tooltip></el-table-column>
        <el-table-column prop="downloadUrl" label="下载链接" sortable show-overflow-tooltip></el-table-column>
        <el-table-column prop="observeObject" label="观测对象"></el-table-column>
        <el-table-column prop="size" label="大小/KB"></el-table-column>
        <el-table-column prop="dataType" label="数据类型" sortable></el-table-column>
        <el-table-column prop="observeDevice" label="设备编号" sortable show-overflow-tooltip></el-table-column>
        <el-table-column label="操作" fixed="right" width="200px">
          <template #default="scope">
            <el-button link type="primary" @click="handleDownload(scope.row.downloadUrl)">下载</el-button>
            <el-button link type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
            <el-button link type="success" @click="handleCheck(scope.row.downloadUrl)">查看</el-button>
            <el-button link type="info" @click="handleShare(scope.row.downloadUrl)">分享</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="display: flex;  margin: 18px 0px 5px 0px;  justify-content: space-between;">
        <div ><span style=" color: #606266;">共 {{ pagecount }} 页/ {{ totalElements
            }}条</span>
        </div>
        <el-pagination v-if="FileListStore.length > 0" :current-page="(searchMethod.page + 1)"
          :page-sizes="[10, 20, 30, 40]" :page-size="searchMethod.size" :page-count="pagecount"
          @current-change="handlePageChange" layout="prev, pager, next, jumper">
        </el-pagination>
      </div>
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
import { ref, watch, computed } from 'vue';
import '@/assets/iconfont/iconfont.js'


const SearchData = computed(() => FileListStore().fileList); // 绑定到 store 的 userList;创建响应式引用

const searchMethodCrude = ref<FileSearchParams>({
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

const SearchDataSize = ref(); //用作于搜索框中文件倍数选取

const pagecount = computed({  //总页数获取
  get: () => FileListStore().pagination.pagecount,
  set: (value) => {
    FileListStore().pagination.pagecount = value;
  },
})

const totalElements = computed({  //总条数获取
  get: () => FileListStore().pagination.totalElements,
  set: (value) => {
    FileListStore().pagination.totalElements = value;
  },
})

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

watch(() => FileListStore().fileList, (newVal, oldVal) => {
  console.log("查询成功")
  if (newVal) { DataResponse.value = newVal; }
}
);

watch(searchMethodCrude, (newVal) => {  //文件大小的单位转换
  searchMethod.value = {
    ...newVal,
    minSize: Math.ceil(newVal.minSize * SearchDataSize.value),
    maxSize: Math.ceil(newVal.maxSize * SearchDataSize.value),
  };
});

function mergeData() {
  // 合并数据
  searchMethod.value = {
    ...searchMethodCrude.value,
    minSize: Math.ceil(searchMethodCrude.value.minSize * SearchDataSize.value),
    maxSize: Math.ceil(searchMethodCrude.value.maxSize * SearchDataSize.value),
  };
}

const handlePageChange = (page: number) => {
  if (page < 1 || page > pagecount.value) {
    console.log("页码不合法")
    return
  }
  searchMethod.value.page = page - 1;
  console.log('页码改变，提交查询信息为：', searchMethod.value);
  FileListStore().fetchFileList(searchMethod.value)

}


const FilesListSearchSubmit = () => {
  mergeData()
  console.log('提交查询信息为：', searchMethod.value);
  FileListStore().fetchFileList(searchMethod.value)
  console.log('查询结果:', SearchData);
}

const FilesListSearchReset = () => {
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
  searchMethodCrude.value = {
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
  const link = document.createElement('a');
  link.href = url;
  link.download = ''; // 可选：设置下载文件名
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const handleDelete = (id: number) => {
  // 处理删除逻辑
  console.log('删除文件ID:', id);
  // 在这里添加删除逻辑
};

const handleCheck = (url: string) => {
  // 处理查看逻辑
  console.log('查看链接:', url);
  // 在这里添加查看逻辑
};
const handleShare = (url: string) => {
  // 处理分享逻辑
  console.log('分享链接:', url);
  // 在这里添加分享逻辑
};
</script>

<style lang="scss" scoped>
@use './index.scss';
@use '@/styles/icon.scss';

span {
  color: black;
  width: 10px;
}

// .IntergrityRow {
//   width: 346px;
// }

.MidRow {
  width: 115px;

}

.UnitSelect {
  // margin-left: 5px;
  width: 100px;
  background-color: rgba(240, 248, 255, 0.185);
  color: rgb(255, 255, 255);
  // color: blue;
  // background-color: blue;
  // border: 1px solid blue;
}

.search-form-row {
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: space-between;
  width: 1824px;
  height: 56px;
  border: none;
  padding: 0px;
}

.search-form-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 346px;
  height: 56px;
  background-color: rgba(127, 255, 212, 0);
  // gap: 8px;
  /*字体 */
  font-family: PingFang SC, PingFang SC;
  font-weight: 400;
  font-size: 14px;
  color: #E5E7EB;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

.mul-input {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 4px;

  background: #111827;
  border-radius: 4px 4px 4px 4px;
  border: 1px solid #4B5563;
}

.form-button {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  margin-top: 24px;
  gap: 16px;
}
</style>
