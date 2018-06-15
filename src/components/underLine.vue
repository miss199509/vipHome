<template>
  <div class="underLine">

  
    <headerHtml :index="8"></headerHtml>
    
      <p>
        <img width="100%;" src="../assets/brand/banner.jpg"/>
      </p>
      
      <div class="underLineBox">
        <h3>
          线下门店
        </h3>
        <ul class="">
          <li class="underList" v-for="(val,key) in mallsList">
            <div class="mapContent">

              <div class="">

                <div class="map">
                  
                  <!-- <iframe src="http://lbsyun.baidu.com/jsdemo/demo/a1_2.htm" width="510" height="290" frameborder="0" scrolling="no"></iframe> -->
                  <div :id="val.idName" class="mapSelect"></div>

                  <div class="">
                    <h2>
                      <img src=""/>
                      {{val.name}}
                    </h2>
                    <p class="address">
                      营业时间：{{val.opening_hours}}
                    </p>
                    <p>
                      <img class="bannerImg" width="345px;" height="165px;" :src="val.image" alt=""/>
                    </p>
                  </div>
                </div>
                
                <div class="storeList">
                  <p class="title">
                    {{val.name}}
                  </p>
                  <ul>
                    <li v-for="(i,j) in val.list">
                      <p class="imgBox">
                        <img width="210px;" height="150px;" :src="i.image"/>
                      </p>
                      <div class="">
                        <!-- <img src=""/> -->
                        <p>{{i.name}}：{{val.address}}，{{i.address}}</p>
                        <p>门店电话：{{i.telephone}}</p>
                        <el-button class="buttonCss" size="mini" @click="phoneSend(val,key,i,j)">发送地址到手机</el-button>
                        <el-button class="buttonCss" size="mini" @click="reservations(val,key,i,j)">预约到门店</el-button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </li>
        </ul>
      </div>
      
      <!-- 弹窗 -->
      <div class="popupBack" v-show="popupBackBoll">
        <div class="popupBox" :style="{height:height_}">
          <header>
            <img width="300px;" src="../assets/logo-01.jpg"/>
            <i class="el-icon-close cursor" @click="removePopupEve()"></i>
          </header>
          <!-- 发送短信 -->
          <div class="selectBox" v-show="selectBoxBoll">
            <p>
              <span>请输入手机号码：</span>
            </p>
            <div class="selectInput">
              <el-input size="small" v-model="inputPhone" placeholder="请输入内容" class="input-with-select"></el-input>
              <el-button class="submission" size="small" type="primary" @click="selectEve(phoneName,phoneText,phoneTelephone)">提交</el-button>
            </div>
            <div class="selectText">
              
              <h3>以下信息将发送到你的手机：</h3>
              <div class="">
                <p>{{phoneName}}</p>
                <p>地址：{{phoneText}}</p>
                <p>店内电话：{{phoneTelephone}}</p>
                <!-- <p>交通线路：上海市浦东新区川沙新镇外环以外川沙路4825号B座二层223号展厅。</p> -->
              </div>

            </div>
          </div>
          <!-- 发送短信结束 -->
          <div class="make" v-show="makeBoll">
            <div class="makeTitle">
              <p class="makeTitleVal">
                您将要预约的门店是：
              </p>
              <h3>{{reservationsName}}</h3>
            </div>
            <div class="makeCenter">
              <p class="makeTitleVal">请填写以下信息，以便我们为您提供更好服务：</p>
              <div class="makeCenterBox">

                <div class="userName">
                  <label class="makeName">您的姓名：</label>
                  <el-input v-model="userName" placeholder="输入您的姓名" size="mini"></el-input>
                </div>
                
                <ul class="overflowHidden">
                  <li class="floatLeft">
                    <label for="one">先生</label>
                    <input type="radio" id="one" value="1" v-model="picked">
                  </li>
                  <li class="floatLeft">
                    <label for="two">女士</label>
                    <input type="radio" id="two" value="0" v-model="picked">
                  </li>
                </ul>
              </div>
              <div class="contactTelephone">
                <label class="makeName">您的电话：</label>
                <el-input v-model="telephone" placeholder="请输入您的手机号码" size="mini"></el-input>
              </div>

              <div class="selectData">
                <label>您预计：</label>
                <!-- <el-input v-model="month" placeholder="" size="mini"></el-input> -->
                
                <el-select v-model="month" clearable placeholder="月" size="mini" style="width: 80px;" @change="monthEve(month)">
                  <el-option v-for="item in 12" :key="item" :label="item" :value="item">
                  </el-option>
                </el-select>

                <span>月</span>
                <!-- <el-input v-model="day" placeholder="" size="mini"></el-input> -->
                <el-select v-model="day" clearable placeholder="日" size="mini" style="width: 80px;">
                  <el-option v-for="item in dayNum" :key="item" :label="item" :value="item">
                  </el-option>
                </el-select>

                <span>日</span>

                <div class="select">
                  <el-select v-model="optionsVal" clearable placeholder="请选择" size="mini">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                      
                    </el-option>
                  </el-select>
                </div>
                <span>到店</span>
              </div>

                <!-- <p>您计划选购哪些家具（选填）：</p> -->

                  <div class="productTitle">
                    <p class="title">您计划选购哪些家具（选填）：</p>
                  </div>
                  <div class="selectBottom">
                    <el-checkbox-group v-model="checkboxGroup5" size="small">
                      <el-checkbox class="typeSelectClass" v-for="(val,key) in typeSelectList" :label="val.name" border></el-checkbox>
                      <!-- <el-checkbox label="备选项2" border></el-checkbox> -->
                    </el-checkbox-group>
                    <p>
                      <el-button type="primary" size="small" @click="makeSub()">提交</el-button>
                    </p>
                  </div>

            </div>
          </div>


          <div class="selectTips">
            <p>{{offline.value}}</p>
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
  name: 'underLine',
  data () {
    return {
      userName:'',
      input:'',
      phone:'',
      telephone:'',
      radio:'1',
      picked:'1',
      month:'',
      day:'',
      options: [
        {
          value: '选项1',
          label: '上午'
        }, 
        {
          value: '选项2',
          label: '下午'
        }
      ],
      dayNum:0,
      optionsVal: '上午',
      checkboxGroup5:[],
      popupBackBoll:false,
      selectBoxBoll:false,
      makeBoll:false,
      mallsList:[],
      storesList:[],
      reservationsName:'',
      reservationsId:'',
      typeSelectList:[],
      //发送到手机
      phoneText:{},
      phoneName:'',
      phoneTelephone:'',
      height_:0,
      inputPhone:'',
      offline:''

    }
  },
  components:{
    'headerHtml':headerHtml,
    'bottomHtml':bottomHtml
  },
  mounted(){
    console.log(document.documentElement.clientWidth)
    if(document.documentElement.clientWidth<800){
      this.height_ = document.documentElement.clientHeight+'px';
    }else{
      this.height_ = 'auto'
    }
    let _this = this;
    axios.post('http://backend.viphome.cn/api/seo',qs.stringify({webpage:'offline'}))
    .then(function(dataJson){
      document.title = dataJson.data.title;
      var meta = document.getElementsByTagName('meta');
      meta['Description'].setAttribute('content',dataJson.data.description);
      meta['Keywords'].setAttribute('content',dataJson.data.keyword);
    })
    .catch(function(err){
      alert(err);
    });

    axios.post('http://backend.viphome.cn/api/malls',qs.stringify({}))
    .then(function(dataJson){
      if(dataJson.data.result){
        //console.log(JSON.stringify(dataJson.data.data.data))
        _this.mallsList = dataJson.data.data.data;
        
        axios.post('http://backend.viphome.cn/api/stores',qs.stringify({}))
        .then(function(dataJson){
          //console.log(JSON.stringify(dataJson.data))
          if(dataJson.data.result){
            _this.storesList = dataJson.data.data;
            for(let i in _this.mallsList){
              _this.$set(_this.mallsList[i],'list',[]);
              _this.$set(_this.mallsList[i],'idName','allmap'+i);
              
                _this.$nextTick(function () {
                  // 百度地图API功能
                  var map = new BMap.Map(_this.mallsList[i].idName);
                  var point = new BMap.Point(_this.mallsList[i].coordinate);
                  map.centerAndZoom(point,12);
                  // 创建地址解析器实例
                  var myGeo = new BMap.Geocoder();
                  // 将地址解析结果显示在地图上,并调整地图视野
                  myGeo.getPoint(_this.mallsList[i].address, function(point){
                    if (point) {
                      map.centerAndZoom(point, 16);
                      map.addOverlay(new BMap.Marker(point));
                    }else{
                      alert("您选择地址没有解析到结果!");
                    }
                  }, "上海市");
                })


              for(let j in _this.storesList){
                if(_this.mallsList[i].id==_this.storesList[j].mall_id){
                  _this.mallsList[i].list.push(_this.storesList[j])
                }
              }
            }
            console.log(JSON.stringify(_this.mallsList))
            
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

    phoneSend(val,key,i,j){
      console.log(JSON.stringify(i))
      // i.name = val.name+'【'+i.name+'】';
      //let text = val.address+i.address;
      this.phoneText = val.address+i.address;
      this.phoneName = val.name+'【'+i.name+'】';
      this.phoneTelephone = i.telephone;
      this.popupBackBoll = true;
      this.selectBoxBoll = true;
      let _this = this;
      //线下地址发送
      axios.post('http://backend.viphome.cn/api/system/const',qs.stringify({
        key:'OFFLINE_SEND_ADDRESS'
      }))
      .then(function(dataJson){
        if(dataJson.data.result){
          _this.offline = dataJson.data.data;
        }
      })
      .catch(function(err){
        alert(err);
      });

    },
    reservations(val,key,i,j){
      console.log(val.id,i.id);
      this.reservationsName = val.name+'【'+i.name+'】';
      this.reservationsId = j;
      this.popupBackBoll = true;
      this.makeBoll = true;
      let _this = this;
      axios.post('http://backend.viphome.cn/api/typeSelect',qs.stringify({id:i.id}))
      .then(function(dataJson){
        if(dataJson.data.result){
          //console.log(JSON.stringify(dataJson.data.data))
          _this.typeSelectList = dataJson.data.data;
        }
      })
      .catch(function(err){
        alert(err);
      });
      axios.post('http://backend.viphome.cn/api/system/const',qs.stringify({
        key:'OFFLINE_APPOINTMENT'
      }))
      .then(function(dataJson){
        if(dataJson.data.result){
          _this.offline = dataJson.data.data;
        }
      })
      .catch(function(err){
        alert(err);
      });
    },
    removePopupEve(){
      this.popupBackBoll = false;
      this.selectBoxBoll = false;
      this.makeBoll = false;
    },
    selectEve(phoneName,phoneText,phoneTelephone){
      let _this = this;
      this.$message({
        type: 'success',
        message: '门店地址等信息已发至您的手机，期待您的光临！',
        onClose(){
          location.reload();
        }
      });
      axios.post('http://backend.viphome.cn/api/sendsms',qs.stringify({
        phone:_this.inputPhone,
        address:phoneText,
        name:phoneName,
        hotel_phone:phoneTelephone
      }))
      .then(function(dataJson){
        console.log(JSON.stringify(dataJson.data));
      })
      .catch(function(err){
        alert(err);
      });

      // window.setTimeout(function(){
      //   location.reload();
      // },3000); 

    },
    makeSub(){
      let myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  
      if(!myreg.test(this.telephone)){
        this.$message({
          message: '请输入正确的手机号码！',
          type: 'warning'
        });
        return false;
      };
      if(this.userName.length<2){
        this.$message({
          message: '请填写您的姓名！',
          type: 'warning'
        });
        return false;
      };

      let _this = this;
      console.log(JSON.stringify(this.checkboxGroup5))
      //return false;
      axios.post('http://backend.viphome.cn/api/reservation',qs.stringify({
        store:_this.reservationsId,
        name:_this.userName,
        gender:_this.picked,
        telephone:_this.telephone,
        plan_time:_this.month+'-'+_this.day+'-'+_this.optionsVal,
        plan_categoray:JSON.stringify(_this.checkboxGroup5)
      }))
      .then(function(dataJson){
        console.log(JSON.stringify(dataJson.data));
        if(dataJson.data.result){
          _this.$message({
            type: 'success',
            message: '提交成功，稍后客服人员会联系您！'
          });
          window.setTimeout(function(){
            location.reload();
          },3000); 
        
        }
      })
      .catch(function(err){
        alert(err);
      });

      // this.popupBackBoll = false;
      // this.makeBoll = false;
    },
    monthEve(item){
      var myDate = new Date();
      var d = new Date(myDate.getFullYear(), item, 0);
      this.dayNum = d.getDate();
    }




  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-icon-close{
  position: absolute;
  right: 0px;
  font-size: 35px;
}

/*线下门店*/
.underLineBox{
  max-width: 1000px;
  margin: auto;
}
.underLineBox h3{
  font-size: 20px;
  text-align: center;
  margin: 27px 0px;
  font-weight: 100;
}
.underList{
  margin-bottom: 43px;
}

.mapContent{

}

.map h2{
  font-size: 25px;
  text-align: right;
  font-weight: 100;
}

.map p{
  color: #a79595;
  font-size: 17px;
  text-align: right;
}
.map .address{
  width: 300px;
  float: right;
  margin: 22px 0px;
}
.map .mapSelect{
  height: 290px;
  width: 510px;
}
.mapContent .map{
  display: flex;
  justify-content: space-between;
  align-items: end;
}


/*门店列表*/
.storeList{
  margin: 13px 0px;
}
.storeList .title{
  font-size: 15px;
  padding: 13px 0px;
  color: #A8A8A8;
}
.storeList ul{
  overflow: hidden;
  margin-left: -55px;
}
.storeList li{
  display: flex;
  justify-content: end;
  align-items: end;
  float: left;
  width: 470px;
  margin: 9px 0px;
  margin-left: 55px;
  margin-right: 0px;
}
.storeList li div{
  margin-left: 13px;
}
.storeList li p{
  font-size: 16px;
  margin: 11px 0px;
}
.storeList li .imgBox{
 
}
.imgBox img{
  width: 210px;
}
.buttonCss{
  color: #000;
  font-size: 14px;
}

/*弹出窗*/

.popupBox{
  position: absolute;
  top: 50%;
  left: 50%;
  transform : translate(-50%,-50%);
  background-color: #fff;
  width: 500px;
  padding: 0px 30px;
}
.popupBox header{
  text-align: center;
  padding: 13px 0px;
  border-bottom: 1px solid #F0F0F0;
  position: relative;
  margin: 17px 0px;
}

.selectBox{
  padding: 0px 33px;
  margin-top: 23px;
}
.selectBox p{
  margin: 7px 0px;
  text-align: center;
}
.selectBox p span{
  font-size: 15px;
  color: #555;
}
.selectInput{
/*  display: flex;
  justify-content: end;
  align-items: end;*/
  padding: 0px 80px;
}
.submission{
  width: 100%;
  margin: 23px 0px;
}

.selectText h3{
  font-size: 15px;
  color: #555;
  margin: 13px 0px;
  text-align: center;
}
.selectText div{
  font-size: 14px;
  padding: 9px 13px;
  border: 1px solid #ccc;
}


.selectTips{
  margin: 23px 0px;
  padding-top: 15px;
}
.selectTips p{
  text-align: center;
  font-size: 13px;
  color: #555;
}

.selectTips .title{
  text-align: left;
  color: #000;
}


/**/
.make .makeTitle{
  text-align: center;
}
.makeTitle p{
}
.makeTitle h3{
    font-size: 16px;
    border-bottom: 1px solid #dedede;
    padding-bottom: 13px;
    width: 370px;
    margin: 7px auto;
}

.makeCenter{
  padding: 0px 33px;
}
.makeCenter .el-input{
  width: 130px;
}

.makeCenterBox{
  display: flex;
  justify-content: end;
  align-items: end;
}

.makeCenterBox ul li{
  margin-left: 13px;
}
.makeTitleVal{
  font-size: 15px;
  color: #595959;
  margin: 17px 0px;
}



/**/
.contactTelephone{
  margin: 17px 0px;
}
.contactTelephone .el-input{
  width: 230px;
}
.makeName{
  width: 80px;
  display: inline-block;
  font-size: 15px;
}

.selectData .el-input{
  width: 55px;
}
.selectData .select{
  display: inline-block;
  width: 100px;
}
.el-input{
  font-size: 14px;
}

.productTitle{
  margin: 19px 0px;
}

/**/
.selectBottom p{
  text-align: center;
  padding-top: 13px;
  margin-top: 13px;
}
.selectBottom p button{
  width: 170px;
}
.typeSelectClass{
  margin: 7px 0px;  
}



@media screen and (max-width: 800px){
  .mapContent .map{
    display: block;
  }
  .map .mapSelect{
    width: 100%;
  }
  .underLineBox{
    padding: 0px 11px;
  }
  .map h2{
    margin-top: 22px;
  }
  .storeList .title{
    font-size: 20px;
  }

  .storeList ul{
    margin: 0px;
  }
  .storeList li{
    width: 100%;
    display: block;
    padding: 0px;
    margin: 0px 0px 23px 0px;
  }
  .underLineBox h3{
    font-size: 27px;
  }

  .popupBox{
    width: 100%;
    padding: 0px 11px;
    overflow: auto;
  }
  .makeCenter{
    padding: 0px 11px;
  }


  .selectInput{
    padding: 0px;
  }
  .selectBox{
    padding: 0px 11px;
  }
  .bannerImg{
    width: 100%;
  }
  .selectTips{
    padding: 11px 15px;
  }
  .popupBox header img{
    width: 300px;
  }
  .el-icon-close{
    right: 11px;
    font-size: 22px;
  }
  .makeTitle h3{
    width: auto;
  }
}


@media screen and (max-width: 370px){
  .makeCenterBox{
    display: block;
  }
  .makeCenterBox .userName{
    margin-bottom: 7px;
  }
  .selectData .select{
    width: 80px;
  }
  .contactTelephone .el-input{
    width: 170px;
  }
  .selectData .el-input{
    margin-bottom: 7px;
  }
}
</style>
