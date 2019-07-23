<template>
  <div>
    <div class="swiper-slide">
      <!-- <img src="../assets/timg3.png" alt=""> -->
      <van-loading color="#1989fa" />
      

      <h1 style="font-size:50px;">{{num}}</h1>
    </div>
  </div>
</template>
<script>
import { setTimeout, setInterval, clearInterval } from "timers";
export default {
  data() {
    return {
      num: 2,
      cleardata: null
    };
  },
  created() {
    this.cleardata = setInterval(() => {
      if (this.num == 0) {
        this.$router.push("/home");
        console.log(11);
      } else {
        this.num--;
      }
    }, 3000);
  },
  beforeDestroy() {
    //销毁数据与方法
    clearInterval(this.cleardata);
  }
};
</script>
<style>
van-loading{
    float: center;
    display: block;
}
</style>



