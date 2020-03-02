<template>
	<div>
		<v-container>
			<div class="intro-outer-container d-flex flex-column justify-center ">
				<div class="intro-container">
					<p class="intro-text text-uppercase ">
						building <br />is our creed
					</p>
					<p class="message text-justify text-wrap">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Beatae amet delectus assumenda fugit natus aliquam error, sint
						deleniti laudantium officia!
					</p>
					<div class="action-button">
						<nuxt-link to="#">
							<v-btn dark color="#6C63FF">portfolio</v-btn>
						</nuxt-link>
						<nuxt-link to="#">
							<v-btn dark color="#6C63FF" class="ml-3">contact us</v-btn>
						</nuxt-link>
					</div>
				</div>
			</div>
			<div class="image-sect">
				<div class="img-cont">
					<img :src="img1" alt="" />
				</div>
			</div>
		</v-container>
	</div>
</template>

<script>
import img1 from '@/static/img1.svg'

export default {
	name: 'home',
	data() {
		return {
			img1
		}
	}
}
</script>

<style lang="scss" scoped>
.intro-outer-container {
	@include xs {
		padding: 0 1rem;
	}
	@include sm {
		padding: 0 1rem;
	}
}

.intro-container {
	width: 416px;
	@include xs {
		margin-top: 2rem;
		width: 100%;
	}
	margin-top: 8rem;

	.intro-text {
		color: #434175;
		font-size: 1.8rem;
		line-height: 2rem;
		font-weight: bold;
	}

	.message {
		color: #5d5d5d;
	}
}

.image-sect {
	margin-top: -23rem;
	position: relative;
	@include xs {
		display: none;
	}
	.img-cont {
		width: 60%;
		position: absolute;
		@include sm {
			right: 0rem;
		}
		right: -10rem;
		top: 10rem;
		img {
			width: 100%;
		}
	}
}
</style>
