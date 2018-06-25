<template>
  <div class="headerHtml">
    <div class="pcHeader">
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
                <i>|</i>
                <router-link :to="{ name: 'index'}">
                  退出
                </router-link>
              </p>
            </div>
          </el-col>
        </el-row>

        <div class="searchBox maxWidth">
          <p class="floatLeft">
            <img width="370px;" src="../assets/logo-01.jpg"/>
          </p>
          
          <div class="searchInput">
            <p>
              <input v-model="search" type="" name="" placeholder="列如：脚蹬 真皮沙发"/>
              <img @click="searchEve()" width="17px;" class="cursor" src="../assets/index/search.png"/>
            </p>
            <!-- <p>
              <span>油蜡皮</span>
              <span>Domicil</span>
              <span>真皮沙发</span>
            </p> -->
          </div>

        </div>

        <nav class="maxWidth">
          <ul class="navigationNav">
            <li>
              <a @mouseover="mouseoverEve(val,key)" @mouseout="mouseoutEve(val,key)" href="javascript:;" v-for="(val,key) in navigation" :class="{nvaActive:val.boll}" @click="nvaEve(val,key)">
                {{val.name}}
              </a>
            </li>
          </ul>
          


          <div class="maxWidth navigationBox" v-show="navigationBoll" @mouseleave.prevent="navigationEve()">
            <header>
              <strong>所有品牌</strong>
              <strong v-for="(val,key) in products.categorys">{{val.name}}</strong>
              <strong>风格</strong>
            </header>
            <nav>
              
              <ul>
                <li>
                  <p v-for="(val,key) in products.brands" class="cursor" :class="{brandsClass:val.boll}" @mouseover="mouseoverEveBrands(val,key)" @click="hrefHome(val,key)">
                    <a href="javascript:;">{{val.name}}</a>
                  </p>
                </li>
              </ul>

              <ul>
                <li v-for="(val,key) in products.categorys">
                  <p v-for="(val,key) in val.subs" class="cursor" :class="{brandsClass:val.boll}" @mouseover="mouseoverEveBrands(val,key)" @click="hrefHome(val,key)">
                    <a href="javascript:;">{{val.name}}</a>
                  </p>
                </li>
              </ul>

              <ul style="border: none;">
                <li>
                  <p v-for="(val,key) in products.styles" class="cursor" :class="{brandsClass:val.boll}" @mouseover="mouseoverEveBrands(val,key)" @click="hrefHome(val,key)">
                    <a href="javascript:;">{{val.name}}</a>
                  </p>
                </li>
              </ul>

            </nav>
          </div>



        </nav>
      </header>


      <!-- 登陆 -->
      <div class="popupBack" v-show="singInBoll">
        <div class="singIn">
          <p class="singTitle">
            <img width="300px;" src="../assets/logo-01.jpg"/>
            <i class="el-icon-close cursor" @click="singInBoll = !singInBoll"></i>
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
              <a href="javascript:;" @click="forgetEve()">*忘记密码？</a>
            </li>
            <li>
              <label></label>
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
      <div class="popupBack" v-show="forgetBoll">
        <div class="singIn signUp">
          <p class="singTitle">
            <img width="300px;" src="../assets/logo-01.jpg"/>
            <i class="el-icon-close cursor" @click="forgetBoll = !forgetBoll"></i>
          </p>
          <ul class="singInput">
            <li v-show="false">
            </li>
            <li>
              <p>
              <label>手机号码：</label>
                <input v-model="modifyPhone" type="" name="" placeholder="输入手机号码"/>
              </p>
            </li>
            <li class="passwordBox">
              <p>
              <label>验证码：</label>
                <input class="codeInput" v-model="modifyInput" type="" name="" placeholder="验证码"/>
              </p>
              <el-button class="code" type="primary" size="small" @click="modifyCodeEve()">{{modifyNum}}</el-button>
            </li>
            <li>
              <p>
              <label>新密码：</label>
                <input v-model="modifyPassword" type="password" name="" placeholder="请输入您的新密码"/>
              </p>
            </li>
            <li>
              <p>
              <label>确认密码：</label>
                <input v-model="modifyNewPassword" type="password" name="" placeholder="请再次输入您的密码"/>
              </p>
            </li>
            <li>
              <label></label>
              <el-button type="primary" size="mini" class="loginBottom" @click="forgetUp()">确认</el-button>
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
      <div class="popupBack" v-show="signUpBoll">
        <div class="singIn signUp">
          <p class="singTitle">
            <img width="300px;" src="../assets/logo-01.jpg"/>
            <i class="el-icon-close cursor" @click="signUpBoll = !signUpBoll"></i>
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
                <input class="codeInput" v-model="codeInput" type="" name="" placeholder="验证码"/>
              </p>
              <!-- <a href="javascript:;">*忘记密码？</a> -->
              <el-button class="code" type="primary" size="small" @click="codeEve()">{{num}}</el-button>
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
              {{regisrerTips.value}}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="webHeader">
      <header>
        <p class="logImg webLogImg">
            <img width="70%;" src="../assets/webLogo.png"/>
        </p>
      </header>
      <nav>
        <p class="webFunction">
          <router-link :to="{ name: 'index',query:{id:$route.query.id,userName:$route.query.userName}}">
            <img width="45px;" src="../assets/icon-home.jpg"/>
          </router-link>
          <router-link :to="{ name: 'singIn',query:{sing:0}}" v-if="$route.query.id==undefined">
            登录
          </router-link>

          <router-link v-else :to="{ name: 'personal',query:{id:$route.query.id,userName:$route.query.userName}}">
            个人中心
          </router-link>

          <span>|</span>
          <router-link :to="{ name: 'singIn',query:{sing:1}}" v-if="$route.query.id==undefined">
            注册
          </router-link>
          <router-link v-else :to="{ name: 'index',query:{}}">
            登出
          </router-link>
          <img @click="navigationClassBoll=!navigationClassBoll" width="45px;" src="../assets/icon-more.jpg"/>
        </p>
        <ul>
          <li>
            <a href="javascript:;" v-for="(val,key) in navigationNew" @click="nvaEve(val,key)">{{val.name}}</a>
          </li>
        </ul>
        <div class="navigationClass" v-show="navigationClassBoll">
          <ul>
            <li>
              <!-- <el-input class="searchCommodity" placeholder="搜索商品" size="medium" suffix-icon="el-icon-search" v-model="searchCommodity">
              </el-input> -->
              <p class="webSearch">
                <input v-model="searchCommodity" type="" name="" placeholder="列如：脚蹬 真皮沙发"/>
                <i @click="searchEve()" class="el-icon-search" style="font-size: 20px;"></i>
              </p>
            </li>
            <li v-for="(val,key) in navigation" :class="{nvaActive:val.boll}" >
              <p @click="nvaEve(val,key)">{{val.name}}</p>
            </li>
          </ul>
        </div>
      </nav>
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
      searchCommodity:'',
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
      navigationNew:[
        {'name':'全部商品','boll':false,'href':'home'},
        {'name':'品牌集','boll':false,'href':'brand'},
        {'name':'沙发专区','boll':false,'href':'sofaArea'},
        {'name':'线下门店','boll':false,'href':'underLine'}
      ],
      //注册
      phone:'',
      password:'',
      newPassword:'',
      //登陆
      upPhone:'',
      upPassword:'',
      spaceList:[{name:'品类'},{name:'空间'},{name:'风格'}],
      products:{},
      navigationBoll:false,
      navigationClassBoll:false,
      num:'获取验证码',
      codeBoll:false,
      codeInput:'',
      regisrerTips:'',
      loginTips:'',
      forgetBoll:false,
      modifyPhone:'',
      modifyInput:'',
      modifyPassword:'',
      modifyNewPassword:'',
      modifyNum:'获取验证码'
    }
  },
  props:['index'],
  mounted(){
    this.navigation[this.index].boll = true;
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
        //console.log(JSON.stringify(dataJson.data));
        _this.loginTips = dataJson.data.data;

    })
    .catch(function(err){
      alert(err);
    });

    //全部商品列表

    axios.post('http://backend.viphome.cn/api/category_v3',qs.stringify({}))
    .then(function(dataJson){
        
        for(let i in dataJson.data.categorys){
          for(let key in dataJson.data.categorys[i].subs){
            dataJson.data.categorys[i].subs[key]['boll'] = false;
          }
        }
        
        for(let i in dataJson.data.brands){
          dataJson.data.brands[i]['boll'] = false;
        }

        _this.products = dataJson.data;

    })
    .catch(function(err){
      alert(err);
    });



  },
  methods: {
    nvaEve(val,key){
      let _this = this;
      console.log(JSON.stringify(val.name))
      this.$router.push({ name: val.href,query:{id:_this.$route.query.id,userName:_this.$route.query.userName}});
      if(val.name=='买家秀'){
        location.reload();
      }
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
      };
      if(!this.checked){
        this.$message({
          message: '请阅读勾选注册协议！',
          type: 'warning'
        });
        return false;
      };
      if (this.codeInput==''){
        this.$message({
          message: '验证码不能为空！',
          type: 'warning'
        });
        return false;
      };
      axios.post('http://backend.viphome.cn/api/register',qs.stringify({
        phone:_this.phone,
        password:_this.password,
        code:_this.codeInput
      }))
      .then(function(dataJson){
        //console.log(JSON.stringify(dataJson.data));
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
      let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  
      if (!myreg.test(this.upPhone)){
        this.$message({
          message: '请输入正确的手机号码！',
          type: 'warning'
        });
        return false;
      };
      axios.post('http://backend.viphome.cn/api/login',qs.stringify({phone:_this.upPhone,password:_this.upPassword}))
      .then(function(dataJson){
        console.log(dataJson.data);
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
    },
    mouseoverEve(val,key){
      if(this.index==key){
        this.navigationBoll = false;
        return false;
      }
      if(key==1){
        this.navigationBoll = true;
      }else{
        this.navigationBoll = false;
      };

      for(let i in this.navigation){
        this.navigation[i].boll = false;
      };
      val.boll = true;
    },
    mouseoutEve(val,key){
      
      for(let key in this.navigation){
        this.navigation[key].boll = false;
      }
      if(key!=1){
        this.navigationBoll = false;
        this.navigation[this.index].boll = true;
        console.log(this.index)
      }else{
        this.navigation[key].boll = true;
      }
    },
    //滑近
    mouseoverEveBrands(val,key){
      for(let i in this.products.categorys){
        for(let j in this.products.categorys[i].subs){
          this.products.categorys[i].subs[j].boll = false;
        }
      }
      for(let i in this.products.brands){
        this.products.brands[i].boll = false;
      }
      for(let i in this.products.styles){
        this.products.styles[i].boll = false;
      }
      
      val.boll = true;
    },
    //点击跳转
    hrefHome(){
      let brands=-1,categorys=-1,spaces=-1,styles=-1;
      for(let i in this.products.brands){
        if(this.products.brands[i].boll){
          brands = this.products.brands[i].id;
        }
      }
      for(let i in this.products.styles){
        if(this.products.styles[i].boll){
          styles = this.products.styles[i].id;
        }
      }
      for(let i in this.products.categorys){
        for(let j in this.products.categorys[i].subs){
          if(this.products.categorys[i].subs[j].boll){
            categorys = this.products.categorys[i].subs[j].id;
          }
        }
        // if(this.products.categorys[i].boll){
        //   categorys = this.products.categorys[i].id;
        // }
      }
      console.log(brands,categorys,spaces,styles);
      this.$router.push({ name:'home',query: {
        brands:brands,
        categorys:categorys,
        spaces:spaces,
        styles:styles,
      }});

    },
    navigationEve(){
      console.log('出去')
      this.navigationBoll = false;
      for(let key in this.navigation){
        this.navigation[key].boll = false;
      };
      this.navigation[this.index].boll = true;

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
    modifyCodeEve(){
      let _this = this;
      if(_this.codeBoll){
        return false;
      };
      let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  
      if (!myreg.test(this.modifyPhone)){
        this.$message({
          message: '请输入正确的手机号码！',
          type: 'warning'
        });
        return false;
      };
      axios.post('http://backend.viphome.cn/api/sendsms',qs.stringify({phone:_this.modifyPhone}))
      .then(function(dataJson){
        console.log(JSON.stringify(dataJson.data))
        if(dataJson.data.Message=='OK'){
          _this.modifyNum = 60;
          _this.codeBoll = true;
          let t1 = window.setInterval(function(){
              _this.modifyNum-=1;
              if(_this.modifyNum==0){
                _this.modifyNum = '获取验证码';
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
    searchEve(){
      if(this.search.length>1){
        this.$router.push({ name: 'home',query:{id:this.$route.query.id,userName:this.$route.query.userName,search:this.search}});
        location.reload();
      };
      if(this.searchCommodity.length>1){
        this.$router.push({ name: 'home',query:{id:this.$route.query.id,userName:this.$route.query.userName,search:this.searchCommodity}});
        location.reload();
      }
    },
    forgetEve(){
      this.forgetBoll = true;
      this.singInBoll = false;
      this.signUpBoll = false;
    },
    forgetUp(){
      let _this = this;
      axios.post('http://backend.viphome.cn/api/modifyPassword',qs.stringify({
        phone:_this.modifyPhone,
        code:_this.modifyInput,
        password:_this.modifyPassword
      }))
      .then(function(dataJson){
          console.log(JSON.stringify(dataJson.data));
          if(dataJson.data.result){

            _this.$message({
              message: '密码修改成功！',
              type: 'warning',
              onClose(picker) {
                location.reload();
              }

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
.el-icon-close{
  font-size: 35px;
  position: absolute;
  right: 0px;
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
.navigationNav{
  text-align: center;
  margin-top: 23px;
  height: 35px;
  line-height: 35px;
}
.navigationNav li{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navigationNav a{
  color: #000;
  font-size: 15px;
  height: 35px;
  line-height: 35px;
  width: 130px;
  display: inline-block;
}
.navigationNav .nvaActive{
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
  max-width: 500px;
  padding: 0px 30px;
  z-index: 11;
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
  width: 90px;
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

/*导航栏*/
.navigationBox header{
  color: #fff;
  padding: 9px 0px;
  overflow: hidden;
}
.navigationBox strong{
  width: 170px;
  text-align: center;
  color: #878787;
  float: left;
}
.navigationBox{
  position: absolute;
  width: 100%;
  z-index: 1;
  left: 50%;
  transform: translate(-50%,0%);
  background-color: rgba(0,0,0,0.9);
  overflow: hidden;
  z-index: 111;
  padding-bottom: 7px;
}
.navigationBox a{
  text-decoration: none;
  color: #fff;
}

.navigationBox ul{
  overflow: hidden;
  float: left;
  border-right: 1px solid #414141;
}
.navigationBox li{
  font-size: 15px;
  float: left;
  width: 170px;
}
.navigationBox li p{
  text-align: center;
  height: 33px;
  line-height: 33px;
}
.brandsClass{
  background-color: #414141;
}

.webHeader{
  display: none;
}
.webHeader header{
  padding: 11px;
}

.logImg{
  text-align: center;
  margin: 30px 0px;
}


.webHeader ul{
  background-color: #3b3b3b;
}
.webHeader ul li{
  padding: 11px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.webHeader li a{
  color: #fff;
  font-size: 16px;
}
.webHeader nav{
}
.webHeader nav p{
  padding: 0px 11px;
  margin-bottom: 11px;
}

.navigationClass{
  background-color: #3b3b3b;
}
.webHeader .navigationClass li{
  text-align: center;
  padding: 11px 33px;
}
.navigationClass p{
  font-size: 17px;
  color: #fff;
}
.navigationClass .nvaActive p{
  color: #f54e4e;
}
.webFunction{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.webFunction a:nth-child(2){
  color: #000;
  font-size: 17px;
}
.webFunction a:nth-child(4){
  color: #000;
  font-size: 17px;
}

.webSearch{
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
@media screen and (max-width: 800px){
  .pcHeader{
    display: none;
  }
  .webHeader{
    display: block;
  }
}
</style>
