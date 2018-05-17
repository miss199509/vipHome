<template>
  <div class="home">

  
    <headerHtml :index="9"></headerHtml>
    <div class="selectClass">
      <p class="maxWidth">
        <a href="javascript:;" v-for="(val,key) in selectTitleData" :class="{ckTitle:val.boll}" @click="titleEve(val,key)">{{val.name}}</a>
      </p>
    </div>
    
    <div class="">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    
    <div class="maxWidth">

      <p class="nvaClass">
        <a href="javascript:;">{{className}}</a>
      </p>
      
      <ul v-show="selectTitleData[0].boll">000</ul>

      <ul v-show="selectTitleData[1].boll">
        <li>
          <div class="">
            <h3 class="teamTitle">团队合影</h3>
            <div class="teamPadding">
              <img width="100%" src="https://modao.cc/uploads3/images/1941/19415329/raw_1524643989.jpeg"/>
            </div>
          </div>
          <div class="">
            <h3 class="teamTitle">团队成员</h3>
            <div class="teamPadding">
              <ul class="member">
                <li v-for="(val,key) in 4">
                  <img src="https://modao.cc/uploads3/images/1941/19415962/raw_1524644382.jpeg"/>
                  <h4>CEO<i>Talk</i></h4>
                  <p>毕业于浙江大学，缔造中国家居设计流通平台最惊人的成长速度，被业内称为“最不像家居人的家居人”长江商学院工商管理硕士。</p>
                </li>
              </ul>
              <ul class="member">
                <li v-for="(val,key) in 4">
                  <img src="https://modao.cc/uploads3/images/1941/19415962/raw_1524644382.jpeg"/>
                  <h4>CEO<i>Talk</i></h4>
                  <p>毕业于浙江大学，缔造中国家居设计流通平台最惊人的成长速度，被业内称为“最不像家居人的家居人”长江商学院工商管理硕士。</p>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>

      <ul v-show="selectTitleData[2].boll">111</ul>
    
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
      selectTitleData:[{name:'公司简介',boll:true},{name:'团队风采',boll:false},{name:'联系我们',boll:false}],
      className:'公司简介'
    }
  },
  components:{
    'headerHtml':headerHtml,
    'bottomHtml':bottomHtml
  },
  methods: {
    titleEve(val,key){
      for(let i in this.selectTitleData){
        this.selectTitleData[i].boll = false;
      }
      val.boll = true;
      this.className = val.name;
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
.nvaClass{
  padding: 5px 0px;
  background-color: #e6e6e6;
  text-indent: 11px;
  margin-bottom: 7px;
}
.nvaClass a,.nvaClass span{
  color: #000;
  font-size: 13px;
  margin: 0px 7px;
}
/*热销产品*/
.selectClass{
  padding: 7px 0px;
  background-color: #e6e6e6;
  color: #555;
  text-align: right;
}
.selectClass a{
  font-size: 13px;
  color: #555;
  margin: 0px 7px;
}


/*团队*/
.teamTitle{
  text-align: center;
  font-size: 29px;
  margin: 20px auto;
  border-bottom: 1px solid #ccc;
  padding: 27px 0px;
  font-weight: 100;
}
.teamPadding{
  padding: 0px 23px;
}
.selectClass .ckTitle{
  color: #f65e4e;
}
/*团队成员*/
.member{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 23px;
}
.member h4{
  font-size: 19px;
  font-weight: 100;
}
.member i{
  font-size: 14px;
  margin: 0px 5px;
}
.member li{
  width: 230px;
}
.member li p{
  font-size: 13px;
  padding: 7px 0px;
  margin: 7px 0px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  text-indent: 27px;
  color: #666;
}
.member li img{
  height: 270px;
  width: 100%;
}
</style>
