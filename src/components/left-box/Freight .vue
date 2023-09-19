<template>
  <div>
    <!-- 创建一个按钮，点击时弹出弹出框 -->
    <el-button v-popover:popover style="width: 100px;">装载兵力</el-button>

    <!-- 创建弹出框和卡片 -->
    <el-popover ref="popover" placement="right" width="200" trigger="click">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>装载兵力</span>
          <!-- 在卡片中添加一个按钮 -->
          <el-button style="float: right; padding: 3px 0" type="text" @click.stop="showTable">详情</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{ '列表内容 ' + o }}
        </div>
      </el-card>
      <!-- 弹出框和表格 -->
      <el-dialog :visible.sync="isTableVisible" width="50%" :modal="false">
        <el-select v-model="selectedType" placeholder="请选择" @change="handleFilter">
          <el-option label="全选" value="all"></el-option>
          <el-option
            v-for="item in types"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-table :data="filteredData" style="width: 100%" height="500" @selection-change="handleSelectionChange">
          <!-- 在这里添加你的表格列 -->
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column width="100" property="equipment" label="装备类型"></el-table-column>
            <el-table-column width="100" property="model" label="型号"></el-table-column>
            <el-table-column width="100" property="length" label="长度(米)"></el-table-column>
            <el-table-column width="100" property="high" label="高度(米)"></el-table-column>
            <el-table-column width="100" property="draft" label="吃水(米)"></el-table-column>
            <el-table-column width="100" property="weight" label="重量(吨)"></el-table-column>
            <el-table-column width="100" property="max_speed" label="最大航速(节)"></el-table-column>
            <el-table-column width="100" property="quantity" label="数量"></el-table-column> 
        </el-table>
        <div style="display: flex; justify-content: flex-end;">
          <el-button @click="submitSelectedRows">提交</el-button>
        </div>
      </el-dialog>
    </el-popover>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isTableVisible: false,
            filteredData: [],
            types: [{ label: '全选', value: 'all' }], // 所有种类
            selectedType: 'all',//被选中的类型
            selectedRows:[],//被选择的信息
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
            this.filteredData = this.tableData;
            // 提取所有可能的类型
            const uniqueTypes = [...new Set(this.tableData.map(row => row.equipment))];
            // 将每个类型转换为el-option需要的格式
            this.types = uniqueTypes.map(type => ({ value: type, label: type }));
        },
        handleFilter() {
          if (this.selectedType && this.selectedType !== 'all') {
            this.filteredData = this.tableData.filter(row => row.equipment === this.selectedType);
          } else {
            this.filteredData = this.tableData;
          }
        },
        handleSelectionChange(selectedRows) {
          this.selectedRows = selectedRows;
        },
        submitSelectedRows() {
          // 在这里把 this.selectedRows 发送到后台
          //修改为正确api即可
            axios.post('/api1', this.selectedRows)
            .then(response => {
              console.log(response.data);
            })
            .catch(error => {
              console.error(error);
            });
        }    
    },
    computed: {
      tableData() {
        return this.$store.state.freightTableData;
      }
    },
    created() {
      this.$store.commit('SetFreightTableData', [{
            equipment: '0陆舰',
            model: '071虎',
            length: 200,
            high:20,
            draft:5,
            weight:2000,
            max_speed:100,
            quantity:1000,
            }, {
            equipment: '1陆舰',
            model: '071虎',
            length: 200,
            high:20,
            draft:5,
            weight:2000,
            max_speed:100,
            quantity:1000,
            }, {
            equipment: '登陆舰',
            model: '071虎',
            length: 200,
            high:20,
            draft:5,
            weight:2000,
            max_speed:100,
            quantity:1000,
            }, {
            equipment: '登陆舰',
            model: '071虎',
            length: 200,
            high:20,
            draft:5,
            weight:2000,
            max_speed:100,
            quantity:1000,
            }]);
    },
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
