<template>
  <div class="home">

  
    <headerHtml :index="6"></headerHtml>
    
      
    <p>
      <img width="100%;" src="../assets/brand/banner.jpg"/>
    </p>
      

    <div id="box" style="position: relative;" class="maxWidth">
        
        

        <div class="item" v-for="(val,key) in buyershowList">
          <a :href="val.link">
            <img :src="val.image" alt="">
            <h2>{{val.buyer_name}}</h2>
            <!-- <h2>{{val.buyer_head_portrait}}</h2> -->
            <p>
              {{val.buyer_comment}}
            </p>
          </a>
        </div>
    </div>

    
    <!-- <bottomHtml></bottomHtml> -->

  </div>
</template>

<script>
import headerHtml from '../components/headerHtml'
import bottomHtml from '../components/bottomHtml'

import axios from 'axios'
import qs from 'qs'
export default {
  name: 'index',
  data () {
    return {
      buyershowList:[]
    }
  },
  components:{
    'headerHtml':headerHtml,
    'bottomHtml':bottomHtml
  },
  mounted(){
    
    let _this = this;
    axios.post('http://viphome.argu.net/api/buyershow',qs.stringify({popularity:0}))
    .then(function(dataJson){
      if(dataJson.data.result){
        _this.buyershowList = dataJson.data.data;
        console.log(JSON.stringify(_this.buyershowList))
        _this.$nextTick(function () {
          _this.waterFall();
        })
      }
    })
    .catch(function(err){
      alert(err);
    });

  },
  methods: {
    waterFall() {
      
      var box = document.getElementById('box');
      var items = box.children;
      console.log(items)
      // 定义每一列之间的间隙 为10像素
      var gap = 90;
      var gapHeight = 60;

      // 1- 确定列数  = 页面的宽度 / 图片的宽度
      var pageWidth = 1080;
      var itemWidth = items[0].offsetWidth;
      var columns = parseInt(pageWidth / (itemWidth + gap));
      var arr = [];
      for (var i = 0; i < items.length; i++) {
        if (i < columns) {
          // 2- 确定第一行
          items[i].style.top = 0;
          items[i].style.left = (itemWidth + gap) * i + 'px';
          console.log(items[i].offsetHeight);
          arr.push(items[i].offsetHeight);

        } else {
          // 其他行
          // 3- 找到数组中最小高度  和 它的索引
          var minHeight = arr[0];
          var index = 0;
          for (var j = 0; j < arr.length; j++) {
            if (minHeight > arr[j]) {
              minHeight = arr[j];
              index = j;
            }
          }
          // 4- 设置下一行的第一个盒子位置
          // top值就是最小列的高度 + gap
          items[i].style.top = arr[index] + gapHeight + 'px';
          // left值就是最小列距离左边的距离
          items[i].style.left = items[index].offsetLeft + 'px';

          // 5- 修改最小列的高度 
          // 最小列的高度 = 当前自己的高度 + 拼接过来的高度 + 间隙的高度
          arr[index] = arr[index] + items[i].offsetHeight + gapHeight;
        }
      }
    },
    getClient() {
      return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      }
    },
    getScrollTop() {
      return window.pageYOffset || document.documentElement.scrollTop;
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
/*热销产品*/
#box{
  height: -webkit-fill-available;
}
.item img {
  width: 100%;
  display: block;
  max-height:300px;
}
.box{
  position: relative;
}
.item {
  box-shadow: 2px 2px 2px #999;
  position: absolute;
  width:270px;
}
.item h2{
  font-size: 16px;
  margin: 7px 0px;
  font-weight: 100;
  color: #000;
}
.item p{
  color: #656565;
  font-size: 14px;
  margin: 45px 0px;
}
</style>
