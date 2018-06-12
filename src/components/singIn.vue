<template>
  <div class="singInBox">
    
    <router-link :to="{ name: 'index',query:{}}">
      <i class="el-icon-close cursor"></i>
    </router-link>
    <!-- 登陆 -->
    <div v-show="singInBoll">
      <div class="singIn">
        <p class="singTitle">
          <img width="300px;" src="../assets/logo-01.jpg"/>
        </p>
        <ul class="singInput">
          <li>
            <p>
              <input v-model="upPhone" type="" name="" placeholder="输入手机号码"/>
            </p>
          </li>
          <li class="passwordBox">
            <p>
              <input v-model="upPassword" type="password" name="" placeholder="输入密码"/>
            </p>
            <p class="singInFuntion">
              <a href="javascript:;" @click="signUpJump()">免费注册</a>
              <a href="javascript:;" @click="forgetEve()">*忘记密码？</a>
            </p>
          </li>
          <li class="loginBottomBox">
            <el-button type="primary" size="mini" class="loginBottom" @click="signIn()">登陆</el-button>
          </li>
        </ul>
        <div class="singTips">
          <p>
            {{loginTips.value}}
          </p>
        </div>
      </div>
    </div>


    <!-- 忘记密码 -->
    <div v-show="forgetBoll">
      <div class="singIn signUp">
        <p class="singTitle">
          <img width="300px;" src="../assets/logo-01.jpg"/>
        </p>
        <ul class="singInput">
          <li>
            <p>
              <input v-model="modifyPhone" type="" name="" placeholder="输入手机号码"/>
            </p>
          </li>
          <li class="passwordBox">
            <p>
              <input v-model="modifyInput" class="codeInput" type="" name="" placeholder="验证码"/>
            </p>
            <!-- <a href="javascript:;">*忘记密码？</a> -->
            <el-button class="code" type="primary" size="small" @click="codeEve()">{{num}}</el-button>
          </li>
          <li>
            <p>
              <input v-model="modifyPassword" type="password" name="" placeholder="请输入您的密码"/>
            </p>
          </li>
          <li>
            <p>
              <input v-model="modifyNewPassword" type="password" name="" placeholder="请再次输入您的密码"/>
            </p>
          </li>
          <li class="loginBottomBox">
            <el-button type="primary" size="mini" class="loginBottom" @click="forgetUp()">提交</el-button>
          </li>
        </ul>
        <div class="singTips">
          <p>
            {{regisrerTips.value}}
          </p>
        </div>
      </div>
    </div>

  
    <!-- 注册 -->
    <div v-show="signUpBoll">
      <div class="singIn signUp">
        <p class="singTitle">
          <img width="300px;" src="../assets/logo-01.jpg"/>
        </p>
        <ul class="singInput">
          <li>
            <p>
              <input v-model="phone" type="" name="" placeholder="输入手机号码"/>
            </p>
          </li>
          <li class="passwordBox">
            <p>
              <input class="codeInput" type="" name="" placeholder="验证码"/>
            </p>
            <!-- <a href="javascript:;">*忘记密码？</a> -->
            <el-button class="code" type="primary" size="small" @click="codeEve()">{{num}}</el-button>
          </li>
          <li>
            <p>
              <input v-model="password" type="password" name="" placeholder="请输入您的密码"/>
            </p>
          </li>
          <li>
            <p>
              <input v-model="newPassword" type="password" name="" placeholder="请再次输入您的密码"/>
            </p>
          </li>
          <li class="mansion">
            <el-checkbox v-model="checked"><span>我已阅读并同意 《欢邸用户注册协议》</span></el-checkbox>
          </li>
          <li class="loginBottomBox">
            <el-button type="primary" size="mini" class="loginBottom" @click="signUp()">提交</el-button>
          </li>
        </ul>
        <div class="singTips">
          <p>
            {{regisrerTips.value}}
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
  name: 'singInBox',
  data () {
    return {
      search:'',
      signUpBoll:false,
      singInBoll:true,
      checked:false,
      //注册
      phone:'',
      password:'',
      newPassword:'',
      //登陆
      upPhone:'',
      upPassword:'',
      num:'获取验证码',
      regisrerTips:'',
      loginTips:'',
      forgetBoll:false,
      modifyPhone:'',
      modifyInput:'',
      modifyPassword:'',
      modifyNewPassword:''
    }
  },
  mounted(){
    let _this = this;
    //注册提示
    axios.post('http://backend.viphome.cn/api/system/const',qs.stringify({
      key:'REGISTER_WARM_PROMPT'
    }))
    .then(function(dataJson){
        //console.log(JSON.stringify(dataJson.data));
        _this.regisrerTips = dataJson.data.data;

    })
    .catch(function(err){
      alert(err);
    });
    //登陆提示
    axios.post('http://backend.viphome.cn/api/system/const',qs.stringify({
      key:'LOGIN_WARM_PROMPT'
    }))
    .then(function(dataJson){
        console.log(JSON.stringify(dataJson.data));
        _this.loginTips = dataJson.data.data;

    })
    .catch(function(err){
      alert(err);
    });


    console.log(this.$route.query.sing)
    if(parseInt(this.$route.query.sing)){
      this.signUpBoll = true;
      this.singInBoll = false;
    }else{
      this.signUpBoll = false;
      this.singInBoll = true;
    }

  },
  methods: {
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
      if(!this.checked){
        this.$message({
          message: '请阅读勾选注册协议！',
          type: 'warning'
        });
        return false;
      }
      axios.post('http://backend.viphome.cn/api/register',qs.stringify({
        phone:_this.phone,
        password:_this.password
      }))
      .then(function(dataJson){
        console.log(JSON.stringify(dataJson.data));
        if(dataJson.data.result){
          _this.signUpBoll = false;
          _this.singInBoll = true;
          _this.phone = '';
          _this.password = '';
          _this.newPassword = '';
          _this.$message({
            message: '恭喜您注册成功！',
            type: 'warning'
          }); 
        }
      })
      .catch(function(err){
        alert(err);
      });

    },
    signIn(){
      let _this = this;
      axios.post('http://backend.viphome.cn/api/login',qs.stringify({phone:_this.upPhone,password:_this.upPassword}))
      .then(function(dataJson){
        console.log(dataJson.data.result)
        if(dataJson.data.result){
          console.log(JSON.stringify(dataJson.data.data));
          _this.$router.push({ name: 'index',query: {
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
    },
    codeEve(){
      let _this = this;
      if(_this.codeBoll){
        return false;
      };
      let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  
      if (!myreg.test(this.phone)){
        this.$message({
          message: '请输入正确的手机号码！',
          type: 'warning'
        });
        return false;
      };
      axios.post('http://backend.viphome.cn/api/sendsms',qs.stringify({phone:_this.phone}))
      .then(function(dataJson){
        console.log(JSON.stringify(dataJson.data))
        if(dataJson.data.Message=='OK'){
          _this.num = 60;
          _this.codeBoll = true;
          let t1 = window.setInterval(function(){
              _this.num-=1;
              if(_this.num==0){
                _this.num = '获取验证码';
                window.clearInterval(t1);
                _this.codeBoll = false;
              }
          },1000); 

          _this.$message({
            message: '验证码已发送到您的手机！',
            type: 'warning'
          }); 
        }
      })
      .catch(function(err){
        alert(err);
      });
    },
    forgetEve(){
      this.forgetBoll = true;
      this.singInBoll = false;
      this.signUpBoll = false;
    },
    forgetUp(){

    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.singInBox{
  padding: 11px;
}

.singTitle{
  text-align: center;
  padding: 45px 0px;
  border-bottom: 1px solid #d6d6d6;
  font-size: 18px;
  position: relative;
}


/*输入框*/
.singInput{
  margin: auto;
  margin-top: 20px;
}

.singInput p{
  margin: 13px 0px;
}
.singInFuntion{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.singInput .singInFuntion a{
  font-size: 15px;
  color: #444;
}




.singInput input{
  font-size: 18px;
  outline:none;
  color: #666;
  text-indent: 9px;
  height: 45px;
  line-height: 45px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #000;
}
.singInput a{
  text-decoration: none;
  font-size: 13px;
  color: #DF504D;
}

.passwordBox{
  position: relative;
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
.singTips p{
  margin: 13px 0px;
}
.singTips{
  font-size: 13px;
  text-align: center;
  color: #6e6e6e;
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

.code{
  position: absolute;
  top: 50%;
  right: 66px;
  transform: translate(0%,-50%);
  width: 90px;
}



.signUp .singInput .codeInput{
  width: 170px;
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

.loginBottomBox{
  text-align: center;
  margin: 45px 0px;
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

i.cursor{
  font-size: 33px;
}

</style>
