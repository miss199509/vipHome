<template>
  <div class="information">

    

    
    <headerHtml :index="7"></headerHtml>
    
    <p>
      <img width="100%;" src="../assets/brand/banner.jpg"/>
    </p>
    <div class="maxWidth informationBox">
      <p class="nav">
        <a href="javascript:;" v-for="(val,key) in articeclassList" :class="{classNav:val.boll}" @click="classNavEve(val,key)">{{val.name}}</a>
      </p>
      <!-- 品牌分类 -->
      <div class="" v-show="articeclassList[0].boll" v-if="articeclassList[0]!=null">
        <ul class="informationList">
          <li v-for="(val,key) in information" @click="articleEve(val,key)">
            <img width="465px" height="300px;" :src="val.image"/>
            <h2>{{val.title}}</h2>
            <p>{{val.introdution}}</p>
            
            <div class="informationTips">
              <p>
                <span>{{val.create_time}}</span>
                <span>公司动态</span>
              </p>
              <img src="../assets/eye.jpg"/>
            </div>

          </li>
        </ul>
        <div class="paging" style="display: none;">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1000"></el-pagination>
        </div>
      </div>
      <!-- 行业资讯 -->
      <div class="journalism" v-show="articeclassList[1].boll" v-if="articeclassList[1]!=null">
        <ul>
          <li v-for="(val,key) in article" @click="articleEve(val,key)">
            <img height="150px;" width="150px" :src="val.image"/>
            <div>
              <h3>{{val.title}}<span>{{val.create_time}}</span></h3>
              <p>{{val.introdution}}</p>
              <p class="overflowHidden">
                <img class="floatRight" src="../assets/eye.jpg"/>
              </p>
            </div>
          </li>
        </ul>
        <div class="paging" style="display: none;">
          <el-pagination @size-change="handleSizeJournalism" @current-change="handleaJournalism" :current-page.sync="journalismPage" :page-size="100" layout="prev, pager, next, jumper" :total="1000"></el-pagination>
        </div>
      </div>


      <!-- 家居新知 -->
      <div class="journalism" v-show="articeclassList[2].boll" v-if="articeclassList[2]!=null">
        <ul>
          <li v-for="(val,key) in journalism" @click="articleEve(val,key)">
            <img height="150px;" width="150px" :src="val.image"/>
            <div>
              <h3>{{val.title}}<span>{{val.create_time}}</span></h3>
              <p>{{val.introdution}}</p>
              <p class="overflowHidden">
                <img class="floatRight" src="../assets/eye.jpg"/>
              </p>
            </div>
          </li>
        </ul>
        <div class="paging" style="display: none;">
          <el-pagination @size-change="handleSizeJournalism" @current-change="handleaJournalism" :current-page.sync="journalismPage" :page-size="100" layout="prev, pager, next, jumper" :total="1000"></el-pagination>
        </div>
      </div>

      <!-- 文章结构呈现 -->
      <div class="articleList" v-show="articleBoll">
        <!-- <img :src="articleText.image"/> -->
        <h1>{{articleText.title}}</h1>
        <p class="title">
          <span>{{articleText.create_time}}</span>
          <span>行业资讯</span>
        </p>
        <div class="" v-html="articleText.content" style="color: #7A7A7A;font-size: 14px;text-indent: 27px;line-height: 23px;"></div>
        <!-- <p>首先来看一组数据，在由商务部流通业发展司</p> -->
        <ul class="articleSelect">
          <li>
            <a href="javascript:;">上一篇：142平米美式风格 展现出空间贵气而又不失自在与随意的风范</a>
          </li>
          <li>
            <a href="javascript:;">下一篇：阳台还可以这样贴瓷砖 超级好看，小户型也可以做！</a>
          </li>
        </ul>

        <div class="paging" style="display: none;">
          <el-pagination @size-change="handleSizeArticle" @current-change="handleaArticle" :current-page.sync="articlePage" :page-size="100" layout="prev, pager, next, jumper" :total="1000"></el-pagination>
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
  name: 'information',
  data () {
    return {
      currentPage3: 5,
      articlePage:1,
      journalismPage:1,
      articeclassList:[],
      article:{},
      information:{},
      journalism:{},
      articleText:'',
      articleBoll:false
    }
  },
  components:{
    'headerHtml':headerHtml,
    'bottomHtml':bottomHtml
  },
  mounted(){

    this.$nextTick(function(){
    window._bd_share_config = {
        common : {
          bdText : '自定义分享内容', 
          bdDesc : '自定义分享摘要', 
          bdUrl : '自定义分享url地址',   
          bdPic : '自定义分享图片'
        },
        share : [{
          "bdSize" : 16
        }],
        slide : [{     
          bdImg : 0,
          bdPos : "right",
          bdTop : 100
        }],
        image : [{
          viewType : 'list',
          viewPos : 'top',
          viewColor : 'black',
          viewSize : '16',
          viewList : ['qzone','tsina','huaban','tqq','renren']
        }],
        selectShare : [{
          "bdselectMiniList" : ['qzone','tqq','kaixin001','bdxc','tqf']
        }]
      }
    })

    // console.log(this.$route.query.uid)
    // if(this.$route.query.uid==1){
    //   this.articeclassList[1].boll = true;
    // }
    let _this = this;
    axios.post('http://viphome.argu.net/api/articeclass',qs.stringify({}))
    .then(function(dataJson){
      //console.log(JSON.stringify(dataJson.data.data))
      if(dataJson.data.result){
        _this.articeclassList = dataJson.data.data;
        for(let key in _this.articeclassList){
          _this.$set(_this.articeclassList[key],'boll',false);
        };
        if(_this.$route.query.uid==undefined){
          _this.articeclassList[0].boll = true;
        }else{
          _this.articeclassList[_this.$route.query.uid].boll = true;
        }




        axios.post('http://viphome.argu.net/api/artices',qs.stringify({class_id:_this.articeclassList[0].id}))
        .then(function(dataJson){
          if(dataJson.data.result){
            //console.log(JSON.stringify(dataJson.data.data.data))
            _this.information =dataJson.data.data.data;
          }
        })
        .catch(function(err){
          alert(err);
        });
        
        axios.post('http://viphome.argu.net/api/artices',qs.stringify({class_id:_this.articeclassList[1].id}))
        .then(function(dataJson){
          if(dataJson.data.result){
            //console.log(JSON.stringify(dataJson.data.data.data))
            _this.article =dataJson.data.data.data;
          }
        })
        .catch(function(err){
          alert(err);
        });


        axios.post('http://viphome.argu.net/api/artices',qs.stringify({class_id:_this.articeclassList[2].id}))
        .then(function(dataJson){
          if(dataJson.data.result){
            //console.log(JSON.stringify(dataJson.data.data.data))
            _this.journalism = dataJson.data.data.data;
          }
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
    classNavEve(val,key){
      for(let i in this.articeclassList){
        this.articeclassList[i].boll = false;
      }
      val.boll = true;
      this.articleBoll = false;
    },
    dynamicEve(id){
      let _this = this;
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
    },
    articleEve(val,key){
      console.log(val.id)
      this.articleText = val;
      this.articleBoll = true;
      for(let key in this.articeclassList){
        this.articeclassList[key].boll = false;
      };
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.informationBox{
  width: 1000px;
}
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
  overflow: hidden;
  margin-left: -70px;
}
.informationList li{
  width: 465px;
  margin-top: 30px;
  float: left;
  margin-left: 70px;
  cursor: pointer;
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
  margin-bottom: 33px;
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
  cursor: pointer;
}
.journalism div{
  margin-left: 33px;
  width: 100%;
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
@media screen and (max-width: 800px){
  .informationBox{
    width: 100%;
  }
  .informationList,.journalism{
    margin: 0px;
    padding: 0px 11px;
  }
  .informationList li{
    width: 100%;
    margin: 7px 0px;
  }
  .nav a{
    margin: 0px 23px;
    font-size: 17px;
  }
  .nav{
    padding-bottom: 9px;
  }
  .informationList img:nth-child(1){
    width: 100%;
    height: auto;
  }
  .informationTips span{
    font-size: 13px;
  }
  .journalism div img:nth-child(1){
    float: none;
  }
  .journalism div h3{
    font-size: 15px;
  }
  .journalism h3 span{
    font-size: 13px;
    margin: 9px 0px;
  }
  .articleList{
    padding: 0px 11px;
  }
  .informationList h2{
    font-size: 15px;
    margin: 7px 0px;
  }
  .informationTips{
    margin: 7px 0px;
  }
}
</style>
