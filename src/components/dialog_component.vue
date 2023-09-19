<script>
import MilitaryRepost from '@/components/transportationplanning/military_repost.vue'
import MilitaryLoad from "@/components/transportationplanning/military_load.vue";
import LoadVesselVue from '@/components/transportationplanning/load_vessel.vue';
import InlineResult from '@/components/transportationplanning/inline_result.vue';
import Inline_selection from "@/components/transportationplanning/inline_selection.vue";
import TransportationPlanning from '@/components/transportationplanning/transportation_planning.vue';
import Steps from '@/components/transportationplanning/steps.vue';
import BottomBar from "@/components/transportationplanning/bottom_bar.vue";

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
    BottomBar
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
      for(let i=0;i<indexList.length;i++){
        indexList[i] =indexList[i]-1
      }
      console.log(militaryData)
      return militaryData[indexList[0]].name + '-' + militaryData[indexList[0]].children[indexList[1]].name + '-' + militaryData[indexList[0]].children[indexList[1]].children[indexList[2]].name
    },
    getShipById(id,shipData){
      return shipData.find(item=>item.id === id)
    },
    add(){
      this.index <4?this.index ++ : this.index = 1
      if(this.index === 4){
        this.dialogVisible = false;
        this.index=1
      }
    },
    handleClose(done) {
      console.log("handleclose")
      this.$store.commit('clearSelectShipList')
      this.$store.commit('clearCheckMilitary')
      this.index = 1
      done()
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

    <div class="split-container" v-if="index===1">
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
<!--    <div style="display: flex">-->
<!--      <MilitaryLoad v-if="index === 1"></MilitaryLoad>-->
<!--      <MilitaryRepost v-if="index === 1"></MilitaryRepost>-->
<!--    </div>-->

    <div class="split-container" v-if="index===2">
      <el-row>
        <!-- 左侧区域 -->
        <el-col :span="4">
          <div class="left-content">
            <!-- 左侧内容 -->
            <Inline_selection></Inline_selection>
          </div>
        </el-col>

        <!-- 中间区域 -->
        <el-col :span="10">
          <div class="middle-content">
            <!-- 中间内容 -->
            <LoadVesselVue ></LoadVesselVue>
            <el-button>添加关联</el-button>
          </div>
        </el-col>

        <!-- 右侧区域 -->
        <el-col :span="10">
          <div class="right-content">
            <!-- 右侧内容 -->
            <InlineResult></InlineResult>
          </div>
        </el-col>
      </el-row>
    </div>


<!--    <div>-->
<!--      <LoadVesselVue v-if="index===2"></LoadVesselVue>-->
<!--      <InlineResult v-if="index===3"></InlineResult>-->
<!--    </div>-->
    <TransportationPlanning v-if="index===4"></TransportationPlanning>
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