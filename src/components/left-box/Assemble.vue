<template>
  <div>
    <!-- 创建一个按钮，点击时弹出弹出框 -->
    <el-button v-popover:popover style="
      width: 100px; 
      display: flex;
      align-items: center;
      justify-content: center;">集结区展示</el-button>

    <!-- 创建弹出框和卡片 -->
    <el-popover ref="popover" placement="right" width="200" trigger="click">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>集结区展示</span>
          <!-- 在卡片中添加一个按钮 -->
          <el-button style="float: right; padding: 3px 0" type="text" @click.stop="showTable">详情</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{ '列表内容 ' + o }}
        </div>
      </el-card>
      <!-- 弹出框和表格 -->
      <el-dialog :visible.sync="isTableVisible" width="45%" :modal="false">
        <el-table :data="tableData" style="width: 100%" height="500">
          <!-- 在这里添加你的表格列 -->
            <el-table-column width="150" property="region" label="区域名称"></el-table-column>
            <el-table-column width="150" property="longitude" label="左上经度"></el-table-column>
            <el-table-column width="150" property="latitude" label="左上纬度"></el-table-column>
            <el-table-column width="150" property="length" label="长度(千米)"></el-table-column>
            <el-table-column width="150" property="width" label="宽度(千米)"></el-table-column>  
        </el-table>
      </el-dialog>
    </el-popover>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isTableVisible: false,
        };
    },
    methods: {
        handleClick() {
            this.$refs.popover.show();
        },
        showTable() {
            this.isTableVisible = true;
                // 在这里设置你的表格数据
            //this.tableData = ;
        }
    },
    created() {
      this.$store.commit('setAssembleTableData', [{
            region : '1-A',
            longitude: '120°28`',
            latitude: '25°06`',
            length: 100,
            width: 50
            }, {
            region : '1-B',
            longitude: '120°28`',
            latitude: '25°06`',
            length: 100,
            width: 50
            }, {
            region : '1-C',
            longitude: '120°28`',
            latitude: '25°06`',
            length: 100,
            width: 50
            }, {
            region : '1-D',
            longitude: '120°28`',
            latitude: '25°06`',
            length: 100,
            width: 50
            }, {
            region : '1-E',
            longitude: '120°28`',
            latitude: '25°06`',
            length: 100,
            width: 50
            }, {
            region : '1-F',
            longitude: '120°28`',
            latitude: '25°06`',
            length: 100,
            width: 50
            }, {
            region : '1-G',
            longitude: '120°28`',
            latitude: '25°06`',
            length: 100,
            width: 50
            }, {
            region : '1-H',
            longitude: '120°28`',
            latitude: '25°06`',
            length: 100,
            width: 50
            }, {
            region : '1-I',
            longitude: '120°28`',
            latitude: '25°06`',
            length: 100,
            width: 50
            }, {
            region : '1-J',
            longitude: '120°28`',
            latitude: '25°06`',
            length: 100,
            width: 50
            }]);
    },
    computed: {
      tableData() {
        return this.$store.state.assembleTableData;
      }
    }
};
</script>

<style scoped>
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}

</style>
