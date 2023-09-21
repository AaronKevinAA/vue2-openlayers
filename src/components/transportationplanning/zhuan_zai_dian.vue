<script>
export default {
  data(){
    return {
      tableData1: [
        {
          "ID": "port1",
          "港口名称": "码头1",
          "经度": 118.20849609375,
          "纬度": 24.3182373046875,
          "装载方式": "滚装",
          "吨位": 5000,
          "水深": 9,
          "长度": 300,
          "宽度": 50,
          "同时装载船数": 1
        },
        {
          "ID": "port2",
          "港口名称": "码头2",
          "经度": 118.7578125,
          "纬度": 24.642333984375,
          "装载方式": "滚装",
          "吨位": 5000,
          "水深": 9,
          "长度": 250,
          "宽度": 50,
          "同时装载船数": 2
        },
        {
          "ID": "port3",
          "港口名称": "码头3",
          "经度": 117.20599365234375,
          "纬度": 23.52447509765625,
          "装载方式": "吊装",
          "吨位": 6000,
          "水深": 9,
          "长度": 180,
          "宽度": 30,
          "同时装载船数": 1
        },
        {
          "ID": "port4",
          "港口名称": "码头4",
          "经度": 116.8681640625,
          "纬度": 23.3074951171875,
          "装载方式": "滚装",
          "吨位": 6000,
          "水深": 9,
          "长度": 140,
          "宽度": 50,
          "同时装载船数": 2
        }
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
  },
  methods:{
    getAssignResultData(){
      const resultObject = this.$store.state.assignResult
      const resultArray = Object.entries(resultObject).map(([key, value]) => ({
        hull: key,
        ship_type: value.ship_type,
        location: value.location,
        type: value.type,
        time: value.time
      }));
      console.log(resultArray);
      return resultArray
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
            <el-table :data="this.$store.state.jiJieDianData"  border stripe style="width: 100%">
              <el-table-column prop="date" label="装载点名称" width="60">
                <template slot-scope="scope">
                  {{ scope.row.港口名称 }}
                </template>
              </el-table-column>
              <el-table-column prop="name" label="装载方式" width="70">
                <template slot-scope="scope">
                  {{ scope.row.装载方式 }}
                </template>
              </el-table-column>
              <el-table-column prop="address" label="吨位" width="70">
                <template slot-scope="scope">
                  {{ scope.row.吨位 }}
                </template>
              </el-table-column>

              <el-table-column prop="address" label="水深" width="70">
                <template slot-scope="scope">
                  {{ scope.row.水深 }}
                </template>
              </el-table-column>

              <el-table-column prop="address" label="长/宽" width="70">
                <template slot-scope="scope">
                  {{ scope.row.长度 + '/' +  scope.row.宽度}}
                </template>
              </el-table-column>

              <el-table-column prop="address" label="同时装载数量" width="200">
                <template slot-scope="scope">
                  {{ scope.row.同时装载船数 }}
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

            <el-table :data="getAssignResultData()" border stripe style="width: 100%">
              <el-table-column prop="date" label="运输船号" width="80">
                <template slot-scope="scope">
                  {{ scope.row.ship_type }}
                </template>
              </el-table-column>
              <el-table-column prop="name" label="舷号" width="80">
                <template slot-scope="scope">
                  {{ scope.row.hull }}
                </template>
              </el-table-column>
              <el-table-column prop="address" label="装载点" width="80">
                <template slot-scope="scope">
                  {{ scope.row.location }}
                </template>
              </el-table-column>

              <el-table-column prop="address" label="装在方式" width="80">
                <template slot-scope="scope">
                  {{ scope.row.type }}
                </template>
              </el-table-column>

              <el-table-column prop="address" label="装载时间" width="200">
                <template slot-scope="scope">
                  {{ scope.row.time }}
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