<template>
  <div class="home">

    <headerHtml :index="9"></headerHtml>
    
    <p>
      <img width="100%;" src="../assets/brand/banner.jpg"/>
    </p>
    
    <div class="maxWidth about">
      <p class="title" v-show="false">
        <a href="javascript:;">公司简介</a>
      </p>
      <div class="">
        <p v-show="false">
          <img width="100%;" src="../assets/about/pic-2.jpg"/>
        </p>
        <h3>VIPhome欢邸</h3>
        <p class="time" v-show="false">
          <span>2018-05-03</span>
          <span>摄于总部</span>
        </p>
        <div class="article">
          <p>
            VIP home欢邸成立于2007年，致力于为中国家庭甄选品质家具。通过整合全球化的设计灵感、生活方式，荟萃世界
            各地不同国家和不同时期的家居风格，并始终追随国际家居潮流趋势，不断更新多种经典套系，为钟情传统、现代或古典
            的不同消费者提供针对性的解决方案。在上海一线家具卖场拥有四十多家门店，拥有现代风格、现代实木、欧式新古典、
            后现代、美式休闲、美式现代、新中式等系列18余种家具品牌。
          </p>
          <p>
            经过10年发展，目前已成为上海家具终端市场，在流通金额、经营面积和员工数量上均排名第一的服务平台，创下同
            板块近十年成长奇迹。2017年年底，公司确定了“居家生活更欢乐”新的发展目标，立志为中国消费者甄选全球优质家居。
            在经营层面，欢邸始终把售后率放在第一考核指标，在2017年度的运营监控中，全公司售后率为1.03%，是中国家居流通
            平台中，售后与服务做的最完善的企业。
          </p>
        </div>
        <div class="tips">
          <h5><span>愿景：</span>居家生活更欢乐</h5>
          <h5><span>使命：</span>成为全球优质家居甄选家</h5>
        </div>
        <p>
          <img width="100%" src="../assets/about/pic-3.jpg"/>
        </p>
        <p>
          <img src="../assets/about/pic-4.jpg"/>
        </p>
        <p class="articleList">
          <img width="100%;" src="../assets/about/pic-5.jpg"/>
        </p>
      </div>
    </div>

    
    <div class="brand">

        <img width="100%;" src="../assets/about/pic-6.jpg"/>
      <!-- <div class="maxWidth">
        <h3>旗下<br/>品牌</h3>
        <ul>
          <li>
            
          </li>
        </ul>
      </div> -->
    </div>


    <div class="maxWidth contact">
      <img width="100%;" src="../assets/about/pic-3.jpg"/>
      <div class="">
        <img width="60px;" class="floatLeft" src="../assets/about/pic-7.jpg"/>
        <div>
          <p>公司地址：上海市浦东新区东方路3601号丰华园7号楼302</p>
          <p>
            <strong>公司总机：021-51878186</strong>
            <span></span>
            <strong>服务热线：400-186-0055</strong>
          </p>
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
.about .title{
  margin-top: 13px;
  margin-bottom: 7px;
  text-indent: 66px;
}
.about .title a{
  font-size: 15px;
  color: #D82926;
}
.about h3{
  text-align: center;
  color: #777777;
  font-size: 33px;
  margin: 37px 0px;
  font-weight: 100;
}
.time{
  text-align: center;
  margin-bottom: 37px;
  color: #888888;
}
.time span{
  margin: 0px 7px;
  font-size: 14px;
}
.article p{
  font-size: 16px;
  color: #7A7A7A;
  text-indent: 33px;
  margin-bottom: 33px;
}

.about h5 span{
  font-size: 16px;
  font-weight: 100;
}
.about h5{
  font-size: 16px;
}
.tips{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 55px;
}
.articleList{
  padding: 0px 55px;
  margin: 15px 0px;
}



.brand{
}

.contact{
  margin: 45px auto;
}
.contact p{
  text-align: center;
  font-size: 15px;
  margin: 7px 0px;
}
.contact span{
  padding: 0px 23px;
}


@media screen and (max-width: 800px){
  .tips{
    display: block;
    margin-bottom: 20px;
  }
  .about h5{
    margin: 10px;
  }
  .about{
    padding: 0px 11px;
  }
  .contact{
    padding: 0px 11px;
  }
  .contact div img{
    float: none;
    display: block;
  }
  .contact p strong{
    display: block;
    margin: 7px 0px;
  }
  .contact span{
    padding: 0px;
  }
  .contact p{
    margin: 15px 0px;
  }
  .articleList{
    padding: 0px;
  }
}

</style>
