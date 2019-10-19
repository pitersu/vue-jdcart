<template>
  <div class="content">
    <div class="goods" v-for="(item,index) in goods" :key="index">
      <label>
        <input type="checkbox" :checked="item.flag" @change="handlegoodsSelected(index)" />
      </label>
      <div class="goodsImg">
        <img :src="item.img" alt />
      </div>
      <div class="goodsInfo">{{item.goodsName}}</div>
      <p class="goodsPrice">{{item.price}}</p>
      <div class="num">
        <button @click="handleReduce(index)">-</button>
        <input type="text" :value="item.num" />
        <button @click="handleAdd(index)">+</button>
      </div>
      <p class="Subtotal">{{item.num | sign(item.price)}}</p>
      <p class="operation">删除</p>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Center",
  filters: {
    sign(n, price) {
      return "￥" + n * price;
    }
  },
  computed: {
    ...mapState({
      goods: state => state.cart.goods
    })
  },
  methods: {
    ...mapMutations({
      handlegoodsSelected: "cart/handlegoodsSelected",
      handleReduce: "cart/handleReduce",
      handleAdd: "cart/handleAdd"
    })
  }
};
</script>
<style>
.goods {
  width: 100%;
  display: flex;
  height: 107px;
  align-items: center;
  background: #ccc;
}
.goods > label {
  width: 118px;
  text-align: center;
}
.goods > .goodsInfo {
  width: 200px;
}
.goods > .goodsPrice {
  width: 200px;
  text-align: center;
}
.goods > .num {
  overflow: hidden;
  display: flex;
}
.goods > .num > button {
  width: 20px;
  height: 20px;
  border: 0;
}
.goods > .num > input {
  width: 40px;
}
.goods > .Subtotal {
  width: 200px;
  text-align: center;
}
.goods > .operation {
  width: 86px;
  text-align: center;
}
.goodsImg,
.goodsImg > img {
  width: 100px;
  height: 40px;
}
</style>