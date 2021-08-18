<template>
	<v-app>
		<v-row no-gutters class="fill-height">
			<v-col md="4" lg="3" class="hidden-sm-and-down bg-image">
				<v-row align="center" class="pa-5 fill-height">
					<v-col cols="12" align-self="start">
						<v-img
							src="/img/logo.png"
							alt="logo"
							height="60"
							contain
							width="120px"
						/>
					</v-col>

					<v-col cols="12" align-self="end" class="white--text">
						<p class="title font-weight-regular">
							<sup>
								<v-icon small color="white">mdi-format-quote-open</v-icon>
							</sup>
							Human resources are like natural resources; they’re often buried deep.
							You have to go looking for them; they’re not just lying around on the surface.
							<sup>
								<v-icon small color="white">mdi-format-quote-close</v-icon>
							</sup>
						</p>
						<div class="d-inline-flex align-center">
							<v-avatar tile size="70">
								<img src="/img/robbins.png" alt="robbins" />
							</v-avatar>
							<div class="ml-2">
								<div class="subtitle-2">Ken Robbins</div>
								<div class="subtitle-2 font-weight-thin">
									British Author
								</div>
							</div>
						</div>
					</v-col>
				</v-row>
			</v-col>
			<v-col cols="12" md="8" lg="9">
				<nuxt />
			</v-col>
		</v-row>
	</v-app>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.bg-image {
	background-image: 
		linear-gradient(
		rgba(16, 55, 74, 0.9),
		rgba(16, 55, 74, 0.9)
		),
		url(~/assets/WB.png);
	  background-size: cover;
    background-blend-mode: multiply;
}
</style>