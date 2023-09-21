<template>
    <div class="table-container">
<!--      <el-table :data="this.$store.state.loadVesselData" style="width: 100%">-->
        <el-table :data="getShipData()" style="width: 100%">
            <el-table-column prop="isCheck" label="选择" width="90">
                <template slot-scope="scope">
                    <!-- {{ scope }} -->
                    <el-checkbox @change="buttonChange(scope.row.ID)">
                    </el-checkbox>
                </template>
            </el-table-column>
            <el-table-column prop="date" label="装备类型" width="150">
                <template slot-scope="scope">
                    {{ scope.row.运输船类型 }}
                </template>
            </el-table-column>
            <el-table-column prop="name" label="型号" width="150">
                <template slot-scope="scope">
                    {{ scope.row.型号 }}
                </template>
            </el-table-column>
<!--            <el-table-column prop="address" label="船号" width="90">-->
<!--                <template slot-scope="scope">-->
<!--                    {{ scope.row.address }}-->
<!--                </template>-->
<!--            </el-table-column>-->
        </el-table>

<!--        <el-button @click="nextButton">下一步</el-button>-->
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            // tableData: [
            //     {
            //         isCheck: false,
            //         id: '1',
            //         date: '登陆舰',
            //         name: '071',
            //         address: '123'
            //     },
            //     {
            //         id: '2',
            //         isCheck: false,
            //         date: '登陆舰',
            //         name: '072',
            //         address: '456'
            //     },
            //     {
            //         isCheck: false,
            //         id: '3',
            //         date: '登陆舰',
            //         name: '073',
            //         address: 'xxx'
            //     }
            // ],
            // selectShipList: []
        }
    },
    methods: {

        getShipData(){
          let data =[...this.$store.state.loadVesselData]
          // const selectList = ['ship_071']
          const selectList = this.$store.state.junDuiShip
          const filteredData = data.filter(item=> selectList.includes(item.ID))
          return filteredData
        },
        buttonChange(value) {
            // console.log(value)
            if (this.$store.state.selectShipList.includes(value)) {
                // this.selectShipList.splice(this.selectShipList.indexOf(value), 1);
                this.$store.commit('removeSelectShipList',value)
            } else {
                // this.selectShipList.push(value);
                this.$store.commit('pushSelectShipList',value)
            }
            // console.log((this.$store.state.selectShipList))
        },

        nextButton(){
            console.log(this.selectShipList)
        }
    }
}
</script>