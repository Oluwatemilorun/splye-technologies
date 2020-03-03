<template>
	<div>
		<top-banner>
			our profile
		</top-banner>

		<v-container>
			<div class="profiles my-10">
				<v-row>
					<v-col cols="12">
						<v-row>
							<v-col
								v-for="data in profileData"
								:key="data.id"
								cols="12"
								sm="6"
								md="4"
								lg="3"
							>
								<div
									class="profile-card"
									data-aos="fade-left"
									data-aos-easing="ease-in-sine"
									data-aos-duration="1000"
								>
									<img :src="data.img" :alt="data.name" />
									<v-overlay :absolute="absolute" :value="true">
										<p>{{ data.name }}</p>
										<p>{{ data.type }}</p>
										<v-btn outlined>View</v-btn>
									</v-overlay>
								</div>
							</v-col>
						</v-row>
					</v-col>
				</v-row>
			</div>

			<div
				class="my-12 justify-center align-center d-flex"
				data-aos="fade-right"
				data-aos-easing="ease-in-sine"
				data-aos-duration="1000"
			>
				<nuxt-link to="contact">
					<v-btn outlined>Contact us</v-btn>
				</nuxt-link>
			</div>
		</v-container>

		<Footer
			data-aos="fade-left"
			data-aos-easing="ease-in-sine"
			data-aos-duration="1000"
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
		profileData: profiles
	})
}

const profiles = [
	{
		id: 1,
		img: imgIcon,
		name: 'nimcure',
		type: 'software',
		details: 'lorem'
	},
	{
		id: 2,
		img: imgIcon,
		name: 'nimcure',
		type: 'software',
		details: 'lorem'
	},
	{
		id: 3,
		img: imgIcon,
		name: 'nimcure',
		type: 'software',
		details: 'lorem'
	},
	{
		id: 4,
		img: imgIcon,
		name: 'nimcure',
		type: 'software',
		details: 'lorem'
	}
]
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

.profiles {
	.profile-card {
		height: 300px;
		background-color: #000;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: display all 2000ms;
		img {
			width: 20%;
		}
		.v-overlay {
			display: none;
			text-align: center;
			text-transform: capitalize;
			transition: display all 2000ms;
			p {
				&:first-child {
					text-transform: uppercase;
					font-size: 2rem;
				}
			}
			.v-overlay__scrim {
				opacity: 0.8;
			}
		}
		&:hover {
			.v-overlay {
				display: flex;
			}
		}
	}
}
</style>
