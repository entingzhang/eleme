<template>
	<div class="top-bar">
		<div class="title">
			<div class="linel"></div>
			<slot></slot>
			<div class="liner"></div>
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
	.top-bar {
		width: 100%;
		margin-top: 10px;
	}
	.title{
		position: relative;
		text-align: center;
		color: #000;
		height: 150px;
	}
	.linel,.liner{
		position: absolute;
		width: 30px;
		border: 1px solid #8E8E93;
	}
	.linel{
		top: 10px;
		left: 30%;
	}
	.liner{
		top: 10px;
		right: 30%;
	}
	/*color: #0087FF;
	color:#8E8E93 ;*/
</style>