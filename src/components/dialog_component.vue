<script>
import MilitaryRepost from '@/components/transportationplanning/military_repost.vue'
import LoadVesselVue from '@/components/transportationplanning/load_vessel.vue';
import InlineResult from '@/components/transportationplanning/inline_result.vue';
import TransportationPlanning from '@/components/transportationplanning/transportation_planning.vue';
import Steps from '@/components/transportationplanning/steps.vue';
import BottomBar from "@/components/transportationplanning/bottom_bar.vue";

export default {
  name: 'HomeView',
  components: {
    MilitaryRepost,
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
      dialogVisible: false
    }
  },
  methods:{
    add(){
      this.index <4?this.index ++ : this.index = 1
    },
    handleClose(done) {
      done()
    }
  }
}
</script>

<template>
<div>

<!--  <el-button @click="dialogVisible = true">点击打开 Dialog</el-button>-->
  <BottomBar @show="dialogVisible = true"></BottomBar>

  <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="90%"
      :before-close="handleClose">

    <Steps :active="index"></Steps>
    <MilitaryRepost v-if="index === 1"></MilitaryRepost>
    <LoadVesselVue v-if="index===2"></LoadVesselVue>
    <InlineResult v-if="index===3"></InlineResult>
    <TransportationPlanning v-if="index===4"></TransportationPlanning>
    <el-button @click="add">下一步</el-button>
  </el-dialog>
</div>
</template>

<style scoped>

</style>