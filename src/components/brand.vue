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
        <li class="brandImg">
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
              <span>300名专业导购帮你选择适合的风格、合适的家具</span>
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
        <li class="brandContentClass" v-for="(val,key) in brandsList">
          <img class="banner" width="100%;" :src="val.banner" :title="val.title"/>
          <div class="brandIntroduce newBrandIntroduce" v-show="false">
            <img width="100%;" :src="val.log" :title="val.title"/>
            <img class="slogan" width="113px;" :title="val.title" src="../assets/brand/slogan-01.jpg"/>
            <h3>{{val.name}}</h3>
            <p>
              {{val.introduction}}
            </p>
            <img style="display: none;" class="commodity" width="100%;" src="../assets/brand/pic-01.jpg"/>
          </div>
          <div class="brandContentList maxWidth">
            <h3><img width="15px;" src="../assets/brand/icon-01.jpg"/>线下门店地址</h3>
            <ul>
              <li v-for="(val,key) in val.list">
                <p v-for="(val,key) in val.stores">
                  <strong>{{val.address}}</strong>
                </p>
                <!-- <span>{{val.address}}</span> -->
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
import axios from 'axios'
import qs from 'qs'

export default {
  name: 'home',
  data () {
    return {
      brandsList:[],
      storesList:[]
    }
  },
  components:{
    'headerHtml':headerHtml,
    'bottomHtml':bottomHtml
  },
  mounted(){
    let _this = this;
    axios.post('http://backend.viphome.cn/api/brand',qs.stringify({}))
    .then(function(dataJson){
      //console.log(JSON.stringify(dataJson.data.info))
      if(dataJson.data.result){
        _this.brandsList = dataJson.data.info;
        
        axios.post('http://backend.viphome.cn/api/brand/stores',qs.stringify({}))
        .then(function(dataJson){
          _this.storesList = dataJson.data;
          for(let key in _this.brandsList){
            _this.$set(_this.brandsList[key],'list',[]);
            for(let j in _this.storesList){
              //console.log(_this.brandsList[key].id==_this.storesList[j].id)
              if(_this.brandsList[key].id==_this.storesList[j].id){
                //console.log(JSON.stringify(_this.storesList[j]))
                _this.brandsList[key].list.push(_this.storesList[j]);
              }
            }
          }
          console.log(JSON.stringify(_this.brandsList))
        })
        .catch(function(err){
          alert(err);
        });


      }
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
  font-size: 15px;
  color: #3C3C3C;
}
.brandContentClass span{
  font-size: 12px;
  color: #141414;
}



.brandContentClass ul{
  overflow: hidden;
  margin-bottom: 33px;
}
.brandContentClass h3{
  margin: 13px 0px;
}

.brandContentClass p{
  float: left;
  width: 47%;
  margin: 5px 10px;
}
.brandContentClass{
  overflow: hidden;
}
.brandContentClass h3 img{
  display: inline-block;
  margin: 0px 5px;
}

.brandContentList{
  margin: auto;
}

@media screen and (max-width: 800px){
  .brandContentClass p{
    width: 100%;
    margin: 7px 0px;
  }
  .brandContentList{
    padding: 0px 11px;
    margin-top: 213px;
  }
  .brandContentClass h3{
    margin: 0px;
  }
  .brandHeaderBox ul{
    display: block;
  }
  .brandHeaderBox{
    padding: 0px 11px;
  }
  .brandImg{
    text-align: center;
  }
  .brandContentClass .banner{
    width: auto;
    height: 200px;
    position: absolute;
    top: 0%;
    left: 50%;
    -webkit-transform: translate(-50%,0%);
    transform: translate(-50%,0%);
  }
}
</style>
