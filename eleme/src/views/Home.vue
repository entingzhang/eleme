<template>
	<div class="home">
		<div class="header">
			<div class="address">
				<i class="fa fa-map-marker"></i>
				<el-select v-model="value8" filterable placeholder="请选择地址：">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</div>
			<div class="search">
			<i class="fa fa-search"></i><span>搜索饿了么商家、商品名称</span>
			
			</div>
		</div>
		<quick-list></quick-list>
		<banner></banner>
		<footer-area></footer-area>
	</div>
</template>

<script>
	// @ is an alias to /src
	import FooterArea from "@/components/FooterArea.vue";
	import QuickList from "@/components/QuickList.vue";
	import Banner from "@/components/Banner.vue";

	export default {
		data(){
			return{
				 options: [{
          value: '选项1',
          label: '浦东新区'
        }, {
          value: '选项2',
          label: '静安区'
        }, {
          value: '选项3',
          label: '黄浦区'
        }, {
          value: '选项4',
          label: '青浦区'
        }, {
          value: '选项5',
          label: '徐汇区'
        }],
        value8: ''
			}
		},
		components: {
			FooterArea,
			Banner,
			QuickList
		},
	}
</script>
<style>
	html,
	#app,
	body {
		margin: 0px;
		padding: 0px;
	}
	
	.header {
		width: 100%;
		height: 100px;
		background: linear-gradient(to right, #00A9FF, #0087FF);
	}
	.el-select{
		width: 90%;
		height: 40px;
		margin-left: 5%;
	}
	i{
		width: 10%;
		color: #FFFFFF;
	}
	.search{
		width: 90%;
		margin-top: 10px;
		height: 40px;
		background-color: #FFFFFF;
		margin-left: 5%;
		line-height: 40px;
	}
	.search span{
		color: #8E8E93;
		margin-left: 30%;
	}
</style>