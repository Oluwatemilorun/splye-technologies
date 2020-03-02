<template>
	<div>
		<div class="top-banner">
			<p
				class="page-title text-uppercase d-flex align-center justify-center font-weight-bold "
			>
				<slot></slot>
			</p>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.top-banner {
	background-color: rgba(51, 51, 51, 0.226);
	margin-top: -100px;
	height: 350px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	.page-title {
		color: #434175;
		font-size: 2rem;
	}
}

.services {
	height: 300px;
	img {
		width: 20%;
	}
}
</style>
