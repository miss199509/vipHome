<template>
  <div class="home">

  
    <headerHtml :index="1"></headerHtml>
    
    <div class="maxWidth">
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
                <li>
                  <h3>
                    品牌分类
                  </h3>
                  <p class="commodityData">
                    Domicil
                  </p>
                  <p class="commodityData">
                    HTL
                  </p>
                </li>
                <li>
                  <h3>
                    沙发专区
                  </h3>
                </li>
                <li>
                  <h3>
                    床
                  </h3>
                </li>
              </ul>
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
              <span>Domicil</span>
            </p>

            <nav class="classification">
              <ul>
                <li>
                  <span>品牌：</span>
                  <p>
                    <a href="javascript:;">
                      Domicil
                    </a>
                    <a href="javascript:;">
                      HTL
                    </a>
                  </p>
                </li>
                <li>
                  <span>品类：</span>
                  <p>
                    <a href="javascript:;">
                      Domicil
                    </a>
                    <a href="javascript:;">
                      HTL
                    </a>
                  </p>
                </li>
                <li>
                  <span>空间：</span>
                  <p>
                    <a href="javascript:;">
                      Domicil
                    </a>
                    <a href="javascript:;">
                      HTL
                    </a>
                  </p>
                </li>
                <li>
                  <span>风格：</span>
                  <p>
                    <a href="javascript:;">
                      Domicil
                    </a>
                    <a href="javascript:;">
                      HTL
                    </a>
                  </p>
                </li>
              </ul>
            </nav>

            <div class="commoditySearch">
              <i>共搜索到1347符合条件的商品</i>
              <div class="keyWord">
                <span>关键词：</span>
                <el-input placeholder="请输入内容" v-model="search" clearable size="mini"></el-input>
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
                  <p>
                    <span>人气</span>
                    <img src="../assets/icon-3.jpg"/>
                  </p>
                </li>

                <li>
                  <span>1/4</span>
                  <a href="javascript:;">上一页</a>
                  <a href="javascript:;">下一页</a>
                </li>
              
              </ul>
            </div>

            <!-- 商品列表 -->
            <div class="commodityList">
              
              <el-row>
                <el-col :span="7">
                  <div class="grid-content">
                    
                    <p class="imgBorder">
                      <img src="../assets/pic-01.jpg"/>
                      <img class="logo" src="../assets/icon-1.jpg"/>
                    </p>
                    <h3>
                      <strong>￥136000</strong>
                      <i>
                        ￥146000
                      </i>
                    </h3>
                    <p class="describe">
                      欧莉斯田园风纯棉四件套1.5m全棉花卉单双人1.8米家纺宿舍套件
                    </p>
                    <p class="sale">
                      <span>总销售7</span>
                      <i>|</i>
                      <span>评论27</span>
                    </p>
                  </div>
                </el-col>
                <el-col :span="7">
                  <div class="grid-content">
                    
                    <p class="imgBorder">
                      <img src="../assets/pic-01.jpg"/>
                      <img class="logo" src="../assets/icon-1.jpg"/>
                    </p>
                    <h3>
                      <strong>￥136000</strong>
                      <i>
                        ￥146000
                      </i>
                    </h3>
                    <p class="describe">
                      欧莉斯田园风纯棉四件套1.5m全棉花卉单双人1.8米家纺宿舍套件
                    </p>
                    <p class="sale">
                      <span>总销售7</span>
                      <i>|</i>
                      <span>评论27</span>
                    </p>
                  </div>
                </el-col>
                <el-col :span="7">
                  <div class="grid-content">
                    
                    <p class="imgBorder">
                      <img src="../assets/pic-01.jpg"/>
                      <img class="logo" src="../assets/icon-1.jpg"/>
                    </p>
                    <h3>
                      <strong>￥136000</strong>
                      <i>
                        ￥146000
                      </i>
                    </h3>
                    <p class="describe">
                      欧莉斯田园风纯棉四件套1.5m全棉花卉单双人1.8米家纺宿舍套件
                    </p>
                    <p class="sale">
                      <span>总销售7</span>
                      <i>|</i>
                      <span>评论27</span>
                    </p>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="7">
                  <div class="grid-content">
                    
                    <p class="imgBorder">
                      <img src="../assets/pic-01.jpg"/>
                      <img class="logo" src="../assets/icon-1.jpg"/>
                    </p>
                    <h3>
                      <strong>￥136000</strong>
                      <i>
                        ￥146000
                      </i>
                    </h3>
                    <p class="describe">
                      欧莉斯田园风纯棉四件套1.5m全棉花卉单双人1.8米家纺宿舍套件
                    </p>
                    <p class="sale">
                      <span>总销售7</span>
                      <i>|</i>
                      <span>评论27</span>
                    </p>
                  </div>
                </el-col>
                <el-col :span="7">
                  <div class="grid-content">
                    
                    <p class="imgBorder">
                      <img src="../assets/pic-01.jpg"/>
                      <img class="logo" src="../assets/icon-1.jpg"/>
                    </p>
                    <h3>
                      <strong>￥136000</strong>
                      <i>
                        ￥146000
                      </i>
                    </h3>
                    <p class="describe">
                      欧莉斯田园风纯棉四件套1.5m全棉花卉单双人1.8米家纺宿舍套件
                    </p>
                    <p class="sale">
                      <span>总销售7</span>
                      <i>|</i>
                      <span>评论27</span>
                    </p>
                  </div>
                </el-col>
                <el-col :span="7">
                  <div class="grid-content">
                    
                    <p class="imgBorder">
                      <img src="../assets/pic-01.jpg"/>
                      <img class="logo" src="../assets/icon-1.jpg"/>
                    </p>
                    <h3>
                      <strong>￥136000</strong>
                      <i>
                        ￥146000
                      </i>
                    </h3>
                    <p class="describe">
                      欧莉斯田园风纯棉四件套1.5m全棉花卉单双人1.8米家纺宿舍套件
                    </p>
                    <p class="sale">
                      <span>总销售7</span>
                      <i>|</i>
                      <span>评论27</span>
                    </p>
                  </div>
                </el-col>
              </el-row>


            </div>

          </div>
          
          <div class="paging">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1000"></el-pagination>
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


export default {
  name: 'home',
  data () {
    return {
      search:'',
      currentPage3: 5,

    }
  },
  components:{
    'headerHtml':headerHtml,
    'bottomHtml':bottomHtml
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>




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
.classification a{
  font-size: 15px;
  margin: 5px 7px;
  color: #000;
  border: 1px solid #000;
  display: inline-block;
  padding: 0px 7px;
}
.classification span{
  text-align: center;
  width: 60px;
  margin-left: 17px;
  font-size: 13px;
  color: #060606;
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

/*商品列表*/
.commodityList .el-row{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
}
.commodityList .el-col{
  cursor: pointer;
}
.commodityList{

}
.commodityList .imgBorder{
  border: 1px solid #ccc;
  position: relative;
}
.commodityList .imgBorder img{
  width: 100%;
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

.el-button--primary {
    color: #fff;
    background-color: #D82325;
    border-color: #D82325;
}
</style>
