/**
 * 作用于哪些页面
 * 注明代码业务/功能说明
 * @date 2018/1/30
 * @authors ChengLN(chenglingna@erayt.com)
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    dati: {
      id: 3,
      question: '下面哪种水果是红色的',
      answers: ['西瓜', '草莓', '苹果'],
      baiduTips: '草莓',
      baiduTF: [10, 123, 30],
      baiduProb: [10, 123, 30],
      sougou: '草莓',
      answer:'草莓'
    },
  },
  mutations: {
    update(state, info) {
      state.dati = info;
      console.log(state.dati);
    },
  },
  actions: {
    refresh(context, info) {
      context.commit("update", info);
    },

  }
})
export default store
