<template>
	<div>
		<top-banner>
			contact us
		</top-banner>

		<v-container>
			<div class="my-10">
				<v-row>
					<v-col
						cols="12"
						md="6"
						data-aos="fade-right"
						data-aos-easing="ease-in-sine"
						data-aos-duration="1000"
					>
						<div class="message-area">
							<p class="area-title">send your container</p>
							<div class="form-container">
								<v-form>
									<v-text-field
										label="Name"
										outlined
										required
									></v-text-field>
									<v-text-field
										label="Email"
										outlined
										required
									></v-text-field>
									<v-text-field
										label="Subject"
										outlined
										required
									></v-text-field>
									<v-textarea
										label="Message"
										outlined
										required
									></v-textarea>
									<div class="text-center">
										<v-btn dark color="#6C63FF">send</v-btn>
									</div>
								</v-form>
							</div>
						</div>
					</v-col>
					<v-col
						cols="12"
						md="6"
						data-aos="fade-left"
						data-aos-easing="ease-in-sine"
						data-aos-duration="1000"
					>
						<div class="contact-area px-11">
							<p class="area-title">contact</p>
							<div class="contact-container">
								<p>
									<v-icon> mdi-message </v-icon>
									<span>HELLO@SPLYETECH.COM</span>
								</p>
								<p>
									<v-icon> mdi-phone </v-icon>
									<span>+2348165132356</span>
								</p>
								<p>
									<v-icon> mdi-map </v-icon>
									<span class="text-uppercase">PLOT 8</span>
								</p>
							</div>
						</div>
					</v-col>
				</v-row>
			</div>
		</v-container>

		<Footer
			data-aos="zoom-in-left"
			data-aos-duration="500"
			data-aos-easing="ease-in-out-sine"
		></Footer>
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
.area-title {
	color: #413f72;
	text-transform: uppercase;
	font-weight: bold;
}
</style>
