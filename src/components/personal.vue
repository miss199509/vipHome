<template>
  <div class="personal">

    <headerHtml :index="0"></headerHtml>
    <p>
      <img width="100%" src="../assets/index/banner-02.jpg"/>
    </p>

    <div class="maxWidth">
      <div class="">
        <ul class="title">
          <li>
            <span>个人</span>
            <span>中心</span>
          </li>
        </ul>
        
        <div class="" v-show="personalBoll">

          <div class="personalBox">
            <h4>基本资料</h4>
            <ul>
              <li>
                <label class="name">账号：</label>
                18516360572
                <a href="javascript:;" @click="modifyPasswordEve()">修改密码</a>
              </li>
              <li>
                <label class="name">姓名：</label>
                <input class="nameInput" type="" name=""/>
              </li>
              <li>
                <label class="name">性别：</label>
                <div class="">
                  <el-radio v-model="radio" label="1">男</el-radio>
                  <el-radio v-model="radio" label="2">女</el-radio>
                </div>
              </li>
              <li>
                <label class="name">地址：</label>
                <div class="">
                  <input class="province nameInput" type="" name=""/>
                  <span>省/市</span>
                  <input class="town nameInput" type="" name=""/>
                  <span>区/镇</span>
                </div>
              </li>
              <li class="street">
                <label></label>
                <textarea placeholder="街道..."></textarea>
              </li>
            </ul>
          </div>

          <div class="intentionBox personalBox">
            <h4>购置意向</h4>
            <ul>
              <li>
                <label class="name">是否有家居购置计划：</label>
                <div class="">
                  <el-radio v-model="radio" label="1">有</el-radio>
                  <el-radio v-model="radio" label="2">否</el-radio>
                </div>
              </li>
              <li>
                <label class="name">预计购置时间：</label>
                <div class="">
                  <el-radio v-model="radio" label="1">15天内</el-radio>
                  <el-radio v-model="radio" label="2">1个月内</el-radio>
                  <el-radio v-model="radio" label="2">2个月内</el-radio>
                  <el-radio v-model="radio" label="2">3个月内</el-radio>
                  <el-radio v-model="radio" label="2">3个月以上</el-radio>
                </div>
              </li>
              <li>
                <label class="name">预购品类：</label>
                <div class="">
                  <el-checkbox v-model="checked3" label="备选项1" border size="mini"></el-checkbox>
                  <el-checkbox v-model="checked4" label="备选项2" border size="mini"></el-checkbox>
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
                18516360572
                <a href="javascript:;" @click="modifyPasswordEve()">修改密码</a>
              </li>
              <li>
                <label class="name">姓名：</label>
                <span>Talk</span>
              </li>
              <li>
                <label class="name">性别：</label>
                <span>男</span>
              </li>
              <li>
                <label class="name">地址：</label>
                <span>上海市宝山区沪太路2999号3号楼2楼</span>
              </li>
            </ul>
          </div>

          <div class="intentionBox personalBox">
            <h4>购置意向</h4>
            <ul>
              <li>
                <label class="name">是否有家居购置计划：</label>
                <span>有</span>
              </li>
              <li>
                <label class="name">预计购置时间：</label>
                <span>15天</span>
              </li>
              <li>
                <label class="name">预购品类：</label>
                <span>单椅凳子、床</span>
              </li>
            </ul>
          </div>
        
          <div class="submissionBox">
            <p class="submission">
              <el-button type="primary" size="mini" @click="modifyPersonalEve()">修改资料</el-button>
            </p>
            <p class="newSubmission cursor">
              <span>去淘宝看看</span>
            </p>
            <p class="newSubmission cursor">
              <span>预约到店</span>
            </p>
          </div>
        </div>


        <div class="modifyPassword" v-show="modifyPasswordBoll">
          <div class="personalBox">
            <h4>基本资料>修改密码</h4>
            <ul>
              <li>
                <label class="name">原密码：</label>
                <input class="nameInput" type="" name=""/>
              </li>
              <li>
                <label class="name">新密码：</label>
                <input class="nameInput" type="" name=""/>
              </li>
              <li>
                <label class="name">确认新密码：</label>
                <input class="nameInput" type="" name=""/>
              </li>
            </ul>
            <p class="submission">
              <el-button type="primary" size="mini" @click="submissionModifyEve()">提交</el-button>
            </p>
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


export default {
  name: 'personal',
  data () {
    return {
      radio: '1',
      checked3:true,
      checked4:true,
      personalBoll:false,
      modifyPersonalBoll:true,
      modifyPasswordBoll:false
    }
  },
  components:{
    'headerHtml':headerHtml,
    'bottomHtml':bottomHtml
  },
  methods: {
    modifyPersonalEve(){
      this.personalBoll = true;
      this.modifyPersonalBoll = false;
    },
    personalEve(){
      this.personalBoll = false;
      this.modifyPersonalBoll = true;
    },
    modifyPasswordEve(){
      this.modifyPasswordBoll = true;
      this.modifyPersonalBoll = false;
    },
    submissionModifyEve(){
      this.modifyPasswordBoll = false;
      this.modifyPersonalBoll = true;
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
.personalBox .nameInput{
  height: 23px;
  line-height: 23px;
  width: 190px;
  text-indent: 9px;
}


.personalBox span{
  color: #313131;
}
.personalBox .province,.personalBox .town{
  width: 90px;
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


/*修改密码*/
.modifyPassword label.name{
  width: 80px;
}
</style>
