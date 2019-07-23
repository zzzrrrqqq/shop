<template>
<div>
    <router-link to='/home?'>
   <van-col span="4">
        <span class="iconfont icon-fanhui"></span>
   </van-col>
     </router-link>
    <van-col span="16">
        <van-search placeholder="请输入搜索关键词"/>
    </van-col>
    <router-link to='/my?'>
     <van-col span="4">
        <span class="iconfont icon-wode"></span>
   </van-col>
    </router-link>
</div>
</template>

<script>


export default {
    
}
</script>
<style lang="scss">
.iconfont {
  display: block;
  text-align: center;
  padding-top: 8px;
  font-size: 33px;
  color: #D9D9D9;
}
</style>

