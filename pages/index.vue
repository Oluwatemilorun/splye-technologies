<template>
	<div>
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
						<nuxt-link to="portfolio">
							<v-btn dark color="#6C63FF">portfolio</v-btn>
						</nuxt-link>
						<nuxt-link to="contact">
							<v-btn dark color="#6C63FF" class="ml-3">contact us</v-btn>
						</nuxt-link>
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
	position: relative;
	@include sm {
		padding: 0 1rem;
	}
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
	top: 0;
	right: -30rem;
	top: 0rem;
	@include xs {
		@include image-sect;
	}
	@include sm {
		@include image-sect;
	}
	img {
		width: 75%;
		@include xs {
			width: 100%;
		}
		@include sm {
			width: 100%;
		}
	}
}
</style>
