<template>
	<div class="index-page">
		<v-container>
			<div class="intro-outer-container d-flex ">
				<div
					class="intro-container"
					data-aos="fade-right"
					data-aos-easing="ease-in-sine"
					data-aos-duration="1000"
				>
					<p class="intro-text text-uppercase ">
						building <br />is our creed
					</p>
					<p class="message text-justify text-wrap">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						Beatae amet delectus assumenda fugit natus aliquam error, sint
						deleniti laudantium officia!
					</p>
					<div class="action-button">
						<v-btn dark color="primary" nuxt to="/portfolio">
							portfolio
						</v-btn>
						<v-btn dark color="primary" class="ml-3" to="/contact">
							contact us
						</v-btn>
					</div>
				</div>
				<div
					class="image-sect"
					data-aos="fade-left"
					data-aos-easing="ease-in-sine"
					data-aos-duration="1000"
					data-aos-delay="1000"
				>
					<img :src="img1" alt="" />
				</div>
			</div>
		</v-container>
	</div>
</template>

<script>
import img1 from '@/static/img/undraw_maker_launch_crhe.svg'

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
.index-page {
	min-height: 100%;
	background-image: url('/img/Vector-1.svg'), url('/img/Vector-2.svg'),
		url('/img/Vector.svg'), url('/img/Vector.svg');
	background-size: 30%, 15%, 30%, 20%;
	background-position: left 0% bottom -40%, right 0% bottom -10%,
		left -10% bottom -140%, right 0% bottom -60%;
	background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
}
.intro-outer-container {
	padding-top: 1rem;
	position: relative;
	@include xs {
		@include intro-outer-container;
	}
	@include sm {
		@include intro-outer-container;
	}
}

.intro-container {
	width: 40%;
	margin-right: auto;
	margin-top: 6rem;
	@include xs {
		@include intro-container;
	}
	@include sm {
		@include intro-container;
	}

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
	position: absolute;
	right: 0;
	top: 1rem;
	right: -30rem;
	@include xs {
		@include image-sect;
	}
	@include sm {
		@include image-sect;
	}
	img {
		width: 60%;
		@include xs {
			width: 100%;
		}
		@include sm {
			width: 100%;
		}
	}
}
</style>
