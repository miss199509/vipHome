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
            <img width="465px" height="300px;" :src="val.image" :title="val.title"/>
            <h2 :title="val.seo_title">{{val.seo_title}}</h2>
            <p :title="val.seo_description">{{val.seo_description}}</p>
            
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
            <img :title="val.title" height="150px;" width="150px" :src="val.image" style="width: 150px;height: 150px;" />
            <div class="journalismPc">
              <h3 :title="val.seo_title">{{val.seo_title}}<span>{{val.create_time}}</span></h3>
              <p :title="val.seo_description">{{val.seo_description}}</p>
              <p class="overflowHidden">
                <img class="floatRight" src="../assets/eye.jpg"/>
              </p>
            </div>
            <div class="journalismWeb">
              <h3>{{val.title}}</h3>
              <p :title="val.seo_description" class="introductionText">{{val.seo_description}}</p>
              <p class="overflowHidden">
                <img class="floatRight" src="../assets/eye.jpg"/>
                <span>{{val.create_time}}</span>
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
            <img :title="val.title" height="150px;" width="150px" :src="val.image" style="width: 150px;height: 150px;"/>
            <div class="journalismPc">
              <h3 :title="val.seo_title">{{val.seo_title}}<span>{{val.create_time}}</span></h3>
              <p :title="val.seo_description">{{val.seo_description}}</p>
              <p class="overflowHidden">
                <img class="floatRight" src="../assets/eye.jpg"/>
              </p>
            </div>
            <div class="journalismWeb">
              <h3>{{val.title}}</h3>
              <p :title="val.seo_description" class="introductionText">{{val.seo_description}}</p>
              <p class="overflowHidden">
                <img class="floatRight" src="../assets/eye.jpg"/>
                <span>{{val.create_time}}</span>
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
        <ul class="articleSelect" v-if="detail.previous!=null">
          <li>
            <a href="javascript:;" @click="previousEve(detail.previous)">上一篇：{{detail.previous.title}}</a>
          </li>
          <li>
            <a href="javascript:;" @click="nextEve(detail.next)">下一篇：{{detail.next.title}}</a>
          </li>
        </ul>
        
        <talk :index="articleText" v-if='showcom'></talk>


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
import talk from '../components/talk'


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
      articleText:{},
      articleBoll:false,
      detail:{},
      showcom:false
    }
  },
  components:{
    'headerHtml':headerHtml,
    'bottomHtml':bottomHtml,
    'talk':talk
  },
  mounted(){
    let _this = this;
    
    // console.log(this.$route.query.uid)
    // if(this.$route.query.uid==1){
    //   this.articeclassList[1].boll = true;
    // }
    
    axios.post('http://backend.viphome.cn/api/seo',qs.stringify({webpage:'news'}))
    .then(function(dataJson){
      document.title = dataJson.data.title;
      var meta = document.getElementsByTagName('meta');
      meta['Description'].setAttribute('content',dataJson.data.description);
      meta['Keywords'].setAttribute('content',dataJson.data.keyword);
    })
    .catch(function(err){
      alert(err);
    });

    axios.post('http://backend.viphome.cn/api/articeclass',qs.stringify({}))
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
        if(_this.$route.query.key!=undefined){
          for(let key in _this.articeclassList){
            _this.articeclassList[key].boll = false;
          };
           _this.articeclassList[_this.$route.query.key].boll = true;
        }




        axios.post('http://backend.viphome.cn/api/artices',qs.stringify({class_id:_this.articeclassList[0].id}))
        .then(function(dataJson){
          if(dataJson.data.result){
            //console.log(JSON.stringify(dataJson.data.data.data))
            _this.information =dataJson.data.data.data;
          }
        })
        .catch(function(err){
          alert(err);
        });
        
        axios.post('http://backend.viphome.cn/api/artices',qs.stringify({class_id:_this.articeclassList[1].id}))
        .then(function(dataJson){
          if(dataJson.data.result){
            console.log(JSON.stringify(dataJson.data.data.data))
            _this.article =dataJson.data.data.data;
          }
        })
        .catch(function(err){
          alert(err);
        });


        axios.post('http://backend.viphome.cn/api/artices',qs.stringify({class_id:_this.articeclassList[2].id}))
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
      let _this = this;
      let num = 0;
      for(let i in this.articeclassList){
        if(this.articeclassList[i].boll){
          num = this.articeclassList[i].id
        }
      }
      //return false;
      this.$router.push({ name: 'article',query:{
        id:_this.$route.query.id,
        userName:_this.$route.query.userName,
        articleId:val.id,
        // title:val.title,
        // introduction:val.introduction,
        // image:val.image,
        // classId:num,
        // seo_title:val.seo_title,
        // seo_keyword:val.seo_keyword,
        // seo_description:val.seo_description
      }});

      location.reload();

      this.articleBoll = true;
      for(let key in this.articeclassList){
        if(this.articeclassList[key].boll){
          var numId = this.articeclassList[key].id;
        }
        this.articeclassList[key].boll = false;
      };
      this.detailEve(val.id);


    },
    previousEve(val){
      if(val.title=='暂无'){
        return false;
      }
      this.detailEve(val.id)
    },
    nextEve(val){
      if(val.title=='暂无'){
        return false;
      }
      this.detailEve(val.id)
    },
    detailEve(id){
      let _this = this;
      axios.post('http://backend.viphome.cn/api/article/detail',qs.stringify({id:id}))
      .then(function(dataJson){
        _this.articleText = dataJson.data.article;
        if(id==dataJson.data.previous.id){
          dataJson.data.previous.title = '暂无';
        }
        if(id==dataJson.data.next.id){
          dataJson.data.next.title = '暂无';
        }
        _this.detail = dataJson.data;
        document.body.scrollTop = document.documentElement.scrollTop = 0;

        _this.showcom = true;
      })
      .catch(function(err){
        alert(err);
      });

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
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
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
.journalismWeb{
  display: none;
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
  .journalismWeb{
    display: block;
  }
  .journalismPc{
    display: none;
  }
  .journalismWeb .introductionText{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
  .journalismWeb .introductionText {
    position:relative;
    line-height:1.4em;
    /* 3 times the line-height to show 3 lines */
    height:4.2em;
    overflow:hidden;
  }
  .journalismWeb .introductionText::after {
      content:"...";
      font-weight:bold;
      position:absolute;
      bottom:0;
      right:0;
      padding:0 20px 1px 45px;
      background:url(http://css88.b0.upaiyun.com/css88/2014/09/ellipsis_bg.png) repeat-y;
  }
}
</style>
