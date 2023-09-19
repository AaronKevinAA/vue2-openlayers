import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    assembleTableData: [], // 集结区表数据
    freightTableData: [], //转载兵力表数据
    mountPointTableData: [],//装载点
    troopsTableData: [],//兵力表
    ammunitionTableData: [],//弹药
    treeData: []//兵力树
  },
  getters: {
  },
  mutations: {
    setAssembleTableData(state, data) {
      state.assembleTableData = data;
    },
    SetFreightTableData(state, data) {
      state.freightTableData = data
    },
    SetMountPointTableData(state, data) {
      state.mountPointTableData = data
    },
    SetTroopsTableData(state, data) {
      state.troopsTableData = data
    },
    SetAmmunitionTableData(state, data) {
      state.ammunitionTableData = data
    },
    SetTreeData(state, data) {
      state.treeData = data
    }
  },
  actions: {
    SetFreightTableData({ commit }, data) {
      commit('SetFreightTableData', data)
    }
  },
  modules: {
  }
})
