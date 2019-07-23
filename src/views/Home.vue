<template>
  <div class="home">
    <!-- 顶部导航 -->
    <van-row class="topsearch">
      <van-col span="4">
        <span class="iconfont icon-saoma"></span>
      </van-col>
      <router-link to="/search?">
        <van-col span="16">
          <van-search placeholder="请输入搜索关键词" />
        </van-col>
      </router-link>
      <van-col span="4">
        <span class="iconfont icon-wode"></span>
      </van-col>
    </van-row>
    <!-- 顶部导航end -->
    <!-- 轮播分类 -->
    <van-tabs>
      <van-tab :title="item.title" v-for="(item, index) in user" :key="index"></van-tab>
    </van-tabs>
    <!-- 轮播分类end -->

    <!-- 分类列表 -->

    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <van-image
          width="100%"
          height="180"
          src="//i8.mifile.cn/v1/a1/f272e64a-e624-6a56-2c04-2422569db283!720x360.webp"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          width="100%"
          height="180"
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/68bbb95bf59e234d1a645703789ae6da.jpg?thumb=1&w=720&h=360"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          width="100%"
          height="180"
          src="//i8.mifile.cn/v1/a1/79414895-980e-1c75-5a1d-2bcaf788a1cd!720x360.webp"
        />
      </van-swipe-item>
    </van-swipe>

    <div id="categorys">
      <ul class="clearfix">
        <router-link to="/no?">
          <li>
            <img src="//i8.mifile.cn/v1/a1/290976f3-acac-8a62-7e5c-a19985a6414b!144x152.webp" alt />
          </li>
        </router-link>
        <router-link to="/no?">
          <li>
            <img src="//i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e!144x152.webp" alt />
          </li>
        </router-link>
        <router-link to="/no?">
          <li>
            <img
              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca174c51c30e324d0ca3d27f822be92c.gif"
              alt
            />
          </li>
        </router-link>
        <router-link to="/no?">
          <li>
            <img src="//i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee!144x152.webp" alt />
          </li>
        </router-link>
        <router-link to="/no?">
          <li>
            <img src="//i8.mifile.cn/v1/a1/7dbcbf87-6a58-adb6-2f3f-bb3dae3e9c80!144x152.webp" alt />
          </li>
        </router-link>
        <router-link to="/no?">
          <li>
            <img
              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152"
              alt
            />
          </li>
        </router-link>
        <router-link to="/no?">
          <li>
            <img
              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?thumb=1&w=144&h=152"
              alt
            />
          </li>
        </router-link>
        <router-link to="/no?">
          <li>
            <img
              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?thumb=1&w=144&h=152"
              alt
            />
          </li>
        </router-link>
        <router-link to="/no?">
          <li>
            <img src="//i8.mifile.cn/v1/a1/65fd2670-a567-dac3-59d1-6d96398cb733!144x152.webp" alt />
          </li>
        </router-link>
        <router-link to="/no?">
          <li>
            <img
              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?thumb=1&w=144&h=152"
              alt
            />
          </li>
        </router-link>
      </ul>
    </div>
    <!-- 分类列表end -->

    <!-- 商品列表 -->
    <!-- <van-card
      num="1"
      tag="标签"
      price="99.00"
      desc="描述信息"
      title="商品标题 id 1"
      :thumb="imgUrl"
      
     
      origin-price="10.00"
    >
      <div slot="footer">
        <van-button size="mini" to="/xq?">进入详情</van-button>
      </div>
    </van-card>

    <van-card
      num="2"
      tag="标签"
      price="2.00"
      desc="描述信息"
      title="商品标题 id 2"
      :thumb="imgUrl"
      origin-price="10.00"
    >
      <div slot="footer" >
        <van-button size="mini" to="/xq?id=2">进入详情</van-button>
      </div>
    </van-card>

    <van-card
      num="2"
      tag="标签"
      price="2.00"
      desc="描述信息"
      title="商品标题 id 3"
      :thumb="imgUrl"
      origin-price="10.00"
    >
      <div slot="footer">
        <van-button size="mini" to="/xq?id=3">进入详情</van-button>
      </div>
    </van-card>-->
    <!-- 商品列表end -->

    <div class="noitems">
      <b>
        <span>每日精选</span>
      </b>
    </div>

    <!-- <router-link to='/xq?'>
        <img id="1"
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d2bc1c7ff8c71628a28a5fce24caf245.jpg?thumb=1&w=360&h=360">
    </router-link>-->
    <!-- <div>
      <form action="" method="post">

      <router-link to="/xq?id=3805013">
        <img
          src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d2bc1c7ff8c71628a28a5fce24caf245.jpg?thumb=1&w=360&h=360"
          alt
        />
      </router-link>
      <router-link to="/xq?id=2">
        <img src="//i8.mifile.cn/v1/a1/a20cff3d-2bd4-b98f-4eb5-fb08d8b43a2e!360x360.webp" alt />
      </router-link>
       </form>
    </div>-->

    <div class="detail">
      <van-row>
        <van-col span="12" v-for="(item , index) in goodsdata" :key="index">
          <!-- <router-link :to="'/xq'+item.GoodsId"> -->
          <router-link :to="'/xq?id='+item.GoodsId">
            <van-image width="100%" height="100%" :src="item.ImgUrl" />
          </router-link>

          <div class="info">
            <div class="name">{{item.GoodsName}}</div>
            <p class="long">{{item.LongGoodsName}}</p>
            <div class="price">
              <span class="newPrice">￥{{item.LastPrice?item.LastPrice:item.GoodsPrice}}</span>
              <span class="oldPrice" v-if="item.LastPrice">￥{{item.GoodsPrice}}</span>
            </div>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>


<script>
import Navbar from "../components/Navbar";
import Swiper from "swiper";

export default {
  data() {
    return {
      goodsdata: [],

      user: [
        { title: "推荐" },
        { title: "手机" },
        { title: "智能" },
        { title: "电视" },
        { title: "家电" },
        { title: "笔记本" },
        { title: "生活周边" }
      ]
    };
  },
  props: ["goodslist"],
  components: {
    Navbar
  },
  methods: {
    // goto() {
    //    this.$router.push('/Xq')
    //   }
  },

  //   mounted() {
  //     let url = "http://api.xuandan.com/DataApi/index?AppKey=jas8p84gce&page=1&cid=0";
  //     var _this = this
  //     this.$axios.get(url).then(r => {
  //       console.log("r==>", r)
  //       _this.xyeList = r;
  //     });

  //   }
  // };

  created: function() {
    this.$axios
      .get("http://api.xuandan.com/DataApi/index", {
        params: {
          Appkey: "jas8p84gce",
          page: 1,
          cid: 0,
          pagesize: 12
        }
      })
      .then(response => {
        this.goodsdata = response.data.data;

        console.log(this.goodsdata[0]);
      });
  }
};
</script>

<style lang="scss">
// .home{
//   height: 100%;
//   margin-bottom: 30px;
// }
.topsearch {
  .icontop {
    text-align: center;
    font-size: 30px;
    display: block;
    line-height: 45px;
  }
  .van-search {
    padding: 5px;
  }
}

#categorys {
  ul {
    li {
      width: 20%;
      float: left;
      img {
        width: 100%;
      }
    }
  }
}

.iconfont {
  display: block;
  text-align: center;
  padding-top: 7px;
  font-size: 33px;
  color: orange;
}

.icon-wode {
  display: block;
  text-align: center;
  padding-top: 8px;
  font-size: 24px;
  color: #cdc1c5;
}

.noitems {
  height: 1px;
  background-color: #ebebeb;
  line-height: 21px;
  padding-left: 15px;
  margin-bottom: 33px;

  span {
    color: rgba(0, 0, 0, 0.6);
    font-size: 1.3rem;
    width: 7.2rem;
    position: relative;
  }

  // span::after,
  // span::before {
  //   content: "";
  //   position: absolute;
  //   z-index: 1;
  //   pointer-events: none;
  //   background-color: #ccc;
  //   height: 1px;
  //   width: 3.533333px;
  //   top: 50%;
  // }
  // span::after {
  //   left: 1.5px;
  // }
  // span::before {
  //   right: 1.5px;
  // }
}
.info {
  text-align: left;
  padding-left: 1rem;
}
.name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.1rem;
  color: #000;
  font-weight: bold;
  margin-top: 0.5rem;
}
 .long {
  color: red;
  // display: block;
  font-size: 1rem;
  color: rgba(32, 28, 28, 0.54);
  font-weight: 100;
  font-size: 0.8rem;
  margin-top: 0.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.newPrice{
  color: red;
}
.oldPrice{
  color: #ccc;
  font-size: .8rem;
  text-decoration: line-through;
}
</style>

