<template>
	<div class="block">
		<el-carousel height="142px">
			<el-carousel-item v-for="(item,index) in nav" :key="item.index" >
				<img :src="item.image" />
			</el-carousel-item>
		</el-carousel>
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				nav: [{
					id: 1,
					image: '/images/banner.jpg'
				}, {
					id: 2,
					image: '/images/banner2.jpg'
				}, {
					id: 3,
					image: '/images/banner3.jpg'
				}, {
					id: 4,
					image: '/images/banner4.jpg'
				}]
			}
		}
	}
</script>

<style scoped>
	.block {
		width: 100%;
		height: 142px;
		margin-top: 5px;
	}
	/*color: #0087FF;
	color:#8E8E93 ;*/
</style>