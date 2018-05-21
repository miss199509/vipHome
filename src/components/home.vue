<template>
  <div class="home">

    <div style="position: relative;">
      
      <headerHtml :index="1"></headerHtml>

      <div class="maxWidth navigation">
        <header>
          <strong>所有品牌</strong>
          <strong v-for="(val,key) in spaceList">{{val.name}}</strong>
        </header>
        <nav>
          <ul>
            <li>
              <p v-for="(val,key) in brandList">
                <a href="javascript:;">{{val.name}}</a>
              </p>
              <p>
                <a href="javascript:;">HTL</a>
              </p>
            </li>
          </ul>
          <ul>
            <li v-for="(val,key) in newCategoryList">
              <p v-for="(i,j) in val.list" @click="newCategoryEve(i,j)">
                <a href="javascript:;">{{i.name}}</a>
              </p>
            </li>
          </ul>
        </nav>
      </div>

    </div>



    
    <div class="maxWidth ificationBox">
      <el-row>
        
        <el-col :span="5">
          <div class="grid-content bg-purple" id="classification">

            <p class="borderImg">
              <a href="javascript:;">
                <img src="../assets/banner-01.jpg"/>
              </a>
            </p>
            <p class="borderImg">
              <a href="javascript:;">
                <img src="../assets/banner-02.jpg"/>
              </a>
            </p>

            <nav class="classificationList">
              <ul>
                <li>
                  <h3>
                    查看所有宝贝
                  </h3>
                  <p class="selectThis">
                    <a href="javascript:;">按销量</a>
                    <a href="javascript:;">按新品</a>
                    <a href="javascript:;">按价格</a>
                  </p>
                </li>
                <li>
                  <h3>
                    新品上架
                  </h3>
                  <p class="commodityData">
                    3月21日
                  </p>
                  <p class="commodityData">
                    3月21日
                  </p>
                  <p class="commodityData">
                    3月21日
                  </p>
                </li>
              </ul>
              <!-- <el-collapse v-model="activeName" accordion>
                <el-collapse-item title="品牌分类" name="1">
                  <ul class="bannerBox">
                    <li v-for="(val,key) in brandList">
                      <a href="javascript:;">{{val.name}}</a>
                    </li>
                  </ul>
                </el-collapse-item>
                

                <el-collapse-item title="效率 Efficiency" name="3">
                  <div>简化流程：设计简洁直观的操作流程；</div>
                  <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                  <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                </el-collapse-item>
                <el-collapse-item title="可控 Controllability" name="4">
                  <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                  <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                </el-collapse-item>
              </el-collapse> -->

            </nav>

          </div>
        </el-col>

        <el-col :span="19">
          <div class="grid-content bg-purple-light">
            <p class="category">
              <a href="javascript:;">
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
                    <a href="javascript:;" v-for="(val,key) in brandList" :class="{brandCss:val.boll}" @click="brandEve(val,key)">
                      {{val.name}}
                    </a>
                  </p>
                </li>
                <li>
                  <span>品类：</span>
                  <p>
                    <a href="javascript:;" v-for="(val,key) in categorysList" :class="{brandCss:val.boll}" @click="categorysEve(val,key)">
                      {{val.name}}
                    </a>
                  </p>
                </li>
                <li>
                  <span>空间：</span>
                  <p>
                    <a href="javascript:;" v-for="(val,key) in spaceList" :class="{brandCss:val.boll}" @click="spaceEve(val,key)">
                      {{val.name}}
                    </a>
                  </p>
                </li>
                <li>
                  <span>风格：</span>
                  <p>
                    <a href="javascript:;" v-for="(val,key) in stylesList" :class="{brandCss:val.boll}" @click="stylesEve(val,key)">
                      {{val.name}}
                    </a>
                    
                  </p>
                </li>
              </ul>
            </nav>

            <div class="commoditySearch">
              <i>共搜索到1347符合条件的商品</i>
              <div class="keyWord">
                <span>关键词：</span>
                <el-input placeholder="请输入内容" v-model="selectSearch" clearable size="mini"></el-input>
              </div>
              <div class="selectPrice">
                <span>价格区间：</span>
                <el-input placeholder="请输入内容" v-model="search" clearable size="mini"></el-input>
                <span>至</span>
                <el-input placeholder="请输入内容" v-model="search" clearable size="mini"></el-input>
                <el-button type="primary" icon="el-icon-search" size="mini">搜索</el-button>
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

                </li>

                <li>
                  <span>{{pageNum/100}}/{{lastPage/100}}</span>
                  <a href="javascript:;" @click="firstEve()">上一页</a>
                  <a href="javascript:;" @click="lastEve()">下一页</a>
                </li>
              
              </ul>
            </div>

            <!-- 商品列表 -->
            <div class="commodityList">
              
              <div class="grid-content productBox" v-for="(val,key) in spacebrandList">
                <a :href="val.taobao">
                  <p class="imgBorder">
                    <img height="270px;" :src="val.image" alt="图片加载失败"/>
                    <img v-show="key==0" class="logo" src="../assets/icon-1.jpg"/>
                  </p>

                  <h3>
                    <strong>￥{{val.price}}</strong>
                    <i>
                      ￥{{val.discount_price}}
                    </i>
                  </h3>
                  <p class="describe">
                    {{val.title}}
                  </p>
                </a>
                <p class="sale">
                  <span>总销售{{val.sales}}</span>
                  <i>|</i>
                  <span>评论{{val.comment}}</span>
                </p>

              </div>


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
      brandList:[],
      spaceList:[],
      categoryList:[],
      newCategoryList:[],
      spacebrandList:[],
      activeName:'1',
      stylesList:[],
      categorysList:[],
      //参数
      brandNm:'',
      categoryNm:'',
      styleNm:'',
      spaceNm:'',
      selectSearch:'',
      order_by_field:'popularity',
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
      pageNum:100
    }
  },
  components:{
    'headerHtml':headerHtml,
    'bottomHtml':bottomHtml
  },
  mounted(){
    let _this = this;
    //商品品牌
    axios.post('http://viphome.argu.net/api/brand',qs.stringify({}))
    .then(function(dataJson){
      if(dataJson.data.result){
        //console.log(JSON.stringify(dataJson.data.info));
        _this.brandList = dataJson.data.info;
        _this.brandName = _this.brandList[0].name;
        for(let key in _this.brandList){

          _this.$set(_this.brandList[key],'boll',false)

        }
        _this.brandList[0].boll = true;
      }
    })
    .catch(function(err){
      alert(err);
    });
    //商品类型
    
    axios.post('http://viphome.argu.net/api/space',qs.stringify({}))
    .then(function(dataJson){
      if(dataJson.data.result){
        //console.log(JSON.stringify(dataJson.data.info.data));
        _this.spaceList = dataJson.data.info.data;

        for(let key in _this.spaceList){
          _this.$set(_this.spaceList[key],'boll',false);
        }
        _this.spaceList[0].boll = true;

        
        //商品品类
        axios.post('http://viphome.argu.net/api/category',qs.stringify({}))
        .then(function(dataJson){
          if(dataJson.data.result){
            //console.log(JSON.stringify(dataJson.data.info.data));
            _this.categoryList = dataJson.data.info.data;
            for(let i in _this.spaceList){
              _this.newCategoryList.push({list:[]});
              for(let j in _this.categoryList){
                if(_this.spaceList[i].id==_this.categoryList[j].parent_id){
                  _this.newCategoryList[i].list.push(_this.categoryList[j]);
                };
              }
              if(_this.newCategoryList[i].list.length<1){
                _this.newCategoryList[i].list.push({name:'暂无'})
              }
              //console.log(JSON.stringify(_this.newCategoryList))
            }

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




    //商品列表http://localhost:8089/api/products
    axios.post('http://viphome.argu.net/api/products',qs.stringify({}))
    .then(function(dataJson){
        //console.log(JSON.stringify(dataJson.data.categorys.data));

        _this.styleNm = dataJson.data.styles.data[0].id;
        _this.brandNm = dataJson.data.brands.data[0].id;
        _this.categoryNm = dataJson.data.categorys.data[0].id;
        _this.spaceNm = dataJson.data.spaces.data[0].id;



        _this.stylesList = dataJson.data.styles.data;
        
        for(let key in _this.stylesList){
          _this.$set(_this.stylesList[key],'boll',false);
        }
        _this.stylesList[0].boll = true;

        _this.categorysList = dataJson.data.categorys.data;
        for(let key in _this.categorysList){
          _this.$set(_this.categorysList[key],'boll',false);
        }
        _this.categorysList[0].boll = true;
        //商品接口
        //_this.spacebrandEve('http://viphome.argu.net/api/popularitys');
        console.log(_this.brandNm,_this.categoryNm,_this.styleNm,_this.spaceNm)
        _this.newSpacebrandEve()
    })
    .catch(function(err){
      alert(err);
    });


  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.newSpacebrandEve(val)
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
        for(let i in this.brandList){
          this.brandList[i].boll = false;
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
        for(let i in this.categorysList){
          this.categorysList[i].boll = false;
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
        for(let i in this.spaceList){
          this.spaceList[i].boll = false;
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
        for(let i in this.stylesList){
          this.stylesList[i].boll = false;
        }
        val.boll = true;
        this.styleNm = val.id;
      }
      this.newSpacebrandEve()
    },
    spacebrandEve(url){
      let _this = this;
      //按人气排序
      //console.log(_this.brandNm,_this.categoryNm,_this.styleNm,_this.spaceNm)
      axios.post(url,qs.stringify({
        brand_id:_this.brandNm,
        category_id:_this.categoryNm,
        style_id:_this.styleNm,
        space_id:_this.spaceNm
      }))
      .then(function(dataJson){
        //console.log(JSON.stringify(dataJson.data))
        if(dataJson.data.result){
          _this.spacebrandList = dataJson.data.info.data;
          //_this.lastPage = dataJson.data.info.last_page*100;
        }
      })
      .catch(function(err){
        alert(err);
      });
    },
    sortEve(val,key){
      for(let i in this.sortList){
        this.sortList[i].boll = false;
      }
      let _this = this;
      val.boll = true;
      if(val.name=='价格'){
        this.order_by_field = 'price';
      }
      if(val.nam=='人气'){
        this.order_by_field = 'popularity';
      }
      if(val.nam=='销量'){ 
        this.order_by_field = 'sales';
      }
      if(val.nam=='新品'){ 
        this.order_by_field = 'create_time';
      }


    },
    newSpacebrandEve(pag=1){

      let _this = this;
      console.log(_this.order_by_field)
      axios.post('http://viphome.argu.net/api/products_v2',qs.stringify({
        selectSearch:'',
        brand_id:_this.brandNm,
        category_id:_this.categoryNm,
        space_id:_this.spaceNm,
        style_id:_this.styleNm,
        order_by_field:_this.order_by_field,
        page:pag
      }))
      .then(function(dataJson){
        console.log(JSON.stringify(dataJson.data.data.last_page))
        _this.lastPage = dataJson.data.data.last_page*100;
        _this.spacebrandList = dataJson.data.data.data;
      })
      .catch(function(err){
        alert(err);
      });
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
    }

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.ificationBox{
  margin-top: 11px;
  max-width: 1100px;
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
  display: -webkit-box;
  justify-content: flex-start;
  align-items: center;
  margin: 15px 0px;
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
  margin-left: -45px;
}
.productBox{
  width: 260px;
  float: left;
  margin-left: 45px;
  height: 400px;
}
.commodityList .imgBorder{
  border: 1px solid #ccc;
  position: relative;
}
.commodityList .imgBorder img{
  width: 100%;
  display: block;
}
.commodityList .imgBorder .logo{
  width: 45px;
  position: absolute;
  top: 0px;
  right: 13px;
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
}
.commodityList .sale{
  font-size: 12px;
}
.commodityList .sale i{
  margin: 0px 5px;
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
  padding: 5px 0px;
  color: #060606;
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



@media screen and (max-width: 960px){
  #classification{
    display: none;  
  }
  .home header{
    display: none;
  }
  .classification{
    display: none;
  }
  .category{
    display: none;
  }
  .keyWord{
    display: none;
  }
  .commoditySearch{
    display: none;
  }
  .selectCommodity{
    display: none;
  }
  .paging{
    display: none;
  }

  .commodityList .el-col{
    width: 50%;
    float: left;
  }
  .el-col{
    float: none;
    margin: auto;
    width: 100%;
    padding: 0px 3px;
  }
  .commodityList .el-row{
    display: block;
  }
}




/*导航栏*/
.navigation header{
  color: #fff;
  padding: 9px 0px;
  overflow: hidden;
}
.navigation strong{
  width: 160px;
  text-align: center;
  color: #878787;
  float: left;
}
.navigation{
  position: absolute;
  width: 100%;
  z-index: 1;
  left: 50%;
  transform: translate(-50%,0%);
  background-color: rgba(0,0,0,0.9);
  overflow: hidden;
}
.navigation a{
  text-decoration: none;
  color: #fff;
}

.navigation ul{
  overflow: hidden;
  float: left;
  border-right: 1px solid #fff;
}
.navigation li{
  font-size: 15px;
  float: left;
  width: 160px;
}
.navigation li p{
  width: 160px;
  text-align: center;
  height: 33px;
  line-height: 33px;
}
</style>
