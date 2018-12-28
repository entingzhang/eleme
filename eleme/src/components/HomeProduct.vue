<template>
	<div class="product">
		<div class="product-left">
			<div >
				<h3>品质套餐</h3>
				<p>搭配齐全吃得好</p>
				<router-link to="#">立即抢购></router-link>
			</div>
			<img src="../../public/images/image11.jpg"/>
		</div>
		<div class="product-right">
			<div >
				<h3>限量抢购</h3>
				<p>超值美味9.9元起</p>
				<router-link to="#"><b>19992人</b>抢购></router-link>
			</div>
			<img src="../../public/images/image12.jpg"/>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		}
	}
</script>

<style scoped>
	.product {
		width: 100%;
		height: 150px;
		margin-top: 5px;
	}
	.product .product-left{
		width: 45%;
		height: 150px;
		float: left;
		background-color: #F4F4F4;
		padding-left: 20px;
		position: relative;
	}
	.product-left div{
		position: absolute;
		top: 15px;
		left: 20px;
	}
	.product-left div h3,
	.product-left div p{
		margin: 0px;
	}
	.product-left div a{
		font-weight: bold;
		font-size: 14px;
		text-decoration: none;
		color: #af8260;
	}
	.product-left img{
		position: absolute;
		right: 0px;
		bottom: 0px;
		width: 120px;
	}
	.product .product-right{
		width: 45%;
		height: 150px;
		float: right;
		padding-right: 20px;
		background-color: #F4F4F4;
		position: relative;
	}
	.product-right div{
		position: absolute;
		top: 15px;
		left: 20px;
		
	}
	.product-right div h3{
		color: red;
	}
	.product-right div h3,
	.product-right div p{
		margin: 0px;
	}
	.product-right div a{
		font-weight: bold;
		font-size: 14px;
		text-decoration: none;
		color: #000;
	}
	.product-right div a b{
		color: red;
	}
	.product-right img{
		position: absolute;
		right: 20px;
		bottom: 0px;
		width: 120px;
	}
	/*color: #0087FF;
	color:#8E8E93 ;*/
</style>