<script>
import MilitaryRepost from '@/components/transportationplanning/military_repost.vue'
import MilitaryLoad from "@/components/transportationplanning/military_load.vue";
import LoadVesselVue from '@/components/transportationplanning/load_vessel.vue';
import InlineResult from '@/components/transportationplanning/inline_result.vue';
import Inline_selection from "@/components/transportationplanning/inline_selection.vue";
import TransportationPlanning from '@/components/transportationplanning/transportation_planning.vue';
import Steps from '@/components/transportationplanning/steps.vue';
import BottomBar from "@/components/transportationplanning/bottom_bar.vue";
import Zhuangzai_bulie from "@/components/transportationplanning/zhuangzai_bulie.vue";
import jijiedian from "@/components/transportationplanning/zhuan_zai_dian.vue";
import Ji_jie_dian from "@/components/transportationplanning/ji_jie_dian.vue";
import index from "vuex";

export default {
  name: 'HomeView',
  components: {
    MilitaryRepost,
    MilitaryLoad,
    Inline_selection,
    LoadVesselVue,
    InlineResult,
    TransportationPlanning,
    Steps,
    BottomBar,
    Zhuangzai_bulie,
    jijiedian,
    Ji_jie_dian
  },
  data(){
    return{
      index:1,
      isShow:false,
      dialogVisible: false,
      dialogVisible2: false,
      id:1,
    }
  },
  methods:{
    id_add(){
      return this.id++;
    },
    getNameListData(militaryData,indexList){
      let indexNumberList =  indexList.split('-').map(Number)
      let s= militaryData[indexNumberList[0] - 1].name + '-' + militaryData[indexNumberList[0] - 1].children[indexNumberList[1] - 1].name + '-' + militaryData[indexNumberList[0] - 1].children[indexNumberList[1] - 1].children[indexNumberList[2] - 1].name + ' ' + militaryData[indexNumberList[0] - 1].children[indexNumberList[1] - 1].children[indexNumberList[2] - 1].people + "人"
      let eq = militaryData[indexNumberList[0] - 1].children[indexNumberList[1] - 1].children[indexNumberList[2] - 1].equip
      let eq_number =  militaryData[indexNumberList[0] - 1].children[indexNumberList[1] - 1].children[indexNumberList[2] - 1].equipmentNumber
      let ss = this.$store.state.inlineListData.find(item=>item.ID === eq).装备类型
      return s +' ' + ss+ ':' + eq_number+ '辆'

      // for(let i=0;i<indexList.length;i++){
      //   indexList[i] =indexList[i]-1
      // }
      // return militaryData[indexList[0]].name + '-' + militaryData[indexList[0]].children[indexList[1]].name + '-' + militaryData[indexList[0]].children[indexList[1]].children[indexList[2]].name
      // return militaryData.find((item=>item.ID === indexList)).装备类型

    },
    getShipById(id,shipData){
      return shipData.find(item=>item.ID === id)
    },
    add(){
      // var ws = new WebSocket("ws://192.168.0.16:9999/");
      //
      // ws.onopen = function () {
      //   // Web Socket 已连接上，使用 send() 方法发送数据
      //   ws.send("{\"plat_lon\":126.40126,   \"plat_lat\":30.69268,   \"target_lat\":29.78227, \"target_lon\":  126.02153}");
      //   alert("数据发送中...");
      // };
      //
      // ws.onmessage = function (evt) {
      //   var received_msg = evt.data;
      //   alert("数据已接收...");
      //   console.log(received_msg)
      // };
      //
      // ws.onclose = function () {
      //   // 关闭 websocket
      //   alert("连接已关闭...");
      // };

      this.index <7?this.index ++ : this.index = 1
      if(this.index === 7){
        this.dialogVisible = false;
        this.index=1
      }
    },
    sub(){
      this.index >1?this.index-- :this.index1;
    },

    handleClose(done) {
      this.$store.commit('clearSelectShipList')
      this.$store.commit('clearCheckMilitary')
      this.index = 1
      done()
    },
    //关连Button
    guanLinaButton(){
      const selectData = this.$store.state.checkInlineListData
      const junDuiXunZeData = this.$store.state.junDuiJunBei
      const shipData = this.$store.state.selectShipList

      let indexNameString = []
      for(let i = 0;i<selectData.length;i++){
        indexNameString.push(this.getNameListData(this.$store.state.militaryRepost,selectData[i]))
      }

      this.$store.commit('changeInlineResultData',[
        {
          id: this.id_add(),
          date: this.getShipById(shipData[0],this.$store.state.loadVesselData).运输船类型,
          name: this.getShipById(shipData[0],this.$store.state.loadVesselData).型号,
          address:indexNameString.join('\n')
        },
      ])
    },

    jiJieDianDataZhuanHua(jiJieDianData){
      let todata = {}
      for(let i=0;i<jiJieDianData.length;i++){
        todata[jiJieDianData[i].港口名称] = {
          'load':jiJieDianData[i].吨位,
          'type':jiJieDianData[i].装载方式,
          "type_weight": 1.2,
          'depth':jiJieDianData[i].水深,
          "dock":jiJieDianData[i].同时装载船数,
          'length':jiJieDianData[i].长度
        }
      }
      console.log(todata)
      return todata

    },
    // 获得需要的船的数据
    getDengLuShipData(selectShipData,allShipData){
      let selectShip = allShipData.find(item=>item.ID === selectShipData[0])
      let returndata = {}
      returndata[selectShip.型号]={
        "length":selectShip.长度,
        "width":selectShip.宽度,
        "draught":selectShip.吃水,
        "load":selectShip.最大载重,
        "deck":selectShip.甲板层数
      }
      console.log(returndata)
      return returndata
    },
    zhuanHuaInt(data){
      let returnData =[]
      for(let i =0;i<data.length;i++){
        returnData.push(data[i].split('-').map(Number))
      }
      return returnData
    },
    getRenShuData(){
      // 1-1-1  1-2-1  2-1-1
      let data  = ['1-1-1' ,'2-2-1' ,'1-2-1']
      data.sort((a,b)=>{
        return a.localeCompare(b)
      })
      console.log(data)
      //
      // let selectData = this.$store.state.checkedMilitary
      // let junDuiXinXi = this.$store.state.militaryRepost
      // selectData = this.zhuanHuaInt(selectData)
      // let returndata = []
      // for(let i=0;i<data.length;i++){
      //   let arr = data[i].split('-').map(Number)
      //   for(let j=0;j<arr.length;j++){
      //
      //   }
      // }
      // returndata['Id'] =junDuiXinXi[selectData[0][0]].id
      // returndata['Name'] =junDuiXinXi[selectData[0][0]].name
      // returndata['assign']= this.$store.state.militaryLoad.find(item=>item.ID === this.$store.state.junDuiShip[0]).型号 + this.$store.state.militaryLoad.find(itme=>item.ID === this.$store.state.junDuiShip[0]).运输船类型
      // returndata['first_deliver'] = !!this.$store.state.youXianShuSongBingLi.find(item => item === junDuiXinXi[i].index).isNull()
      // returndata['Camps'] =[]
      // for(let i=0;i<selectData.length;i++){
      //   returndata['Camps'].push({
      //     'id:':junDuiXinXi[i[0]].children[i[1]].id,
      //     'Name':junDuiXinXi[i[0]].children[i[1]].name,
      //     'assign':this.$store.state.militaryLoad.find(item=>item.ID === this.$store.state.junDuiShip[0]).型号 + this.$store.state.militaryLoad.find(itme=>item.ID === this.$store.state.junDuiShip[0]).运输船类型,
      //     'Campanies':{
      //       "Id":junDuiXinXi[i[0]].children[i[1]].children[i[2]].id,
      //       "Name":junDuiXinXi[i[0]].children[i[1]].children[i[2]].name,
      //       'assign':this.$store.state.militaryLoad.find(item=>item.ID === this.$store.state.junDuiShip[0]).型号 + this.$store.state.militaryLoad.find(itme=>item.ID === this.$store.state.junDuiShip[0]).运输船类型,
      //       "Num_soldier":junDuiXinXi[i[0]].children[i[1]].children[i[2]].people,
      //       'good':{
      //         "belong_id":junDuiXinXi[i[0]].children[i[1]].children[i[2]].id,
      //         "name":"物资",
      //         "length":4,
      //         "width":2,
      //         "weight":1,
      //         "time":5,
      //         "num":10
      //       }
      //     }
      //   })
      // }
    },
    jiSuanFanAn(){

      this.getRenShuData()
      let data =
      {
        "prot_info":this.jiJieDianDataZhuanHua(this.$store.state.jiJieDianData),
        "ship_info":this.getDengLuShipData(this.$store.state.selectShipList,this.$store.state.loadVesselData),
        "troops":[
        {
          "Id":"T_001",
          "Name":"一旅",
          "first_deliver":"True",
          "assign":"071登陆舰",
          "Camps":[
            {
              "Id":"T_001_C_001",
              "Name":"一旅一营",
              "assign":"071登陆舰",
              "Campanies":[
                {
                  "Id":"T_001_C_001_c_001",
                  "Name":"一旅一营一连",
                  "assign":"071登陆舰",
                  "Num_soldier":120,
                  "Goods":
                      {
                        "belong_id":"T_001_C_001_c_001",
                        "name":"物资",
                        "length":4,
                        "width":2,
                        "weight":1,
                        "time":5,
                        "num":10
                      }
                },
                {
                  "Id":"T_001_C_001_c_002",
                  "Name":"一旅一营二连",
                  "assign":"071登陆舰",
                  "Num_soldier":120,
                  "Goods":
                      {
                        "belong_id":"T_001_C_001_c_002",
                        "name":"物资",
                        "length":4,
                        "width":2,
                        "weight":1,
                        "time":5,
                        "num":10
                      }
                }
              ]
            },
            {
              "Id":"T_001_C_002",
              "Name":"一旅二营",
              "assign":"071登陆舰",
              "Campanies":
                  [
                    {
                      "Id":"T_001_C_002_c_001",
                      "Name":"一旅二营一连",
                      "assign":"071登陆舰",
                      "Num_soldier":120,
                      "Goods":
                          {
                            "belong_id":"T_001_C_002_c_001",
                            "name":"物资",
                            "length":4,
                            "width":2,
                            "weight":1,
                            "time":5,
                            "num":10
                          }
                    },
                    {
                      "Id":"T_001_C_002_c_002",
                      "Name":"一旅二营二连",
                      "assign":"071登陆舰",
                      "Num_soldier":120,
                      "Goods":
                          {
                            "belong_id":"T_001_C_002_c_002",
                            "name":"物资",
                            "length":4,
                            "width":2,
                            "weight":1,
                            "time":5,
                            "num":10
                          }
                    }
                  ]
            }
          ]
        }
      ]
      }
    }
  }
}
</script>

<template>
<div>

<!--  <el-button @click="dialogVisible = true">点击打开 Dialog</el-button>-->
  <BottomBar @show="dialogVisible = true" @show2="dialogVisible2 = true"></BottomBar>

  <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="90%"
      :before-close="handleClose">

    <Steps :active="index"></Steps>

    <div class="split-container" v-if="index===2">
      <el-row>
        <!-- 左侧区域 -->
        <el-col :span="12">
          <div class="left-content">
            <!-- 左侧内容 -->
            <MilitaryRepost ></MilitaryRepost>

          </div>
        </el-col>
        <!-- 右侧区域 -->
        <el-col :span="12">
          <div class="right-content">
            <!-- 右侧内容 -->
            <MilitaryLoad ></MilitaryLoad>
          </div>
        </el-col>
      </el-row>
    </div>


    <div class="split-container" v-if="index===3">
      <el-row>
        <!-- 左侧区域 -->
        <el-col :span="6">
          <div class="left-content">
            <!-- 左侧内容 -->
            <Inline_selection></Inline_selection>
          </div>
        </el-col>

        <!-- 中间区域 -->
        <el-col :span="9">
          <div class="middle-content">
            <!-- 中间内容 -->
            <LoadVesselVue ></LoadVesselVue>
            <el-button @click="guanLinaButton">添加关联</el-button>
            <el-button @click="jiSuanFanAn">计算方案</el-button>
          </div>
        </el-col>

        <!-- 右侧区域 -->
        <el-col :span="9">
          <div class="right-content">
            <!-- 右侧内容 -->
            <InlineResult></InlineResult>
          </div>
        </el-col>
      </el-row>
    </div>


    <Zhuangzai_bulie v-if="index===4"></Zhuangzai_bulie>
    <jijiedian v-if="index===5"></jijiedian>
    <Ji_jie_dian v-if="index === 1"></Ji_jie_dian>
    <TransportationPlanning v-if="index===6"></TransportationPlanning>
    <el-button @click="sub">上一步</el-button>
    <el-button @click="add">下一步</el-button>
  </el-dialog>


  <el-dialog
      title="提示"
      :visible.sync="dialogVisible2"
      width="90%"
      :before-close="handleClose">

    <TransportationPlanning></TransportationPlanning>
  </el-dialog>
</div>
</template>

<style scoped>

</style>