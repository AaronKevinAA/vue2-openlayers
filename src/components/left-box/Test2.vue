<template>
  <div>
    <el-popover placement="right" width="200" trigger="click">
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick">
        <template slot-scope="{ node }">
          <span class="custom-tree-node">
            <span>{{ node.label }}</span>
            <span v-if="node.level === 1">
              <el-button style="float: right; padding: 3px 0" type="text" @click.stop="showTable(node)">详情</el-button>
            </span>
          </span>
        </template>
      </el-tree>
      <el-button slot="reference" style="width: 100px;">输送兵力</el-button>
    </el-popover>

    <!-- 弹出框和表格 -->
    <el-dialog :visible.sync="isTableVisible" width="50%" :modal="false">
      <el-select v-model="selectedType" placeholder="请选择" @change="handleFilter">
        <el-option label="全选" value="all"></el-option>
        <el-option v-for="item in types" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <el-table :data="filteredData" style="width: 100%" v-if="currentTableType === 'type1'" @selection-change="handleSelectionChange1">
        <!-- 在这里添加表格列 -->
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

      <el-table :data="filteredData" style="width: 100%" v-if="currentTableType === 'type2'" @selection-change="handleSelectionChange2">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column width="100" property="shell2" label="炮弹类型"></el-table-column>
        <el-table-column width="100" property="model2" label="炮弹型号"></el-table-column>
        <el-table-column width="100" property="num2" label="单箱转载弹数(枚)"></el-table-column>
        <el-table-column width="100" property="weight2" label="单发炮弹重量(KG)"></el-table-column>
        <el-table-column width="100" property="length2" label="弹箱长度(米)"></el-table-column>
        <el-table-column width="100" property="width2" label="弹箱宽度(米)"></el-table-column>
        <el-table-column width="100" property="high2" label="弹箱高度(米)"></el-table-column>
        <el-table-column width="100" property="quantity2" label="弹箱数量(箱)"></el-table-column>
      </el-table>
      <div style="display: flex; justify-content: flex-end;">
        <el-button @click="submitSelectedRows">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Test2',
  data() {
    return {
      isTableVisible: false,//表格是否可见
      currentNode: null,//当前的树节点
      currentTableType: null, // 当前表格类型
      types: [{ label: '全选', value: 'all' }], // 型号的所有种类
      filteredData: [],//筛选的数据
      selectedType: 'all',//被选中的型号类型
      selectedRows1:[],//两种表被选择的信息
      selectedRows2:[],
      defaultProps: {
        children: 'children',
        label: 'label',
        dialogType: 'dialogType'
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    showTable(node) {  //在点击详情之后按照表格类型加载表格数据
      this.currentNode = node;
      this.currentTableType = node.data.dialogType; // 设置当前表格类型
      // 提取所有可能的类型
      const uniqueTypes = [
        ...new Set(
          this.currentTableType === 'type1'
            ? this.tableData1.map(row => row.equipment)
            : this.tableData2.map(row => row.shell2)
        )
      ];
      // 将每个类型转换为 el-option 需要的格式
      this.types = uniqueTypes.map(type => ({ value: type, label: type }));
      console.log('this.types的值为：',this.types)
      this.isTableVisible = true;
      if (this.currentTableType === 'type1') {
        this.filteredData = this.tableData1;
        } else if (this.currentTableType === 'type2') {
            this.filteredData = this.tableData2;
        }
        console.log('filteredData为：',this.filteredData)
    },
    handleFilter() {
      if (this.currentTableType === 'type1') {
        if (this.selectedType && this.selectedType !== 'all') {
          this.filteredData = this.tableData1.filter(row => row.equipment === this.selectedType);
        } else {
          this.filteredData = this.tableData1;
        }
      } else if (this.currentTableType === 'type2') {
        if (this.selectedType && this.selectedType !== 'all') {
          this.filteredData = this.tableData2.filter(row => row.shell2 === this.selectedType);
        } else {
          this.filteredData = this.tableData2;
        }
      }
    },
    handleSelectionChange1(selectedRows) {
      this.selectedRows1 = selectedRows;
    },
    handleSelectionChange2(selectedRows) {
      this.selectedRows2 = selectedRows;
    },
    submitSelectedRows() {
      // 在这里把 this.selectedRows 发送到后台
      //修改为正确api即可
      if (this.currentTableType === 'type1') {
        axios.post('/api1', this.selectedRows)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
      } else if (this.currentTableType === 'type2') {
        axios.post('/api2', this.selectedRows)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
      }
    }

  },
  created() {
      this.$store.commit('SetTroopsTableData', [{
          equipment: '1陆舰',
          model: '071虎',
          length: 200,
          high:20,
          draft:5,
          weight:2000,
          max_speed:100,
          quantity:1000,
        }, {
          equipment: '2陆舰',
          model: '071虎',
          length: 200,
          high:20,
          draft:5,
          weight:2000,
          max_speed:100,
          quantity:1000,
        }, {
          equipment: '3陆舰',
          model: '071虎',
          length: 200,
          high:20,
          draft:5,
          weight:2000,
          max_speed:100,
          quantity:1000,
        }, {
          equipment: '4陆舰',
          model: '071虎',
          length: 200,
          high:20,
          draft:5,
          weight:2000,
          max_speed:100,
          quantity:1000,
        }]);
      this.$store.commit('SetAmmunitionTableData', [{
          shell2: '0逐舰',
          model2: '071虎',
          num2: 200,
          weight2:20,
          length2:5,
          width2:2000,
          high2:100,
          quantity2:1000,
        }, {
          shell2: '1逐舰',
          model2: '071虎',
          num2: 200,
          weight2:20,
          length2:5,
          width2:2000,
          high2:100,
          quantity2:1000,
        }, {
          shell2: '2逐舰',
          model2: '071虎',
          num2: 200,
          weight2:20,
          length2:5,
          width2:2000,
          high2:100,
          quantity2:1000,
        }, {
          shell2: '3逐舰',
          model2: '071虎',
          num2: 200,
          weight2:20,
          length2:5,
          width2:2000,
          high2:100,
          quantity2:1000,
        }]);
      this.$store.commit('SetTreeData', [
        {
          label: '兵力',
          dialogType: 'type1',
          children: [{
            label: '坦克一营',
            children: [{
              label: '坦克一连'
            },{
              label: '坦克二连'
            },{
              label: '坦克三连'
            }]
          },{
            label: '炮兵一营',
            children: [{
              label: '炮兵一连'
            },{
              label: '炮兵二连'
            },{
              label: '炮兵三连'
            }]
          }]
        }, {
          label: '装备',
          dialogType: 'type1',
          children: [{
            label: '坦克一营',
            children: [{
              label: '坦克一连'
            },{
              label: '坦克二连'
            },{
              label: '坦克三连'
            }]
          }]
        }, {
          label: '弹药',
          dialogType: 'type2',
          children: [{
            label: '迫击炮一营',
            children: [{
              label: '迫击炮一连'
            },{
              label: '迫击炮二连'
            },{
              label: '迫击炮三连'
            }]
          }]
        }
      ]);
      // 在组件创建时，初始化currentTableType
      if (this.data.length > 0) {
        this.currentTableType = this.data[0].dialogType;
        console.log('创建组件是this.data[0].dialogType的值为：',this.data[0].dialogType)
      }
    },
  computed: {
      tableData1() {
        return this.$store.state.troopsTableData;
      },
      tableData2() {
        return this.$store.state.ammunitionTableData;
      },
      data() {
        return this.$store.state.treeData;
      }
  }
};
</script>

<style scoped>
/* 这里可以写样式，使用 scoped 属性表示样式只作用于当前组件 */
.custom-tree-node {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
