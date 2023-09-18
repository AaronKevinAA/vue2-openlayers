<template>
    <div class="table-container">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="isCheck" label="选择" width="180">
                <template slot-scope="scope">
                    <!-- {{ scope }} -->
                    <el-checkbox @change="buttonChange(scope.row.id)">
                    </el-checkbox>
                </template>
            </el-table-column>
            <el-table-column prop="date" label="装备类型" width="180">
                <template slot-scope="scope">
                    {{ scope.row.date }}
                </template>
            </el-table-column>
            <el-table-column prop="name" label="型号" width="180">
                <template slot-scope="scope">
                    {{ scope.row.name }}
                </template>
            </el-table-column>
            <el-table-column prop="address" label="船号" width="300">
                <template slot-scope="scope">
                    {{ scope.row.address }}
                </template>
            </el-table-column>
        </el-table>

<!--        <el-button @click="nextButton">下一步</el-button>-->
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            tableData: [
                {
                    isCheck: false,
                    id: '1',
                    date: '登陆舰',
                    name: '071',
                    address: '123'
                },
                {
                    id: '2',
                    isCheck: false,
                    date: '登陆舰',
                    name: '072',
                    address: '456'
                },
                {
                    isCheck: false,
                    id: '3',
                    date: '登陆舰',
                    name: '073',
                    address: 'xxx'
                }
            ],
            selectShipList: []
        }
    },
    methods: {
        buttonChange(value) {
            console.log(value)
            if (this.selectShipList.includes(value)) {
                this.selectShipList.splice(this.selectShipList.indexOf(value), 1);
            } else {
                this.selectShipList.push(value);
            }
        },

        nextButton(){
            console.log(this.selectShipList)
        }
    }
}
</script>