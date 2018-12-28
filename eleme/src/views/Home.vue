<template>
	<div class="home">
		<div class="header">
			<div class="address">
				<div class="address-area">
					<i class="fa fa-map-marker"></i><b>未能获取地址...</b><i class="fa fa-caret-down"></i>
				</div>
			</div>
			<div class="search">
				<div class="search-area">
					<i class="fa fa-search"></i><span>搜索饿了么商家、商品名称</span>
				</div>
			</div>
		</div>
		<quick-list></quick-list>
		<home-product></home-product>
		<banner></banner>
		<footer-area></footer-area>
	</div>
</template>

<script>
	// @ is an alias to /src
	import QuickList from "@/components/QuickList.vue";
	import Banner from "@/components/Banner.vue";
	import HomeProduct from "@/components/HomeProduct.vue";
	import FooterArea from "@/components/FooterArea.vue";

	export default {
		data() {
			return {}
		},
		components: {
			Banner,
			QuickList,
			HomeProduct,
			FooterArea
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
	.header .address {
		padding: 7px 5%;
	}
	.address .address-area {
		width: 100%;
		color: #FFFFFF;
	}
	.address .address-area b{
		margin: 0px 5px;
		text-overflow:ellipsis;
	}
	.header .search {
		padding: 7px 5%;
	}
	.header .search .search-area{
		width: 100%;
		background-color: #FFFFFF;
		height: 40px;
		line-height: 40px;
	}
	.search .search-area span {
		font-size: 12px;
		color: #8E8E93;
	}
	.search .search-area i {
		margin-right: 5px;
		margin-left: 20%;
		color: #8E8E93;
	}
</style>