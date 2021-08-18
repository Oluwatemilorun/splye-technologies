<template>
  <v-row no-gutters class="pa-5 fill-height">
    <v-col v-if="e1 < 3" align-self="start" cols="12">
      <div class="d-flex justify-end align-center">
        <span class="subtitle-2 font-weight-regular">
          Already have an account?
        </span>
        <v-hover v-slot="{ hover }">
          <v-btn 
            outlined 
            :color="hover ? 'accent' : ''" 
            rounded 
            class="mx-2 font-weight-regular text-capitalize"
            to="/login"
          >
            sign in
          </v-btn>
        </v-hover>
      </div>
    </v-col>
    <v-col cols="12" :align-self="e1 > 1 ? 'center' : 'start'">
      <v-row justify="center" no-gutters>
        <v-col cols="11" sm="9"  md="8" lg="7">
          <v-stepper v-model="e1" class="elevation-0 transparent">
            <v-stepper-items>
              <v-stepper-content :step="1">
                <RegisterStepOne @submit="(d) => nextStep(1, d)" />
              </v-stepper-content>

              <v-stepper-content :step="2">
                <RegisterStepTwo @submit="(d) => nextStep(2, d)" />
              </v-stepper-content>

              <v-stepper-content :step="3">
                <RegisterOtpStep
                  :email="regData.email"
                  @resend="resendOtp"
                  @submit="(d) => nextStep(3, d)"
                />
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'secondary',
  data: () => ({
    e1: 1,
    regData: {}
  }),
  methods: {
    nextStep(step, data) {
			this.regData = { ...this.regData, ...data }
			switch (step) {
				case 1:
					this.e1 = step + 1
					break
				case 2:
					this.e1 = step + 1
					break
				case 3:
					// this.e1 = step + 1
					break
				default:
					break
			}
		},
    resendOtp() {
      // alert('resending') 
    }
  }
}
</script>

<style>

</style>