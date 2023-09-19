import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    //   page 1
    militaryRepost: [
      { name: '兵力', index: '1', children: [{ name: '坦克1营', index: '1', children: [{ name: '坦克1连', index: '1' }, { name: '坦克2连', index: '2' },{ name: '坦克3连', index: '3' }] }, { name: '炮兵2营', index: '2', children: [{ name: '炮兵1连', index: '1' }, { name: '炮兵2连', index: '2' },{ name: '炮兵3连', index: '3' }] }] },
      { name: '装备', index: '2', children: [{ name: '坦克1营', index: '1', children: [{ name: '坦克1连', index: '1' }, { name: '坦克2连', index: '2' },{ name: '坦克3连', index: '3' }] }, { name: '迫击炮2营', index: '2', children: [{ name: '迫击炮1连', index: '1' }, { name: '迫击炮2连', index: '2' }, { name: '迫击炮3连', index: '3' }] }] },
      { name: '弹药', index: '3', children: [{ name: '坦克1营', index: '1', children: [{ name: '坦克1连', index: '1' }, { name: '坦克2连', index: '2' },{ name: '坦克3连', index: '3' }] }, { name: '炮兵2营', index: '2', children: [{ name: '炮兵1连', index: '1' }, { name: '炮兵1连', index: '2' }, { name: '炮兵1连', index: '2' }] }] }
    ],
    militaryLoad: [
      { name: '兵力', index: '1', children: [{ name: '坦克1营', index: '1', children: [{ name: '坦克1连', index: '1' }, { name: '坦克2连', index: '2' },{ name: '坦克3连', index: '3' }] }, { name: '炮兵2营', index: '2', children: [{ name: '炮兵1连', index: '1' }, { name: '炮兵2连', index: '2' },{ name: '炮兵3连', index: '3' }] }] },
      { name: '装备', index: '2', children: [{ name: '坦克1营', index: '1', children: [{ name: '坦克1连', index: '1' }, { name: '坦克2连', index: '2' },{ name: '坦克3连', index: '3' }] }, { name: '迫击炮2营', index: '2', children: [{ name: '迫击炮1连', index: '1' }, { name: '迫击炮2连', index: '2' }, { name: '迫击炮3连', index: '3' }] }] },
      { name: '弹药', index: '3', children: [{ name: '坦克1营', index: '1', children: [{ name: '坦克1连', index: '1' }, { name: '坦克2连', index: '2' },{ name: '坦克3连', index: '3' }] }, { name: '炮兵2营', index: '2', children: [{ name: '炮兵1连', index: '1' }, { name: '炮兵1连', index: '2' }, { name: '炮兵1连', index: '2' }] }] }
    ],
    checkedMilitary: [],
    checkedMilitaryLoad:[],

    //  page2
    loadVesselData: [
      {
        isCheck: false,
        id: '1',
        date: '登陆舰',
        name: '071',
        address: '123'
      },
      {
        id: '2',
        isCheck: false,
        date: '登陆舰',
        name: '072',
        address: '456'
      },
      {
        isCheck: false,
        id: '3',
        date: '登陆舰',
        name: '073',
        address: 'xxx'
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

  },
  getters: {
  },
  mutations: {
    pushCheckedMilitary(state,element){
      state.checkedMilitary.push(element)
    },
    removeCheckMilitary(state,element){
      state.checkedMilitary.splice(state.checkedMilitary.indexOf(element), 1);
    },
    clearCheckMilitary(state){
      state.checkedMilitary = []
    },
    pushSelectShipList(state,element){
      state.selectShipList.push(element)
    },
    removeSelectShipList(state,element){
      state.selectShipList.splice(state.selectShipList.indexOf(element), 1);
    },
    clearSelectShipList(state){
      state.selectShipList = []
    },
    changeInlineResultData(state,element){
      state.inlineResultData = element
    }
  },
  actions: {
  },
  modules: {
  }
})
