<template>
  <div id="scroll_div" class="scroll_div">
    <div id="scroll_begin">
        <ul>
            <li><a href="#"><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3198611610,3108821463&fm=27&gp=0.jpg"></a></li>
            <li><a href="#"><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3198611610,3108821463&fm=27&gp=0.jpg"></a></li>
            <li><a href="#"><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3198611610,3108821463&fm=27&gp=0.jpg"></a></li>
            <li><a href="#"><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3198611610,3108821463&fm=27&gp=0.jpg"></a></li>
            <li><a href="#"><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3198611610,3108821463&fm=27&gp=0.jpg"></a></li>
            <li><a href="#"><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3198611610,3108821463&fm=27&gp=0.jpg"></a></li>
            <li><a href="#"><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3198611610,3108821463&fm=27&gp=0.jpg"></a></li>
        </ul>
    </div>
    <div id="scroll_end"></div>
</div>
</template>

<script>


export default {
  name: 'home',
  data () {
    return {
      
    }
  },
  mounted(){
    
    this.scrollImgLeft();

  },
  methods: {

    scrollImgLeft(){
      let _this = this;
      var speed=10;
      var scroll_begin = document.getElementById("scroll_begin");
      var scroll_end = document.getElementById("scroll_end");
      var scroll_div = document.getElementById("scroll_div");
      scroll_end.innerHTML=scroll_begin.innerHTML;
      
      var MyMar=setInterval(_this.Marquee,speed);
      scroll_div.onmouseover=function()
      {
        clearInterval(MyMar);
      }
      scroll_div.onmouseout=function()
      {
        MyMar=setInterval(_this.Marquee,speed);
      }
    },
    Marquee(){
      if(scroll_end.offsetWidth-scroll_div.scrollLeft<=0)
      {
        scroll_div.scrollLeft-=scroll_begin.offsetWidth;
      }
      else
      {
        scroll_div.scrollLeft++;
      }
    }

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.scroll_div {
    width:100%;
    height:400px;
    margin:0 0;
    overflow: hidden;
    white-space: nowrap;
    background:#ffffff;
  }
  .scroll_div img {
    width:100%;
    height:400px;
  }
  #scroll_begin, #scroll_end, #scroll_begin ul, #scroll_end ul, #scroll_begin ul li, #scroll_end ul li{
    display:inline;
  }/*设置ul和li横排*/

</style>
