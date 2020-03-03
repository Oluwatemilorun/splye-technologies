<template>
	<div>
		<div class="footer">
			<v-container>
				<div class="footer-links">
					<v-row>
						<v-col cols="12" sm="6" md="3" lg="4">
							<div class="d-flex justify-center flex-column ">
								<p class="text-uppercase footer-text-link">
									about us
								</p>
								<nuxt-link to="#" class="footer-link">
									who are we
								</nuxt-link>
							</div>
						</v-col>
						<v-col cols="12" sm="6" md="3" lg="4">
							<div class="d-flex justify-center flex-column ">
								<p class="text-uppercase footer-text-link">
									services
								</p>
								<nuxt-link to="#" class="footer-link">
									SOCIAL MEDIA
								</nuxt-link>
								<nuxt-link to="#" class="footer-link">
									WEB DESIGN
								</nuxt-link>
								<nuxt-link to="#" class="footer-link">
									MOBILE APP
								</nuxt-link>
							</div>
						</v-col>
						<v-col cols="12" sm="6" md="3" lg="4">
							<div class="d-flex justify-center flex-column ">
								<p class="text-uppercase footer-text-link">
									contact us
								</p>
								<nuxt-link to="#" class="footer-link">
									GET IN TOUCH
								</nuxt-link>
							</div>
						</v-col>
						<v-col cols="12" sm="6" md="3" lg="4">
							<div class="d-flex justify-center flex-column ">
								<p class="text-uppercase footer-text-link">
									OUR WORK
								</p>
								<nuxt-link to="#" class="footer-link">
									PORTFOLIO
								</nuxt-link>
							</div>
						</v-col>
					</v-row>
				</div>
				<div class="white-line"></div>
				<div class="copyright">
					<p class="text-uppercase">
						COPYRIGHT 2020 SPLYE TECHNOLOGIES DESIGN
					</p>
				</div>
			</v-container>
		</div>
	</div>
</template>

<script>
export default {
	name: 'main-footer'
}
</script>

<style lang="scss" scoped>
.footer {
	min-height: 400px;
	width: 100%;
	background-color: rgb(46, 46, 46);

	.footer-links {
		width: 60%;
		@include sm {
			width: 80%;
			margin: 2rem 0 2rem 20%;
		}
		@include xs {
			width: 100%;
			margin: 2rem;
		}
		margin: 2rem 0 2rem 25%;
		.footer-text-link {
			color: #ffffff;
			font-weight: bold;
		}

		.footer-link {
			text-decoration: none;
			color: rgb(138, 138, 138);
			text-transform: uppercase;
			font-size: 0.8rem;
			display: block;
		}
	}

	.white-line {
		width: 100%;
		border-top: 2px solid white;
	}

	.copyright {
		margin: 4rem 0;
		text-align: center;
		p {
			color: #ffffff;
		}
	}
}
</style>
