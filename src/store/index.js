import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    //   page 1
    militaryRepost: [
      { name: '陆战1旅', index: '1', id:'T1', children: [{ name: '机步1营', index: '1',id:'C1', children: [{ id:'T1_C1_c1',name: '机步1连', index: '1',people:'120','equip':'goods_ZBD05',equipmentNumber:'120' }, { id:'T1_C1_c2',name: '机步2连', index: '2' ,people:'120','equip':'goods_ZBD05',equipmentNumber:'120'},{ id:'T1_C1_c3',name: '机步3连', index: '3' ,people:'120','equip':'goods_ZBD05',equipmentNumber:'120'}] }, { name: '机步2营',id:'C2', index: '2', children: [{ id:'T1_C2_c1',name: '机步1连', index: '1',people:'120','equip':'goods_ZTD05',equipmentNumber:'120' }, { id:'T1_C2_c2',name: '机步2连', index: '2' ,people:'120','equip':'goods_ZTD05',equipmentNumber:'120'},{id:'T1_C2_c3', name: '机步3连', index: '3' ,people:'120','equip':'goods_ZTD05',equipmentNumber:'120'}] }] },
      { name: '陆战2旅', index: '2',id:'T2', children: [{ name: '机步1营', index: '1',id:'C1',children: [{ id:'T2_C1_c1', name: '机步1连', index: '1',people:'120','equip':'goods_zhi8',equipmentNumber:'120' }, { id:'T2_C1_c2',name: '机步2连', index: '2' ,people:'120','equip':'goods_zhi8',equipmentNumber:'120'},{ id:'T2_C1_c3',name: '机步3连', index: '3',people:'120','equip':'goods_zhi8',equipmentNumber:'120'}] }, { name: '机步2营',id:'C2', index: '2', children: [{ id:'T2_C2_c1',name: '机步1连', index: '1' ,people:'120','equip':'goods_xx',equipmentNumber:'120'}, { id:'T2_C2_c2',name: '机步2连', index: '2' ,people:'120','equip':'goods_xx',equipmentNumber:'120'}, { id:'T2_C2_c3',name: '机步3连', index: '3',people:'120','equip':'goods_xx',equipmentNumber:'120'}] }] },
      // { name: '弹药', index: '3', children: [{ name: '坦克1营', index: '1', children: [{ name: '坦克1连', index: '1' }, { name: '坦克2连', index: '2' },{ name: '坦克3连', index: '3' }] }, { name: '炮兵2营', index: '2', children: [{ name: '炮兵1连', index: '1' }, { name: '炮兵1连', index: '2' }, { name: '炮兵1连', index: '2' }] }] }
    ],

    // militaryLoad: [
    //   { name: '兵力', index: '1', children: [{ name: '坦克1营', index: '1', children: [{ name: '坦克1连', index: '1' }, { name: '坦克2连', index: '2' },{ name: '坦克3连', index: '3' }] }, { name: '炮兵2营', index: '2', children: [{ name: '炮兵1连', index: '1' }, { name: '炮兵2连', index: '2' },{ name: '炮兵3连', index: '3' }] }] },
    //   { name: '装备', index: '2', children: [{ name: '坦克1营', index: '1', children: [{ name: '坦克1连', index: '1' }, { name: '坦克2连', index: '2' },{ name: '坦克3连', index: '3' }] }, { name: '迫击炮2营', index: '2', children: [{ name: '迫击炮1连', index: '1' }, { name: '迫击炮2连', index: '2' }, { name: '迫击炮3连', index: '3' }] }] },
    //   { name: '弹药', index: '3', children: [{ name: '坦克1营', index: '1', children: [{ name: '坦克1连', index: '1' }, { name: '坦克2连', index: '2' },{ name: '坦克3连', index: '3' }] }, { name: '炮兵2营', index: '2', children: [{ name: '炮兵1连', index: '1' }, { name: '炮兵1连', index: '2' }, { name: '炮兵1连', index: '2' }] }] }
    // ],

    militaryLoad:[
      {
        "ID": "ship_071",
        "运输船类型": "登陆舰",
        "型号": "071",
        "长度（米）": 210,
        "宽度（米）": 28,
        "吃水（m）": 8,
        "最大载重（吨）": 25000,
        "最大航速（节）": 25,
        "数量": 10,
        "甲板层数": 3
      },
      {
        "ID": "ship_072",
        "运输船类型": "登陆舰",
        "型号": "072",
        "长度（米）": 140,
        "宽度（米）": 18,
        "吃水（m）": 5,
        "最大载重（吨）": 4000,
        "最大航速（节）": 25,
        "数量": 15,
        "甲板层数": 3
      },
      {
        "ID": "ship_073",
        "运输船类型": "登陆舰",
        "型号": "073",
        "长度（米）": 120,
        "宽度（米）": 15,
        "吃水（m）": 4.2,
        "最大载重（吨）": 25000,
        "最大航速（节）": 25,
        "数量": 10,
        "甲板层数": 2
      },
      {
        "ID": "ship_073A",
        "运输船类型": "登陆舰",
        "型号": "073A",
        "长度（米）": 140,
        "宽度（米）": 18,
        "吃水（m）": 5,
        "最大载重（吨）": 4000,
        "最大航速（节）": 22,
        "数量": 25,
        "甲板层数": 2
      },
      {
        "ID": "ship_075",
        "运输船类型": "登陆舰",
        "型号": "075",
        "长度（米）": 250,
        "宽度（米）": 30,
        "吃水（m）": 8,
        "最大载重（吨）": 35000,
        "最大航速（节）": 25,
        "数量": 12,
        "甲板层数": 1
      },
      {
        "ID": "ship_726",
        "运输船类型": "登陆舰",
        "型号": "726",
        "长度（米）": 140,
        "宽度（米）": 18,
        "吃水（m）": 5,
        "最大载重（吨）": 4000,
        "最大航速（节）": 25,
        "数量": 100,
        "甲板层数": 1
      }
    ],
    //jijiedian page
    jiJieDianData: [
      {
        "ID": "port1",
        "港口名称": "码头1",
        "经度": 118.20849609375,
        "纬度": 24.3182373046875,
        "装载方式": "滚装",
        "吨位": 5000,
        "水深": 9,
        "长度": 300,
        "宽度": 50,
        "同时装载船数": 1
      },
      {
        "ID": "port2",
        "港口名称": "码头2",
        "经度": 118.7578125,
        "纬度": 24.642333984375,
        "装载方式": "滚装",
        "吨位": 5000,
        "水深": 9,
        "长度": 250,
        "宽度": 50,
        "同时装载船数": 2
      },
      {
        "ID": "port3",
        "港口名称": "码头3",
        "经度": 117.20599365234375,
        "纬度": 23.52447509765625,
        "装载方式": "吊装",
        "吨位": 6000,
        "水深": 9,
        "长度": 180,
        "宽度": 30,
        "同时装载船数": 1
      },
      {
        "ID": "port4",
        "港口名称": "码头4",
        "经度": 116.8681640625,
        "纬度": 23.3074951171875,
        "装载方式": "滚装",
        "吨位": 6000,
        "水深": 9,
        "长度": 140,
        "宽度": 50,
        "同时装载船数": 2
      }
    ],
    // inlineListData: [
    //   { name: '陆战1旅', index: '1', children: [{ name: '坦克1营', index: '1', children: [{ name: '坦克1连', index: '1' }, { name: '坦克2连', index: '2' },{ name: '坦克3连', index: '3' }] }, { name: '炮兵2营', index: '2', children: [{ name: '炮兵1连', index: '1' }, { name: '炮兵2连', index: '2' },{ name: '炮兵3连', index: '3' }] }] },
    //   { name: '陆战2旅', index: '2', children: [{ name: '坦克1营', index: '1', children: [{ name: '坦克1连', index: '1' }, { name: '坦克2连', index: '2' },{ name: '坦克3连', index: '3' }] }, { name: '迫击炮2营', index: '2', children: [{ name: '迫击炮1连', index: '1' }, { name: '迫击炮2连', index: '2' }, { name: '迫击炮3连', index: '3' }] }] },
    //   { name: '陆战3旅', index: '3', children: [{ name: '坦克1营', index: '1', children: [{ name: '坦克1连', index: '1' }, { name: '坦克2连', index: '2' },{ name: '坦克3连', index: '3' }] }, { name: '炮兵2营', index: '2', children: [{ name: '炮兵1连', index: '1' }, { name: '炮兵1连', index: '2' }, { name: '炮兵1连', index: '2' }] }] }
    // ],
    inlineListData:[
      {
        "ID": "goods_ZBD05",
        "装备类型": "两栖装甲步兵车",
        "型号": "ZBD-05",
        "长度（米）": 7,
        "宽度（米）": 3,
        "吃水（m）": -1,
        "重量（吨）": 20,
        "最大航速（节）": -1,
        "数量": 2000,
        "装载时间(分钟)": 10
      },
      {
        "ID": "goods_ZTD05",
        "装备类型": "两栖装甲步兵车",
        "型号": "ZTD-05",
        "长度（米）": 7.2,
        "宽度（米）": 3.5,
        "吃水（m）": -1,
        "重量（吨）": 22,
        "最大航速（节）": -1,
        "数量": 3000,
        "装载时间(分钟)": 10
      },
      {
        "ID": "goods_zhi8",
        "装备类型": "舰载运输机",
        "型号": "直8",
        "长度（米）": 18,
        "宽度（米）": 3,
        "吃水（m）": -1,
        "重量（吨）": 13,
        "最大航速（节）": -1,
        "数量": 100,
        "装载时间(分钟)": 8
      },
      {
        "ID": "goods_xx",
        "装备类型": "冲锋舟",
        "型号": "xx",
        "长度（米）": 45,
        "宽度（米）": 7,
        "吃水（m）": -1,
        "重量（吨）": 250,
        "最大航速（节）": -1,
        "数量": 5000,
        "装载时间(分钟)": 5
      }
    ],

    checkedMilitary: [],
    checkedMilitaryLoad:[],
    checkInlineListData:[],
    youXianShuSongBingLi:[],
    // 什么军队选择了什么装备
    junDuiJunBei: {},
    // 军队 船
    junDuiShip:[],

    //  page2
    loadVesselData: [
      {
        "ID": "ship_071",
        "运输船类型": "登陆舰",
        "型号": "071",
        "长度": 210,
        "宽度": 28,
        "吃水": 8,
        "最大载重": 25000,
        "最大航速（节）": 25,
        "数量": 10,
        "甲板层数": 3
      },
      {
        "ID": "ship_072",
        "运输船类型": "登陆舰",
        "型号": "072",
        "长度": 140,
        "宽度": 18,
        "吃水": 5,
        "最大载重": 4000,
        "最大航速": 25,
        "数量": 15,
        "甲板层数": 3
      },
      {
        "ID": "ship_073",
        "运输船类型": "登陆舰",
        "型号": "073",
        "长度": 120,
        "宽度": 15,
        "吃水": 4.2,
        "最大载重": 25000,
        "最大航速": 25,
        "数量": 10,
        "甲板层数": 2
      },
      {
        "ID": "ship_073A",
        "运输船类型": "登陆舰",
        "型号": "073A",
        "长度": 140,
        "宽度": 18,
        "吃水": 5,
        "最大载重": 4000,
        "最大航速": 22,
        "数量": 25,
        "甲板层数": 2
      },
      {
        "ID": "ship_075",
        "运输船类型": "登陆舰",
        "型号": "075",
        "长度（米）": 250,
        "宽度（米）": 30,
        "吃水（m）": 8,
        "最大载重（吨）": 35000,
        "最大航速（节）": 25,
        "数量": 12,
        "甲板层数": 1
      },
      {
        "ID": "ship_726",
        "运输船类型": "登陆舰",
        "型号": "726",
        "长度（米）": 140,
        "宽度（米）": 18,
        "吃水（m）": 5,
        "最大载重（吨）": 4000,
        "最大航速（节）": 25,
        "数量": 100,
        "甲板层数": 1
      }
    ],
    selectShipList: [],

    inlineResultData: [
      {
        id: '1',
        date: '071',
        name: '213',
        address: '陆战1旅-机步1营-机步1连，120人，30两坦克 \n 陆战1旅-机步1营-机步1连，120人，30两坦克'
      },
      {
        id: '2',
        date: '072',
        name: '456',
        address: '陆战1旅-机步1营-机步1连，120人，30两坦克'
      },

    ],
    // 集结点数据
    aimLoc : {
      location_name: '集结点1',
      longitude: 118.38153076171875,
      latitude: 23.11248779296875
    }

  },
  getters: {
  },
  mutations: {
    /// 军队
    pushCheckedMilitary(state,element){
      state.checkedMilitary.push(element)
    },
    removeCheckMilitary(state,element){
      state.checkedMilitary.splice(state.checkedMilitary.indexOf(element), 1);
    },
    // 军队 船
    pushSelectJunDuiShip(state,element){
      state.junDuiShip.push(element)
    },
    removeSelectJunDuiShip(state,element){
      state.junDuiShip.splice(state.junDuiShip.indexOf(element), 1);
    },

    // 什么军队选择了什么装备
    pushSelectJunDuiAndZhunBei(state,junDuiId){
      // console.log(junDuiId)
      if(!state.junDuiJunBei.hasOwnProperty(junDuiId[0])){
        state.junDuiJunBei[junDuiId[0]] = [junDuiId[1]]
      }else {
        var index = state.junDuiJunBei[junDuiId[0]].indexOf(junDuiId[1])
        if (index===-1){
          state.junDuiJunBei[junDuiId[0]].push(junDuiId[1])
        }else{
          state.junDuiJunBei[junDuiId[0]].splice(index,1)
        }
      }
    },

    // 优先输送兵力
    pushYouXianShuSong(state,element){
      state.youXianShuSongBingLi.push(element)
    },
    removeYouXianShuSong(state,element){
      state.youXianShuSongBingLi.splice(state.youXianShuSongBingLi.indexOf(element), 1);
    },


    // 勾选和删除的军队
    pushCheckedInline(state,element){
      state.checkInlineListData.push(element)
    },
    removeCheckInline(state,element){
      state.checkInlineListData.splice(state.checkInlineListData.indexOf(element), 1);
    },

    //
    clearCheckMilitary(state){
      state.checkedMilitary = []
    },
    // 船
    pushSelectShipList(state,element){
      state.selectShipList.push(element)
    },
    removeSelectShipList(state,element){
      state.selectShipList.splice(state.selectShipList.indexOf(element), 1);
    },
    clearSelectShipList(state){
      state.selectShipList = []
    },
    // 显示关联数据
    changeInlineResultData(state,element){
      state.inlineResultData = element
    }
  },
  actions: {
  },
  modules: {
  }
})
