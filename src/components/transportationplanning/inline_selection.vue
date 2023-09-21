<template>
  <div>
    <!-- <el-checkbox-group v-model="checkedCities" @change="handleChange"> -->

    <el-menu class="el-menu-vertical-demo">
      <el-submenu index="1">
        <template slot="title">装备选择</template>
<!--        <el-submenu v-for="(item, index) in this.$store.state.militaryRepost" :key="index" :index="item.index">-->
        <el-submenu v-for="(item, index) in getBinLiData()" :key="index" :index="item.index">
          <template slot="title">{{ item.name }}</template>
          <el-submenu v-for="(item2, index2) in item.children" :key="index2" :index="item.index + '-' + item2.index">
            <template slot="title">{{ item2.name }}</template>
            <el-submenu v-for="(subItem, subIndex) in item2.children" :key="subIndex"
              :index="item.index + '-' + item2.index + '-' + subItem.index">
              <template slot="title">
                <el-checkbox :label="subItem.name"
                             @change="checkboxClick(item.index + '-' + item2.index + '-' + subItem.index)">
                </el-checkbox>
              </template>

              <div v-for="(it,id1) in returnZhunBeiData()" :key="id1">
                <el-menu-item  v-if="subItem.equip === it.ID" >
                  <div>  {{ it.装备类型}} </div>
                </el-menu-item>
              </div>
<!--              <el-menu-item >-->
<!--&lt;!&ndash;                <el-checkbox @change="checkZunBeiList(item.index + '-' + item2.index + '-' + subItem.index,it.ID)">&ndash;&gt;-->
<!--                <div v-if="subItem.equip === it.ID">  {{ it.装备类型}}</div>-->
<!--&lt;!&ndash;                </el-checkbox>&ndash;&gt;-->
<!--              </el-menu-item>-->

            </el-submenu>
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
      // checkedCities: [],

      // data: [
      //   { name: '兵力', index: '1', children: [{ name: '坦克1营', index: '1', children: [{ name: '坦克1连', index: '1' }, { name: '坦克1连', index: '2' }] }, { name: '炮兵2营', index: '2', children: [{ name: '坦克1连', index: '1' }, { name: '坦克1连', index: '2' }] }] },
      //   { name: '装备', index: '2', children: [{ name: '坦克1营', index: '1', children: [{ name: '坦克1连', index: '1' }, { name: '坦克1连', index: '2' }] }, { name: '炮兵2营', index: '2', children: [{ name: '坦克1连', index: '1' }, { name: '坦克1连', index: '2' }] }] },
      //   { name: '弹药', index: '3', children: [{ name: '坦克1营', index: '1', children: [{ name: '坦克1连', index: '1' }, { name: '坦克1连', index: '2' }] }, { name: '炮兵2营', index: '2', children: [{ name: '坦克1连', index: '1' }, { name: '坦克1连', index: '2' }] }] }
      // ]
    }
  },
  created() {
    // this.getBinLiData()
    // this.getShipData()
  },
  methods: {
    getBinLiData(){
      let data =[...this.$store.state.militaryRepost]
      //  [1-1-1,1-2-1]
      console.log(data[0].name)
      // const indices = ['1-1-1', '1-2-1', '2-1-1'];
      const indices = this.$store.state.checkedMilitary
      // const result = [];
      // indices.forEach(index => {
      //   const [t, c, cc] = index.split('-');
      //   const tIndex = parseInt(t) - 1;
      //   const cIndex = parseInt(c) - 1;
      //   const ccIndex = parseInt(cc) - 1;
      //
      //   if (data[tIndex] && data[tIndex].children[cIndex] && data[tIndex].children[cIndex].children[ccIndex]) {
      //     result.push(data[tIndex].children[cIndex].children[ccIndex]);
      //   }
      // });

      const result = [];
      indices.forEach(index => {
        const [t, c, cc] = index.split('-');
        const tIndex = parseInt(t) - 1;
        const cIndex = parseInt(c) - 1;
        const ccIndex = parseInt(cc) - 1;

        if (data[tIndex]) {
          const targetT = { ...data[tIndex] };
          if (targetT.children[cIndex]) {
            const targetC = { ...targetT.children[cIndex] };
            if (targetC.children[ccIndex]) {
              const targetCC = { ...targetC.children[ccIndex] };
              targetCC.parent = targetC;
              targetC.children = [targetCC];
              targetT.children = [targetC];
              // result.push(targetT);
              for(let i=0;i<=result.length;i++){
                if(result.length !== 0 && result[i].hasOwnProperty('name') && result[i].name === targetT.name){
                    for(let j=0;j<result[i].children.length;j++){
                      if (result[i].children[j].hasOwnProperty('name') && result[i].children[j].name ===targetC.name ){
                        result[i].children[j].children.push(targetCC)
                      }else{
                        result[i].children.push(targetC)
                      }
                    }
                }else{
                  console.log(1234)
                  result.push(targetT)
                  break
                }
              }
            }
          }
        }
      });
      console.log(result)
      return result
    },
    findNotAppearIndex(level,[]){
      if(level === 1){
      }else if(level ===2){
      }else if(level ===3){
      }
    },
    popListData(list,index){
      list.splice(index,1)
    },
    checkboxClick(value) {
      if (this.$store.state.checkInlineListData.includes(value)) {
        this.$store.commit('removeCheckInline',value)
      } else {
        this.$store.commit('pushCheckedInline',value)
      }

      console.log(this.$store.state.inlineResultData)
    },
    checkZunBeiList(junDuiIndex,zunBeiId){
      // console.log(junDuiIndex,zunBeiId)
      this.$store.commit('pushSelectJunDuiAndZhunBei',[junDuiIndex,zunBeiId])
      // console.log('checkZunBeiList',this.$store.state.junDuiJunBei)
    },

    returnZhunBeiData(){
      return this.$store.state.inlineListData
    },
    nextButton(){
    }
  }
}
</script>