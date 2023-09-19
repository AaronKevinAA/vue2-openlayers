<template>
  <div>


    <div class="split-container">
      <el-row>
        <!-- 左侧区域 -->
        <el-col :span="20">
          <div class="left-content">
            <!-- 左侧内容 -->
            <div class="ship" :style="'width:'+w+'px;height:'+h+'px'">
              <div v-for="(container, index) in container_list" :key="index">
                <div class="container" :style="{top: container.y + 'px', left: container.x + 'px'}"></div>
              </div>
            </div>
          </div>
        </el-col>
        <!-- 右侧区域 -->
        <el-col :span="4">
          <div class="right-content">
            <!-- 右侧内容 -->
            <div>
              <el-select v-model="value" placeholder="请选择"  @change="gengHunaShip">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      w:800,
      h:300,
      // 船 宽高
      ship_size:[
        {id:'071',w:800,h:300,x:17,y:10}
      ],
      // 货物类型和对应的位置
      container_list : [
      ],
      options: [{
        value: '1',
        label: '071'
      }, {
        value: '2',
        label: '072'
      }, {
        value: '3',
        label: '073'
      }, {
        value: '4',
        label: '074'
      }, {
        value: '5',
        label: '075'
      }],
      value: ''
    }

  },
  created() {
    this.handIamgeClick()
  },
  methods:{
    // 点击事件
    handIamgeClick(){
      // this.x = event.clientX;
      // this.y = event.clientY;
      for (var i = 0;i<17;i++){
        for (var j =0;j<10;j++){
          this.container_list.push( { num: 1, x: i * (40+5) + 20, y: j * (20 + 5)  + 20},)
        }
      }
      console.log(this.x,this.y)
    },
    gengHunaShip(){

    },
  }
}
</script>

<style scoped>
.ship{
  //width: 800px;
  //height: 300px;
  background-color: yellow;
  position: relative;
}

.container{
  width: 40px;
  height: 20px;
  background-color: red;
  position: absolute;
}

</style>