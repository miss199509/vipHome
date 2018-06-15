<template>
  <div class="redirect">
    <div class="redirectBox">
      <img src="../assets/9380293992595787.png"/>
      <h3>
        您访问的页面不在地球上，请回火星吧~{{num}}
      </h3>
      <p>
        <router-link :to="{ name: 'index',query:{id:$route.query.id,userName:$route.query.userName}}">
          <span class="cursor"></span>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import qs from 'qs'

export default {
  name: 'redirect',
  data () {
    return {
      num:5
    }
  },
  mounted(){
    let _this = this;
    let showTimeInterval = setInterval(function(){
      _this.num-=1;
      if(_this.num==0){
        clearInterval(showTimeInterval);
        _this.$router.push({ name: 'index',query:{id:_this.$route.query.id,userName:_this.$route.query.userName}});
      };
    },1000); 


  },
  methods: {
   
   

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.redirectBox{
  position: absolute;
  top: 50%;
  left: 50%;
  transform : translate(-50%,-50%);
  text-align: center;
}
.redirectBox h3{
  margin: 23px 0px;
  font-size: 17px;
}
.redirectBox img:active{  
  display:block;  
}
.redirectBox span{
   background-image: url('http://viphome.cn/image/462406225470314077.png');
  display: inline-block;
  width: 130px;
  height: 33px; 
  background-size: 100% 100%;
}
.redirectBox span:active{
  background-image: url(http://viphome.cn/image/889801403246715980.png);
  display: inline-block;
  width: 130px;
  height: 33px; 
  background-size: 100% 100%;
}
@media screen and (max-width: 800px){
  .redirectBox,.redirectBox img{
    width: 100%;
  }

}
</style>
