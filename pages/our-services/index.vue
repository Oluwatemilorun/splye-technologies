<template>
	<div>
		<top-banner>
			our services
		</top-banner>

		<v-container>
			<div class="services-sect my-10">
				<v-row>
					<v-col cols="12">
						<v-row>
							<v-col
								v-for="data in servicesData"
								:key="data.id"
								cols="12"
								sm="6"
								md="4"
							>
								<div
									class="services d-flex flex-column justify-center align-center text-center px-7"
									data-aos="flip-up"
									data-aos-easing="ease-in-sine"
									data-aos-duration="1000"
								>
									<img :src="data.img" :alt="data.title" />
									<p class="text-text-uppercase">
										{{ data.title }}
									</p>
									<p class="text-text-uppercase">
										{{ data.details }}
									</p>
								</div>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</div>

			<div
				class="my-12 justify-center align-center d-flex"
				data-aos="zoom-in"
				data-aos-duration="1000"
			>
				<v-btn outlined>Contact us</v-btn>
			</div>
		</v-container>

		<Footer
			data-aos="zoom-in-left"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out-sine"
		></Footer>
	</div>
</template>

<script>
import imgIcon from '@/static/icon.png'
import TopBanner from '@/components/TopBanner'
import Footer from '@/components/Footer'

export default {
	components: { Footer, 'top-banner': TopBanner },
	data: () => ({
		absolute: true,
		overlay: true,
		servicesData: services
	})
}

const services = [
	{
		id: 1,
		img: imgIcon,
		title: 'SOCIAL MEDIA',
		details:
			'Experts a social media content creation, page growth, daily management, tracking and analytics.'
	},
	{
		id: 2,
		img: imgIcon,
		title: 'MOBILE APP',
		details:
			'We create fully functional and tested mobile applications, deployable on iOS and android'
	},
	{
		id: 3,
		img: imgIcon,
		title: 'WEB DESIGN',
		details:
			'Our developers are skilled at producing aesthetically pleasing and SEO compliant websites.'
	}
]
</script>

<style lang="scss" scoped>
.services-sect {
	.services {
		height: 300px;
		img {
			width: 20%;
		}
	}
}
</style>
