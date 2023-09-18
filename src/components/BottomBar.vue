<script>
import Logo from "@/assets/logo.png"
export  default {
  name:'BottomBar',
  components:{
    Logo
  },
  data() {
    return {
      time: '',
      x:13,
      y:12
    }
  },
  mounted() {
    this.updateTime()
  },
  methods: {
    updateTime() {
      const date = new Date().toLocaleString('zh-CN', {timeZone: 'Asia/Shanghai'})
      this.time = date.replace(/[\u4e00-\u9fa5]/g, '')
      setTimeout(this.updateTime, 1000)
    },
    arrayClickButton(){
      console.log("!231")
      this.$emit('show')
    }
  }

}
</script>

<template>
  <div class="fixed">
    <div class="inner">
      <div class="right-align">
        <img src="../assets/logo.png" alt="" width="20%" style="margin-right: 20px">
        <el-button>地图测绘工具</el-button>
      </div>

      <div class="center-align">
        <el-button>建制编排</el-button>
        <el-button @click="arrayClickButton">输送筹划</el-button>
        <el-button>输送方案展示</el-button>
      </div>


      <div class="right-align">
        <span style="padding-right: 20px">{{time}}</span>
        <span>
          经度:{{x}}
          <br>
          维度:{{y}}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.inner{
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
}

.right-align {
  display: flex;
  align-items: center;
  padding: 20px;
}

.center-align {
  display: flex;
  align-items: center;
  justify-content: center;
}

.fixed {
  position: fixed;
  height: 80px;
  background-color: #409EFF;
  border: 1px;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>