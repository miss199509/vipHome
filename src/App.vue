<template>
  <div id="app">
    <router-view v-wechat-title='$route.meta.title'></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
	font-family:"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu
}
*{
	margin:0px;
	padding:0px;
	font-family:"Microsoft YaHei",微软雅黑,"MicrosoftJhengHei",华文细黑,STHeiti,MingLiu
}
#app{

}
.maxWidth{
	max-width: 1200px;
	margin: auto;
}
.overflowHidden{
	overflow: hidden;
}
.floatLeft{
	float: left;
}
.floatRight{
	float: right;
}
.cursor{
	cursor: pointer;
}
a{
	text-decoration: none;
}
i{
	font-style:normal;
}
ul,li{
	list-style: none;
}
.popupBack{
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 11;
}
</style>
