<template>
  <div class="home">

  
    <headerHtml :index="0"></headerHtml>
    
    <p>
      <img width="100%" src="../assets/banner.jpg"/>
    </p>

    <div class="maxWidth">
      <div class="hotSale">
        <h3 class="productTitle">
          热销推荐
        </h3>
        <ul>
          <li>
            <img src="../assets/index/pic-01.jpg"/>
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
          </li>
          <li>
            <img src="../assets/index/pic-02.jpg"/>
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
          </li>
          <li>
            <img src="../assets/index/pic-03.jpg"/>
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
          </li>
        </ul>
      </div>

      <!-- 优惠券 -->
      <div class="coupon">
        <ul>
          <li v-for="x in 3">
            <h4>
              <i>￥</i>200
            </h4>
            <div class="">
              <p>优惠券</p>
              <p>满500元使用</p>
            </div>
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
          <a href="javascript:;">
            <img width="100%;" src="../assets/index/banner-02.jpg"/>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img width="100%;" src="../assets/index/banner-03.jpg"/>
            <h3 class="productLog_two">
              DOMICIL
            </h3>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img width="100%;" src="../assets/index/banner-04.jpg"/>
            <h3 class="productLog_two">
              HTC
            </h3>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img width="100%;" src="../assets/index/banner-05.jpg"/>
            <h3 class="productLog_two">
              SHAKER
            </h3>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img width="100%;" src="../assets/index/banner-06.jpg"/>
            <h3 class="productLog_two">
              FOUR
              <p>SEASONS</p>
            </h3>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img width="100%;" src="../assets/index/banner-07.jpg"/>
            <h3 class="productLog_two">
              S&S
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
        <ul class="buyerShow">
          <li class="buyer_one">
            <img src="../assets/index/pic-04.jpg"/>
            <span class="buyerTitle">评论标题</span>
          </li>
          <li>
            <p class="buyer_two">
               <img src="../assets/index/pic-05.jpg"/>
              <span class="buyerTitle">评论标题</span>
            </p>
            <div class="buyerShow">
              <p class="buyer_three">
                <img src="../assets/index/pic-06.jpg"/>
                <span class="buyerTitle">评论标题</span>
              </p>
              <p class="buyer_four">
                <img src="../assets/index/pic-07.jpg"/>
                <span class="buyerTitle">评论标题</span>
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div class="brandBox">
        <h3 class="productTitle">
          合作品牌
        </h3>
        <div class="">
          
          <el-row>
            <el-col :span="3">
              <p class="brand">
                <img src="../assets/brand/logo-01.jpg"/>
              </p>
            </el-col>
            <el-col :span="3">
              <p class="brand">
                <img src="../assets/brand/logo-02.jpg"/>
              </p>
            </el-col>
            <el-col :span="3">
              <p class="brand">
                <img src="../assets/brand/logo-03.jpg"/>
              </p>
            </el-col>
            <el-col :span="3">
              <p class="brand">
                <img src="../assets/brand/logo-04.jpg"/>
              </p>
            </el-col>
            <el-col :span="3">
              <p class="brand">
                <img src="../assets/brand/logo-05.jpg"/>
              </p>
            </el-col>
            <el-col :span="3">
              <p class="brand">
                <img src="../assets/brand/logo-06.jpg"/>
              </p>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="3">
              <p class="brand">
                <img src="../assets/brand/logo-07.jpg"/>
              </p>
            </el-col>
            <el-col :span="3">
              <p class="brand">
                <img src="../assets/brand/logo-08.jpg"/>
              </p>
            </el-col>
            <el-col :span="3">
              <p class="brand">
                <img src="../assets/brand/logo-09.jpg"/>
              </p>
            </el-col>
            <el-col :span="3">
              <p class="brand">
                <img src="../assets/brand/logo-10.jpg"/>
              </p>
            </el-col>
            <el-col :span="3">
              <p class="brand">
                <img src="../assets/brand/logo-11.jpg"/>
              </p>
            </el-col>
            <el-col :span="3">
              <p class="brand">
                <img src="../assets/brand/logo-12.jpg"/>
              </p>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="3">
              <p class="brand">
                <img src="../assets/brand/logo-13.jpg"/>
              </p>
            </el-col>
            <el-col :span="3">
              <p class="brand">
                <img src="../assets/brand/logo-14.jpg"/>
              </p>
            </el-col>
            <el-col :span="3">
              <p class="brand">
                <img src="../assets/brand/logo-15.jpg"/>
              </p>
            </el-col>
            <el-col :span="3">
              <p class="brand">
                <img src="../assets/brand/logo-16.jpg"/>
              </p>
            </el-col>
            <el-col :span="3">
              <p class="brand">
                <img src="../assets/brand/logo-17.jpg"/>
              </p>
            </el-col>
            <el-col :span="3">
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


export default {
  name: 'index',
  data () {
    return {

    }
  },
  components:{
    'headerHtml':headerHtml,
    'bottomHtml':bottomHtml
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
  width: 300px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 43px;
  border-left: 1px solid #545454;
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
  width: 510px;
  height: 420px;
  display: block;
}

.buyer_two{
  margin-bottom: 7px;
  position: relative;
}
.buyer_two img{
  width: 100%;
  height: 240px;
  display: block;
}
.buyer_three{
  position: relative;
}
.buyer_three img{
  width: 230px;
  height: 170px;
  display: block;
}
.buyer_four{
  margin-left: 7px;
  position: relative;
}
.buyer_four img{
  width: 230px;
  height: 170px;
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
.brandBox .el-col-3{
  margin: 0px 3px;
}
.brandBox .brand{
  width: 100%;
  height: 100%;
  border-right: 1px solid #B9B9B9;
}
.brandBox .el-col-3:last-child .brand {
  border: none;
}
.brand img{
  width: 100%;
  display: block;
}
</style>
