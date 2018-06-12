<template>
  <div class="personal">

    <headerHtml :index="0"></headerHtml>
    <p>
      <img width="100%" src="../assets/index/banner-02.jpg"/>
    </p>

    <div class="maxWidth">
      <div class="personalHtml">
        <ul class="title">
          <li>
            <span>个人</span>
            <span>中心</span>
          </li>
        </ul>
        
        <div class="" v-show="personalBoll">

          <div class="personalBox">
            <h4><label class="cursor" @click="returnTo()">基本资料</label>>修改资料</h4>
            <ul>
              <li>
                <label class="name">账号：</label>
                {{uesrData.phone}}
                <!-- <a href="javascript:;" @click="modifyPasswordEve()">修改密码</a> -->
              </li>
              <li>
                <label class="name">姓名：</label>
                <input class="nameInput" v-model="userName" type="" name=""/>
              </li>
              <li>
                <label class="name">性别：</label>
                <div class="">
                  <el-radio v-model="gender" label="0">男</el-radio>
                  <el-radio v-model="gender" label="1">女</el-radio>
                </div>
              </li>
              <li>
                <label class="name">地址：</label>
                <div class="">
                  <!-- <input class="province nameInput" v-model="province" type="" name=""/> -->

                  <el-select v-model="provinceInput" placeholder="请选择" size="mini" @change="provinceEve" class="province nameInput">
                    <el-option v-for="item in cityList" :key="item.id" :label="item.name" :value="item.name">
                    </el-option>
                  </el-select>
                  
                  <span>省/市</span>
                  <!-- <input class="town nameInput" v-model="town" type="" name=""/> -->
                  <el-select v-model="town" placeholder="请选择" size="mini" v-if="cityList[townNum]!=undefined" class="town nameInput">
                    <el-option v-for="item in cityList[townNum].province" :key="item.id" :label="item.name" :value="item.name">
                    </el-option>
                  </el-select>

                  <span>区/镇</span>
                </div>
              </li>
              <li class="street">
                <label></label>
                <textarea v-model="address" placeholder="街道..."></textarea>
              </li>
            </ul>
          </div>

          <div class="intentionBox personalBox">
            <h4>购置意向</h4>
            <ul>
              <li>
                <label class="name">是否有家居购置计划：</label>
                <div class="">
                  <el-radio v-model="purchase_plan" label="1">有</el-radio>
                  <el-radio v-model="purchase_plan" label="0">否</el-radio>
                </div>
              </li>
              <li class="prepurchase">
                <label class="name">预计购置时间：</label>
                <div class="">
                  <el-radio v-model="purchase_time" label="0">15天内</el-radio>
                  <el-radio v-model="purchase_time" label="1">1个月内</el-radio>
                  <el-radio v-model="purchase_time" label="2">2个月内</el-radio>
                  <el-radio v-model="purchase_time" label="3">3个月内</el-radio>
                  <el-radio v-model="purchase_time" label="4">3个月以上</el-radio>
                </div>
              </li>
              <li>
                <label class="name">预购品类：</label>
                <div class="">
                  <el-checkbox-group v-model="checkboxGroup5" size="small">
                    <el-checkbox class="typeSelectClass" v-for="(val,key) in typeSelectList" :label="val.name" border></el-checkbox>
                  </el-checkbox-group>
                </div>
              </li>
            </ul>
          </div>
        
          <p class="submission">
            <el-button type="primary" size="mini" @click="personalEve()">提交</el-button>
          </p>
        </div>


        <div class="" v-show="modifyPersonalBoll">

          <div class="personalBox">
            <h4>基本资料</h4>
            <ul>
              <li>
                <label class="name">账号：</label>
                {{uesrData.phone}}
                <a href="javascript:;" @click="modifyPasswordEve()">修改密码</a>
              </li>
              <li>
                <label class="name">姓名：</label>
                <span>{{uesrData.name}}</span>
              </li>
              <li>
                <label class="name">性别：</label>
                <span>{{uesrData.gender?'女':'男'}}</span>
              </li>
              <li>
                <label class="name">地址：</label>
                <span>{{uesrData.city}}</span>
              </li>
            </ul>
          </div>

          <div class="intentionBox personalBox">
            <h4>购置意向</h4>
            <ul>
              <li>
                <label class="name">是否有家居购置计划：</label>
                <span>{{uesrData.purchase_plan?'有':'没有'}}</span>
              </li>
              <li>
                <label class="name">预计购置时间：</label>
                <span>{{uesrData.purchase_time}}</span>
              </li>
              <li>
                <label class="name">预购品类：</label>
                <span>{{uesrData.purchase_category}}</span>
              </li>
            </ul>
          </div>
        
          <div class="submissionBox">
            <p class="submission">
              <el-button type="primary" size="mini" @click="modifyPersonalEve()">修改资料</el-button>
            </p>
            <a href="https://shop187548024.taobao.com/?spm=a230r.7195193.1997079397.2.UebIfp">
              <p class="newSubmission cursor">
                <span>去淘宝看看</span>
              </p>
            </a>
            <router-link :to="{ name: 'underLine',query:{id:$route.query.id,userName:$route.query.userName}}">
              <p class="newSubmission cursor">
                <span>
                    预约到店
                </span>
              </p>
            </router-link>
          </div>
        </div>


        <div class="modifyPassword" v-show="modifyPasswordBoll">
          <div class="personalBox">
            <h4><label class="cursor" @click="returnTo()">基本资料</label>>修改密码</h4>
            <ul>
              <li>
                <label class="name">原密码：</label>
                <input v-model="originalPassword" class="nameInput" type="password" name=""/>
              </li>
              <li>
                <label class="name">新密码：</label>
                <input v-model="password" class="nameInput" type="password" name=""/>
              </li>
              <li>
                <label class="name">确认新密码：</label>
                <input v-model="newPassword" class="nameInput" type="password" name=""/>
              </li>
            </ul>
            <p class="submission">
              <el-button type="primary" size="mini" @click="submissionModifyEve()">提交</el-button>
            </p>
          </div>
        </div>


        <!-- 预约到店 -->
        <div class="popupBack" v-show="false">
          <div class="popupBox">
            <header>
              <img src="../assets/logo-01.jpg"/>
            </header>
            <div class="make">
              <div class="">
                <p class="titleName">您想要预约的门店是：</p>
                <el-select v-model="value" placeholder="请选择" size="small" class="makeSelect">
                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div class="">
                <p class="titleName">请填写一下信息，以便我们为您提供更好的服务：</p>
                <ul class="basicData">
                  <li class="">
                    <label>您贵姓：</label>
                    <input class="fullName" type="text"/>
                    <el-radio v-model="radio" label="1">先生</el-radio>
                    <el-radio v-model="radio" label="2">女生</el-radio>
                  </li>
                  <li class="">
                    <label>手机号：</label>
                    <input class="phone" type="text"/>
                  </li>
                  <li class="">
                    <label>您预计：</label>
                    <input class="month" type="text"/>
                    <span class="">月</span>
                    <input class="day" type="text"/>
                    <span>日</span>
                    <el-select v-model="value" placeholder="请选择" size="small" class="dataSelect">
                      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                    <span>到店</span>
                  </li>
                </ul>
              </div>
              
              <div class="">
                <p class="titleName">您计划购选哪些家具（选填）：</p>
                <div class="">
                  <el-checkbox v-model="checked3" label="备选项1" border size="small"></el-checkbox>
                  <el-checkbox v-model="checked4" label="备选项2" border size="small"></el-checkbox>
                  <el-checkbox v-model="checked3" label="备选项1" border size="small"></el-checkbox>
                  <el-checkbox v-model="checked4" label="备选项2" border size="small"></el-checkbox>
                  <el-checkbox v-model="checked3" label="备选项1" border size="small"></el-checkbox>
                  <el-checkbox v-model="checked4" label="备选项2" border size="small"></el-checkbox>
                </div>
              </div>

              <p class="makeSubmissionBox">
                <el-button class="makeSubmission" type="primary" size="mini">提交</el-button>
              </p>
            </div>

            <div class="makeTips">
              <p>温馨提示：欢邸国际家居携旗下18品牌，48家线下实体店，欢迎您到各门店品鉴家居</p>
              <p>您也可以拨打7X24小时热线：400-800-8956 与我们取得联系！</p>
            </div>
          </div>
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
  name: 'personal',
  data () {
    return {
      gender:'0',
      userName:'',
      provinceInput:'北京',
      address:'',
      town:'北京',
      purchase_plan:'1',
      purchase_time:'0',
      purchaseList:[
        {name:'15天内'},
        {name:'1个月内'},
        {name:'2个月内'},
        {name:'3个月内'},
        {name:'3个月以上'}
      ],
      checkboxGroup5:[],
      radio: '0',
      checked3:true,
      checked4:true,
      personalBoll:false,
      modifyPersonalBoll:true,
      modifyPasswordBoll:false,
      //城市
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      uesrData:{},
      originalPassword:'',
      password:'',
      newPassword:'',
      cityList:[],
      townNum:0,
      typeSelectList:[]
    }
  },
  components:{
    'headerHtml':headerHtml,
    'bottomHtml':bottomHtml
  },
  mounted(){

    let _this = this;
    axios.post('http://backend.viphome.cn/api/city',qs.stringify({
    }))
    .then(function(dataJson){
      _this.cityList = dataJson.data.data;
    })
    .catch(function(err){
      alert(err);
    });
    axios.post('http://backend.viphome.cn/api/typeSelect',qs.stringify({
    }))
    .then(function(dataJson){
      _this.typeSelectList = dataJson.data.data;
    })
    .catch(function(err){
      alert(err);
    });

    


    this.uesrDataEve();
  },
  methods: {
    modifyPersonalEve(){
      this.personalBoll = true;
      this.modifyPersonalBoll = false;
    },
    personalEve(){
      // console.log(this.gender,this.userName,this.purchase_time);
      // return false;
      let _this = this;
      if(this.userName=='' || this.provinceInput=='' || this.address=='' || this.town==''){
        this.$message({
          message: '填写内容不能为空！',
          type: 'warning'
        });
        return false;
      }
      axios.post('http://backend.viphome.cn/api/userupdate',qs.stringify({
        user_id:_this.$route.query.id,
        name:_this.userName,
        gender:_this.gender,
        purchase_plan:_this.purchase_plan,
        city:_this.provinceInput+_this.town+_this.address,
        purchase_time:_this.purchaseList[_this.purchase_time].name,
        purchase_category:JSON.stringify(_this.checkboxGroup5)
      }))
      .then(function(dataJson){
        console.log(JSON.stringify(dataJson.data));
        if(dataJson.data.result){
          _this.personalBoll = false;
          _this.modifyPersonalBoll = true;
          location.reload();
        }
      })
      .catch(function(err){
        alert(err);
      });

      // this.personalBoll = false;
      // this.modifyPersonalBoll = true;
    },
    modifyPasswordEve(){
      this.modifyPasswordBoll = true;
      this.modifyPersonalBoll = false;
    },
    submissionModifyEve(){
      // this.modifyPasswordBoll = false;
      // this.modifyPersonalBoll = true;
      if(this.password!=this.newPassword || this.password.length<6){
        
        this.$message({
          message: '俩次密码输入的不一致，或者密码长度低于六位数！',
          type: 'warning'
        });

        return false;
      }
      let _this = this;
      axios.post('http://backend.viphome.cn/api/modifyPassword',qs.stringify({
        id:_this.$route.query.id,
        originalPassword:_this.originalPassword,
        password:_this.password
      }))
      .then(function(dataJson){
        console.log(JSON.stringify(dataJson.data));
        if(dataJson.data.result){

          _this.$message({
            message: '修改成功',
            type: 'success'
          });
          _this.modifyPasswordBoll = false;
          _this.modifyPersonalBoll = true;
          _this.originalPassword = '';
          _this.newPassword = '';
          _this.password = '';

        }else{
          _this.$message({
            message: '原始密码错误！',
            type: 'warning'
          });

        }
      })
      .catch(function(err){
        alert(err);
      });
    },
    returnTo(){
      this.modifyPasswordBoll = false;
      this.modifyPersonalBoll = true;
      this.personalBoll = false;
      this.originalPassword = '';
      this.newPassword = '';
      this.password = '';
    },
    uesrDataEve(){
      let _this = this;
      axios.post('http://backend.viphome.cn/api/uesrData',qs.stringify({id:_this.$route.query.id}))
      .then(function(dataJson){
        console.log(JSON.stringify(dataJson.data));
        if(dataJson.data.result){
          _this.uesrData = dataJson.data.data;
          _this.$router.push({ name: 'personal',query: {
            id:dataJson.data.data.id,
            userName:dataJson.data.data.name
          }});
        }
      })
      .catch(function(err){
        alert(err);
      });
    },
    provinceEve(item){
      console.log(item)
      for(let i in this.cityList){
        if(this.cityList[i].name==item){
          this.townNum = i;
          this.town = this.cityList[i].province[0].name;
        }
      }
      // this.provinceInput = item.name;
      // this.townNum = item.id;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.personalBox{
  margin: 13px 0px;
}
.title{
  text-align: center;
}
.title li{
  background-color: #D72825;
  display: inline-block;
  margin: 33px 0px;
}
.title span{
  color: #fff;
  display: block;
  padding: 0px 9px;
  font-size: 23px;
}

.personalBox h4{
  color: #7A7A7A;
  border-bottom: 2px solid #D3D3D3;
  font-size: 14px;
  padding-bottom: 9px;
  margin-bottom: 27px;
}


.personalBox ul{
  width: 380px;
  margin: 35px auto;
}
.personalBox ul li{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
  font-size: 12px;
}
.personalBox a{
  margin-left: 27px;
  color: #DE5452;
}
.personalBox .name{
  margin-right: 11px;
  width: 40px;
}

.personalBox span{
  color: #313131;
}
.personalBox .province,.personalBox .town{
  width: 106px;
}


.street textarea{
  width: 270px;
  margin: 0px 51px;
  text-indent: 13px;
  padding: 7px 0px;
}

/*购置意向*/
.intentionBox{

}
.intentionBox .name{
  width: auto;
}
.intentionBox ul{
  width: auto;
  padding-left: 310px;
}


.submission{
  text-align: center;
}
.submission button{
  width: 200px;
  margin: 40px 0px 70px 0px;
}


.submissionBox{
  margin-top: 50px;
  margin-bottom: 33px;
}
.submissionBox .submission{
  margin: 7px 0px;
}
.submission button{
  margin: 7px 0px;
}

.newSubmission{
  width: 200px;
  border: 1px solid #000;
  font-size: 13px;
  text-align: center;
  line-height: 25px;
  height: 25px;
  margin: 0px auto 15px auto;
}
.newSubmission{
  color: #000;
}

/*修改密码*/
.modifyPassword label.name{
  width: 80px;
}




/*预约到店*/
.popupBack{

}
.popupBox{
  position: absolute;
  top: 50%;
  left: 50%;
  transform : translate(-50%,-50%);
  background-color: #fff;
  width: 600px;
}
.popupBox header{
  padding: 40px 0px;
  text-align: center;
  border-bottom: 1px solid #F0F0F0;
}
.make{
  padding: 0px 80px;
  margin-top: 30px;
}

.makeSelect{
  width: 100%;
}
.titleName{
  color: #828282;
  font-size: 14px;
  margin: 7px 0px;
}
.basicData{

}
.basicData li{
  padding-left: 30px;
  margin: 17px 0px;
}
.basicData label{
  color: #2E2E2E;
  font-size: 14px;
}
.basicData input{
  border: 1px solid #6C6C6C;
  height: 30px;
  line-height: 30px;
}
.phone{
  width: 290px;
}
.fullName{
  width: 120px;
}
.basicData input{
  text-indent: 9px;
}

.dataSelect{
  width: 125px;
}
.basicData span{
  margin: 0px 3px;
  font-size: 15px;
}
.month{
  width: 30px;
}
.day{
  width: 30px;
}
.el-checkbox.is-bordered+.el-checkbox.is-bordered{
  margin-left: 0px;
}
.el-checkbox.is-bordered{
  margin: 5px 5px 5px 0px;
}


.makeSubmissionBox{
  text-align: center;
  margin: 50px 0px;
}
.makeSubmission{
  width: 200px;
}


.makeTips{
  margin-top: 20px;
  margin-bottom: 35px;
}
.makeTips p{
  text-align: center;
  font-size: 13px;
  color: #717171;
}



@media screen and (max-width: 800px){
  .intentionBox ul{
    padding-left: 0px;
  }
  .personalHtml{
    padding: 0px 11px;
    overflow: hidden;
  }
  .personalBox .nameInput{
    border: 1px solid #000;
  }
  .personalBox ul .prepurchase{
    display: block;
  }
  .personalBox div label{
    margin: 7px 5px;
  }
}
</style>
