<template>
	<div>
		<div class="top-banner">
			<p
				class="page-title text-uppercase d-flex align-center justify-center font-weight-bold "
			>
				<slot />
			</p>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.top-banner {
	background-image: url('/img/banner.png');
	background-size: auto;
	background-repeat: no-repeat;
	background-position: center;
	// margin-top: -65px;
	height: 300px;
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
