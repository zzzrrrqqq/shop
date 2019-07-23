<template>
  <div>
    <Navbar></Navbar> 

   <div v-for="(item,i) in  goodsdata" :key="i" >
      <van-row>
        <van-col span="2">
          <van-checkbox v-model="item.isshow"></van-checkbox>
        </van-col>
        <van-col span="16">
          <van-card
            tag="标签"
            :price="item.LastPrice"
            desc="描述信息"
            :title="item.title + item.Id"
            thumb="../assets/goods1.jpg"
            :origin-LastPrice="item.LastPrice"
          />
        </van-col>
        <van-col span="6">
          <van-stepper v-model="item.num"/> 
          <van-button size="mini" @click="carDel(i)">
            <van-icon name="delete"/>
          </van-button>
        </van-col>
      </van-row>
    </div>

    <van-submit-bar :LastPrice="Tprice" button-text="提交订单" >
      <van-checkbox @click="checkeds" :value="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  data() {
    return {
    
      goodsdata:[],
      checked:true,
      Tprice:0,
    };
  },
  components: {
    Navbar
  },

  methods:{
    totalPrice(){ //总价格计算
        var num = 0;
        this. goodsdata.forEach((data)=>{
          if(data.isshow){
            num += data.num * data.LastPrice;
          }
        })
        this.Tprice = num *100;
    },
    checkeds(){ //控制选择
      this. goodsdata.forEach((data)=>{
        return data.isshow = !this.checked;
      })
    },
    datachecked(){
      var num = 0;
      this. goodsdata.forEach((data)=>{
          if(data.isshow){
            num++;
          }else{
            num--;
          }
      })

      if(Math.abs(num) == this. goodsdata.length){
          this.checked = this. goodsdata[0].isshow;
      }else{
        this.checked = false;
      }
    },
    carDel(key){
      this. goodsdata.splice(key,1);
    }

  },


  
 created: function() {
    this. goodsdata = this.$store.state. goodsdata;
    this.totalPrice();
     this.$axios
      .get("http://api.xuandan.com/DataApi/item", {
        params: {
          Appkey: "jas8p84gce",
          id: this.$route.query.id

        }
      })
      .then(response => {
        this.goodsdata = response.data.data;
       

        // console.log(this.goodsdata[0]);
      });
  },
  beforeUpdate(){
    this.totalPrice();
    this.datachecked();
  },
};
</script>
