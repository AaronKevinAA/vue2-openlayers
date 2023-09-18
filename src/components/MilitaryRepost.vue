<template>
  <div>
    <!-- <el-checkbox-group v-model="checkedCities" @change="handleChange"> -->

    <el-menu class="el-menu-vertical-demo">
      <el-submenu index="1">
        <template slot="title">输送兵力</template>
        <el-submenu v-for="(item, index) in data" :key="index" :index="item.index">
          <template slot="title">{{ item.name }}</template>
          <el-submenu v-for="(item2, index2) in item.children" :key="index2" :index="item.index + '-' + item2.index">
            <template slot="title">{{ item2.name }}</template>
            <el-menu-item v-for="(subItem, subIndex) in item2.children" :key="subIndex"
              :index="item.index + '-' + item2.index + '-' + subItem.index">
              <el-checkbox :label="subItem.name"
                @change="checkboxClick(item.index + '-' + item2.index + '-' + subItem.index)">
              </el-checkbox>
            </el-menu-item>

          </el-submenu>
        </el-submenu>
      </el-submenu>
    </el-menu>

<!--    <el-button @click="nextButton">下一步</el-button>-->

  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      form: {
        input: ''
      },
      checkedCities: [],

      data: [
        { name: '兵力', index: '1', children: [{ name: '坦克1营', index: '1', children: [{ name: '坦克1连', index: '1' }, { name: '坦克1连', index: '2' }] }, { name: '炮兵2营', index: '2', children: [{ name: '坦克1连', index: '1' }, { name: '坦克1连', index: '2' }] }] },
        { name: '装备', index: '2', children: [{ name: '坦克1营', index: '1', children: [{ name: '坦克1连', index: '1' }, { name: '坦克1连', index: '2' }] }, { name: '炮兵2营', index: '2', children: [{ name: '坦克1连', index: '1' }, { name: '坦克1连', index: '2' }] }] },
        { name: '弹药', index: '3', children: [{ name: '坦克1营', index: '1', children: [{ name: '坦克1连', index: '1' }, { name: '坦克1连', index: '2' }] }, { name: '炮兵2营', index: '2', children: [{ name: '坦克1连', index: '1' }, { name: '坦克1连', index: '2' }] }] }
      ]
    }
  },
  methods: {
    checkboxClick(value) {
      if (this.checkedCities.includes(value)) {
        this.checkedCities.splice(this.checkedCities.indexOf(value), 1);
      } else {
        this.checkedCities.push(value);
      }
      console.log(this.checkedCities)
    },
    nextButton(){
      console.log(this.checkedCities)
    }
  }
}
</script>