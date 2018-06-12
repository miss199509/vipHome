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
          <span v-show="$route.query.classId==1">公司动态</span>
          <span v-show="$route.query.classId==2">行业动态</span>
          <span v-show="$route.query.classId==3">家居新知</span>
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
        
        <div class="bdsharebuttonboxPc">
          <div class="bdsharebuttonbox">
            <span>分享：</span>
            <a href="#" class="bds_tsina" data-cmd="tsina"></a>
            <a href="#" data-cmd="sqq" class="qq"></a>
            <a href="#" class="bds_weixin" data-cmd="weixin"></a>
            <a href="#" class="bds_qzone" data-cmd="qzone"></a>
          </div>
        </div>
        <div class="bdsharebuttonboxWeb">
          <div class="bdsharebuttonbox">
            <span>分享：</span>
            <a href="javascript:;" class="bds_tsina" @click="bdshareEve()"></a>
            <a href="javascript:;" class="qq" @click="bdshareEve()"></a>
            <a href="javascript:;" class="bds_weixin" @click="bdshareEve()"></a>
            <a href="javascript:;" class="bds_qzone" @click="bdshareEve()"></a>
          </div>
        </div>


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
      articleText:{},
      articleBoll:false,
      detail:{}
    }
  },
  components:{
    'headerHtml':headerHtml,
    'bottomHtml':bottomHtml
  },
  mounted(){
    let _this = this;
    console.log(location.href)
    window._bd_share_config = {
      common : {
        bdText : _this.$route.query.title,
        bdDesc : _this.$route.query.introduction,
        bdUrl : location.href,
        bdPic : _this.$route.query.image
      },
      share : [{
        "bdSize" : 16
      }]
    }

    // console.log(this.$route.query.uid)
    // if(this.$route.query.uid==1){
    //   this.articeclassList[1].boll = true;
    // }
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


        _this.articleBoll = true;
        for(let key in _this.articeclassList){
          if(_this.articeclassList[key].boll){
            var numId = _this.articeclassList[key].id;
          }
          _this.articeclassList[key].boll = false;
        };
        _this.detailEve(_this.$route.query.articleId);





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
            //console.log(JSON.stringify(dataJson.data.data.data))
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
      this.$router.push({ name: 'information',query:{
        id:this.$route.query.id,
        userName:this.$route.query.userName,
        key:key
      }});
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
      this.$router.push({ name: 'article',query:{
        id:this.$route.query.id,
        userName:this.$route.query.userName,
        articleId:val.id,
        title:val.title,
        introduction:val.introduction,
        image:val.image
      }});
      location.reload();
      this.detailEve(val.id)
    },
    nextEve(val){
      if(val.title=='暂无'){
        return false;
      }
      this.$router.push({ name: 'article',query:{
        id:this.$route.query.id,
        userName:this.$route.query.userName,
        articleId:val.id,
        title:val.title,
        introduction:val.introduction,
        image:val.image
      }});
      location.reload();

      this.detailEve(val.id)
    },
    detailEve(id){
      let _this = this;
      axios.post('http://backend.viphome.cn/api/article/detail',qs.stringify({id:id}))
      .then(function(dataJson){
        //console.log(JSON.stringify(dataJson.data.article));
        _this.articleText = dataJson.data.article;
        if(id==dataJson.data.previous.id){
          dataJson.data.previous.title = '暂无';
        }
        if(id==dataJson.data.next.id){
          dataJson.data.next.title = '暂无';
        }
        _this.detail = dataJson.data;
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        return dataJson.data.article;

      })
      .catch(function(err){
        alert(err);
      });

    },
    bdshareEve(){
      this.$message('请使用浏览器的分享功能，把文章分享给朋友！');
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

.bdsharebuttonboxWeb{
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
  .bdsharebuttonboxPc{
    display: none;
  }
  .bdsharebuttonboxWeb{
    display: block;
  }
}

.bdshare-button-style0-16{
  display: flex;
  justify-content: end;
  align-items: center;
}

.bdshare-button-style0-16 .bds_weixin {
  background: url('http://viphome.cn/image/193725918797896593.png');
  float: left;
  font-size: 18px;
  padding-left: 44px;
  line-height: 34px;
  height: 34px;
  background-repeat: no-repeat;
  cursor: pointer;
  margin: 6px 6px 6px 0;
  background-size: 33px;
}
.bdshare-button-style0-16 .bds_qzone {
  background: url('http://viphome.cn/image/255556313963327013.png');
  float: left;
  font-size: 18px;
  padding-left: 44px;
  line-height: 34px;
  height: 34px;
  background-repeat: no-repeat;
  cursor: pointer;
  margin: 6px 6px 6px 0;
  background-size: 33px;
}
.bdshare-button-style0-16 .bds_tsina {
  background: url('http://viphome.cn/image/733657352218061406.png');
  float: left;
  font-size: 18px;
  padding-left: 44px;
  line-height: 34px;
  height: 34px;
  background-repeat: no-repeat;
  cursor: pointer;
  margin: 6px 6px 6px 0;
  background-size: 33px;
}
.bdshare-button-style0-16 a, .bdshare-button-style0-16 .bds_more{
  background: url('http://viphome.cn/image/391779438277780947.png');
  float: left;
  font-size: 18px;
  padding-left: 44px;
  line-height: 34px;
  height: 34px;
  background-repeat: no-repeat;
  cursor: pointer;
  margin: 6px 6px 6px 0;
  background-size: 33px;
}
</style>


<style>
@media screen and (max-width: 800px){
  .articleList img{
    width: 100%;
    text-indent: 0px;
    margin-left: -28px;
  }
}
</style>