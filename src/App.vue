<template>
  <div id="app">
    <div id="leftApp">
      <Test2/>
      <Freight/>
      <MountPoint/>
      <Assemble/>
    </div>
    <div style="clear: both;"></div>
    <router-view/>
  </div>
</template>

<script>
import Assemble from './components/Assemble.vue';
import Freight from './components/Freight .vue';
import MountPoint from './components/MountPoint.vue';
import Test2 from './components/Test2.vue'
export default {
  name: 'App',
  components: {
    Freight,
    MountPoint,
    Assemble,
    Test2
  }
}
</script>

<style>
body{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  position: relative;
}

#leftApp {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
}
</style>
