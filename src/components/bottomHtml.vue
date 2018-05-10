<template>
  <div class="bottomHtml">
  
    <div class="maxWidth">
      <ul>
        <li>
          <p>
            <a href="javascript:;">动态咨询</a>
          </p>
          <p>
            <a href="javascript:;">公司动态</a>
          </p>
          <p>
            <a href="javascript:;">行业资讯</a>
          </p>
          <p>
            <a href="javascript:;">家居新知</a>
          </p>
        </li>
        <li>
          <p>
            <a href="javascript:;">关于我们</a>
          </p>
          <p>
            <a href="javascript:;">公司简介</a>
          </p>
        </li>
        <li>
          <p>
            <a href="javascript:;">服务支持</a>
          </p>
          <p>
            <a href="javascript:;">购物须知</a>
          </p>
          <p>
            <a href="javascript:;">退货换货</a>
          </p>
          <p>
            <a href="javascript:;">售后服务</a>
          </p>
        </li>
      </ul>
      <h3>
        400-800-5965
      </h3>
      <ul class="wxinImg">
        <li>
          <img width="90px;" src="../assets/raw_1523956664.jpg"/>
          <p>VIP home欢邸微信公众号</p>
        </li>
        <li>
          <img width="90px;" src="../assets/raw_1523956664.jpg"/>
          <p>VIP home欢邸淘宝店</p>
        </li>
      </ul>
    </div>
    <p class="Keep_onRecord">Copyright © 2018 欢邸家居. All Rights Reserved 沪ICP备 1707727号</p>
  </div>
</template>

<script>
export default {
  name: 'bottomHtml',
  data () {
    return {

    }
  },
  methods: {
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
}
.bottomHtml a{
  color: #BBB9B9;
  font-size: 14px;
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
  padding: 45px 60px;
  font-weight: 100;
}


.Keep_onRecord{
  text-align: center;
  color: #B4B1B0;
  padding-bottom: 11px;
  font-size: 13px;
}


.wxinImg li{
  text-align: center;
  width: 90px;
}
.wxinImg li p{
  font-size: 13px;
  text-align: center;
}
</style>
