<template>
	<footer>
		<ul>
			<li v-for="(item,index) in nav" :key="index">
				<router-link :to="item.to">
					<span class="fa" :class="item.icon"></span>
					<span class="title" v-text="item.title"></span>
				</router-link>
			</li>
		</ul>
	</footer>
</template>

<script>
	export default {
		data() {
			return {
				nav: [{
					title:'首页',
					to: '/',
					icon:'fa-home'
				},{
					title:'发现',
					to: '/find',
					icon: 'fa-podcast'
				},{
					title:'订单',
					to: '/list',
					icon: 'fa-file-text-o'
				},{
					title:'我的',
					to: '/usercenter',
					icon: 'fa-user-o'
				}]
			}
		}
	}
</script>

<style scoped>
	footer {
		width: 100%;
		height: 50px;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0px;
		left: 0px;
		text-align: center;
		box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
		-webkit-box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
		-moz-box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, .6);
	}
	
	footer a {
		color: #8E8E93;
		text-decoration: none;
	}
	
	footer a.router-link-exact-active {
		color: #0087FF;
	}
	
	footer ul {
		margin: 0;
		padding: 0;
		display: flex;
		display: -webkit-flex;
		list-style: none;
	}
	
	footer ul li {
		margin-top: 5px;
		flex: 1;
		color: #8E8E93;
	}
	
	footer ul li span.fa {
		background-color: red;
		height: 10px;
		font-size: 20px;
	}
	
	footer ul li .title {
		display: block;
		font-size: 12px;
	}
	/*color: #0087FF;
	color:#8E8E93 ;*/
</style>