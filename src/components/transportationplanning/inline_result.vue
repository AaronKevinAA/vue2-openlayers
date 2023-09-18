<template>
    <div class="table-container">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="型号" width="180">
                <template slot-scope="scope">
                    {{ scope.row.date }}
                </template>
            </el-table-column>
            <el-table-column prop="name" label="船号" width="180">
                <template slot-scope="scope">
                    {{ scope.row.name }}
                </template>
            </el-table-column>
            <el-table-column prop="address" label="指定装载" width="300">
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
                    id: '1',
                    date: '071',
                    name: '213',
                    address: '陆战1旅-机步1营-机步1连，120人，30两坦克 \n 陆战1旅-机步1营-机步1连，120人，30两坦克'
                },
                {
                    id: '2',
                    date: '072',
                    name: '456',
                    address: '陆战1旅-机步1营-机步1连，120人，30两坦克'
                },
                
            ],
        }
    },
    methods: {

        nextButton(){
            console.log("Hello")
        }
    }
}
</script>