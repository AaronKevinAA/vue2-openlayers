<template>
  <div class="home">
    <div id="map" class="map-container"></div>

    <div class="dialog-component">
      <DialogComponent></DialogComponent>
    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import View from 'ol/View'
import Map from 'ol/Map'
import TileLayer from 'ol/layer/Tile'
import {OSM} from 'ol/source';
import {defaults} from "ol/control";
import DialogComponent from "@/components/dialog-component.vue";
import axios from 'axios'
export default {
  name: 'HomeView',
  components: {
    DialogComponent
  },
  data(){
    return{
      map:null,
    }
  },
  mounted() {
    this.showMap();
  },
  created() {
    (()=>{
      axios.post('http://169.254.107.196:5000/api/function_1',{})
          .then(res => {
            console.log(res.status)
          })
          .catch(error=>{
            console.log(error)
          })
    })()
  },
  methods:{
    //显示地图的方法
    showMap() {
      this.map = new Map({
        controls:defaults({
          zoom: false,
          attribution:false,
          rotate:false,
        }).extend([]),
        layers: [
          new TileLayer({ source: new OSM() }),// 创建一个使用Open Street Map地图源的瓦片图层
        ],
        // 设置显示地图的视图
        view: new View({
          center: [0,0], // 定义地图显示中心
          zoom: 2,
        }),
        target: "map", //存放地图的容器
      });
    }
  }
}
</script>
<style>
.home{
  width: 100%;
  height: 100%;
  position: relative;
}
.map-container{
  position: absolute;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
}

.dialog-component {
  position: absolute;
  top: 0;
  left: 0;
}
</style>