<script>
export default {
  data(){
    return {
      tableData1: [
        {
          id: '1',
          ship: '东山港',
          hull: '滚装',
          pepoleNumber: '500吨',
          strength: '9米',
          equitment: '120/22米',
          sameNumber:'1'
        },
      ],

      tableData2: [
        {
          id: '1',
          ship: '登陆舰',
          hull: '071',
          pepoleNumber: '东山港',
          strength: '码头吊装',
          equitment: '1.60小时',
        },
      ],
    }
  }
}
</script>

<template>
<div>




  <div class="split-container">
    <el-row :gutter="20">
        <!-- 左侧区域 -->
        <el-col :span="12">
          <div >
            <!-- 左侧内容 -->
            <el-table :data="tableData1"  border stripe style="width: 100%">
              <el-table-column prop="date" label="装载点名称" width="60">
                <template slot-scope="scope">
                  {{ scope.row.ship }}
                </template>
              </el-table-column>
              <el-table-column prop="name" label="装载方式" width="70">
                <template slot-scope="scope">
                  {{ scope.row.hull }}
                </template>
              </el-table-column>
              <el-table-column prop="address" label="吨位" width="70">
                <template slot-scope="scope">
                  {{ scope.row.pepoleNumber }}
                </template>
              </el-table-column>

              <el-table-column prop="address" label="水深" width="70">
                <template slot-scope="scope">
                  {{ scope.row.strength }}
                </template>
              </el-table-column>

              <el-table-column prop="address" label="长/宽" width="70">
                <template slot-scope="scope">
                  {{ scope.row.equitment }}
                </template>
              </el-table-column>

              <el-table-column prop="address" label="同时装载数量" width="200">
                <template slot-scope="scope">
                  {{ scope.row.sameNumber }}
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-col>

      <!-- 右侧区域 -->
      <el-col :span="12">
        <div >
          <!-- 右侧内容 -->
          <div>

            <el-table :data="tableData2" border stripe style="width: 100%">
              <el-table-column prop="date" label="运输船号" width="80">
                <template slot-scope="scope">
                  {{ scope.row.ship }}
                </template>
              </el-table-column>
              <el-table-column prop="name" label="舷号" width="80">
                <template slot-scope="scope">
                  {{ scope.row.hull }}
                </template>
              </el-table-column>
              <el-table-column prop="address" label="装载点" width="80">
                <template slot-scope="scope">
                  {{ scope.row.pepoleNumber }}
                </template>
              </el-table-column>

              <el-table-column prop="address" label="装在方式" width="80">
                <template slot-scope="scope">
                  {{ scope.row.strength }}
                </template>
              </el-table-column>

              <el-table-column prop="address" label="装载时间" width="200">
                <template slot-scope="scope">
                  {{ scope.row.equitment }}
                </template>
              </el-table-column>

            </el-table>
          </div>
        </div>
      </el-col>

    </el-row>
  </div>
</div>
</template>

<style scoped>
.split-container{
  margin-top: 5px;
  margin-bottom: 5px;
}
.left-content{
  margin-left: 5px;
}
</style>