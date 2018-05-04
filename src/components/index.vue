<template>
  <div class="home">

  
    <headerHtml :index="0"></headerHtml>
    
    <div class="">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="maxWidth">
      <div class="hotSale">
        <h3 class="productTitle">
          热销推荐
        </h3>
        <ul>
          <li>
            <img src="../assets/raw_1523952453.jpg"/>
            <div class="titleBox">
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
            <img src="../assets/raw_1523952453.jpg"/>
            <div class="titleBox">
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
            <img src="../assets/raw_1523952453.jpg"/>
            <div class="titleBox">
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
          <li>
            优惠券
          </li>
          <li>
            优惠券
          </li>
          <li>
            优惠券
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
            <img width="100%;" src="../assets/raw_1523955111.jpg"/>
            <h3 class="productLog_one">
              <strong>标题</strong>
              欧莉斯田园风纯棉四件套1.5m全棉花卉单双人1.8米家纺宿舍套件
            </h3>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img width="100%;" src="../assets/raw_1523955112.jpg"/>
            <h3 class="productLog_two">
              <strong>标题</strong>
              欧莉斯田园风纯棉四件套1.5m全棉花卉单双人1.8米家纺宿舍套件
            </h3>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img width="100%;" src="../assets/raw_1523955113.jpg"/>
            <h3 class="productLog_three">
              <strong>标题</strong>
              欧莉斯田园风纯棉四件套1.5m全棉花卉单双人1.8米家纺宿舍套件
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
            <img src="../assets/raw_1523952453.jpg"/>
            <span class="buyerTitle">评论标题</span>
          </li>
          <li>
            <p class="buyer_two">
              <img src="../assets/raw_1523952453.jpg"/>
              <span class="buyerTitle">评论标题</span>
            </p>
            <div class="buyerShow">
              <p class="buyer_three">
                <img src="../assets/raw_1523952453.jpg"/>
                <span class="buyerTitle">评论标题</span>
              </p>
              <p class="buyer_four">
                <img src="../assets/raw_1523952453.jpg"/>
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
              asd
              </p>
            </el-col>
            <el-col :span="3">
              <p class="brand">
              sa
              </p>
            </el-col>
            <el-col :span="3">
              <p class="brand">
              sa
              </p>
            </el-col>
            <el-col :span="3">
              <p class="brand">
              sa
              </p>
            </el-col>
            <el-col :span="3">
              <p class="brand">
              sa
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
  margin: 23px 0px;
  text-align: center;
  font-size: 23px;
}
.hotSale ul{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.hotSale li{
  position: relative;
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
  justify-content: space-around;
  align-items: center;
}
.coupon li{
  width: 200px;
  height: 90px;
  border-radius: 90px;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 90px;
  color: #ccc;
  margin: 23px 0px;
}
/*商品*/
.thisProduct li{
  position: relative;
}
.thisProduct h3{
  position: absolute;
  color: #fff;
  width: 330px;
  font-size: 17px;
  background-color: rgba(0,0,0,0.5);
  padding: 19px 23px;
}
.productLog_one{
  top: 70px;
  right: 79px;
}
.productLog_two{
  left: 179px;
  top: 70px;
}
.productLog_three{
  bottom: 70px;
  right: 79px;
}
.thisProduct strong{
  display: block;
  font-size: 27px;
  margin-bottom: 7px;
}


/*买家秀*/
.buyerShow{
  display: flex;
  justify-content: space-around;
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
  margin: 35px 0px;
}
.brandBox .el-row{
   display: flex;
  justify-content: space-around;
  align-items: center;
}
.brandBox .brand{
  background-color: #ccc;
  height: 30px;
  width: 100%;
}
</style>
