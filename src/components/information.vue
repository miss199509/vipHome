<template>
  <div class="information">

  
    <headerHtml :index="7"></headerHtml>
    
    <p>
      <img width="100%;" src="../assets/brand/banner.jpg"/>
    </p>
    <div class="maxWidth">
      <p class="nav">
        <a href="javascript:;" v-for="(val,key) in informationClassList" :class="{classNav:val.boll}" @click="classNavEve(val,key)">{{val.name}}</a>
      </p>
      <!-- 品牌分类 -->
      <div class="" v-show="informationClassList[0].boll">
        <ul class="informationList">
          <li v-for="x in 6">
            <img width="100%" height="230px;" src="../assets/raw_1523952453.jpg"/>
            <h2>5月家装节O2O-特惠舒美家！</h2>
            <p>周末的午后，拉上窗帘，备好美酒，佳人相伴，一起感受魔幻光影世界与纯粹的家居设计。这，才是理想生活的正确打开方式。</p>
            
            <div class="informationTips">
              <p>
                <span>2018-03-03</span>
                <span>公司动态</span>
              </p>
              <img src="../assets/icon-5.jpg"/>
            </div>

          </li>
        </ul>
        <div class="paging">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1000"></el-pagination>
        </div>
      </div>
      <!-- 行业资讯 -->
      <div class="articleList" v-show="informationClassList[1].boll">
        <img width="100%" src="../assets/raw_1523955111.jpg"/>
        <h1>电商崛起，实体店销售额大不如前</h1>
        <p class="title">
          <span>2018-03-30</span>
          <span>行业资讯</span>
        </p>
        <p>首先来看一组数据，在由商务部流通业发展司、中国建筑材料流通协会共同发布的全国建材家居景气指数BHI指出，
2017年1-12月累计销售额为9173.7亿元，同比下降22.60%。2018年1月份全国建材家居景气指数(BHI)为79.82，环比
下降12.24点，同比上升8.47点。全国规模以上建材家居卖场1月销售额为681.5亿元，环比下降12.55%,同比上涨41.23%。
　　整体来说，建材家居市场行情持续低迷，综合影响1月全国建材家居市场整体表现也是稳中有降，与去年同期相比市
场表现相对回暖，规模以上建材家居卖场销售额同比上涨41.23%。</p>
        <p>首先来看一组数据，在由商务部流通业发展司、中国建筑材料流通协会共同发布的全国建材家居景气指数BHI指出，
        2017年1-12月累计销售额为9173.7亿元，同比下降22.60%。2018年1月份全国建材家居景气指数(BHI)为79.82，环比
        下降12.24点，同比上升8.47点。全国规模以上建材家居卖场1月销售额为681.5亿元，环比下降12.55%,同比上涨41.23%。
        　　整体来说，建材家居市场行情持续低迷，综合影响1月全国建材家居市场整体表现也是稳中有降，与去年同期相比市
        场表现相对回暖，规模以上建材家居卖场销售额同比上涨41.23%。</p>
        <ul class="articleSelect">
          <li>
            <a href="javascript:;">上一篇：142平米美式风格 展现出空间贵气而又不失自在与随意的风范</a>
          </li>
          <li>
            <a href="javascript:;">下一篇：阳台还可以这样贴瓷砖 超级好看，小户型也可以做！</a>
          </li>
        </ul>

        <div class="paging">
          <el-pagination @size-change="handleSizeArticle" @current-change="handleaArticle" :current-page.sync="articlePage" :page-size="100" layout="prev, pager, next, jumper" :total="1000"></el-pagination>
        </div>
      </div>

      <!-- 家居新知 -->
      <div class="journalism" v-show="informationClassList[2].boll">
        <ul>
          <li>
            <img width="123px" src="../assets/raw_1523952453.jpg"/>
            <div>
              <h3>新房装修后多久入住？<span>2018-03-30</span></h3>
              <p>装修在施工时，要使用大量的装饰材料，其中绝大部分是化学合成材料，存在易挥发的成分，因
            此装修后的房间会有一定的化学气味，刚一完工就入住，对人的身体没有好处，应该晾置几日，
            待气味基本消除后再入住为好。对于家庭装修来……</p>
              <p class="overflowHidden">
                <img class="floatRight" src="../assets/icon-6.jpg"/>
              </p>
            </div>
          </li>
        </ul>
        <div class="paging">
          <el-pagination @size-change="handleSizeJournalism" @current-change="handleaJournalism" :current-page.sync="journalismPage" :page-size="100" layout="prev, pager, next, jumper" :total="1000"></el-pagination>
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
  name: 'information',
  data () {
    return {
      currentPage3: 5,
      articlePage:1,
      journalismPage:1,
      informationClassList:[
        {name:'品牌分类',boll:true},
        {name:'行业资讯',boll:false},
        {name:'家居新知',boll:false}
      ]
    }
  },
  components:{
    'headerHtml':headerHtml,
    'bottomHtml':bottomHtml
  },
  methods: {
    classNavEve(val,key){
      for(let i in this.informationClassList){
        this.informationClassList[i].boll = false;
      }
      val.boll = true;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleSizeArticle(val){
      console.log(`每页 ${val} 条`);
    },
    handleaArticle(val){
      console.log(`当前页: ${val}`);
    },
    handleSizeJournalism(val){
      console.log(`每页 ${val} 条`);
    },
    handleaJournalism(val){
      console.log(`当前页: ${val}`);
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav{
  border-bottom: 1px solid #978F8F;
  margin-top: 13px;
}
.nav a{
  text-decoration: none;
  margin: 0px 45px;
  color: #484848;
  font-size: 14px;
}

.informationList{

}
.informationList li{
  width: 350px;
  margin-top: 30px;
}
.informationList img{
  
}
.informationList h2{
  font-size: 23px;
  font-weight: 100;
  margin: 17px 0px;
}
.informationList p{
  font-size: 14px;
  color: #9C9C9C;
}



.informationTips{
  margin: 15px 0px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.informationTips span{
  font-size: 12px;
  color: #8A8A8A;
}


/*分页*/
.paging{
  text-align: center;
  margin: 30px 0px;
}


/*行业资讯*/
.articleList{

}
.articleList h1{
  text-align: center;
  font-size: 21px;
  color: #959595;
  margin: 27px 0px;
}
.articleList .title{
  text-align: center;
  text-indent: 0px;
}
.articleList p{
  color: #7A7A7A;
  font-size: 14px;
  text-indent: 27px;
  line-height: 23px;
  margin-top: 17px;
}
.articleList .title span{
  margin: 0px 7px;
  font-size: 15px;
}


.articleSelect{
  border-top: 1px solid #534646;
  margin: 66px 0px;
  padding-top: 11px;
}
.articleSelect li{
  margin: 7px 0px;
}
.articleSelect a{
  text-decoration: none;
  color: #313131;
  font-size: 15px;
  font-weight: bold;
}

.nav .classNav{
  color: #D92F2C;
}


/*家居新知*/
.journalism ul li{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 27px 0px;
}
.journalism div{
  margin-left: 33px;
}
.journalism div h3{
  font-size: 26px;
  font-weight: 100;
}
.journalism h3 span{
  float: right;
  font-size: 14px;
  color: #959595;
}
.journalism p{
  font-size: 14px;
  color: #7D7D7D;
  margin-top: 9px;
}
</style>
