<template>
    <div class="table-container">
        <el-tabs v-model="activeTab">
            <el-tab-pane name="tab1" label="方案一 用时最短">

                <el-table :data="tableData1" style="width: 100%">
                    <el-table-column prop="date" label="装载舰船" width="180">
                        <template slot-scope="scope">
                            {{ scope.row.ship }}
                        </template>
                    </el-table-column>
                    <el-table-column prop="name" label="舷号" width="180">
                        <template slot-scope="scope">
                            {{ scope.row.hull }}
                        </template>
                    </el-table-column>
                    <el-table-column prop="address" label="人员数量" width="180">
                        <template slot-scope="scope">
                            {{ scope.row.pepoleNumber }}
                        </template>
                    </el-table-column>

                    <el-table-column prop="address" label="装载兵力" width="180">
                        <template slot-scope="scope">
                            {{ scope.row.strength }}
                        </template>
                    </el-table-column>

                    <el-table-column prop="address" label="装备种类及数量" width="300">
                        <template slot-scope="scope">
                            {{ scope.row.equitment }}
                        </template>
                    </el-table-column>

                </el-table>
            </el-tab-pane>
            <el-tab-pane name="tab2" label="方案二 用船最少">
            
                
                <el-table :data="tableData2" style="width: 100%">
                    <el-table-column prop="date" label="装载舰船" width="180">
                        <template slot-scope="scope">
                            {{ scope.row.ship }}
                        </template>
                    </el-table-column>
                    <el-table-column prop="name" label="舷号" width="180">
                        <template slot-scope="scope">
                            {{ scope.row.hull }}
                        </template>
                    </el-table-column>
                    <el-table-column prop="address" label="人员数量" width="180">
                        <template slot-scope="scope">
                            {{ scope.row.pepoleNumber }}
                        </template>
                    </el-table-column>

                    <el-table-column prop="address" label="装载兵力" width="180">
                        <template slot-scope="scope">
                            {{ scope.row.strength }}
                        </template>
                    </el-table-column>

                    <el-table-column prop="address" label="装备种类及数量" width="300">
                        <template slot-scope="scope">
                            {{ scope.row.equitment }}
                        </template>
                    </el-table-column>
                </el-table>

            </el-tab-pane>
        </el-tabs>

        <el-button @click="nextButton">展示航路</el-button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            tableData1: [
                {
                    id: '1',
                    ship: '登陆舰',
                    hull: '071',
                    pepoleNumber: '123',
                    strength: '1231',
                    equitment: '1232'
                },
                {
                    id: '2',
                    ship: '登陆舰',
                    hull: '071',
                    pepoleNumber: '123',
                    strength: '1231',
                    equitment: '1232'
                },
                {
                    id: '3',
                    ship: '登陆舰',
                    hull: '071',
                    pepoleNumber: '11231',
                    strength: '1231',
                    equitment: '1232'
                }
            ],

            tableData2: [
                {
                    id: '1',
                    ship: '登陆舰',
                    hull: '072',
                    pepoleNumber: '333',
                    strength: '333',
                    equitment: '333'
                },
                {
                    id: '2',
                    ship: '登陆舰',
                    hull: '072',
                    pepoleNumber: '222',
                    strength: '222',
                    equitment: '222'
                },
                {
                    id: '3',
                    ship: '登陆舰',
                    hull: '072',
                    pepoleNumber: '111',
                    strength: '111',
                    equitment: '1111'
                }
            ],
            activeTab: 'tab1'
        }
    },
    methods: {
        nextButton() {
            console.log(this.activeTab)
            if(this.activeTab == 'tab2'){
                console.log(this.tableData2)
            }else{
                console.log(this.tableData1)
            }
        }
    }
}
</script>