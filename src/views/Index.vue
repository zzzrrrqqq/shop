<template>
  <div>
    

  <!-- Swiper -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
            <img class="animated infinite bounce delay-2s" src="../assets/vue.png" alt="">
            <h3 class="animated infinite bounce delay-2s">vue网站</h3>
      </div>
      <div class="swiper-slide">
        <img class="animated bounce delay-2s"  src="../assets/webpack.png" alt="">
        <h3>打包所有的工具。<br>
          脚本,图片,样式表。。。</h3>
      </div>
      <div class="swiper-slide">
        <img src="../assets/vant.png" alt="">
        <h3>轻量、可靠的移动端 Vue 组件库</h3>
        <van-button type="primary" to="/home">点击体验</van-button>
      </div>
    </div>
    
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>

  </div>
</template>

<script>
import Swiper from "swiper";
export default {
    mounted(){
      new Swiper('.swiper-container',{
        pagination: {
          el: '.swiper-pagination',
        },
      });
    },
    created(){
      if(localStorage.One){
        this.$router.push("/gg");
      }else{
        localStorage.One = true;
      }
      
    }
};
</script>

<style lang="scss" scoped>
    .swiper-container {
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      text-align: center;
      img{
        width: 120px;
        height: 120px;
        margin-top: 200px;
      }
      h3{
        color:#808080;
      }
    }
</style>
