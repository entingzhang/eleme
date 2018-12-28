<template>
	<div class="quick-nav clear">
		<div class="quick-nav-item" v-for="(item,index) in quicknav" :key="item.index">
			<router-link to="#">
				<img :src="item.image" />
				<span v-text="item.title"></span>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				quicknav: [{
					title: '美食',
					image: '/images/image1.jpg'
				},{
					title: '晚餐',
					image: '/images/image2.jpg'
				},{
					title: '商超便利',
					image: '/images/image3.jpg'
				},{
					title: '水果',
					image: '/images/image4.jpg'
				},{
					title: '医药健康',
					image: '/images/image5.jpg'
				},{
					title: '鲜花绿植',
					image: '/images/image6.jpg'
				},{
					title: '厨房生鲜',
					image: '/images/image7.jpg'
				},{
					title: '跑腿代购',
					image: '/images/image8.jpg'
				},{
					title: '甜品饮品',
					image: '/images/image9.jpg'
				},{
					title: '签到领红包',
					image: '/images/image10.jpg'
				}]
			}
		}
	}
</script>

<style scoped>
	.quick-nav {
		width: 100%;
		/*margin-top: 100px;*/
		background-color: #fff;
	}
	.clear:after {
		display: block;
		content: "";
		clear: both;
	}
	.quick-nav-item{
		width: 20%;
		float: left;
		text-align: center;
	}
	.quick-nav-item a{
		text-decoration: none;
	}
	.quick-nav-item img{
		width: 70%;
	}
	.quick-nav-item span{
		display: block;
		color: #8E8E93;
    	font-size: .89rem;
	}
	/*color: #0087FF;
	color:#8E8E93 ;*/
</style>