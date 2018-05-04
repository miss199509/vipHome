<template>
  <div class="underLine">

  
    <headerHtml :index="8"></headerHtml>
    
      <div class="">
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      
      <div class="underLineBox maxWidth">
        <h3>
          线下门店
        </h3>
        <ul class="">
          <li class="">
            <div class="mapContent">

              <div class="">

                <div class="map">
                  <iframe src="http://lbsyun.baidu.com/jsdemo/demo/a1_2.htm" width="500" height="260" frameborder="0" scrolling="no"></iframe>
                  <div class="">
                    <h2>
                      <img src=""/>
                      VIP HOME真北展区
                    </h2>
                    <h4>
                      上海市普陀区真北路1108号红星美凯龙
                    </h4>
                    <p>
                      营业时间：10.00-17.30（周一至周五）
                    </p>
                    <p>
                      10.00-18.30（周六至周日）
                    </p>
                    <p>
                      <img src="../assets/banner-02.jpg"/>
                    </p>
                  </div>
                </div>
                
                <div class="storeList">
                  <p class="title">
                    真北展区有十二家门店
                  </p>
                  <ul>
                    <li v-for="(val,key) in 9">
                      <img width="230px;" height="150px;" src="../assets/raw_1523952453.jpg"/>
                      <div class="">
                        <img src=""/>
                        <p>FC店：南馆4楼c1636</p>
                        <p>门店电话：021-251525248</p>
                        <el-button size="mini" @click="phoneSend()">发送地址到手机</el-button>
                        <el-button size="mini" @click="reservations()">预约到门店</el-button>
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
        <div class="popupBox">
          <header>
            <img width="130px;" src="../assets/raw_1523942422.png"/>
            <label>欢邸国际家居</label>
          </header>
          <!-- 发送短信 -->
          <div class="selectBox" v-show="selectBoxBoll">
            <p>
              <span>请输入手机号码：</span>
            </p>
            <div class="selectInput">
              <el-input v-model="input" placeholder="请输入内容" class="input-with-select"></el-input>
              <el-button type="danger" @click="selectEve()">提交</el-button>
            </div>
            <div class="selectText">
              
              <h3>以下信息将发送到你的手机：</h3>
              <div class="">
                <p>上海红星美凯龙沪南店【Domicil专卖店】欢迎您的光临</p>
                <p>地址：上海市浦东新区川沙新镇外环以外川沙路4825号B座二层223号展厅</p>
                <p>店内电话：021-88859655</p>
                <p>交通线路：上海市浦东新区川沙新镇外环以外川沙路4825号B座二层223号展厅。</p>
              </div>

            </div>
          </div>
          <!-- 发送短信结束 -->
          <div class="make" v-show="makeBoll">
            <div class="makeTitle">
              <p class="makeTitleVal">
                您将要预约的门店是：
              </p>
              <h3>上海红星美凯龙沪南店【Domicil专卖店】</h3>
            </div>
            <div class="makeCenter">
              <p class="makeTitleVal">请填写以下信息，以便我们为您提供更好服务：</p>
              <div class="makeCenterBox">
                <div><label class="makeName">您贵姓：</label><el-input v-model="input" placeholder="输入您的姓名" size="mini"></el-input></div>
                <ul class="overflowHidden">
                  <li class="floatLeft">
                    <label for="one">先生</label>
                    <input type="radio" id="one" value="先生" v-model="picked">
                  </li>
                  <li class="floatLeft">
                    <label for="two">女士</label>
                    <input type="radio" id="two" value="女士" v-model="picked">
                  </li>
                </ul>
              </div>
              <div class="contactTelephone">
                <label class="makeName">您的电话：</label>
                <el-input v-model="phone" placeholder="请输入您的手机号码" size="mini"></el-input>
              </div>

              <div class="selectData">
                <label>您预计：</label>
                <el-input v-model="month" placeholder="" size="mini"></el-input>
                <span>月</span>
                <el-input v-model="day" placeholder="" size="mini"></el-input>
                <span>日</span>

                <div class="select">
                  <el-select v-model="value4" clearable placeholder="请选择" size="mini">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
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
                      <el-checkbox label="备选项1" border></el-checkbox>
                      <el-checkbox label="备选项2" border></el-checkbox>
                    </el-checkbox-group>
                    <p>
                      <el-button type="danger" size="small">提交</el-button>
                    </p>
                  </div>

            </div>
          </div>


          <div class="selectTips">
            <p>温馨提示：欢邸国际家居携旗下18品牌，48家线下实体店，欢迎您到各门店品鉴家居</p>
            <p>您也可以拨打7X24小时热线：400-800-8956 与我们取得联系！</p>
          </div>
        
        </div>
      </div>

    
    <bottomHtml></bottomHtml>

  </div>
</template>

<script>
import headerHtml from '../components/headerHtml'
import bottomHtml from '../components/bottomHtml'


export default {
  name: 'underLine',
  data () {
    return {
      input:'',
      phone:'',
      radio:'1',
      picked:'',
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
      value4: '',
      checkboxGroup5:[],
      popupBackBoll:false,
      selectBoxBoll:false,
      makeBoll:false

    }
  },
  components:{
    'headerHtml':headerHtml,
    'bottomHtml':bottomHtml
  },
  methods: {

    open5() {
      this.$alert('<div class="alerBox">\
        <p>请输入手机号码：<input id="input" placeholder="请输入内容"/></p>\
        <h3>以下信息将发送到你的手机：</h3>\
        <div class=""><p>上海红星美凯龙沪南店【Domicil专卖店】欢迎您的光临</p><p>地址：上海市浦东新区川沙新镇外环以外川沙路4825号B座二层223号展厅</p><p>店内电话：021-88859655</p>\
        <p>交通线路：上海市浦东新区川沙新镇外环以外川沙路4825号B座二层223号展厅上海市浦东新区川沙新镇外环以外川沙路4825号B座二层223号展厅。</p>\
        </div>\
        </div>', '欢邸国际家居', {
        dangerouslyUseHTMLString: true,
        confirmButtonText: '提交',
      }).then(() => {
          let val = document.getElementById("input").value;
          console.log(val);
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    phoneSend(){
      this.popupBackBoll = true;
      this.selectBoxBoll = true;
    },
    reservations(){
      this.popupBackBoll = true;
      this.makeBoll = true;
    },
    selectEve(){
      this.$message({
        type: 'success',
        message: '门店地址等信息已发至您的手机，期待您的光临！'
      });
    }




  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*轮播开始*/
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
/*轮播结束*/
/*线下门店*/
.underLineBox{

}
.underLineBox h3{
  background-color: #ededed;
  padding: 11px 23px;
  font-size: 13px;
}


.mapContent{
  padding: 40px 70px;
  border: 1px solid #dedede;
}

.map h2{
  font-size: 25px;
  text-align: right;
}
.map h4{
  font-size: 16px;
  color: #503e3e;
}
.map p{
  margin: 7px 0px;
  color: #a79595;
  font-size: 13px;
  text-align: right;
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
  text-align: center;
  color: #333;
  font-size: 14px;
  padding: 5px 0px;
  /*background-color: #dedede;*/
  border: 1px solid #dedede;
}
.storeList ul{
  overflow: hidden;
  margin-top: 33px;
}
.storeList li{
  display: flex;
  justify-content: end;
  align-items: end;
  float: left;
  width: 470px;
  margin: 9px 3px;
}
.storeList li div{
  margin-left: 13px;
}
.storeList li p{
  font-size: 14px;
  margin: 9px 0px;
}


/*弹出窗*/
.popupBack{
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 11;
}
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
  border-bottom: 1px solid #dedede;
}
.popupBox header label{
  font-size: 18px;
}

.selectBox{
  padding: 0px 33px;
  margin-top: 23px;
}
.selectBox p{
  margin: 7px 0px;
}
.selectInput{
  display: flex;
  justify-content: end;
  align-items: end;
}

.selectText h3{
  font-size: 15px;
  color: #555;
  margin: 13px 0px;
}
.selectText div{
  font-size: 14px;
  padding: 9px 13px;
  border: 1px solid #ccc;
}


.selectTips{
  border-top: 2px solid #ccc;
  margin: 23px 0px;
  padding-top: 7px;
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
  border-top: 1px solid #999;
  padding-top: 13px;
  margin-top: 13px;
}
</style>
