<template>
  <div class="headerHtml">

    <header>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <p class="homeHeade maxWidth">
              <span>服务热线：400-186-0055</span>
              <i>|</i>
              <a href="javascript:;">注册</a>
              <i>|</i>
              <a href="javascript:;">登陆</a>
            </p>
          </div>
        </el-col>
      </el-row>

      <div class="searchBox maxWidth">
        <p class="floatLeft">
          <img width="130px;" src="../assets/raw_1523942422.png"/>
          <span>
            家居生活更快乐
          </span>
        </p>
        
        <div class="searchInput">
          <el-input placeholder="请输入内容" v-model="search" class="input-with-select" size="mini">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
          <p>
            <span>油蜡皮</span>
            <span>Domicil</span>
            <span>真皮沙发</span>
          </p>
        </div>

      </div>

      <nav class="navigation">
        <ul>
          <li>
            <router-link v-for="(val,key) in navigation" :class="{nvaActive:val.boll}" :to="{name:val.href}">
              {{val.name}}
            </router-link>
            <!-- <a href="javascript:;" v-for="(val,key) in navigation" :class="{nvaActive:val.boll}" @click="nvaEve(val,key)">{{val.name}}</a> -->
          </li>
        </ul>
      </nav>
    </header>

  </div>
</template>

<script>
export default {
  name: 'headerHtml',
  data () {
    return {
      search:'',
      navigation:[
        {'name':'首页','boll':false,'href':'index'},
        {'name':'全部商品','boll':false,'href':'home'},
        {'name':'品牌集','boll':false,'href':'brand'},
        {'name':'新品上架','boll':false,'href':'newProduct'},
        {'name':'特惠频道','boll':false,'href':'preferential'},
        {'name':'沙发专区','boll':false,'href':'sofaArea'},
        {'name':'买家秀','boll':false,'href':'buyer'},
        {'name':'动态资讯','boll':false,'href':'information'},
        {'name':'线下门店','boll':false,'href':'underLine'},
        {'name':'关于我们','boll':false,'href':'index'},
      ]
    }
  },
  props:['index'],
  mounted(){
    this.navigation[this.index].boll = true;
  },
  methods: {
    nvaEve(val,key){
      console.log(JSON.stringify(val))
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {

}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background-color: #EBEBEB;
}

.homeHeade{
  text-align: right;
  color: #777;
  font-size: 13px;
  padding: 7px 0px;
  background-color: #EBEBEB;
}
.homeHeade span{
}
.homeHeade i{
  margin: 0px 5px;
}
.homeHeade a{
  color: #777;
}

/*搜索*/
.searchBox{
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
}
.searchInput span{
  margin-left: 7px;
}

.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.searchBox .el-input-group{
  width: 300px;
}

.searchBox span{
  font-size: 13px;
  color: rgba(145, 145, 145, 1);
}

/*导航栏*/
.navigation ul{
  text-align: center;
  margin-top: 23px;
  background: #EBEBEB;
  height: 35px;
  line-height: 35px;
}
.navigation a{
  margin: 0px 13px;
  color: #000;
  font-size: 15px;
  width: 77px;
}
.navigation .nvaActive{
  background: #D82325;
  display: inline-block;
  color: #fff;
}






</style>
