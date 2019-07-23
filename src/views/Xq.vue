<template>
  <div>
    <div class="navigation">
      <Navbar></Navbar>
    </div>
    

    <!-- 轮播图获取数据 -->

    <van-swipe class="vanswipe" :autoplay="3000">
      <van-swipe-item v-for="(item,index) in goodsdata" :key="index">
        <img class="vanswipe" :src="item.ImgUrl" alt />
      </van-swipe-item>
    </van-swipe>

    <div class="data">
      <van-row>
        <van-col v-for="(item , index) in goodsdata" :key="index">
          <div class="name">{{item.GoodsName}}</div>
          <!-- <p class="long">{{item.TjRemark}}</p> -->
          <p class="word">{{item.LongGoodsName}}</p>
          <div class="price">
            <span class="newPrice">￥{{item.LastPrice?item.LastPrice:item.GoodsPrice}}</span>
            <span class="oldPrice" v-if="item.LastPrice">￥{{item.GoodsPrice}}</span>

            <div class="details">
              <p class="line">
                <span class="coupons">领劵</span>
                 <span class="money">
                {{item.ActMoney}}
               元</span>
              </p>
              <p class="lines">
                <span class="coupons">日销量
                <span class="all">
                {{item.AllDayCount}}
                </span>
                </span>
                <span class="sales">总销量<span class="saless">{{item.SaleCount}}</span></span>
              </p>
            </div>
          </div>
        </van-col>
      </van-row>
    </div>

    <!-- <p v-for="(item, index) in newList" :key="index" @click="zxc(item.id)">{{ item.name }}</p> -->
    <!-- <div>
        <p v-for="(item , index) in imgList" :key="index">
          <img :src="item.listPicUrl" alt=""></p>
    </div>-->
    <div class="cart">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="goCart()" />
        <van-button class="submit" type="warning" text="加入购物车" @click="getCart()" />
        <van-popup class="buttons" v-model="show">加入成功</van-popup>
        <van-button class="submits" type="danger" text="立即购买" @click="goCart()" />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import { constants } from "crypto";
import axios from "axios";

export default {
  data() {
    return {
      goodsdata: [],
      show: false,
      LastPrice:[],
      price:null,
      showBase: "",
      goods: {
        num: 1,
        price:1
      }
    
      // 新品首发
      // newList: [],
      // imgList:[]
    };
  },

  components: {
    Navbar
  },

  // 调用轮播图数据
  // created() {
  //   console.log(this.$route.query.id);
  //   this.dataId = this.$route.query.id;
  //   this.goods.Id = this.$route.query.id;
  //  var _this=this
  //  axios.get('https://www.littleemmayang.com/api/home/newitemlist').then(r => {
  //   //  console.log(r)
  //    this.newList = r.data.data

  //    this.imgList=r.data.data
  //  }).catch(e => {
  //    console._log(e)
  //  })

  // },

  // methods: {
  //  zxc(id){
  //     axios.get('/api/item/detail', {
  //        baseURL:'https://www.littleemmayang.com',
  //        params:{
  //           id
  //        }
  //     }).then(r => {
  //        console.log(r)
  //     }).catch(e => {
  //        console.log(e)
  //     })
  // },

  //  this.axios.get(url).then(r=> cnsole.log(r)

  //   getApi(){
  //     this.axios.get(api).then((response) => {
  //     console.log(response.data)
  // })
  // },

  created: function() {
    console.log(this.$route.query.id);
    this.$axios
      .get("http://api.xuandan.com/DataApi/item", {
        params: {
          Appkey: "jas8p84gce",
          id: this.$route.query.id

        }
      })
      .then(response => {
        this.goodsdata = response.data.data;
        this.LastPrice=response.data.data;

        // console.log(this.goodsdata[0]);
      });
    
  this.dataId = this.$route.query.id;
  this.LastPrice.Id = this.$route.query.id;
    // this.dataId = this.$route.query.id;
    // this.goods.Id = this.$route.query.id;
  },
  methods: {
    getCart() {
      //   this.goods.datetime = new Date();
      //   this.$store.state.CartList.push(this.goods);

      this.$store.commit("add", this. LastPrice);
      this.show = true;
    },
    goCart() {
      this.$router.push("/cart");
    }
  }
};
</script>

<style lang="scss">
.vanswipe {
  height: 100%;
  width: 100%;
  font-size: 30px;
  
}
.images {
  width: 100%;
  height: 100%;
}

.submit {
  margin-left: 25px;
  display: block;
  width: 150px;
}
.submits {
  display: block;
  width: 150px;
}
.buttons {
  display: block;
  height: 110px;
  width: 110px;
  top: 50%;
  left: 50%;
  font-size: 15px;
  text-align: center;
  line-height: 110px;
  z-index: 1000;
  background-color: rgba(255, 253, 253, 0.5);
}
.cart{
  height: 45px;
  margin-bottom: 30px;
}
.name{
    display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
.newPrice{
    
    font-weight: 550;
    font-size: 1.5rem;
    color: red
}
.oldPrice{
    font-weight: 500;
    font-size: 1rem;
    color: #ccc;
    text-decoration: line-through;
}
 
.coupons{
  margin-right: 1rem;
    color: #978989;
}
.money{
  color: red;
 margin-left: -123px;
}
.coupons{
    float: left;
    padding-left: 1rem;
    color: black;
}
.all{

  color: red;
  
}
.sales{
  padding-left: 15px;

}
.saless{
  color: red;
  padding-left: 6px;
}
.details{
    background-color:  rgba(235, 228, 228, 0.5);
    
}
.line{
  display: block;
  padding-bottom: 3px;
  border-bottom: 1px solid rgba(184, 181, 181, 0.5);
  height:40px; 
  text-align: center;
   line-height: 40px;
 
}
.lines{
  display: block;
  padding-bottom: 3px;
  border-bottom: 1px solid rgba(184, 181, 181, 0.5);
  height:30px; 
 text-align: center;
  
 
}

</style>