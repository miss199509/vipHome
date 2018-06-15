<template>
  <div class="bottomHtml">
  
    <div class="maxWidth">
      <ul class="nav">
        <li>
          <p>
            <router-link class="title" :to="{ name: 'information',query:{id:$route.query.id,userName:$route.query.userName}}">
              动态资讯
            </router-link>
          </p>
          <p v-for="(val,key) in navList">
            <a href="javascript:;" @click="refreshEve(val)">{{val.name}}</a>
          </p>
        </li>
        <li>
          <p>
            <router-link class="title" :to="{ name: 'about',query:{id:$route.query.id,userName:$route.query.userName}}">
              关于我们
            </router-link>
          </p>
        </li>
        <li>
          <p>
            <a class="title" href="javascript:;">服务支持</a>
          </p>
        </li>
      </ul>
      <h3>
        400-186-0055
      </h3>
      <ul class="wxinImg">
        <li>
          <img width="120px;" src="../assets/raw_1523956664.jpg"/>
          <p>VIP home欢邸微信公众号</p>
        </li>
        <li>
          <img width="120px;" src="../assets/new_raw_1523956664.jpg"/>
          <p>VIP home欢邸淘宝店</p>
        </li>
      </ul>
    </div>
    <p class="Keep_onRecord">Copyright © 2018 欢邸家居. All Rights Reserved <a href="http://www.miitbeian.gov.cn/">沪ICP备17040727号</a></p>
  </div>
</template>

<script>
export default {
  name: 'bottomHtml',
  data () {
    return {
      navList:[
        {name:'公司动态'},{name:'行业资讯'},{name:'家居新知'}
      ]
    }
  },
  methods: {
    refreshEve(val){
      if(val.name=='公司动态'){
        this.$router.push({ name: 'information',query:{id:this.$route.query.id,userName:this.$route.query.userName,uid:0}});
      }
      if(val.name=='行业资讯'){
        this.$router.push({ name: 'information',query:{id:this.$route.query.id,userName:this.$route.query.userName,uid:1}});
      }
      if(val.name=='家居新知'){
        this.$router.push({ name: 'information',query:{id:this.$route.query.id,userName:this.$route.query.userName,uid:2}});
      }
      location.reload();
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bottomHtml{
  background-color: #000;
  color: #fff;
}
.bottomHtml ul{
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
}
.bottomHtml li{
  margin: 0px 23px;
}
.bottomHtml li:first-child{
  margin: 0px;
  margin-right: 23px;
  text-align: center;
}
.bottomHtml li:last-of-type{
  margin-right: 0px;
}
.bottomHtml a{
  color: #BBB9B9;
  font-size: 16px;
}
.bottomHtml .title{
  font-size: 18px;
}
.nav p{
  margin: 13px 0px;
}
.nav li:last-of-type{
  margin-right: 0px;
}

.bottomHtml div{
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 68px 0px;
  padding-bottom: 48px;
}
.bottomHtml h3{
  border-right: 1px solid #3F3232;
  border-left: 1px solid #3F3232;
  color: #ccc;
  padding: 66px 60px;
  font-weight: 100;
  font-size: 23px;
}


.Keep_onRecord{
  text-align: center;
  color: #B4B1B0;
  padding-bottom: 30px;
  font-size: 15px;
}


.wxinImg li{
  text-align: center;
  width: 106px;
}
.wxinImg li p{
  font-size: 15px;
  text-align: center;
  color: #BBB9B9;
  margin-top: 7px;
}


@media screen and (max-width: 800px){
  /*.bottomHtml{
    display: none;
  }*/
  .bottomHtml div{
    display: block;
    padding: 23px 0px;
  }
  .bottomHtml .nav{
    display: block;
    display: none;
  }
  .bottomHtml h3{
    padding: 0px;
    text-align: center;
    margin: 7px 0px;
  }
  .bottomHtml .wxinImg{
    justify-content: center;
  }
  .Keep_onRecord{
    font-size: 13px;
  }
}
</style>
