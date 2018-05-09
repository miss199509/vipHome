<template>
  <div class="headerHtml">

    <header>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <p class="homeHeade maxWidth">
              <span>服务热线：400-186-0055</span>
              <i>|</i>
              <a href="javascript:;" @click="signUpEve()">注册</a>
              <i>|</i>
              <a href="javascript:;" @click="singInEve()">登陆</a>
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
            <a href="javascript:;" v-for="(val,key) in navigation" :class="{nvaActive:val.boll}" @click="nvaEve(val,key)">{{val.name}}</a>
          </li>
        </ul>
      </nav>
    </header>


    <!-- 登陆 -->
    <div class="popupBack" v-show="singInBoll">
      <div class="singIn">
        <p class="singTitle">
          <img width="130px;" src="../assets/raw_1523942422.png"/>
        </p>
        <ul class="singInput">
          <li>
            <p>
            <label>账号：</label>
              <input type="" name="" placeholder="输入手机号码"/>
            </p>
          </li>
          <li>
            <p>
            <label>密码：</label>
              <input type="" name="" placeholder="输入密码"/>
            </p>
          </li>
          <li>
            <el-button type="primary" size="mini" class="loginBottom">登陆</el-button>
          </li>
        </ul>
        <div class="singSet_up">
          <a href="javascript:;" class="floatLeft">忘记密码</a>
          <p>没有账号？<a href="javascript:;" @click="signUpJump()">去注册</a></p>
        </div>
        <div class="singTips">
          <p>
            温馨提示：欢邸国际家居携旗下18品牌，48家线下实体店，欢迎您到各门店品鉴家居
          </p>
          <p>
            您也可以拨打7X24小时热线：400-800-8956 与我们取得联系！
          </p>
        </div>
      </div>
    </div>

    <!-- 密码 -->
    <div class="popupBack" v-show="signUpBoll">
      <div class="singIn signUp">
        <p class="singTitle">
          <img width="130px;" src="../assets/raw_1523942422.png"/>
          欢邸国际家居
        </p>
        <h2>新用户注册</h2>
        <ul class="singInput">
          <li>
            <p>
            <label>账号：</label>
              <input type="" name="" placeholder="输入手机号码"/>
            </p>
          </li>
          <li>
            <p>
            <label>验证码：</label>
              <input class="inputCode" type="" name="" placeholder="短信验证码"/>
              <el-button type="primary" class="code" size="small ">获取验证码</el-button>
            </p>
          </li>
          <li>
            <p>
              <label>密码：</label>
              <input type="" name="" placeholder="输入密码"/>
            </p>
          </li>
          <li>
            <p>
            <label>确认密码：</label>
              <input type="" name="" placeholder="确认密码"/>
            </p>
          </li>
          <li class="mansion">
            <el-checkbox v-model="checked">我已阅读并同意 《欢邸用户注册协议》</el-checkbox>
          </li>
          <li>
            <el-button type="primary" size="mini" class="loginBottom">提交注册</el-button>
          </li>
        </ul>
        <div class="singSet_up">
          <p>没有账号？<a href="javascript:;" @click="singInJump()">去登陆</a></p>
        </div>
        <div class="singTips">
          <p>
            温馨提示：欢邸国际家居携旗下18品牌，48家线下实体店，欢迎您到各门店品鉴家居
          </p>
          <p>
            您也可以拨打7X24小时热线：400-800-8956 与我们取得联系！
          </p>
        </div>
      </div>
    </div>






  </div>
</template>

<script>
export default {
  name: 'headerHtml',
  data () {
    return {
      signUpBoll:false,
      singInBoll:false,
      checked:false,
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
        {'name':'关于我们','boll':false,'href':'about'},
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
      this.$router.push({ name: val.href});
    },
    //注册
    signUpEve(){
      this.signUpBoll = true;
    },
    singInEve(){
      this.singInBoll = true;
    },
    //去注册
    signUpJump(){
      this.signUpBoll = true;
      this.singInBoll = false;
    },
    singInJump(){
      this.signUpBoll = false;
      this.singInBoll = true;
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



/*登陆*/
.popupBack{
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 11;
}
.singIn{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: #fff;
  width: 500px;
  padding: 0px 30px;
  z-index: 11;
}
.singTitle{
  text-align: center;
  padding: 13px 0px;
  border-bottom: 1px solid #d6d6d6;
  font-size: 18px;
}
.singIn h2{
  text-align: center;
  font-weight: 100;
  margin: 27px auto 13px auto;
}

/*输入框*/
.singInput{
  text-align: center;
  margin-top: 15px;
}
.singInput li{

}
.singInput p{
  border: 1px solid #d6d6d6;
  display: inline-block;
  padding: 5px 13px;
  margin: 7px 0px;
}
.singInput label{
  font-size: 15px;
  color: #777;
}
.singInput input{
  height: 23px;
  line-height: 23px;
  font-size: 15px;
  border: none;
  outline:none;
  color: #666;
}

/*改变框架按钮颜色*/



.singSet_up{
  width: 270px;
  font-size: 15px;
  margin: 7px auto;
}
.singSet_up p{
  text-align: right;
}
/**/
.singTips{
  font-size: 13px;
  text-align: center;
  color: #6e6e6e;
  padding: 15px 0px;
  margin-top: 10px;
  border-top: 1px solid #ccc;
}


/*注册*/
.signUp p{
  border: none;
}
.signUp input{
  border: 1px solid #d6d6d6;
  padding: 5px 13px;
  border-radius: 3px;
}
.signUp label{
  color: #222;
  font-size: 17px;
  display: inline-block;
  width: 88px;
  text-align: left;
}
/*验证码*/
.code{
  width: 110px;
}
.signUp .inputCode{
  width: 77px;
}
.signUp .singSet_up p{
  text-align: center;
}
.signUp .mansion label{
  width: auto;
}
.signUp .mansion{
  margin: 23px 0px;
}

/*登陆按钮*/
.loginBottom{
  width: 270px;
  font-size: 16px;
  margin: 5px 0px;
}


</style>
