<template>
  <div class="headerHtml">

    <header>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <p class="homeHeade maxWidth" v-if="$route.query.id==undefined">
              <span>服务热线：400-186-0055</span>
              <i>|</i>
              <a href="javascript:;" @click="signUpEve()">注册</a>
              <i>|</i>
              <a href="javascript:;" @click="singInEve()">登陆</a>
            </p>
            <p class="homeHeade maxWidth" v-else>
              <span>服务热线：400-186-0055</span>
              <i>|</i>
              <span>{{$route.query.userName}}</span>
              <i>|</i>
              <router-link :to="{ name: 'personal',query:{id:$route.query.id,userName:$route.query.userName}}">
                个人中心
              </router-link>
            </p>
          </div>
        </el-col>
      </el-row>

      <div class="searchBox maxWidth">
        <p class="floatLeft">
          <img width="170px;" src="../assets/logo-01.jpg"/>
          <img width="130px;" src="../assets/logo-02.jpg"/>
        </p>
        
        <div class="searchInput">
          <p>
            <input v-model="search" type="" name="" placeholder="列如：脚蹬 真皮沙发"/>
            <img width="17px;" class="cursor" src="../assets/index/search.png"/>
          </p>
          <!-- <p>
            <span>油蜡皮</span>
            <span>Domicil</span>
            <span>真皮沙发</span>
          </p> -->
        </div>

      </div>

      <nav class="navigation maxWidth">
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
          <img width="200px;" src="../assets/logo-01.jpg"/>
        </p>
        <ul class="singInput">
          <li class="">
            <a href="javascript:;" @click="singInJump()">登陆</a>
            <a href="javascript:;" @click="signUpJump()">注册</a>
          </li>
          <li>
            <p>
            <label>账号：</label>
              <input v-model="upPhone" type="" name="" placeholder="输入手机号码"/>
            </p>
          </li>
          <li class="passwordBox">
            <p>
            <label>密码：</label>
              <input v-model="upPassword" type="password" name="" placeholder="输入密码"/>
            </p>
            <a href="javascript:;">*忘记密码？</a>
          </li>
          <li>
            <label></label>
            <el-button type="primary" size="mini" class="loginBottom" @click="signIn()">登陆</el-button>
          </li>
        </ul>
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
  
    <!-- 注册 -->
    <div class="popupBack" v-show="signUpBoll">
      <div class="singIn signUp">
        <p class="singTitle">
          <img width="200px;" src="../assets/logo-01.jpg"/>
        </p>
        <ul class="singInput">
          <li class="">
            <a href="javascript:;" @click="singInJump()">登陆</a>
            <a href="javascript:;" @click="signUpJump()">注册</a>
          </li>
          <li>
            <p>
            <label>手机号码：</label>
              <input v-model="phone" type="" name="" placeholder="输入手机号码"/>
            </p>
          </li>
          <li class="passwordBox">
            <p>
            <label>验证码：</label>
              <input class="codeInput" type="" name="" placeholder="验证码"/>
            </p>
            <!-- <a href="javascript:;">*忘记密码？</a> -->
            <el-button class="code" type="primary" size="small">获取验证码</el-button>
          </li>
          <li>
            <p>
            <label>密码：</label>
              <input v-model="password" type="password" name="" placeholder="请输入您的密码"/>
            </p>
          </li>
          <li>
            <p>
            <label>确认密码：</label>
              <input v-model="newPassword" type="password" name="" placeholder="请再次输入您的密码"/>
            </p>
          </li>
          <li class="mansion">
            <el-checkbox v-model="checked"><span>我已阅读并同意 《欢邸用户注册协议》</span></el-checkbox>
          </li>
          <li>
            <label></label>
            <el-button type="primary" size="mini" class="loginBottom" @click="signUp()">提交</el-button>
          </li>
        </ul>
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
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'headerHtml',
  data () {
    return {
      search:'',
      signUpBoll:false,
      singInBoll:false,
      checked:false,
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
      ],
      //注册
      phone:'',
      password:'',
      newPassword:'',
      //登陆
      upPhone:'',
      upPassword:'',
    }
  },
  props:['index'],
  mounted(){
    this.navigation[this.index].boll = true;
  },
  methods: {
    nvaEve(val,key){
      let _this = this;
      console.log(JSON.stringify(val))
      this.$router.push({ name: val.href,query:{id:_this.$route.query.id,userName:_this.$route.query.userName}});
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
    },
    signUp(){
      let _this = this;
      // var phone = document.getElementById('phone').value;
      // if(!(/^1[34578]\d{9}$/.test(phone))){ 
      //     alert("手机号码有误，请重填");  
      //     return false; 
      // } 
      let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  
      if (!myreg.test(this.phone)){
        this.$message({
          message: '请输入正确的手机号码！',
          type: 'warning'
        });
        return false;
      };
      if(_this.password<6){
        this.$message({
          message: '注册密码不可小于6位数！',
          type: 'warning'
        });
      }
      if(_this.password!=_this.newPassword){
        this.$message({
          message: '俩次密码输入的不一致！',
          type: 'warning'
        });
        return false;
      }
      axios.post('http://viphome.argu.net/api/register',qs.stringify({phone:_this.phone,password:_this.password}))
      .then(function(dataJson){
        console.log(JSON.stringify(dataJson.data));
        if(dataJson.data.result){
          _this.signUpBoll = false;
          _this.singInBoll = true;
        }
      })
      .catch(function(err){
        alert(err);
      });

    },
    signIn(){
      let _this = this;
      axios.post('http://viphome.argu.net/api/login',qs.stringify({phone:_this.upPhone,password:_this.upPassword}))
      .then(function(dataJson){
        if(dataJson.data.result){
          console.log(JSON.stringify(dataJson.data.data.name));
          _this.$router.push({ name: _this.navigation[_this.index].href,query: {
            id:dataJson.data.data.id,
            userName:dataJson.data.data.name
          }});
          _this.singInBoll = false;

        }else{
          _this.$message({
            message: '账号或密码输入错误！',
            type: 'warning'
          });
        }
      })
      .catch(function(err){
        alert(err);
      });
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
}

.homeHeade{
  text-align: right;
  color: #7A7A7A;
  font-size: 12px;
  padding: 7px 0px;
}
.homeHeade span{
}
.homeHeade i{
  margin: 0px 5px;
}
.homeHeade a{
  color: #7A7A7A;
}

/*搜索*/
.searchBox{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.searchBox .floatLeft img:last-child{
  margin-left: 23px;
}

.searchInput p{
  display: flex;
  justify-content: center;
  align-items: center;
}
.searchInput span{
  margin-left: 7px;
}
.searchInput input{
  border-radius: 32px;
  border: 1px solid;
  height: 22px;
  line-height: 22px;
  width: 200px;
  outline:none;
  text-indent: 13px;
  color: #4e3e3e;
  margin-right: 7px;
  font-size: 13px;
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



/*导航栏*/
.navigation ul{
  text-align: center;
  margin-top: 23px;
  height: 35px;
  line-height: 35px;
}
.navigation ul li{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navigation a{
  color: #000;
  font-size: 15px;
  height: 35px;
  line-height: 35px;
  width: 130px;
  display: inline-block;
}
.navigation .nvaActive{
  color: #fff;
  background-color: #000;
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
  padding: 45px 0px;
  border-bottom: 1px solid #d6d6d6;
  font-size: 18px;
}


/*输入框*/
.singInput{
  width: 300px;
  margin: auto;
  margin-top: 20px;
}
.singInput li:first-child{
  text-align: center;
}
.singInput li:first-child a{
  color: #ADADAD;
  font-size: 14px;
  padding: 0px 33px;
}
.singInput li:first-child a:first-child{
  color: #070707;
}
.singInput p{
  display: inline-block;
  margin: 13px 0px;
}
.singInput label{
  font-size: 15px;
  color: #000;
  display: inline-block;
  width: 50px;
}
.singInput input{
  font-size: 15px;
  outline:none;
  color: #666;
  border: 1px solid #000;
  text-indent: 9px;
  height: 30px;
  line-height: 30px;
  width: 190px;
}
.singInput a{
  text-decoration: none;
  font-size: 13px;
  color: #DF504D;
}

.passwordBox{
  position: relative;
}
.passwordBox a{
  position: absolute;
  top: 50%;
  right: -23px;
  transform : translate(0%,-50%);
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
  margin-top: 45px;
}


/*注册*/
/*first-child*/
.signUp .singInput li:first-child a:last-child{
  color: #070707;
}
.signUp .singInput li:first-child a:first-child{
  color: #ADADAD;
}
.signUp .singInput{
  width: 350px;
}
.signUp .singInput label{
  width: 80px;
}

.code{
  position: absolute;
  top: 50%;
  right: 66px;
  transform: translate(0%,-50%);
}


.signUp .singInput input{
  width: 197px;
}
.signUp .singInput .codeInput{
  width: 100px;
}


.mansion{
  text-align: center;
  margin: 15px 0px;
}
.signUp .mansion label{
  width: 100%;
}
.signUp .mansion span{
  font-size: 12px;
}

.signUp .loginBottom{
  width: 200px;
}
/*验证码*/




/*登陆按钮*/
.loginBottom{
  width: 194px;
  font-size: 16px;
  margin: 5px 0px;
}


</style>
