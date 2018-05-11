<template>
  <div class="home">

    <headerHtml :index="2"></headerHtml>
    
    <p>
      <img width="100%;" src="../assets/brand/banner.jpg"/>
    </p>

    <div class="brandHeaderBox">
      <ul>
        <li>
          <div class="brandHeader">
            <img src="../assets/brand/icon-001.jpg"/>
            <p>
              <strong>实体门店现场品鉴</strong>
              <span>覆盖全上海45家实体门店，体验真实品质</span>
            </p>
          </div>
        </li>
        <li>
          <div class="brandHeader">
            <img src="../assets/brand/icon-002.jpg"/>
            <p>
              <strong>甄选国际风格家居</strong>
              <span>15个国际品牌，8种经典风格荟萃世界各地不同国家和不同时期的家居风格</span>
            </p>
          </div>
          <div class="brandHeader">
            <img src="../assets/brand/icon-003.jpg"/>
            <p>
              <strong>名家设计匠心打造</strong>
              <span>以设计为名，打造生活美学</span>
            </p>
          </div>
        </li>
        <li>
          <img class="brandHeaderLog" src="../assets/brand/icon-00.jpg"/>
        </li>
        <li>
          <div class="brandHeader">
            <img src="../assets/brand/icon-004.jpg"/>
            <p>
              <strong>工厂源头品质保障</strong>
              <span>品牌授权，从源头保障产品品质</span>
            </p>
          </div>
          <div class="brandHeader">
            <img src="../assets/brand/icon-005.jpg"/>
            <p>
              <strong>量身定制为爱造家</strong>
              <span>00名专业导购帮你选择适合的风格、合适的家具</span>
            </p>
          </div>
        </li>
        <li>
          <div class="brandHeader">
            <img src="../assets/brand/icon-006.jpg"/>
            <p>
              <strong>三年质保终身维护</strong>
              <span>三年质保承诺，终身维护服务</span>
            </p>
          </div>
        </li>
      </ul>
    </div>


    <div class="brandContent">
      <ul>
        <li class="brandContentClass">
          <img width="100%;" src="../assets/brand/banner-01.jpg"/>
          <div class="brandIntroduce newBrandIntroduce">
            <img width="100%;" src="../assets/brand/logo-02.jpg"/>
            <img class="slogan" width="113px;" src="../assets/brand/slogan-01.jpg"/>
            <h3>为舒适而生</h3>
            <p>
            三个富有创造精神和远见卓识的理想家 ——Brigitta Jaeggle, Armin Eberlein, and Hans Dahme，一起致力于创造可以满足个人愿望的家具产品，在1978年创立了Domicil，以舒适为本，以风格为骨。随着位于德国魏茵斯滕的第一家门店开业以来，Domicil逐渐成为建造梦想之宅的代名词，如今，仍致力于此……
            </p>
            <img class="commodity" width="100%;" src="../assets/brand/pic-01.jpg"/>
          </div>
          <div class="brandContentList">
            <h3><img width="15px;" src="../assets/brand/icon-01.jpg"/>DOMICIL Address</h3>
            <ul>
              <li>
                <strong>真北店</strong>
                <span>普陀区真北路1108号红星美凯龙南馆二楼B8056</span>
              </li>
              <li>
                <strong>青浦店</strong>
                <span>青浦区赵巷嘉松中路5369号吉盛伟邦国际家具村二期D2W102</span>
              </li>
              <li>
                <strong>汶水店</strong>
                <span>宝山区汶水路1555号红星美凯龙一楼</span>
              </li>
              <li>
                <strong>盛源大地店</strong>
                <span>宝山区汶水路1555号红星美凯龙一楼</span>
              </li>
              <li>
                <strong>浦东店</strong>
                <span>浦东新区临御路518号红星美凯龙三楼B8073-B8075</span>
              </li>
              <li>
                <strong>金桥店</strong>
                <span>浦东新区金藏路158号红星美凯龙三楼8109-8110</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    
    <bottomHtml></bottomHtml>


  </div>
</template>

<script>
import headerHtml from '../components/headerHtml'
import bottomHtml from '../components/bottomHtml'


export default {
  name: 'home',
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
/**/

.brandHeaderBox ul{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 37px 0px;
}
.brandHeader{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 23px 0px;
}
.brandHeader img{
  margin-right: 11px;
}
.brandHeader p{
  width: 230px;
}
.brandHeader span{
  color: #B3B3B3;
  font-size: 13px;
}
.brandHeader strong{
  display: block;
  color: #58595A;
  font-size: 15px;
  margin-bottom: 7px;
}

.brandHeaderLog{
  margin: 0px 23px;
  width: 120px;
}

/*内容部分*/
.brandContent li{
  position: relative;
}
.brandContent{

}
.brandContent img{
  display: block;
}

.brandIntroduce{
  background-color: #fff;
  width: 190px;
  position: absolute;
  top: 0px;
  right: 233px;
}
.brandContentClass .brandIntroduce h3{
  text-align: center;
  font-size: 16px;
  margin: 21px 0px 11px 0px;
}
.brandIntroduce p{
  font-size: 12px;
  height: 100px;
  overflow: auto;
}
.newBrandIntroduce{
  background-color: #fff;
  width: 175px;
  position: absolute;
  top: 0px;
  left: 233px;
  padding: 0px 19px;
}
.commodity{
  margin: 23px 0px;
}
.slogan{
  margin: auto;
}
.brandContentClass h3{
  font-size: 14px;
  color: #262626;
}
.brandContentClass strong{
  font-size: 16px;
  color: #3C3C3C;
}
.brandContentClass span{
  font-size: 14px;
  color: #141414;
}



.brandContentClass ul{
  overflow: hidden;
  margin-bottom: 33px;
}
.brandContentClass h3{
  margin: 13px 0px;
}
.brandContentClass li{
  float: left;
  width: 50%;
  margin: 5px 0px;
}
.brandContentClass{
  overflow: hidden;
}
.brandContentClass h3 img{
  display: inline-block;
  margin: 0px 5px;
}

.brandContentList{
  width: 990px;
  margin: auto;
}
</style>
