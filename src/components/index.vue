<template>
  <div class="home">

  
    <headerHtml :index="0"></headerHtml>
    
    <!-- <p>
      <img width="100%" src="../assets/banner.jpg"/>
    </p> -->
    
    <el-carousel :interval="5000" arrow="always" class="always pcAlways">
      <el-carousel-item v-for="(val,key) in broadcastList" :key="key">
        <a :href="val.link">
          <img height="100%" width="100%" :title="val.title" :src="val.image"/>
        </a>
      </el-carousel-item>
    </el-carousel>

    <el-carousel :interval="5000" arrow="always" class="always webAlways" height="300px">
      <el-carousel-item v-for="(val,key) in broadcastList" :key="key">
        <a :href="val.link">
          <img :src="val.image"/>
        </a>
      </el-carousel-item>
    </el-carousel>



    <div class="maxWidth">
      <div class="hotSale">
        <h3 class="productTitle">
          热销推荐
        </h3>



        <div class="hotSaleListWeb">
          <ul :style="{width:hotSale_+'px'}">
            <li v-for="(val,key) in hotSaleList" :style="{width:val.width_+'px'}">
              
              <a :href="val.link">
                <img :title="val.title" :src="val.image"/>
                <div class="titleBox" v-show="false">
                  <p>
                    <span>
                      欧莉斯田园风纯棉四件套1.5m全棉花卉单双人1.8米家纺宿舍套件
                    </span>
                    <strong>
                      6850元
                    </strong>
                  </p>
                </div>
              </a>

            </li>
          </ul>
        </div>
        <ul class="hotSaleListPc">
          <li v-for="(val,key) in hotSaleList">
            
            <a :href="val.link">
              <img :src="val.image"/>
              <div class="titleBox" v-show="false">
                <p>
                  <span>
                    欧莉斯田园风纯棉四件套1.5m全棉花卉单双人1.8米家纺宿舍套件
                  </span>
                  <strong>
                    6850元
                  </strong>
                </p>
              </div>
            </a>

          </li>
        </ul>
      </div>

      <!-- 优惠券 -->
      <div class="coupon">
        <ul>
          <li v-for="(val,key) in couponList">
            <a :href="val.link">
              <h4>
                <i>￥</i>{{val.name}}
              </h4>
              <div class="">
                <p>优惠券</p>
                <p>{{val.title}}</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <!-- 线下门店 -->
      <div class="">
        <h3 class="productTitle">
          线下门店
        </h3>
        <div class="">
          
        </div>
      </div>
    </div>

    <div class="thisProduct">
      <ul>
        <li>
          <router-link :to="{ name: 'underLine',query:{id:$route.query.id,userName:$route.query.userName}}">
            <img v-if="width_>=400" width="100%;" src="../assets/index/banner-02.jpg"/>
            <img v-else width="100%;" src="../assets/index/web_banner-02.jpg"/>
          </router-link>
        </li>
        <li v-for="(val,key) in thisProductList">
          <a :href="val.link" @click="myMarEve(val)">
            <img width="100%;" :src="val.image" :title="val.title" :alt="val.title"/>
            <h3 class="productLog_two">
              {{val.name}}
            </h3>
          </a>
        </li>
      </ul>
    </div>


    <div class="maxWidth">
      <div class="">
        <h3 class="productTitle">
          买家秀
        </h3>
        <ul class="buyerShow" v-if="buyerShowList[0]!=null">
          <li class="buyer_one">
            <a :href="buyerShowList[0].link">
              <img :src="buyerShowList[0].image" :title="buyerShowList[0].title" :alt="buyerShowList[0].title"/>
              <span class="buyerTitle">评论标题</span>
            </a>
          </li>
          <li class="overflowHidden">
            <p class="buyer_two">
              <a :href="buyerShowList[1].link">
                <img :src="buyerShowList[1].image" :title="buyerShowList[1].title" :alt="buyerShowList[1].title"/>
                <span class="buyerTitle">评论标题</span>
              </a>
            </p>
            <div class="buyerShow">
              <p class="buyer_three">
                <a :href="buyerShowList[2].link">
                  <img :src="buyerShowList[2].image" :title="buyerShowList[2].title" :alt="buyerShowList[2].title"/>
                  <span class="buyerTitle">评论标题</span>
                </a>
              </p>
              <p class="buyer_four">
                <a :href="buyerShowList[3].link">
                  <img :src="buyerShowList[3].image" :title="buyerShowList[3].title" :alt="buyerShowList[3].title"/>
                  <span class="buyerTitle">评论标题</span>
                </a>
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div class="brandBox">
        <h3 class="productTitle">
          合作品牌
        </h3>
        <div class="brandBoxWeb">
          
          <el-row>
            <el-col :span="8">
              <p class="brand">
                <img src="../assets/brand/logo-01.jpg"/>
              </p>
            </el-col>
            <el-col :span="8">
              <p class="brand">
                <img src="../assets/brand/logo-02.jpg"/>
              </p>
            </el-col>
            <el-col :span="8">
              <p class="brand">
                <img src="../assets/brand/logo-03.jpg"/>
              </p>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <p class="brand">
                <img src="../assets/brand/logo-04.jpg"/>
              </p>
            </el-col>
            <el-col :span="8">
              <p class="brand">
                <img src="../assets/brand/logo-05.jpg"/>
              </p>
            </el-col>
            <el-col :span="8">
              <p class="brand">
                <img src="../assets/brand/logo-06.jpg"/>
              </p>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <p class="brand">
                <img src="../assets/brand/logo-07.jpg"/>
              </p>
            </el-col>
            <el-col :span="8">
              <p class="brand">
                <img src="../assets/brand/logo-08.jpg"/>
              </p>
            </el-col>
            <el-col :span="8">
              <p class="brand">
                <img src="../assets/brand/logo-09.jpg"/>
              </p>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <p class="brand">
                <img src="../assets/brand/logo-10.jpg"/>
              </p>
            </el-col>
            <el-col :span="8">
              <p class="brand">
                <img src="../assets/brand/logo-11.jpg"/>
              </p>
            </el-col>
            <el-col :span="8">
              <p class="brand">
                <img src="../assets/brand/logo-12.jpg"/>
              </p>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <p class="brand">
                <img src="../assets/brand/logo-13.jpg"/>
              </p>
            </el-col>
            <el-col :span="8">
              <p class="brand">
                <img src="../assets/brand/logo-14.jpg"/>
              </p>
            </el-col>
            <el-col :span="8">
              <p class="brand">
                <img src="../assets/brand/logo-15.jpg"/>
              </p>
            </el-col>
          </el-row>
          <el-row>
            
            <el-col :span="8">
              <p class="brand">
                <img src="../assets/brand/logo-16.jpg"/>
              </p>
            </el-col>
            <el-col :span="8">
              <p class="brand">
                <img src="../assets/brand/logo-17.jpg"/>
              </p>
            </el-col>
            <el-col :span="8">
              <p class="brand">
                <img src="../assets/brand/logo-18.jpg"/>
              </p>
            </el-col>

          </el-row>



        </div>

        <div class="brandBoxPc">
          
          <el-row>
            <el-col :span="4">
              <p class="brand">
                <img src="../assets/brand/logo-01.jpg"/>
              </p>
            </el-col>
            <el-col :span="4">
              <p class="brand">
                <img src="../assets/brand/logo-02.jpg"/>
              </p>
            </el-col>
            <el-col :span="4">
              <p class="brand">
                <img src="../assets/brand/logo-03.jpg"/>
              </p>
            </el-col>
            <el-col :span="4">
              <p class="brand">
                <img src="../assets/brand/logo-04.jpg"/>
              </p>
            </el-col>
            <el-col :span="4">
              <p class="brand">
                <img src="../assets/brand/logo-05.jpg"/>
              </p>
            </el-col>
            <el-col :span="4">
              <p class="brand">
                <img src="../assets/brand/logo-06.jpg"/>
              </p>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="4">
              <p class="brand">
                <img src="../assets/brand/logo-07.jpg"/>
              </p>
            </el-col>
            <el-col :span="4">
              <p class="brand">
                <img src="../assets/brand/logo-08.jpg"/>
              </p>
            </el-col>
            <el-col :span="4">
              <p class="brand">
                <img src="../assets/brand/logo-09.jpg"/>
              </p>
            </el-col>
            <el-col :span="4">
              <p class="brand">
                <img src="../assets/brand/logo-10.jpg"/>
              </p>
            </el-col>
            <el-col :span="4">
              <p class="brand">
                <img src="../assets/brand/logo-11.jpg"/>
              </p>
            </el-col>
            <el-col :span="4">
              <p class="brand">
                <img src="../assets/brand/logo-12.jpg"/>
              </p>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="4">
              <p class="brand">
                <img src="../assets/brand/logo-13.jpg"/>
              </p>
            </el-col>
            <el-col :span="4">
              <p class="brand">
                <img src="../assets/brand/logo-14.jpg"/>
              </p>
            </el-col>
            <el-col :span="4">
              <p class="brand">
                <img src="../assets/brand/logo-15.jpg"/>
              </p>
            </el-col>
            <el-col :span="4">
              <p class="brand">
                <img src="../assets/brand/logo-16.jpg"/>
              </p>
            </el-col>
            <el-col :span="4">
              <p class="brand">
                <img src="../assets/brand/logo-17.jpg"/>
              </p>
            </el-col>
            <el-col :span="4">
              <p class="brand">
                <img src="../assets/brand/logo-18.jpg"/>
              </p>
            </el-col>
          </el-row>

        </div>
      </div>
    </div>
    
    <bottomHtml></bottomHtml>

  </div>
</template>

<script>
import headerHtml from '../components/headerHtml'
import bottomHtml from '../components/bottomHtml'

import axios from 'axios'
import qs from 'qs'

export default {
  name: 'index',
  data () {
    return {
      width_:0,
      hotSale_:0,
      buyerShowList:[],
      hotSaleList:[],
      couponList:[],
      broadcastList:[],
      thisProductList:[],
      myMar:''
    }
  },
  components:{
    'headerHtml':headerHtml,
    'bottomHtml':bottomHtml
  },
  mounted(){
    this.width_ = document.body.clientWidth/2;
    let _this = this;
    
    axios.post('http://backend.viphome.cn/api/products',qs.stringify({}))
    .then(function(dataJson){
      //console.log(JSON.stringify(dataJson.data))
      
    })
    .catch(function(err){
      alert(err);
    });
    //首页品牌
    axios.post('http://backend.viphome.cn/api/banner',qs.stringify({position:3}))
    .then(function(dataJson){
      if(dataJson.data.result){
        //console.log(JSON.stringify(dataJson.data.data.data));
        _this.thisProductList = dataJson.data.data.data;
      }
    })
    .catch(function(err){
      alert(err);
    });
    //买家秀
    axios.post('http://backend.viphome.cn/api/banner',qs.stringify({position:4}))
    .then(function(dataJson){
      if(dataJson.data.result){
        _this.buyerShowList = dataJson.data.data.data;
        //console.log(JSON.stringify(_this.buyerShowList))
      }
    })
    .catch(function(err){
      alert(err);
    });
    //热销推荐
    axios.post('http://backend.viphome.cn/api/banner',qs.stringify({position:6}))
    .then(function(dataJson){
      if(dataJson.data.result){
        _this.hotSaleList = dataJson.data.data.data;
        _this.hotSale_ = dataJson.data.data.data.length*_this.width_;
        for(let key in _this.hotSaleList){
          _this.hotSaleList[key]['width_'] = _this.width_;
        }
        //console.log(JSON.stringify(_this.hotSaleList))
      }
    })
    .catch(function(err){
      alert(err);
    });
    //列表
    axios.post('http://backend.viphome.cn/api/banner',qs.stringify({position:1}))
    .then(function(dataJson){
      console.log(JSON.stringify(dataJson.data.data.data))
      _this.broadcastList = dataJson.data.data.data;
    })
    .catch(function(err){
      alert(err);
    });
    //优惠券
    axios.post('http://backend.viphome.cn/api/coupon',qs.stringify({}))
    .then(function(dataJson){
      //console.log(JSON.stringify(dataJson.data.data.data));
      _this.couponList = dataJson.data.data.data;
    })
    .catch(function(err){
      alert(err);
    });
  },
  methods: {
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*轮播开始*/
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
/*轮播结束*/

/*热销产品*/
.hotSale{

}
.productTitle{
  margin: 47px 0px;
  text-align: center;
  font-size: 35px;
}
.hotSale ul{
  display: flex;
  justify-content: center;
  align-items: center;
}
.hotSale li{
  position: relative;
  margin: 0px 5px;
}
.hotSale li img{
  width: 393px;
  height: 393px;
  display: block;
}
.titleBox{
  position: absolute;
  bottom: 9px;
  padding: 0px 7px;
  text-align: center;
}
.titleBox p{
  background-color: rgba(0,0,0,0.5);
  padding: 5px 7px;
}






.titleBox span{
  display: block;
  color: #fff;
  font-size: 13px;
}
.titleBox strong{
  color: #d72326;
  font-size: 13px;
}
/*热销产品结束*/

/*优惠券*/
.coupon{

}
.coupon ul{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 47px;
}
.coupon li{
  overflow: hidden;
  padding: 0px 70px;
  border-left: 1px solid #545454;
}
.coupon li a{
  display: flex;
  justify-content: center;
  align-items: center; 
}
.coupon li:last-child{
  border-right: 1px solid #545454;
}
.coupon h4{
  float: left;
  font-size: 45px;
  overflow: hidden;
  font-weight: 100;
  color: #2A2A2A;
}
.coupon h4 i{
  font-size: 17px;
  float: left;
  color: #3B3B3B;
}
.coupon div{
  float: left;
  color: #858585;
  font-size: 14px;
  margin-left: 7px;
}

/*商品*/
.thisProduct ul li:first-child{
  margin-bottom: 47px;
}
.thisProduct li{
  position: relative;
}
.thisProduct h3{
  position: absolute;
  color: #fff;
  font-size: 47px;
  background-color: rgba(0,0,0,0.5);
  padding: 3px 30px;
  top: 85px;
  right: 85px;
  font-weight: 100;
}
.thisProduct img{
  display: block;
}


/*买家秀*/
.buyerShow{
  display: flex;
  justify-content: center;
  align-items: center;
}
.buyer_one{
  margin-right: 7px;
  position: relative;
}
.buyerTitle{
  position: absolute;
  width: 100%;
  bottom: 0px;
  background-color: rgba(0,0,0,0.5);
  color: #fff;
  text-align: center;
  font-size: 15px;
  height: 30px;
  line-height: 30px;
  display: none;
}
.buyer_one img{
  width: 715px;
  height: 450px;
  display: block;
}

.buyer_two{
  margin-bottom: 7px;
  position: relative;
}
.buyer_two img{
  width: 480px;
  height: 245px;
  display: block;
}
.buyer_three{
  position: relative;
}
.buyer_three img{
  width: 235px;
  height: 200px;
  display: block;
}
.buyer_four{
  margin-left: 7px;
  position: relative;
}
.buyer_four img{
  width: 235px;
  height: 200px;
  display: block;
}


/*合作品牌*/
.brandBox{
  margin-bottom: 67px;
  margin-top: 35px;
}
.brandBox .el-row{
   display: flex;
  justify-content: center;
  align-items: center;
  margin: 23px 0px;
}
.brandBox .el-col-4{
  margin: 0px 3px;
}
.brandBox .brand{
  width: 99%;
  height: 100%;
  border-right: 1px solid #B9B9B9;
}
.brandBox .el-col-4:last-child .brand,.brandBox .el-col-8:last-child .brand {
  border: none;
}
.brandBox .el-col-4:last-of-type .brand {
  border: none;
}
.brand img{
  width: 100%;
  display: block;
}


.webAlways,.hotSale .hotSaleListWeb{
  display: none;
}


#demo1,#demo2{
  display:inline
}

.brandBoxWeb{
  display: none;
}

@media screen and (max-width: 800px){
  .pcAlways{
    display: none;
  }
  .webAlways{
    display: block;
  }
  .webAlways img{
    height: 300px;
    position: absolute;
    top: 0%;
    left: 50%;
    transform : translate(-50%,0%);
  }
  .coupon li{
    padding: 0px 11px;
    border: none;
  }
  .coupon h4{
    overflow: inherit;
  }
  .coupon li:last-child{
    border: none;
  }
  .hotSale ul{
    display: block;
  }
  .hotSale li img{
    width: 100%;
    height: auto;
  }
  .thisProduct h3{
    top: 11px;
    right: 0px;
    font-size: 27px;
  }
  .thisProduct a img:last-child{
    height: auto;
  }
  .thisProduct a img{
    height: 230px;
  }

  .buyerShow{
    display: block;
  }
  .buyer_one img,.buyer_two img,.buyer_three img,.buyer_four img{
    width: 100%;
    height: auto;
  }
  .buyer_one img{
    margin-bottom: 2%;
  }
  .buyer_two img{
    width: 49%;
    float: left;
    height: 160px;
  }
  .buyer_four img{
    display: none;
  }
  .buyer_three img{
    width: 49%;
    float: right;
    height: 160px;
  }

  .buyer_one{
    margin-right: 0px;
  }
  .buyer_four{
    margin-left: 0px;
  }
  .buyer_two{
    margin-bottom: 0px;
  }
  .coupon ul{
    display: block;
  }

  .hotSale li{
    margin: 0px;
    float: left;
  }
  .hotSale .hotSaleListWeb{
    display: block;
    margin: 0px auto;
    white-space: nowrap;
    overflow: auto;
  }


  .hotSale .hotSaleListPc{
    display: none;
  }
  .brandBoxWeb{
    display: block;
  }
  .brandBoxPc{
    display: none;
  }
}





</style>


<style>
  .pcAlways .el-carousel__container{
    height: 600px;
  }
  @media screen and (max-width: 1300px){
    .el-carousel__container{
      height: 400px;
    }
  }
</style>
