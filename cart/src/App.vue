<template>
  <div id="app">
    <div class="cart">
      <Top />
      <Center />
      <Bottom />
    </div>
  </div>
</template>
<script>
import Top from "./components/top";
import Center from "./components/center";
import Bottom from "./components/bottom";
import axios from "axios";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {
    Top,
    Center,
    Bottom
  },
  created() {
    axios({
      method: "get",
      url: "http://localhost:8080/api/data"
    }).then(data => {
      this.getGoodsAction(data.data);
    });
  },
  methods: {
    ...mapActions({
      getGoodsAction: "cart/getGoodsAction"
    })
  }
};
</script>
<style >
.cart {
  width: 990px;
  margin: 30px auto;
}
</style>
