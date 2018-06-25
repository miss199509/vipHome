<template>
  <div class="home">

    <div>
      
      <headerHtml :index="4"></headerHtml>

      

    </div>
    
    <div class="webSearch">
      <p>
        <input v-model="searchCommodity" type="" name="" placeholder="列如：脚蹬 真皮沙发"/>
        <i @click="searchEve()" class="el-icon-search" style="font-size: 20px;"></i>
      </p>
    </div>



    
    <div class="maxWidth ificationBox">
      <el-row>
        
        <el-col :span="5">
          <div class="grid-content bg-purple" id="classification">

            <p class="borderImg" v-for="(val,key) in advertisement">
              <a :href="val.link">
                <img :src="val.image" :title="val.image_title" :alt="val.image_alt"/>
              </a>
            </p>

            <nav class="classificationList">
              <ul>
                <!-- <li>
                  <h3>
                    查看所有宝贝
                  </h3>
                  <p class="selectThis">
                    <a href="javascript:;">按销量</a>
                    <a href="javascript:;">按新品</a>
                    <a href="javascript:;">按价格</a>
                  </p>
                </li> -->
                <li>
                  <h3>
                    新品上架
                  </h3>
                  <p class="commodityData cursor" v-for="(val,key) in dates" @click="datesEve(val,key)" :class="{brandCss:val.boll}">
                    {{val.year}}年{{val.month}}月{{val.day}}日
                  </p>
                </li>
              </ul>
              
              <el-collapse v-model="activeName" accordion>
                <el-collapse-item title="品牌" name="1" class="collapseNav">
                <template slot="title" class="collapseTitle">
                  品牌
                </template>
                  <ul class="collapseUl">
                    <li href="javascript:;" v-for="(val,key) in categoryJson.brands" @click="brandEve(val,key)">
                      <a href="javascript:;" :class="{brandCss:val.boll}">{{val.name}}</a>
                    </li>
                  </ul>
                </el-collapse-item>
                <el-collapse-item title="品类" name="2" class="collapseNav">
                  <ul class="collapseUl">
                    <li href="javascript:;" v-for="(val,key) in categoryJson.categorys" @click="categorysEve(val,key)">
                      <a href="javascript:;" :class="{brandCss:val.boll}">{{val.name}}</a>
                    </li>
                  </ul>
                </el-collapse-item>
                <el-collapse-item title="空间" name="3" class="collapseNav">
                  <ul class="collapseUl">
                    <li href="javascript:;" v-for="(val,key) in categoryJson.spaces" @click="spaceEve(val,key)">
                      <a href="javascript:;" :class="{brandCss:val.boll}">{{val.name}}</a>
                    </li>
                  </ul>
                </el-collapse-item>
                <el-collapse-item title="风格" name="4" class="collapseNav">
                  <ul class="collapseUl">
                    <li href="javascript:;" v-for="(val,key) in categoryJson.styles" @click="stylesEve(val,key)">
                      <a href="javascript:;" :class="{brandCss:val.boll}">{{val.name}}</a>
                    </li>
                  </ul>
                </el-collapse-item>
              </el-collapse>

            </nav>

          </div>
        </el-col>

        <el-col :span="19">
          <div class="grid-content bg-purple-light">
            <p class="category">
              <a href="javascript:;" @click="allEve()">
                所有宝贝
              </a>
              <i>></i>
              <span>{{brandName}}</span>
            </p>

            <nav class="classification">
              <ul>
                <li>
                  <span>品牌：</span>
                  <p>
                    <a href="javascript:;" v-for="(val,key) in categoryJson.brands" :class="{brandCss:val.boll}" @click="brandEve(val,key)">
                      {{val.name}}
                    </a>
                  </p>
                </li>
                <li>
                  <span>品类：</span>
                  <p>
                    <a href="javascript:;" v-for="(val,key) in categoryJson.categorys" :class="{brandCss:val.boll}" @click="categorysEve(val,key)">
                      {{val.name}}
                    </a>
                  </p>
                </li>
                <li>
                  <span>空间：</span>
                  <p>
                    <a href="javascript:;" v-for="(val,key) in categoryJson.spaces" :class="{brandCss:val.boll}" @click="spaceEve(val,key)">
                      {{val.name}}
                    </a>
                  </p>
                </li>
                <li>
                  <span>风格：</span>
                  <p>
                    <a href="javascript:;" v-for="(val,key) in categoryJson.styles" :class="{brandCss:val.boll}" @click="stylesEve(val,key)">
                      {{val.name}}
                    </a>
                    
                  </p>
                </li>
              </ul>
            </nav>

            <div class="commoditySearch">
              <i>共搜索到{{total}}符合条件的商品</i>
              <div class="keyWord">
                <span>关键词：</span>
                <el-input placeholder="请输入内容" v-model="keyword" clearable size="mini"></el-input>
              </div>
              <div class="selectPrice">
                <span>价格区间：</span>
                <el-input placeholder="请输入内容" v-model="start" clearable size="mini"></el-input>
                <span>至</span>
                <el-input placeholder="请输入内容" v-model="end" clearable size="mini"></el-input>
                <el-button type="primary" icon="el-icon-search" size="mini" @click="searchEve()">搜索</el-button>
              </div>
            </div>

            <div class="selectCommodity">
              <ul>
                
                <li class="sort">
                    <strong>排序：</strong>

                    <p v-for="(val,key) in sortList" @click="sortEve(val,key)">
                      <span>{{val.name}}</span>
                      <img v-if="val.boll" src="../assets/icon-4.jpg"/>
                      <img v-else src="../assets/icon-3.jpg"/>
                    </p>
                    <a href="javascript:;" @click="webCommodityListBoll=!webCommodityListBoll">筛选</a>

                </li>

                <li>
                  <span>{{pageNum/100}}/{{lastPage/100}}</span>
                  <a href="javascript:;" @click="firstEve()">上一页</a>
                  <a href="javascript:;" @click="lastEve()">下一页</a>
                </li>
              
              </ul>
            </div>

            <div class="popupBack" v-show="webCommodityListBoll"></div>
            <div class="webCommodityList" v-show="webCommodityListBoll">
              <ul :style="{height:height_-35+'px'}">
                <li>
                  <h5>价格区间：</h5>
                  <el-input class="inputSelect" placeholder="最低价" v-model="start" clearable size="mini">
                  </el-input>
                  <span>-</span>
                  <el-input class="inputSelect" placeholder="最高价" v-model="end" clearable size="mini">
                  </el-input>
                </li>
                <li>
                  <h5>品牌：</h5>
                  <p>
                    <a href="javascript:;" v-for="(val,key) in categoryJson.brands" :class="{brandCss:val.boll}" @click="brandEve(val,key)">
                      {{val.name}}
                    </a>
                  </p>
                </li>
                <li>
                  <h5>品类：</h5>
                  <p>
                    <a href="javascript:;" v-for="(val,key) in categoryJson.categorys" :class="{brandCss:val.boll}" @click="categorysEve(val,key)">
                      {{val.name}}
                    </a>
                  </p>
                </li>
                <li>
                  <h5>空间：</h5>
                  <p>
                    <a href="javascript:;" v-for="(val,key) in categoryJson.spaces" :class="{brandCss:val.boll}" @click="spaceEve(val,key)">
                      {{val.name}}
                    </a>
                  </p>
                </li>
                <li>
                  <h5>风格：</h5>
                  <p>
                    <a href="javascript:;" v-for="(val,key) in categoryJson.styles" :class="{brandCss:val.boll}" @click="stylesEve(val,key)">
                      {{val.name}}
                    </a>
                    
                  </p>
                </li>
              </ul>
              <el-button @click="searchEve(webCommodityListBoll=!webCommodityListBoll)" class="webPrimary" type="primary" size="small">
                确定
              </el-button>
            </div>

            <!-- 商品列表 -->
            <div class="commodityList">
              <p class="tipsList" v-show="spacebrandList.length==0">暂无数据</p>
              <div class="overflowHidden">
                <div class="grid-content productBox" v-for="(val,key) in spacebrandList">
                  <div>
                    <a :href="val.taobao">
                      <p class="imgBorder">
                        <img width="300px" :src="val.image" :title="val.image_title" :alt="val.image_alt"/>
                        <img v-show="val.hot" class="logo" src="../assets/icon-1.jpg"/>
                      </p>

                      <h3>
                        <strong>￥{{val.discount_price}}</strong>
                        <i>
                          ￥{{val.price}}
                        </i>
                      </h3>
                      <p class="describe">
                        {{val.title}}
                      </p>
                      <p class="sale">
                        <span>总销售{{val.sales}}</span>
                        <i>|</i>
                        <span>评论{{val.comment}}</span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <p class="tipsList" v-show="webTipsList">暂无更多数据</p>


            </div>

          </div>
          <div class="paging">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size="100" layout="prev, pager, next, jumper" :total="lastPage">
            </el-pagination>
            </el-pagination>
          </div>


        </el-col>
      
      </el-row>
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
      search:'',
      currentPage: 1,
      spacebrandList:[],
      activeName:'1',
      //参数
      brandNm:'',
      categoryNm:'',
      styleNm:'',
      spaceNm:'',
      order_by_field:'popularity',
      order_by_sort:'',
      sortList:[
        {name:'人气',boll:true},
        {name:'销量',boll:false},
        {name:'新品',boll:false},
        {name:'价格',boll:false}   
      ],
      lastPage:0,
      // newList:[
      //   {name:[{i:'00'},{i:'00'}]},
      //   {name:[{i:'00'},{i:'00'}]},
      //   {name:[{i:'00'},{i:'00'}]}
      // ]
      brandName:'',
      pageNum:100,
      total:0,
      // 筛选的起始价格
      start:'',
      end:'',
      //关键字
      keyword:'',
      categoryJson:{},
      scroll: 0,
      webCommodityListBoll:false,
      height_:0,
      //web
      numWebSelect:1,
      numWebSelectBoll:false,
      webTipsList:false,
      dates:[],
      start_time:'',
      end_time:'',
      searchCommodity:'',
      advertisement:''
    }
  },
  components:{
    'headerHtml':headerHtml,
    'bottomHtml':bottomHtml
  },
  mounted(){
    axios.post('http://backend.viphome.cn/api/seo',qs.stringify({webpage:'promotion'}))
    .then(function(dataJson){
      document.title = dataJson.data.title;
      var meta = document.getElementsByTagName('meta');
      meta['Description'].setAttribute('content',dataJson.data.description);
      meta['Keywords'].setAttribute('content',dataJson.data.keyword);
    })
    .catch(function(err){
      alert(err);
    });

    this.searchCommodity = this.$route.query.search;
    this.height_ = document.documentElement.clientHeight;
    window.addEventListener('scroll', this.menu);
    let _this = this;
    //
    axios.post('http://backend.viphome.cn/api/banner',qs.stringify({position:23}))
    .then(function(dataJson){
      if(dataJson.data.result){
        _this.advertisement = dataJson.data.data.data;
        //console.log(JSON.stringify(_this.advertisement))
      }
    })
    .catch(function(err){
      alert(err);
    });

    //时间
    axios.post('http://backend.viphome.cn//api/product/dates',qs.stringify({
    }))
    .then(function(dataJson){
      //console.log(JSON.stringify(dataJson.data.data));
      for(let key in dataJson.data.data){
        dataJson.data.data[key]['boll'] = false;
      }
      _this.dates = dataJson.data.data.slice(0,2);
    })
    .catch(function(err){
      alert(err);
    });
    //new
    axios.post('http://backend.viphome.cn/api/category_v2',qs.stringify({}))
    .then(function(dataJson){
      //console.log(JSON.stringify(dataJson.data))
      for(let key in dataJson.data.styles){
        _this.$set(dataJson.data.styles[key],'boll',false);
      }
      for(let key in dataJson.data.brands){
        _this.$set(dataJson.data.brands[key],'boll',false);
      }
      for(let key in dataJson.data.categorys){
        _this.$set(dataJson.data.categorys[key],'boll',false);
      }
      for(let key in dataJson.data.spaces){
        _this.$set(dataJson.data.spaces[key],'boll',false);
      }
      _this.styleNm = _this.$route.query.styles;
      _this.brandNm = _this.$route.query.brands;
      _this.categoryNm = _this.$route.query.categorys;
      _this.spaceNm = _this.$route.query.spaces;
      _this.keyword = _this.$route.query.search;
      for(let key in dataJson.data.styles){
        if(dataJson.data.styles[key].id==_this.$route.query.styles){
          dataJson.data.styles[key].boll = true;
        }
      }
      for(let key in dataJson.data.brands){
        //console.log(JSON.stringify(dataJson.data.brands[key])+'***')
        if(dataJson.data.brands[key].id==_this.$route.query.brands){
          dataJson.data.brands[key].boll = true;
        }
      }
      for(let key in dataJson.data.categorys){
        if(dataJson.data.categorys[key].id==_this.$route.query.categorys){
          dataJson.data.categorys[key].boll = true;
        }
      }
      for(let key in dataJson.data.spaces){
        if(dataJson.data.spaces[key].id==_this.$route.query.spaces){
          dataJson.data.spaces[key].boll = true;
        }
      }
      _this.newSpacebrandEve();
      _this.categoryJson = dataJson.data;

    })
    .catch(function(err){
      alert(err);
    });



   






  },
  methods: {
    menu() {
      if(document.body.clientWidth>960){
        return false;
      };
      if(this.numWebSelectBoll){
        return false;
      }
      let _this = this;
      this.scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      console.log(this.scroll)
      if(document.body.offsetHeight-document.documentElement.clientHeight==this.scroll){
        let num = this.numWebSelect+=1;
        console.log(num);
        this.webNewSpacebrandEve(num);
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.newSpacebrandEve(val);
      this.pageNum = val*100;
    },
    newCategoryEve(i,j){
      console.log(JSON.stringify(i))
    },
    brandEve(val,key){
      this.brandName = val.name;
      if(val.boll==true){
        val.boll = false;
        this.brandNm = '';
        this.brandName = '';
      }else{
        for(let i in this.categoryJson.brands){
          this.categoryJson.brands[i].boll = false;
        }
        val.boll = true;
        this.brandNm = val.id;
      }

      this.newSpacebrandEve()
    },
    categorysEve(val,key){

      if(val.boll==true){
        val.boll = false;
        this.categoryNm = '';
      }else{
        for(let i in this.categoryJson.categorys){
          this.categoryJson.categorys[i].boll = false;
        }
        val.boll = true;
        this.categoryNm = val.id;
      }


      this.newSpacebrandEve()
    },
    spaceEve(val,key){

      if(val.boll==true){
        val.boll = false;
        this.spaceNm = '';
      }else{
        for(let i in this.categoryJson.spaces){
          this.categoryJson.spaces[i].boll = false;
        }
        val.boll = true;
        this.spaceNm = val.id;
      }
      this.newSpacebrandEve()
    },
    stylesEve(val,key){
      if(val.boll==true){
        val.boll = false;
        this.styleNm = '';
      }else{
        for(let i in this.categoryJson.styles){
          this.categoryJson.styles[i].boll = false;
        }
        val.boll = true;
        this.styleNm = val.id;
      }
      this.newSpacebrandEve()
    },
    
    sortEve(val,key){
      for(let i in this.sortList){
        this.sortList[i].boll = false;
      }
      let _this = this;
      if(val.name=='价格'){
        if(this.order_by_field=='price'){
          this.order_by_field = '';
          this.order_by_sort = 'asc'
        }else{
          this.order_by_field='price';
          val.boll = true;
          this.order_by_sort = 'desc'; 
        }
      }
      if(val.name=='人气'){
        if(this.order_by_field=='popularity'){
          this.order_by_field = '';
        }else{
          this.order_by_field='popularity';
          val.boll = true;
        }
      }
      if(val.name=='销量'){ 
        if(this.order_by_field=='sales'){
          this.order_by_field = '';
        }else{
          this.order_by_field='sales';
          val.boll = true;
        }
      }
      if(val.name=='新品'){
        if(this.order_by_field=='create_time'){
          this.order_by_field = '';
        }else{
          this.order_by_field='create_time';
          val.boll = true;
        }
      }
      this.newSpacebrandEve();

    },
    newSpacebrandEve(pag=1){

      let _this = this;
      console.log(_this.order_by_field)
      axios.post('http://backend.viphome.cn/api/products_v2',qs.stringify({
        //selectSearch:'',
        brand_id:_this.brandNm,
        category_id:_this.categoryNm,
        space_id:_this.spaceNm,
        style_id:_this.styleNm,
        order_by_field:_this.order_by_field,
        page:pag,
        start_price:_this.start,
        end_price:_this.end,
        keyword:_this.keyword,
        order_by_sort:_this.order_by_sort,
        start_time:_this.start_time,
        end_time:_this.end_time,
        filter:'promotion'
      }))
      .then(function(dataJson){
        //console.log(JSON.stringify(dataJson.data.data))
        _this.lastPage = dataJson.data.data.last_page*100;
        _this.total = dataJson.data.data.total;
        //console.log(JSON.stringify(_this.spacebrandList))
        _this.spacebrandList = dataJson.data.data.data;
        _this.webTipsList = false;
        _this.numWebSelect = 1;
        _this.numWebSelectBoll = false
      })
      .catch(function(err){
        alert(err);
      });
    },
    webNewSpacebrandEve(pag=1){

      let _this = this;
      console.log(_this.order_by_field)
      axios.post('http://backend.viphome.cn/api/products_v2',qs.stringify({
        //selectSearch:'',
        brand_id:_this.brandNm,
        category_id:_this.categoryNm,
        space_id:_this.spaceNm,
        style_id:_this.styleNm,
        order_by_field:_this.order_by_field,
        page:pag,
        start_price:_this.start,
        end_price:_this.end,
        keyword:_this.keyword,
        order_by_sort:_this.order_by_sort,
        start_time:_this.start_time,
        end_time:_this.end_time,
        filter:'promotion'
      }))
      .then(function(dataJson){
        console.log(JSON.stringify(dataJson.data.data.data))

        if(dataJson.data.data.data.length==0){
          _this.numWebSelectBoll = true;
          _this.webTipsList = true;
        }
        for(let key in dataJson.data.data.data){
          _this.spacebrandList.push(dataJson.data.data.data[key]);
        }

      })
      .catch(function(err){
        alert(err);
      });
    },
    allEve(){
      for(let i in this.categoryJson.spaces){
        this.categoryJson.spaces[i].boll = false;
      }
      for(let i in this.categoryJson.categorys){
        this.categoryJson.categorys[i].boll = false;
      }
      for(let i in this.categoryJson.brands){
        this.categoryJson.brands[i].boll = false;
      }
      for(let i in this.categoryJson.styles){
        this.categoryJson.styles[i].boll = false;
      }
      this.brandNm = '';
      this.categoryNm = '';
      this.spaceNm = '';
      this.styleNm
      this.order_by_field = '';
      this.start = '';
      this.end = '';
      this.keyword = '';
      this.webNewSpacebrandEve(1);
      this.newSpacebrandEve(1);
    },
    lastEve(){
      if(this.spacebrandList.length<15){
        this.$message({
          message: '已经是最后一页',
          type: 'warning'
        }); 
        return false;
      }
      let num = this.pageNum+=100;
      this.newSpacebrandEve(num/100);
      console.log(num)
      this.currentPage = num/100;

    },
    firstEve(){
      if(this.pageNum<=100){
        return false;
      }
      let num = this.pageNum-=100;
      this.newSpacebrandEve(num/100);
      console.log(num)
      this.currentPage = num/100;
    },
    //价格筛选
    searchEve(){
      //alert(0)
      this.keyword = this.searchCommodity;
      this.newSpacebrandEve();

    },
    //日期筛选
    datesEve(val,key){
      if(val.boll){
        for(let i in this.dates){
          this.dates[i].boll = false;
        };
        this.end_time = '';
        this.start_time = '';
        this.newSpacebrandEve(1,'','');
        return false;
      }else{
        for(let i in this.dates){
          this.dates[i].boll = false;
        };
        val.boll = true;
      };
      this.end_time = val.year+'-'+val.month+'-'+val.day+' 23:59:59';
      this.start_time = val.year+'-'+val.month+'-'+val.day+' 00:00:00';

      this.newSpacebrandEve(1);
    }

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.ificationBox{
  margin-top: 11px;
  max-width: 1200px;
}

/*宝贝分类*/
/*.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}*/

/*类目*/
.category{
  border-bottom: 1px solid #333;
  padding-bottom: 7px;
  font-size: 15px;
}
.category a{
  color: #333;
}
.category i{
  margin: 0px 5px;
}


/*分类*/
.classification li{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 15px 0px;
}
.classification p{
  width: 100%;
}
.classification a{
  font-size: 15px;
  margin: 5px 7px;
  color: #000;
  /*border: 1px solid #000;*/
  display: inline-block;
  padding: 2px 13px;
}
.classification .brandCss{
  border: 1px solid #000;
}
.classification span{
  width: 85px;
  margin-left: 17px;
  font-size: 15px;
  color: #060606;
  text-align: -webkit-auto;
}

/*搜索框*/
.commoditySearch{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #a6a9ad;
  padding-bottom: 13px;
}
.commoditySearch i{
  color: #999;
  font-size: 12px;
}
.commoditySearch span{
  font-size: 13px;
  color: #777;
}
.keyWord .el-input{
  width: 200px;
}
.selectPrice span{
  margin: 0px 11px;
}
.selectPrice .el-input{
  width: 100px;
}

/*排序*/
.selectCommodity{
  margin: 11px 0px;
}
.selectCommodity ul{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
}
.selectCommodity a{
  color: #222;
}
.sort{
  display: flex;
  justify-content: baseline;
  align-items: center;
}
.sort p{
  margin: 0px 7px;
  cursor: pointer;
}

.sort a{
  color: red;
  font-size: 15px;
  display: none;
}

/*商品列表*/
/*.commodityList .el-row{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
}*/
.commodityList .el-col{
  cursor: pointer;
}
.commodityList{
  overflow: hidden;
  margin-left: -22px;
}
.productBox{
  width: 302px;
  float: left;
  margin-left: 22px;
  margin-bottom: 7px;
}
.commodityList .imgBorder{
  border: 1px solid #ccc;
  position: relative;
}
.commodityList .imgBorder img{
  display: block;
  min-height: 300px;
}
.commodityList .imgBorder .logo{
  width: 45px;
  position: absolute;
  top: 0px;
  right: 13px;
  min-height: auto;
}
.commodityList h3{
  margin: 9px 0px;
}
.commodityList h3 strong{
  font-size: 17px;
  color: #000;
}
.commodityList h3 i{
  color: #777;
  font-size: 13px;
  text-decoration: line-through;
}
.commodityList .describe{
  color: #d72326;
  font-size: 13px;
  margin-bottom: 9px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.commodityList .sale{
  font-size: 12px;
  color: #000;
}
.commodityList .sale i{
  margin: 0px 5px;
}
.commodityList .tipsList{
  text-align: center;
  font-size: 13px;
  color: #999;
  margin: 11px 0px;

}
/*边分类*/
.classificationList{
  border-top: 2px solid #000;
}
.classificationList li{
  margin: 1px 0px;
}
#classification{
  padding-right: 30px;
}
#classification .borderImg img{
  width: 100%;
}
.classificationList h3{
  text-indent: 17px;
  background-color: #e2e2e2;
  font-size: 15px;
  font-weight: 100;
  color: #060606;
  height: 30px;
  line-height: 30px;
}
#classification .selectThis{
  padding: 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#classification .selectThis a{
  color: #525252;
  font-size: 13px;
}

.commodityData{
  color: #525252;
  font-size: 15px;
  text-indent: 11px;
  margin: 7px 0px;
}
.bannerBox li{
  font-size: 15px;
  text-indent: 11px;
  margin: 7px 0px;
}
.bannerBox a{
  color: #525252;
}


/*分页*/
.paging{
  text-align: center;
  margin: 30px 0px;
}




/*web筛选框*/
.webCommodityList{
  position: fixed;
  right: 0px;
  background-color: #fff;
  height: 100%;
  top: 0px;
  z-index: 12;
  width: 230px;
  padding: 0px 11px;
}
.webCommodityList ul{
  overflow: auto;
}
.webCommodityList h5{
  font-size: 14px;
  padding: 7px 0px;
}
.webCommodityList a{
  font-size: 13px;
  color: #444;
  background-color: #e2e2e2;
  display: inline-block;
  width: 100px;
  text-align: center;
  margin: 5px 7px;
  height: 27px;
  line-height: 27px;
  border-radius: 30px;
}
.webCommodityList .brandCss{
  border: 1px solid red;
  color: red;
  box-sizing:border-box;
}
.inputSelect{
  width: 97px;
}

.webPrimary{
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 110px;
  font-size: 15px;
}

.collapseNav a{
  color: #000;
}
.collapseNav .brandCss{
  color: red;
}

.collapseTitle{
  text-indent: 17px;
  background-color: #e2e2e2;
  font-size: 15px;
  font-weight: 100;
  padding: 5px 0px;
  color: #060606;
  height: auto;
}
.collapseUl li{
  color: #525252;
  font-size: 15px;
  text-indent: 11px;
  margin: 7px 0px;
}

.classificationList li p.brandCss{
  color: red;
}

.webSearch{
  padding: 0px 11px;
  margin-top: 11px;
}
.webSearch p{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.webSearch input{
  width: 100%;
  border-radius: 32px;
  border: 1px solid;
  height: 28px;
  line-height: 28px;
  outline: none;
  text-indent: 13px;
  color: #4e3e3e;
  margin-right: 7px;
  font-size: 14px;
}
.webSearch{
  display: none;
}
@media screen and (max-width: 960px){
  .el-col-5,.commoditySearch,.classification,.category,.selectCommodity ul li:nth-child(2),.paging{
    display: none;
  }
  .el-col-19{
    width: 100%;
  }
  .productBox{
    margin: 11px 0px;
    width: 50%;
  }
  .commodityList{
    margin: 0px;
  }
  .imgBorder{
    width: 100%;
  }
  .commodityList .imgBorder img{
    width: 100%;
    min-height: 156px;
  }
  .productBox div:nth-child(1){
    padding: 0px 11px;
  }

  .selectCommodity ul{
    display: block;
    padding: 0px 11px;
  }

  .sort a,.webSearch{
    display: block;
  }
  .sort strong{
    display: none;
  }
  .sort{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .sort p{
    margin: 0px;
  }
  .commodityList h3{
    margin: 3px 0px;
  }
  .commodityList .describe{
    margin-bottom: 3px;
  }

}





</style>
<style>
.collapseNav .el-collapse-item__arrow{
  line-height: 30px;
}
.collapseNav .is-active{
  line-height: 15px;
}
.collapseNav .el-collapse-item__header{
  text-indent: 17px;
  background-color: #e2e2e2;
  font-size: 15px;
  font-weight: 100;
  color: #060606;
  height: 30px;
  line-height: 30px;
}
</style>