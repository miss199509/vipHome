<template>
  <div id="talk">
   <div class="bdsharebuttonbox">
      <a href="#" class="bds_more" data-cmd="more"></a>
      <a href="#" class="bds_qzone" data-cmd="qzone"></a>
      <a href="#" class="bds_tsina" data-cmd="tsina"></a>
      <a href="#" class="bds_tqq" data-cmd="tqq"></a>
      <a href="#" class="bds_renren" data-cmd="renren"></a>
      <a href="#" class="bds_weixin" data-cmd="weixin"></a>
    </div>
  </div>
</template>

<script>


export default {
  name: 'talk',
  data () {
    return {
      
    }
  },
  props:['index'],
  mounted(){
    let _this = this;
    console.log(JSON.stringify(this.index))
    window._bd_share_config = {
      common : {
        bdText : '大时代撒旦撒旦撒',
        bdDesc : '家是一个展现神奇的地方，生活在其中的每一个人，都能够实现自己的梦想。父亲在书房里指挥若定，母亲在餐桌上大放异彩，孩子在沙发上放飞自我……这一切，都需要借助家具来帮忙实现。', 
        bdUrl : 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3008776979,632905106&fm=27&gp=0.jpg',  
        bdPic : 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3198611610,3108821463&fm=27&gp=0.jpg'
      },
      share : [{
        "bdSize" : 16
      }]
    }
  },
  methods: {

    
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
