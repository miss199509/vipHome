<template>
  <div class="home">

    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <p class="homeHeade maxWidth">
            <router-link :to="{name:'index'}">
              返回首页
            </router-link>
            <i>|</i>
            <span>服务热线：400-186-0055</span>
            <i>|</i>
            <a href="javascript:;" @click="signUpEve()">注册</a>
            <i>|</i>
            <a href="javascript:;" @click="singInEve()">登陆</a>
          </p>
        </div>
      </el-col>
    </el-row>
    
    <div class="maxWidth">
      <h3 class="title">
        <img width="130px;" src="../assets/raw_1523942422.png"/>
        <span>个人中心</span>
      </h3>
    </div>

    <div class="maxWidth" v-show="false">
      <ul class="overflowHidden">
        <li class="floatLeft">
          <div class="inputData overflowHidden">

            <div class="">
              <h4>帐户资料：</h4>
              <p>
                账号：18516360577
                <span class="modifyBottom modifyBottom">修改密码</span>
              </p>
            </div>
            
            <div class="">
              <h4>基本资料：</h4>
              <p>
                我的姓名：
                <span>？</span>
              </p>
              <p>
                性别：
                <span>？</span>
              </p>
              <p>
                居住城市：
                <span>？</span>
              </p>
            </div>

            <div class="">
              <h4>是否有家具购置计划：</h4>
              <p>
                我的姓名：
                <span>？</span>
              </p>
              <p>
                预计购置时间：
                <span>？</span>
              </p>
              <p>
                预购品类：
                <span>？</span>
              </p>
            </div>

            <span class="modifyBottom floatRight modifyBottom">修改资料</span>

          </div>
        </li>
        <li class="floatRight contactStore">
          <div class="">
            <h3>400-800-8956<p>7X24小时客服热线</p></h3>
          </div>


          <p class="shop overflowHidden">
            <span class="floatLeft">去淘宝店看看</span>
            <span class="floatRight">预约到店</span>
          </p>
        </li>
      </ul>
    </div>

    <div class="maxWidth modifyDataBox" v-show="false">
      <div class="modifyData">
        <h3>基本资料</h3>
        <ul>
          <li>
            <span class="titleName">我的姓名：</span>
            <input type="text" name=""/>
          </li>
          <li>
            <span class="titleName">性别：</span>
            <el-radio v-model="radio" label="1">备选项</el-radio><el-radio v-model="radio" label="2">备选项</el-radio>
          </li>
          <li>
            <span class="titleName">居住城市：</span>
            <el-select v-model="value" placeholder="请选择" size="mini">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </li>
        </ul>
      </div>
      <div class="modifyData">
        <h3>购置意向</h3>
        <ul>
          <li>
            <span class="titleName">是否有家具购置计划：</span>
            <el-radio v-model="radio" label="1">备选项</el-radio><el-radio v-model="radio" label="2">备选项</el-radio>
          </li>
          <li>
            <span class="titleName">预计购置时间：</span>
            <el-radio v-model="radio" label="1">备选项</el-radio><el-radio v-model="radio" label="2">备选项</el-radio>
          </li>
          <li>
            <span class="titleName">预购品类：</span>

            <el-checkbox v-model="checked3" label="备选项1" size="mini" border></el-checkbox>
            <el-checkbox v-model="checked4" label="备选项2" size="mini" border></el-checkbox>

          </li>
        </ul>
      </div>
      
      <p class="preservation">
        <span class="modifyBottom modifyBottom">保存</span>
      </p>
      <p class="preservationTips">
        欢邸国际家居携旗下18品牌，48家线下实体店，欢迎您到各门店品鉴家居
      </p>

    </div>

    <div class="maxWidth modifyPassword">
      <h3>修改密码</h3>
      <ul>
        <li>
          <label>原密码：</label>
          <el-input class="inputBox" v-model="input" placeholder="请输入内容" size="small"></el-input>
        </li>
        <li>
          <label>新密码：</label>
          <el-input class="inputBox" v-model="input" placeholder="请输入内容" size="small"></el-input>
        </li>
        <li>
          <label>确认新密码：</label>
          <el-input class="inputBox" v-model="input" placeholder="请输入内容" size="small"></el-input>
        </li>
      </ul>
      <p><span class="modifyBottom cursor">确认修改</span></p>
    </div>

    <bottomHtml></bottomHtml>

  </div>
</template>

<script>
import headerHtml from '../components/headerHtml'
import bottomHtml from '../components/bottomHtml'


export default {
  name: 'index',
  data () {
    return {
      input:'',
      checked3: true,
      checked4: false,
      radio: '1',
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
      value: ''
    }
  },
  components:{
    'headerHtml':headerHtml,
    'bottomHtml':bottomHtml
  },
  methods: {
  },

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
.nvaClass{
  padding: 5px 0px;
  background-color: #e6e6e6;
  text-indent: 11px;
  margin-bottom: 7px;
}
.nvaClass a,.nvaClass span{
  color: #000;
  font-size: 13px;
  margin: 0px 7px;
}
/*个人中心*/
.title{
  font-weight: 100;
  font-size: 27px;
  padding-left: 7px;
  margin: 17px 0px;
}
.title span{
  border-left: 2px solid #6f6f6f;
  margin-left: 9px;
  padding: 7px 0px;
  padding-left: 9px;
  color: #6f6f6f;
}
.title img{
  margin-top: 7px;
}

/*修改资料*/
.inputData{
  color: #616161;
  margin: 37px;
}
.inputData div{
  margin: 13px 0px;
}
.inputData h4{
  font-size: 19px;
  font-weight: 100;
}
.inputData p{
  text-indent: 37px;
  margin: 23px 0px;
}


.modifyBottom{
  border: 1px solid #777;
  margin-left: 47px;
  padding: 4px 15px;
  font-size: 14px;
  color: #8c5f5f;
}


.modifyDataBox{
  margin-top: 100px;
  padding-left: 100px;
}
.modifyData li{
  margin: 23px 0px;
  padding-left: 40px;
}
.modifyData li .titleName{
  display: inline-block;
  font-size: 15px;
  color: #736060;
}

.modifyData h3{
  font-weight: 100;
  font-size: 17px;
  color: #736060;
}

.preservation{
  text-align: center;
  margin: 110px 0px 33px 0px;
  padding-bottom: 33px;
  border-bottom: 1px solid #e8c2c2;
}
.preservation span{
  padding: 5px 27px;
}

.preservationTips{
  text-align: center;
  margin-bottom: 33px;
  font-size: 14px;
  color: #7f5c5c;
}
/**/
.contactStore{
  width: 50%;
  text-align: center;
  border-left: 1px solid #ccc;
  padding-left: 46px;
}
.contactStore h3{
  font-size: 33px;
  color: #9c9c9c;
  border-bottom: 1px solid #999;
  padding: 33px 0px 40px 0px;
}
.contactStore h3 p{
  font-size: 15px;
  margin: 15px 0px;
}



.shop{
  margin: 103px 0px;
/*  position: absolute;
  bottom: 0px;
  width: 50%;*/
}
.shop span{
  font-size: 14px;
  padding: 7px 23px;
  border: 1px solid #ccc;
}


/*修改密码*/
.modifyPassword{

}
.modifyPassword h3{
  font-size: 21px;
  font-weight: 100;
  border-bottom: 1px solid #dacccc;
  padding-bottom: 17px;
  margin-top: 60px;
  width: 90%;
  margin: 60px auto 0px auto;
}
.modifyPassword .inputBox{
  width: 230px;
}
.modifyPassword li{
  margin: 33px 0px;
  text-align: center;
}
.modifyPassword li label{
  display: inline-block;
  width: 120px;
  font-size: 17px;
  text-align: right;
}
.modifyPassword p{
  text-align: center;
  margin: 60px 0px;
}

</style>
