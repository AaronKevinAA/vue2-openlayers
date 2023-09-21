<template>
    <div class="table-container">
        <el-tabs v-model="activeTab">
            <el-tab-pane name="tab1" label="方案一 用时最短">

                <el-table :data="getMinTimeData()" style="width: 100%">
                    <el-table-column prop="date" label="装载舰船" width="180">
                        <template slot-scope="scope">
                            {{ scope.row.ship_name }}
                        </template>
                    </el-table-column>
                    <el-table-column prop="name" label="舷号" width="180">
                        <template slot-scope="scope">
                            {{ scope.row.ship_id }}
                        </template>
                    </el-table-column>
                    <el-table-column prop="address" label="人员数量" width="180">
                        <template slot-scope="scope">
                            {{ scope.row.ship_num }}
                        </template>
                    </el-table-column>

                    <el-table-column prop="address" label="装载兵力" width="180">
                        <template slot-scope="scope">
<!--                            {{ scope.row.ship_include }}-->
                          {{getPeopleNumberByShipInclude(scope.row.ship_include)}}
                        </template>
                    </el-table-column>

                    <el-table-column prop="address" label="装备种类及数量" width="300">
                        <template slot-scope="scope">
<!--                            {{ scope.row.ship_goods[0].goods_num }}-->
                          {{getWuZhiShip(scope.row.ship_include, scope.row.ship_goods[0].goods_num )}}
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
        },
      getMinTimeData(){
        return this.$store.state.scheme_result.Min_time
      },

      getPeopleNumber(selectList){
        const codeMap = {
          '一旅一营一连': '1-1-1',
          '一旅一营二连': '1-1-2',
          '一旅一营三连': '1-1-3',
          '一旅二营一连': '1-2-1',
          '一旅二营二连': '1-2-2',
          '一旅二营三连': '1-2-3',
          '二旅一营一连': '2-1-1',
          '二旅一营二连': '2-1-2',
          '二旅一营三连': '2-1-2',
          '二旅二营一连': '2-2-1',
          '二旅二营二连': '2-2-2',
          '二旅二营三连': '2-2-3',
          // 添加更多的映射关系...
        };
        return selectList.map(name => codeMap[name])
      },
      getWuZhiShip(selectList,num){
        const bingLiData = this.$store.state.militaryRepost
        const zunBeiShuJu = this.$store.state.inlineListData
        const result = this.getPeopleNumber(selectList)
        let selectBingLi = []

        result.forEach(index => {
          const [t, c, cc] = index.split('-');
          const tIndex = parseInt(t) - 1;
          const cIndex = parseInt(c) - 1;
          const ccIndex = parseInt(cc) - 1;
          const eq_id = bingLiData[tIndex].children[cIndex].children[ccIndex].equip

          selectBingLi.push(`${zunBeiShuJu.find(item=>item.ID === eq_id).装备类型} ${num}辆` )
        })
        return selectBingLi.join(' \n ')
      },
      getPeopleNumberByShipInclude(selectList){
        const bingLiData = this.$store.state.militaryRepost
        const result = this.getPeopleNumber(selectList)
        let selectBingLi = []
        result.forEach(index => {
          const [t, c, cc] = index.split('-');
          const tIndex = parseInt(t) - 1;
          const cIndex = parseInt(c) - 1;
          const ccIndex = parseInt(cc) - 1;
          selectBingLi.push(`${tIndex+1}旅${cIndex+1}营${ccIndex+1}连 ${bingLiData[tIndex].children[cIndex].children[ccIndex].people}人`)
        })

        return selectBingLi.join(' ');
      }
    },
    computed:{
      // getMinTimeData(){
      //   return this.$store.state.scheme_result.Min_time
      // },
      // getPeopleNumberByShipInclude(selectList){
      //   const bingLiData = this.$store.state.militaryRepost
      //   const result = [];
      //
      //   for (let i = 0; i < selectList.length; i++) {
      //     const parts = selectList[i].split('一');
      //     const formatted = `${parts[1]}-${parts[2]}-${parts[3]}`;
      //     result.push(formatted);
      //   }
      //   console.log(result)
      //
      //   return result;
      // }
    }
}
</script>