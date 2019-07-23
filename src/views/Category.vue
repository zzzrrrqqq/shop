<template>
  <div>
    <Navbar></Navbar>

    <div id="categoryList">
      <div class="leftList">
        <van-sidebar :active-key="activeKey" @change="onChange">
          <van-sidebar-item title="新品" info="99+"/>
          <van-sidebar-item title="手机"/>
          <van-sidebar-item title="电脑"/>
          <van-sidebar-item title="电器"/>
        </van-sidebar>
        <!-- Swiper -->
        <!-- <div class="swiper-container leftListcontainer">
          <div class="swiper-wrapper">
            <div class="swiper-slide" @click="add('')">新品</div>
            <div class="swiper-slide" @click="add('b')">众筹</div>
            <div class="swiper-slide">手机</div>
            <div class="swiper-slide">电视</div>
            <div class="swiper-slide">电脑</div>
            <div class="swiper-slide">智能</div>
          </div>
        </div> -->
      </div>
     
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Categorylist from "../components/Categorylist";
import Swiper from "swiper";

export default {
  data() {
    return {
      activeKey: 0
    };
  },
  methods: {
    onChange(key) {
      this.activeKey = key;
    },
  
  },

  
  mounted() {
  
  },
  components: {
    Navbar,
    Categorylist
  }
};
</script>


<style lang="scss">
#categoryList {
  text-align: center;
  position: fixed;
  width: 100%;
  top: 45px;
  bottom: 50px;
  // display: flex;
  .leftList {
    background: #ffffff;
    //  flex: 0 0 80px;
    width: 80px;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    z-index: 20;
  }
  .rightList {
    background: #ffffff;
    // flex:1;
    padding-left: 80px;
    height: 100%;
  }
}
.swiper-container {
  height: 100%;
}
</style>