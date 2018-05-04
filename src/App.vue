<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin:0px;
  padding:0px;
}
#app{

}
.maxWidth{
	max-width: 1100px;
	margin: auto;
}
.overflowHidden{
	overflow: hidden;
}
.floatLeft{
	float: left;
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
</style>
