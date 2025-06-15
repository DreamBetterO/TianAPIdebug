<template>
  <div class="DataUpload-DataDownload">
    <el-scrollbar class="scrollbar" style="height: 100vh;">
      <!--数据上传-->
      <el-container class="data-upload-container">
        <el-header class="header">
          数据上传
        </el-header>
        <el-container direction="vertical" class="uploadContainer">
          <!--上传表单-->
          <el-form class="upload-form">


            <div class="upload-form-row">
              <!--表单子项共用-->
              <div class="search-form-item">
                <div>观测对象</div>
                <el-form-item>
                  <el-input v-model="uploadIterm.observer_object" placeholder="请输入观测对象"></el-input>
                </el-form-item>
              </div>
              <div class="search-form-item">
                <div>观测时间</div>
                <el-form-item>
                  <el-date-picker v-model="uploadIterm.observer_time" type="datetime" placeholder="选择观测时间"
                    format="YYYY-MM-DD HH:mm:ss " value-format="YYYY-MM-DD HH:mm:ss"
                    style="width:346px;"></el-date-picker>
                </el-form-item>
              </div>
              <div class="search-form-item">
                <div>设备编号</div>
                <el-form-item>
                  <el-input v-model="uploadIterm.observer_device" placeholder="请输入设备编号"></el-input>
                </el-form-item>
              </div>
            </div>
            <div class="upload-form-row">
              <!--表单子项共用-->
              <div class="search-form-item">
                <div>文件名称</div>
                <el-form-item>
                  <el-input v-model="uploadIterm.filename" placeholder="请输入文件名"></el-input>
                </el-form-item>
              </div>
              <div class="search-form-item">
                <div>文件路径</div>
                <el-form-item>
                  <el-input v-model="uploadIterm.path" placeholder="请输入文件路径"></el-input>
                </el-form-item>
              </div>
              <div class="search-form-item">
                <div>数据类型</div>
                <el-form-item>
                  <el-select v-model="uploadIterm.data_type" placeholder="请选择数据类型">
                    <el-option label="temperature" value="temperature"></el-option>
                    <el-option label="txt" value="txt"></el-option>
                    <el-option label="pdf" value="pdf"></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </div>
            <div class="upload-form-row">
              <!--表单子项共用-->
              <div class="search-form-item">
                <div>桶名称</div>
                <el-form-item :required="true">
                  <el-select v-model="uploadIterm.bucketName" placeholder="请输入储存桶名称" style="width: 346px;">
                    <el-option v-for="item in bucketListStore" :key="item.name" :label="item.name" :value="item.name">
                      {{ item.name }}
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="search-form-item">
                <div>创建时间</div>
                <el-form-item>
                  <el-date-picker v-model="uploadIterm.createTime" type="datetime" placeholder="选择观测时间"
                    format="YYYY-MM-DD HH:mm:ss " value-format="YYYY-MM-DD HH:mm:ss"
                    style="width:346px;"></el-date-picker>
                </el-form-item>
              </div>
            </div>
          </el-form>

          <!-- <el-form :inline="true" label-align="left" class="upload-form">
            <el-row gitter="12">
              <el-col :span="6">
                <el-form-item label="观测对象">
                  <el-input v-model="uploadIterm.observer_object" placeholder="请输入观测对象"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="观测时间">
                  <el-date-picker v-model="uploadIterm.observer_time" type="datetime" placeholder="选择观测时间"
                    format="YYYY-MM-DD HH:mm:ss " value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="设备编号">
                  <el-input v-model="uploadIterm.observer_device" placeholder="请输入设备编号"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="文件名">
                  <el-input v-model="uploadIterm.filename" placeholder="请输入文件名"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row gitter="12">
              <el-col :span="6">
                <el-form-item label="文件路径">
                  <el-input v-model="uploadIterm.path" placeholder="请输入文件路径"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">

                <el-form-item label="数据类型" class="data-type-item">
                  <el-select v-model="uploadIterm.data_type" placeholder="请选择数据类型" style="width: 200px;">
                    <el-option label="temperature" value="temperature"></el-option>
                    <el-option label="txt" value="txt"></el-option>
                    <el-option label="pdf" value="pdf"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="桶名称" required="true">
                  <el-select v-model="uploadIterm.bucketName" placeholder="请输入储存桶名称" style="width: 200px;">
                    <el-option v-for="item in bucketListStore" :key="item.name" :label="item.name" :value="item.name">
                      {{ item.name }}
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="文件创建时间" style="max-width: 314px;">
                  <el-date-picker v-model="uploadIterm.createTime" type="datetime" placeholder="选择观测时间"
                    format="YYYY-MM-DD HH:mm:ss " value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                </el-form-item>

              </el-col>
            </el-row>
          </el-form> -->

          <!--上传文件容器-->
          <div class="file-upload">
            <div class="upload-container">
              <el-upload drag action="/upload" :before-upload="handleBeforeUpload" :on-change="handleChange"
                :on-success="handleSuccess" :on-error="handleError" :on-progress="handleProgress" multiple>
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div>将文件拖到此处，或<em style="color: #3DA1FF 60%">点击上传</em></div>
                <div>上传单个文件</div>
              </el-upload>
            </div>
            <div class="upload-files-div">
              <div class="upload-file-list">
                <el-table :data="uploadedFiles">
                  <el-table-column prop="name" label="文件名" width="180"></el-table-column>
                  <el-table-column label="操作" width="100">
                    <template #default="scope">
                      <el-button type="danger" size="small" @click="removeFile(scope.$index)">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
              <div class="upload-button-div">
                <el-button type="default" @click="DataReset"><svg t="1749787598937" class="icon" viewBox="0 0 1024 1024"
                    version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5303" width="200" height="200">
                    <path
                      d="M948.712714 504.692147a35.363315 35.363315 0 1 0-70.2422 11.626295 364.290584 364.290584 0 0 1 4.84429 59.584763 371.072589 371.072589 0 0 1-633.63309 262.076071A371.072589 371.072589 0 0 1 511.757786 204.346187h12.595153L443.453301 285.245825a35.363315 35.363315 0 1 0 48.442897 48.442896l134.186824-134.186824a35.363315 35.363315 0 0 0 0-48.442896L493.833914 17.356605a35.363315 35.363315 0 1 0-48.442897 48.442897L509.335641 133.135129a442.283647 442.283647 0 0 0-169.550139 850.172838 442.768076 442.768076 0 0 0 581.314761-234.94805 444.221363 444.221363 0 0 0 29.065738-242.214483z"
                      fill="#5E5C5C" p-id="5304"></path>
                  </svg>重置</el-button>
                <el-button type="primary" @click="UploadToServer">上传到服务器</el-button>
              </div>
            </div>
          </div>



        </el-container>
      </el-container>
      <!--文件操作列表查询-->
      <el-container class="upload-history-container">
        <el-header class="header">
          文件操作列表查询
        </el-header>
        <el-main class="enquiry-main">
          <!--查询表单-->
          <el-form class="enquiry-form">
            <div class="search-form-row">
              <div class="search-form-item">
                <div><span style="color: red; margin-left: 2px;">*</span>文件名称</div>
                <el-form-item :required="true">
                  <el-input v-model="FileOperationListParams.filename" placeholder="请输入文件名"></el-input>
                </el-form-item>
              </div>
              <div class="search-form-item">
                <div>操作用户名</div>
                <el-form-item>
                  <el-input v-model="FileOperationListParams.operateUsername" placeholder="请输入操作用户名"></el-input>
                </el-form-item>
              </div>
              <div class="search-form-item">
                <div>更新用户名</div>
                <el-form-item>
                  <el-input v-model="FileOperationListParams.updateUser" placeholder="请输入更新用户"></el-input>
                </el-form-item>
              </div>
              <div class="search-form-item">
                <div>观测设备</div>
                <el-form-item>
                  <el-input v-model="FileOperationListParams.observeDevice" placeholder="请输入更新用户"></el-input>
                </el-form-item>
              </div>
              <div class="search-form-item">
                <div>
                  创建时间
                </div>
                <el-form-item>
                  <div class="mul-input">
                    <el-date-picker v-model="FileOperationListParams.startCreateTime" type="datetime" placeholder="开始时间"
                      style="width:35%;" format="YYYY-MM-DD HH:mm:ss"
                      value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                    <span style="margin: 0 5px; color: aliceblue;">至</span>
                    <el-date-picker v-model="FileOperationListParams.endCreateTime" type="datetime" placeholder="结束时间"
                      style="width:35%;" format="YYYY-MM-DD HH:mm:ss"
                      value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                  </div>
                </el-form-item>
              </div>
            </div>

            <div class="search-form-row">
              <div class="search-form-item">
                <div>更新时间</div>
                <el-form-item>
                  <div class="mul-input">
                    <el-date-picker v-model="FileOperationListParams.startUpdateTime" type="datetime" placeholder="开始时间"
                      style="width:35%; margin-left: 12px;" format="YYYY-MM-DD HH:mm:ss"
                      value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                    <span style="margin: 0 5px;">~</span>
                    <el-date-picker v-model="FileOperationListParams.endUpdateTime" type="datetime" placeholder="结束时间"
                      style="width:35%;" format="YYYY-MM-DD HH:mm:ss"
                      value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                  </div>
                </el-form-item>
              </div>
              <div class="search-form-item">
                <div>观测时间</div>
                <el-form-item>
                  <div class="mul-input">
                    <el-date-picker v-model="FileOperationListParams.startObserveTime" type="datetime"
                      placeholder="开始时间" style="width:35%;" format="YYYY-MM-DD HH:mm:ss"
                      value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                    <span style="margin: 0 5px; color: white;">至</span>
                    <el-date-picker v-model="FileOperationListParams.endObserveTime" type="datetime" placeholder="结束时间"
                      style="width:35%;" format="YYYY-MM-DD HH:mm:ss"
                      value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                  </div>
                </el-form-item>
              </div>
              <div class="search-form-item">
                <div><span style="color: red; margin-left: 2px;">*</span>文件大小</div>
                <el-form-item :required="true">
                  <div class="mul-input">
                    <el-input v-model="FileOperationListParams.minSize" placeholder="最小值"
                      style="width: 110px;"></el-input>
                    <div>至</div>
                    <el-input v-model="FileOperationListParams.maxSize" placeholder="最大值"
                      style="width: 110px;"></el-input>
                    <el-select v-model="SearchDataSize" placeholder="单位" class="UnitSelect" :required="true">
                      <el-option label="B" :value=1></el-option>
                      <el-option label="KB" :value=1024></el-option>
                      <el-option label="MB" :value=1048576></el-option>
                      <el-option label="GB" :value=1073741824></el-option>
                    </el-select>
                  </div>
                </el-form-item>
              </div>
              <div class="search-form-item">
                <div><span style="color: red; margin-left: 2px;">*</span>存储桶名称</div>
                <el-form-item :required="true">
                  <el-select v-model="FileOperationListParams.bucketName" placeholder="请输入存储桶名称"
                    class="custom-placeholder">
                    <el-option v-for="item in bucketListStore" :key="item.name" :label="item.name" :value="item.name">
                      {{ item.name }}
                    </el-option>
                  </el-select>
                </el-form-item>
              </div>
              <div class="search-form-item">
                <div><span style="color: red; margin-left: 2px;">*</span>数据类型</div>
                <el-form-item :required="true">
                  <el-select v-model="dataType" placeholder="请选择数据类型">
                    <el-option label="txt" value="txt"></el-option>
                    <el-option label="pdf" value="pdf"></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </div>
          </el-form>
          <!-- <el-form :inline="true" label-align="left" class="FileOperationList">
            <el-row :gutter="12">
              <el-col :span="6">
                <el-form-item label="文件名" required="true">
                  <el-input v-model="FileOperationListParams.filename" placeholder="请输入文件名"
                    style="margin-left: 12px; width: 218px ;"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="操作用户名">
                  <el-input v-model="FileOperationListParams.operateUsername" placeholder="请输入操作用户名"
                    style="width: 216px;"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="更新用户">
                  <el-input v-model="FileOperationListParams.updateUser" placeholder="请输入更新用户"
                    style="width: 216px;"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="观测设备">
                  <el-input v-model="FileOperationListParams.observeDevice" placeholder="请输入观测设备"
                    style="width: 216px;"></el-input>
                </el-form-item>

              </el-col>
            </el-row>
            <el-row :gutter="12">
              <el-col :span="6">
                <el-form-item label="创建时间">
                  <el-date-picker v-model="FileOperationListParams.startCreateTime" type="datetime" placeholder="开始时间"
                    style="width:35%;" format="YYYY-MM-DD HH:mm:ss" value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                  <span style="margin: 0 5px;">~</span>
                  <el-date-picker v-model="FileOperationListParams.endCreateTime" type="datetime" placeholder="结束时间"
                    style="width:35%;" format="YYYY-MM-DD HH:mm:ss" value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="更新时间">
                  <el-date-picker v-model="FileOperationListParams.startUpdateTime" type="datetime" placeholder="开始时间"
                    style="width:35%; margin-left: 12px;" format="YYYY-MM-DD HH:mm:ss"
                    value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                  <span style="margin: 0 5px;">~</span>
                  <el-date-picker v-model="FileOperationListParams.endUpdateTime" type="datetime" placeholder="结束时间"
                    style="width:35%;" format="YYYY-MM-DD HH:mm:ss" value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="观测时间">
                  <el-date-picker v-model="FileOperationListParams.startObserveTime" type="datetime" placeholder="开始时间"
                    style="width:35%;" format="YYYY-MM-DD HH:mm:ss" value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                  <span style="margin: 0 5px;">~</span>
                  <el-date-picker v-model="FileOperationListParams.endObserveTime" type="datetime" placeholder="结束时间"
                    style="width:35%;" format="YYYY-MM-DD HH:mm:ss" value-format="YYYY-MM-DD HH:mm:ss"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="文件大小" required="true">
                  <el-input v-model="FileOperationListParams.minSize" placeholder="最小值" style="width: 37%;"></el-input>
                  <span style="margin: 0 5px;">~</span>
                  <el-input v-model="FileOperationListParams.maxSize" placeholder="最大值" style="width: 37%;"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="12">
              <el-col :span="6">
                <el-form-item label="存储桶名称" required="true">
                  <el-select v-model="FileOperationListParams.bucketName" placeholder="请输入存储桶名称" style="width: 204px;"
                    class="custom-placeholder">
                    <el-option v-for="item in bucketListStore" :key="item.name" :label="item.name" :value="item.name">
                      {{ item.name }}
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="数据类型" required="true">
                  <el-select v-model="FileOperationListParams.dataType" placeholder="请选择数据类型" style="width: 220px;">
                    <el-option label="txt" value="txt"></el-option>
                    <el-option label="pdf" value="pdf"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="6">
                <el-form-item>
                  <el-button type="primary" @click="FilesOperationListSubmit">查询</el-button>
                  <el-button type="default" @click="FilesOperationListReset">重置</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form> -->
          <!--查询按钮-->
          <div class="enquiry-form-button">
            <el-button type="primary" @click="FilesOperationListSubmit"><svg t="1749787554812" class="icon"
                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4252" width="200"
                height="200">
                <path
                  d="M448 170.666667a277.333333 277.333333 0 1 0 194.048 475.477333l1.92-2.176a30.549333 30.549333 0 0 1 2.133333-1.962667A277.333333 277.333333 0 0 0 448 170.666667z m0-85.333334a362.666667 362.666667 0 0 1 284.885333 587.136l193.28 193.365334a42.624 42.624 0 1 1-60.330666 60.330666l-193.365334-193.28A362.666667 362.666667 0 1 1 448 85.333333z"
                  fill="#ffffff" p-id="4253"></path>
              </svg>查询</el-button>
            <el-button type="default" @click="FilesOperationListReset"><svg t="1749787598937" class="icon"
                viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5303" width="200"
                height="200">
                <path
                  d="M948.712714 504.692147a35.363315 35.363315 0 1 0-70.2422 11.626295 364.290584 364.290584 0 0 1 4.84429 59.584763 371.072589 371.072589 0 0 1-633.63309 262.076071A371.072589 371.072589 0 0 1 511.757786 204.346187h12.595153L443.453301 285.245825a35.363315 35.363315 0 1 0 48.442897 48.442896l134.186824-134.186824a35.363315 35.363315 0 0 0 0-48.442896L493.833914 17.356605a35.363315 35.363315 0 1 0-48.442897 48.442897L509.335641 133.135129a442.283647 442.283647 0 0 0-169.550139 850.172838 442.768076 442.768076 0 0 0 581.314761-234.94805 444.221363 444.221363 0 0 0 29.065738-242.214483z"
                  fill="#5E5C5C" p-id="5304"></path>
              </svg>重置</el-button>
          </div>
          <!--结果表格-->
          <el-container direction="vertical">
            <el-table :data="FileListStore" stripe table-layout="fixed" fit="ture">
              <el-table-column prop="filename" label="文件名" show-overflow-tooltip></el-table-column>
              <el-table-column prop="operateUsername" label="操作用户名" show-overflow-tooltip></el-table-column>
              <el-table-column prop="operateType" label="操作类型" show-overflow-tooltip></el-table-column>
              <el-table-column prop="createTime" label="创建时间" show-overflow-tooltip></el-table-column>
              <el-table-column prop="updateTime" label="更新时间" show-overflow-tooltip></el-table-column>
              <el-table-column prop="observeTime" label="观测时间" show-overflow-tooltip></el-table-column>
              <el-table-column prop="uploadTime" label="上传时间" show-overflow-tooltip></el-table-column>
              <el-table-column prop="updateUser" label="更新用户" show-overflow-tooltip></el-table-column>
              <el-table-column prop="bucketName" label="存储桶名称" show-overflow-tooltip></el-table-column>
              <el-table-column prop="observeObject" label="观测对象" show-overflow-tooltip></el-table-column>
              <el-table-column prop="dataType" label="数据类型" width="80" show-overflow-tooltip></el-table-column>
              <el-table-column prop="observeDevice" label="设备编号" show-overflow-tooltip></el-table-column>
              <el-table-column prop="path" label="文件路径" show-overflow-tooltip></el-table-column>
              <el-table-column prop="downloadUrl" label="操作" width="180" show-overflow-tooltip>
                <template #default="scope">
                  <el-button type="primary" size="small" @click="openDownloadUrl(scope.row.downloadUrl)">下载</el-button>
                  <el-button type="warning" size="small" @click="() => handleDelete(scope.row.id)">分享</el-button>
                </template>
              </el-table-column>
            </el-table>
            <!-- 分页组件 -->

            <div style="display: flex;  margin: 18px 0px 5px 0px;  justify-content: space-between;">
              <div><span style=" color: #606266;">共 {{ pagecount }} 页/ {{ totalElements
              }}条</span>
              </div>
              <el-pagination v-if="FileListStore.length > 0" :current-page="(FileOperationListParams.page + 1)"
                :page-sizes="[10, 20, 30, 40]" :page-size="FileOperationListParams.size" :page-count="pagecount"
                @current-change="handlePageChange" layout="prev, pager, next, jumper">
              </el-pagination>
            </div>


            <!-- <div class="table-page">
              <span style="color: white; font-weight: lighter; font-size: medium;">共 {{ pagecount }} 页</span>
              <div style="margin: 20px 20px 0px; display: flex; justify-content: flex-end;">
                <el-pagination v-if="FileListStore.length > 0" :current-page="currentPage"
                  :page-size="FileOperationListParams.size" :total="totalElements" :page-count="pagecount"
                  @current-change="handlePageChange" layout="prev, pager, next, jumper, total,slot"
                  class="pagination-container">
                  <template #slot> </template></el-pagination>
              </div>
            </div> -->
          </el-container>

        </el-main>
      </el-container>

    </el-scrollbar>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DataUpload',
}
</script>

<script setup lang="ts">

import { onMounted, ref, watch, computed } from 'vue';
import type { FileOperationParams as FileOperationListParams, FileOperationRecord, BucketListData } from '@/types/DocOperation';
import { fileUpload, fileOperationList, } from '@/stores/DocSystem/fileStore'
import { BucketStore } from '@/stores/DocSystem/fileStore'
import { UploadFilled } from '@element-plus/icons-vue'
import '@/assets/iconfont/iconfont.js'

//******用于数据上传部分********//
interface uploadFill {
  filename: string; //存储显示⽂件名
  observer_object: string; //观测对象标识
  observer_time: string;//观测时间(ISO8601格式)
  observer_device: string; //测设备编号
  data_type: string; //数据类型标识
  path: string;
  bucketName: string; //存储桶名称
  createTime: string; //文件创建时间
}

const uploadIterm = ref<uploadFill>({
  filename: '',
  observer_object: '',
  observer_time: '',
  observer_device: '',
  data_type: '',
  path: '',
  bucketName: '',
  createTime: '',
});
///////上传进度调展示
const uploadProgress = ref(0); // 存储上传进度

const handleProgress = (event: { percent: number }, file: File) => {
  uploadProgress.value = Math.round(event.percent); // 更新进度
};


///////
const uploadedFiles = ref<File[]>([]); // 存储上传的文件列表

const handleBeforeUpload = (file: File) => {
  uploadedFiles.value.push(file); // 将文件添加到列表中

  /////////////////////////未完待续///////////////////////////////////

  console.log('文件已准备好:', file.name);
  return false; // 阻止默认上传行为
};
const handleSuccess = (response: unknown, file: File) => {
  console.log('文件上传成功:', response);
};
const handleError = (error: unknown, file: File) => {
  console.error('文件上传失败:', error);
};

const removeFile = (index: number) => {
  uploadedFiles.value.splice(index, 1); // 从列表中删除文件
  console.log('文件已删除:', index);
};

const DataReset = () => {
  uploadIterm.value.filename = '';
  uploadIterm.value.observer_object = '';
  uploadIterm.value.observer_time = '';
  uploadIterm.value.observer_device = '';
  uploadIterm.value.data_type = '';
  uploadIterm.value.path = '';
  uploadedFiles.value = []; // 清空上传的文件列表
};

//上传数据合并
function mergeData() {
  fileUpload().fileUploadinfo.bucket_name = uploadIterm.value.bucketName;
  fileUpload().fileUploadinfo.filename = uploadIterm.value.filename;
  fileUpload().fileUploadinfo.observer_object = uploadIterm.value.observer_object;
  fileUpload().fileUploadinfo.observer_time = uploadIterm.value.observer_time;
  fileUpload().fileUploadinfo.observer_device = uploadIterm.value.observer_device;
  fileUpload().fileUploadinfo.data_type = uploadIterm.value.data_type;
  fileUpload().fileUploadinfo.path = uploadIterm.value.path;
  fileUpload().fileUploadinfo.create_time = uploadIterm.value.createTime;
}

// watch(uploadIterm, (newVal) => {
//   fileUpload().fileUploadinfo.filename = newVal.filename;
//   fileUpload().fileUploadinfo.observerObject = newVal.observer_object;
//   fileUpload().fileUploadinfo.observerTime = newVal.observer_time;
//   fileUpload().fileUploadinfo.observerDevice = newVal.observer__device;
//   fileUpload().fileUploadinfo.dataType = newVal.data_type;
//   fileUpload().fileUploadinfo.path = newVal.path;
//   console.log('uploadIterm:', newVal);
// });

const handleChange = (file: File) => {
  console.log('文件选择更改:', file.name);
};

const UploadToServer = () => {
  mergeData(); // 合并数据
  fileUpload().fileUploadinfo.file = uploadedFiles.value[0]; // 将文件存储到变量中
  const success = fileUpload().fetchFileUpload(fileUpload().fileUploadinfo);
  DataReset();
};


//**********************************文件操作列表查询*************************//

const SearchDataSize = ref(1024); //用于文件操作查询的文件大小单位，默认为B



//查询参数
const FileOperationListParams = ref<FileOperationListParams>(
  /**用于直接向后端提交的数据，可更改每页显示条数*/
  {
    filename: '',
    operateUsername: '', //操作用户名
    updateUser: '',  //更新用户
    bucketName: '',  //存储桶名称
    path: '',
    minSize: 0,
    maxSize: 0,
    startCreateTime: '',
    endCreateTime: '',
    startUpdateTime: '',
    endUpdateTime: '',
    startObserveTime: '',
    endObserveTime: '',
    page: 0, //当前页码
    size: 5, //每页显示的条数，可以根据后续需要更改。
    dataType: '', //数据类型，后续新变量可合并
    observeDevice: '',
  }
);

const FileListStore = ref<FileOperationRecord[]>([
  /**从后端得到的数据值变化后从新渲染此值*/
  {
    id: 1,
    operateUsername: '仅用于测试',
    operateType: '上传',
    fileIndexId: 1,
    filename: '数据文件1.csv',
    size: 1024,
    createTime: '2025-04-16 10:00',
    updateTime: '2025-04-16 10:00',
    uploadTime: '2025-04-16 10:00',
    observeTime: '2025-04-16 10:00',
    updateUser: '用户1',
    bucketName: '存储桶1',
    path: '/path/to/数据文件1.csv',
    downloadUrl: 'http://example.com/download/数据文件1.csv',
    observeObject: '观测对象1',
    dataType: 'csv',
    observeDevice: '设备1',
  },])

const dataType = ref(''); //用于FileOperationListParams中的dataType中间值，以便于灵活更改。

function OperationParamsMerge() {

  FileOperationListParams.value.dataType = dataType.value;
  FileOperationListParams.value.minSize = Math.floor((FileOperationListParams.value.minSize ?? 0) * SearchDataSize.value);
  FileOperationListParams.value.maxSize = Math.ceil((FileOperationListParams.value.maxSize ?? 0) * SearchDataSize.value);
}

watch(() => fileOperationList().fileOperationResList, (newVal) => { //文件操作列表查询信息写入
  if (newVal != null) { FileListStore.value = newVal; }
}
);

// 表格分页相关
//当前页;
const currentPage = ref(FileOperationListParams.value.page + 1); // 当前页码
//每页条数;数据来源为FileOperationListParams中的page，及向后端提交的页码
// const pageSize = computed({
//   get: () => FileOperationListParams.value.size, // 修改为 pageSize
//   set: (value) => {
//     FileOperationListParams.value.size = value; // 修改为 pageSize
//   },
// });
//总页数;数据来源为fileOperationList().pagination.totalPages；来自后端数据
const pagecount = computed({
  get: () => fileOperationList().pagination.totalPages,
  set: (value) => {
    fileOperationList().pagination.totalPages = value;
  },
  // console.log("总页数", fileOperationList().pagination.totalPage)
});

//元素总个数
const totalElements = computed({
  get: () => fileOperationList().pagination.totalElements,
  set: (value) => {
    fileOperationList().pagination.totalElements = value;
  },
});


// 当页数改变时，重新请求后端数据
const handlePageChange = (page: number) => {
  if (page < 0 || page > pagecount.value) {
    console.error('页码不在有效范围内:', page);
    return; // 如果页码不在有效范围内，直接返回
  }
  else {
    console.log('提交页:', page);
    console.log('总页数:', pagecount.value);
    currentPage.value = page;
    console.log('页数改变:', currentPage.value);
    FileOperSubmit(currentPage.value);
  }

  // FileOperationListParams.value.page = page; // 更新当前页码

};

// const handlepervClick = () => {
//   if (currentPage.value > 1) {
//     currentPage.value -= 1;
//     paginatedFileList.value = FileListStore.value.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value);
//   }
// };

// const handlenextClick = () => {
//   const totalPages = Math.ceil(FileListStore.value.length / pageSize.value);
//   if (currentPage.value < totalPages) {
//     currentPage.value += 1;
//     paginatedFileList.value = FileListStore.value.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value);
//   }
// };


// 确保 paginatedFileList 是一个 ref，用于动态更新表格数据
// const paginatedFileList = ref(
//   FileListStore.value.slice((currentPage.value - 1) * pageSize.value, currentPage.value * pageSize.value)
// );


/*****分页功能***********/

const FilesOperationListSubmit = () => { //用于文件操作查询按钮
  OperationParamsMerge()
  console.log('查询条件:', FileOperationListParams.value);
  fileOperationList().fetchFileOperationList(FileOperationListParams.value);
  // FilesOperationListReset();
};

const FileOperSubmit = (page: number) => {  //用于文件操作换页数据重新提交
  FileOperationListParams.value.page = (page - 1);
  fileOperationList().fetchFileOperationList(FileOperationListParams.value);
};

const FilesOperationListReset = () => { //用于文件操作查询重置按钮
  FileOperationListParams.value.filename = '';
  FileOperationListParams.value.operateUsername = '';
  FileOperationListParams.value.updateUser = '';
  FileOperationListParams.value.bucketName = '';
  FileOperationListParams.value.path = '';
  FileOperationListParams.value.minSize = 0;
  FileOperationListParams.value.maxSize = 0;
  FileOperationListParams.value.startCreateTime = '';
  FileOperationListParams.value.endCreateTime = '';
  FileOperationListParams.value.startUpdateTime = '';
  FileOperationListParams.value.endUpdateTime = '';
  FileOperationListParams.value.startObserveTime = '';
  FileOperationListParams.value.endObserveTime = '';
  OperationParamsMerge();
  console.log('重置查询条件');
}

const openDownloadUrl = (url: string) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = ''; // 设置 download 属性以触发下载
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const handleDelete = (id: number) => {
  console.log('删除文件，ID:', id);
  // 在这里执行删除操作
};


/////****功能性展示 **************////////
const bucketListStore = ref<BucketListData[]>([]);
watch(() => BucketStore().bucketList, (newVal) => { //文件操作列表查询信息写入
  bucketListStore.value = newVal;
}
);

onMounted(() => {
  BucketStore().fetchBucketList();
});

// const GetbucketList = () => {
//   BucketStore().fetchBucketList();
// };

// const FileDownload = ref(''); //文件下载测试
</script>

<style scoped lang="scss">
@use './index.scss';
@use '@/styles/icon.scss';

/* 修改 placeholder 的字体颜色 */
::v-deep(.el-select .el-input__inner)::placeholder {
  color: red !important;
  /* 将 placeholder 的字体颜色设置为红色 */
  opacity: 1;
  /* 确保颜色不被透明度影响 */
}

// .FileOperationList {
//   padding: 0 20px;
//   /* display: flex;
//   justify-content: space-between; */


// }

/* 仅针对 class 为 custom-placeholder 的输入框 */
.custom-placeholder::placeholder {
  color: blue;
  /* 将 placeholder 的字体颜色设置为蓝色 */
  opacity: 1;
}



.uploaded-files {
  margin-top: 20px;
  height: auto;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  color: black;
}

span {
  color: black;
}

.Functional-display-container {
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f900;
  border-radius: 5px;
}

.bucket-list-container {
  margin-top: 20px;
  /* padding: 20px; */
  background-color: #f9f9f900;
  border-radius: 5px;
}

.SingleFileDownload {
  margin-top: 20px;
  /* padding: 20px; */
  background-color: #f9f9f900;
  border-radius: 5px;
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
  gap: 2px;
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

// .upload-files-div {
//   /* 上传的文件列表 + 按钮 */
//   width: 475px;
//   height: 211px;
//   padding: 0px 0px 0px 16px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   gap: 8px;
//   background-color: rgb(255, 255, 255) !important;
// }</style>
