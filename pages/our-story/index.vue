<template>
	<div>
		<top-banner></top-banner>

		<v-container>
			<div
				class="my-10"
				data-aos="slide-up"
				data-aos-easing="ease-in-sine"
				data-aos-duration="1000"
			>
				<v-container>
					<p>
						For execution, our software team developed custom algorithms
						and innovative methods to briing the client’s visions to life.
					</p>
					<div class="story-container">
						<v-row class="border-bottom py-4">
							<v-col cols="12" md="2">
								<p class="text-text-uppercase">CHALLENGES</p>
							</v-col>
							<v-col cols="12" md="10">
								<p>
									Insight Communications is one of the biggest and most
									prestigious pr firms in the world. The challenge was
									to conceptualise and develop a world class website
									taking into account the client’s tastes and pedigree
									into account.
								</p>
							</v-col>
						</v-row>
						<v-row class="border-bottom py-4">
							<v-col cols="12" md="2">
								<p class="text-text-uppercase">INSIGHT AND IDEAS</p>
							</v-col>
							<v-col cols="12" md="10">
								<p>
									Insight Communications is one of the biggest and most
									prestigious pr firms in the world. The challenge was
									to conceptualise and develop a world class website
									taking into account the client’s tastes and pedigree
									into account.
								</p>
							</v-col>
						</v-row>
						<v-row class="border-bottom py-4">
							<v-col cols="12" md="2">
								<p class="text-text-uppercase">RESULT</p>
							</v-col>
							<v-col cols="12" md="10">
								<p>
									Insight Communications is one of the biggest and most
									prestigious pr firms in the world. The challenge was
									to conceptualise and develop a world class website
									taking into account the client’s tastes and pedigree
									into account.
								</p>
							</v-col>
						</v-row>
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
	components: { Footer, 'top-banner': TopBanner }
}
</script>

<style lang="scss" scoped>
p {
	color: #373737;
}

.border-bottom {
	border-bottom: 1px solid lighten(grey, 30%);
}
</style>
