<script>
import MilitaryRepost from '@/components/transportationplanning/military-repost.vue'
import MilitaryLoad from "@/components/transportationplanning/military-load.vue";
import LoadVesselVue from '@/components/transportationplanning/load-vessel.vue';
import InlineResult from '@/components/transportationplanning/inline-result.vue';
import Inline_selection from "@/components/transportationplanning/inline-selection.vue";
import TransportationPlanning from '@/components/transportationplanning/transportation-planning.vue';
import Steps from '@/components/transportationplanning/steps.vue';
import BottomBar from "@/components/transportationplanning/bottom-bar.vue";
import Zhuangzai_bulie from "@/components/transportationplanning/zhuangza-bulie.vue";
import jijiedian from "@/components/transportationplanning/zhuan-zai-dian.vue";
import Ji_jie_dian from "@/components/transportationplanning/ji-jie-dian.vue";
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
      return returndata
    },
    mergeElements(data) {
      const mergedData = [];
      // 遍历每个元素
      for (const item of data) {
        // const { index, children } = item;
        // 查找是否存在相同父级的元素
        const existingItem = mergedData.find((mergedItem) => mergedItem.index === item.index);
        if (existingItem) {
          // 合并children
          if (Array.isArray(item.children)) {
            existingItem.children.push(...item.children);
          }
        } else {
          // 创建新的元素并添加到mergedData中
          mergedData.push({ ...item, children: Array.isArray(item.children) ? [...item.children] : [] });
        }
      }
      // 递归合并children
      for (const item of mergedData) {
        if (Array.isArray(item.children)) {
          item.children = this.mergeElements(item.children);
        }
      }
      return mergedData;
    },
    getRenShuData(){
      // 1-1-1  1-2-1  2-1-1
      // let data  = ['1-1-1' ,'2-2-1' ,'1-2-1']

      let data = this.$store.state.checkInlineListData
      let junDuiXinXi = this.$store.state.militaryRepost
      const youXianShuSong = this.$store.state.youXianShuSongBingLi
      const zunBeiXinXi = this.$store.state.inlineListData

      const result = [];
      data.forEach(index => {
        const [t, c, cc] = index.split('-');
        const tIndex = parseInt(t) - 1;
        const cIndex = parseInt(c) - 1;
        const ccIndex = parseInt(cc) - 1;

        if (junDuiXinXi[tIndex]) {
          const targetT = { ...junDuiXinXi[tIndex] };
          if (targetT.children[cIndex]) {
            const targetC = { ...targetT.children[cIndex] };
            if (targetC.children[ccIndex]) {
              const targetCC = { ...targetC.children[ccIndex] };
              targetCC.parent = targetC;
              targetC.children = [targetCC];
              targetT.children = [targetC];
              result.push(targetT);
            }
          }
        }
      });
      const mergeResult = this.mergeElements(result)

      mergeResult.forEach(item=>{
        item['first_deliver'] = 'False'
      })

      youXianShuSong.forEach(item => {
        mergeResult.forEach(item2=>{
            if(item2.index === item){
              item2['first_deliver'] = "True"
            }else{
              item2['first_deliver'] = "False"
            }
        })
      })


      console.log(mergeResult)
      const dengLuShipData = this.$store.state.loadVesselData.find(item=>item.ID === this.$store.state.selectShipList[0]).型号
      mergeResult.forEach(item=>{
        item['assign'] = dengLuShipData
        item.children.forEach(item2=>{
          item2['assign'] = dengLuShipData
          item2.children.forEach(item3=>{
            item3['assign'] = dengLuShipData
            let equipId = item3['equip']
            let zunBei = zunBeiXinXi.find(item4=>item4.ID === equipId)
            console.log(equipId,zunBei)
            item3['goods'] = {
              'belong_id':item3.id,
              'name':'物资',
              'length':zunBei.长度,
              'width':zunBei.宽度,
              "time":zunBei["装载时间(分钟)"],
              "num":zunBei.数量,
              "weight":zunBei.重量
            }
          })
        })
      })
      // 转化数据
      mergeResult.forEach(item=>{
        item["Id"] = item.id
        item["Name"] = item.name
        item["Camps"] = item.children
        item.children.forEach(item2=>{
          item2["Id"] = item2.id
          item2["Name"] = item2.name
          item2["Campanies"] = item2.children
          item2.children.forEach(item3=>{
            item3["Id"] = item3.id
            item3["Name"] = item3.name
            item3["Num_soldier"] = item3.people
          })
        })
      })
      // console.log(mergeResult)
      return mergeResult
    },
    jiSuanFanAn(){

      let data =
      {
        "prot_info":this.jiJieDianDataZhuanHua(this.$store.state.jiJieDianData),
        "ship_info":this.getDengLuShipData(this.$store.state.selectShipList,this.$store.state.loadVesselData),
        "troops":this.getRenShuData()
      }

      let ws = new WebSocket("ws://192.168.0.16:9999/");

      ws.onopen =  ()=> {
        // Web Socket 已连接上，使用 send() 方法发送数据
        // ws.send("{\"plat_lon\":126.40126,   \"plat_lat\":30.69268,   \"target_lat\":29.78227, \"target_lon\":  126.02153}");
        ws.send(JSON.stringify(data))
        alert("数据发送中...");
      };

      ws.onmessage = function (evt) {
        let received_msg = evt.data;
        alert("数据已接收...");
        console.log(received_msg)

        ////////////////// 请求数据据回显

        this.$store.commit("changeAssignResult",received_msg.assign_result)
        this.$store.commit("changeSchemeResult",received_msg.sceme_result)

        ///////////////////
      };

      ws.onclose = function () {
        // 关闭 websocket
        alert("连接已关闭...");
      };



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