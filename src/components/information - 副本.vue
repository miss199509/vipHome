<template>
  <div class="information">

  
    <headerHtml :index="7"></headerHtml>
    
      <div class="">
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="maxWidth">
        <header class="headerNva">
          <a href="javascript:;" v-for="(val,key) in headerList" @click="nvaEve(val,key)" :class="{selectNva:val.boll}">{{val.name}}</a>
        </header>
        
        <ul class="dynamic" v-show="headerList[0].boll">
          
          <li v-for="(val,key) in 7">
            <p>
              <img src="../assets/raw_1523952453.jpg"/>
            </p>
            <h4>
              春暖花开，新品预告，与你相约人间四月天！
            </h4>
            <p>
              2018-03-30   / 公司动态
            </p>
            <p>
              周末的午后，拉上窗帘，备好美酒，佳人相伴，一起感受魔幻光影世界与纯粹的家居设计。这，才是理想生活的正确打开方式。
            </p>
          </li>
          
        </ul>


        <ul class="industry" v-show="headerList[1].boll">
          <li>666</li>
        </ul>
        
        <ul class="info" v-show="headerList[2].boll">
          <li v-for="(val,key) in 7">
            <img width="250px" height="135px;" src="../assets/raw_1523952453.jpg"/>
            <div class="">
              <h4>
                春暖花开，新品预告，与你相约人间四月天！
              </h4>
              <p>
                2018-03-30   / 公司动态
              </p>
              <p>
                周末的午后，拉上窗帘，备好美酒，佳人相伴，一起感受魔幻光影世界与纯粹的家居设计。这，才是理想生活的正确打开方式。
              </p>
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
  name: 'information',
  data () {
    return {
      headerList:[
        {'boll':true,'name':'公司动态'},
        {'boll':false,'name':'行业资讯'},
        {'boll':false,'name':'家居新知'}
      ]
    }
  },
  components:{
    'headerHtml':headerHtml,
    'bottomHtml':bottomHtml
  },
  methods: {
    nvaEve(val,key){
      for(let i in this.headerList){
        this.headerList[i].boll = false;
      };
      val.boll = true;
    }
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

/*列表*/
.headerNva{
  background-color: #ededed;
  padding: 11px 0px;
  padding-left: 33px;
}
.headerNva a{
  color: #000;
  font-size: 13px;
  padding-right: 15px;
  margin-right: 15px;
  border-right: 1px solid #ccc;
}
.headerNva .selectNva{
  color: #f65e4e;
}
/*公司动态*/
.dynamic{
  overflow: hidden;
}
.dynamic li{
  width: 400px;
  float: left;
  margin-left: 100px;
}
.dynamic li img{
  width: 100%;
  height: 230px;
}
.dynamic h4{
  font-size: 15px;
  color: #555;
}
.dynamic p{
  color: #999;
  font-size: 13px;
  margin: 7px 0px;
}
/*家居新知*/
.info li{
  display: flex;
  justify-content: baseline;
  align-items: center;
  margin: 33px 0px;
}
.info li div{
  margin-left: 23px;
}
.info h4{
  font-size: 15px;
  color: #555;
}
.info p{
  color: #999;
  font-size: 13px;
}
</style>
