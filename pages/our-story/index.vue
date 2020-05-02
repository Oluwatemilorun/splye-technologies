<!-- eslint-disable vue/html-self-closing -->
<template>
	<div>
		<top-banner>
			our story
		</top-banner>

		<v-container>
			<div
				class="my-10"
				data-aos="slide-up"
				data-aos-easing="ease-in-sine"
				data-aos-duration="1000"
			>
				<v-container>
					<div class="story-container">
						<div class="site-brand text-center ">
							<img src="/img/logo.png" alt="" />
						</div>
						<div class="text-area">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incididunt ut labore et dolore
								magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat. Duis aute irure dolor in
								reprehenderit in voluptate velit esse cillum dolore eu
								fugiat nulla pariatur. Excepteur sint occaecat cupidatat
								non proident, sunt in culpa qui officia deserunt mollit
								anim id est laborum.
							</p>
							<p>
								Sed ut perspiciatis unde omnis iste natus error sit
								voluptatem accusantium doloremque laudantium, totam rem
								aperiam, eaque ipsa quae ab illo inventore veritatis et
								quasi architecto beatae vitae dicta sunt explicabo. Nemo
								enim ipsam voluptatem quia voluptas sit aspernatur aut
								odit aut fugit, sed quia consequuntur magni dolores eos
								qui ratione voluptatem sequi nesciunt.
							</p>
							<p>
								Neque porro quisquam est, qui dolorem ipsum quia dolor
								sit amet, consectetur, adipisci velit, sed quia non
								numquam eius modi tempora incidunt ut labore et dolore
								magnam aliquam quaerat voluptatem. Ut enim ad minima
								veniam, quis nostrum exercitationem ullam corporis
								suscipit laboriosam, nisi ut aliquid ex ea commodi
								consequatur? Quis autem vel eum iure reprehenderit qui
								in ea voluptate velit esse quam nihil molestiae
								consequatur,
							</p>
						</div>
						<div class="team-container">
							<p class="title">
								our team
							</p>
							<v-row class="fill-height" align="center">
								<template v-for="(item, i) in team">
									<v-col :key="i" cols="12" md="3">
										<v-hover v-slot:default="{ hover }">
											<v-card :class="{ 'on-hover': hover }">
												<v-img :src="item.img" height="400px">
													<div class="team-detail-cont">
														<div class="team-detail">
															<p>
																{{ item.name }}
															</p>
															<p>
																{{ item.role }}
															</p>
														</div>
													</div>
												</v-img>
											</v-card>
										</v-hover>
									</v-col>
								</template>
							</v-row>
						</div>
					</div>
				</v-container>
			</div>
		</v-container>

		<Footer />
	</div>
</template>

<script>
import TopBanner from '@/components/TopBanner'
import Footer from '@/components/Footer'

export default {
	components: { Footer, 'top-banner': TopBanner },
	data: () => ({
		icons: ['mdi-rewind', 'mdi-play', 'mdi-fast-forward'],
		team: [
			{
				name: 'KALU C. KALU',
				role: 'UI/UX',
				img: '/img/kalu.png'
			},
			{
				name: 'KALU C. KALU',
				role: 'UI/UX',
				img: '/img/p2.png'
			},
			{
				name: 'KALU C. KALU',
				role: 'UI/UX',
				img: '/img/p2.png'
			},
			{
				name: 'KALU C. KALU',
				role: 'UI/UX',
				img: '/img/p2.png'
			}
		],
		transparent: 'rgba(255, 255, 255, 0)'
	})
}
</script>

<style lang="scss" scoped>
.v-card,
.team-detail,
.team-detail-cont {
	transition: all 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
	// opacity: 0.6;
	background-color: #000;
	.team-detail {
		display: none;
	}
	.team-detail-cont {
		background-color: rgba(0, 0, 0, 0.5);
	}
}

.team-detail {
	background-color: rgba(0, 0, 0, 0.698);
	width: 100%;
	margin-top: auto;
	padding: 1rem 0;
	p {
		color: #fff;
		text-align: center;
		margin-bottom: 0.2rem;
	}
}

.team-detail-cont {
	display: flex;
	height: 100%;
}

p {
	color: #373737;
}

.border-bottom {
	border-bottom: 1px solid lighten(grey, 30%);
}

.text-area {
	width: 80%;
	margin: 3rem auto;
	text-align: center;
	@include sm {
		width: 100%;
	}
}

.team-container {
	margin: 2rem 0;
	p.title {
		text-align: center;
		text-transform: uppercase;
		font-size: 2rem;
	}
}
</style>
