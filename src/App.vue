<template>
  <div id="app">
    <router-view/>

    <van-tabbar v-model="active" v-show="tabbarshow">
      <van-tabbar-item icon="home-o" name="home" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" name="category" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" name="cart" to="cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="friends-o" name="my" to="my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      tabbarshow:true
    }
  },
  created(){
    if(this.$route.path == "/"){
        this.tabbarshow = false;
      }else{
        this.tabbarshow = true;
      }
  },
  watch:{ 
    "$route.path":function(newpath,oldpath){
      console.log(newpath);
      if(newpath == "/xq"){
        this.tabbarshow = false;
      }else{
        this.tabbarshow = true;
      }
    }
  }
}
</script>

<style lang="scss">
  
    .clearfix:before,.clearfix:after{
      display: table;
      content:"";
      clear: both;
    }
 
</style>
