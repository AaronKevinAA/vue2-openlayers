<script>
import MilitaryRepost from '@/components/MilitaryRepost.vue'
import LoadVesselVue from '@/components/LoadVessel.vue';
import InlineResult from '@/components/InlineResult.vue';
import TransportationPlanning from '@/components/TransportationPlanning.vue';
import Steps from '@/components/Steps.vue';
import BottomBar from "@/components/BottomBar.vue";

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