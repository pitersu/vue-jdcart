const state = {
  goods: [],
  selectedAll: true
}


const actions = {
  getGoodsAction({
    commit
  }, params) {
    params.map((item) => {
      item.flag = true
    })
    commit("getGoodsMutations", params)
  }
}


const mutations = {
  handlegoodsSelected(state, index) {
    state.goods[index].flag = !state.goods[index].flag;

    var bStop = true;

    for (var i = 0; i < state.goods.length; i++) {
      if (!state.goods[i].flag) {
        bStop = false;
        break;
      }
    }
    state.selectedAll = bStop;
  },
  handleSelectedChange(state) {
    state.selectedAll = !state.selectedAll

    state.goods.forEach(item => {
      item.flag = state.selectedAll
    });
  },
  getGoodsMutations(state, params) {
    state.goods = [...params]
  },
  handleReduce(state, index) {
    if (state.goods[index].num > 1) {
      state.goods[index].num--
    }
  },
  handleAdd(state, index) {
    state.goods[index].num++;
  }
}

const getters = {
  goodsCount(state) {
    let goodsNum = 0,
      goodsPrice = 0;

    for (var i = 0; i < state.goods.length; i++) {
      if (state.goods[i].flag) {
        goodsNum += state.goods[i].num;
        goodsPrice += state.goods[i].num * state.goods[i].price;
      }
    }

    return {
      goodsNum,
      goodsPrice
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}
