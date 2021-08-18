<template>
  <div>
    <h2 class="display-1 font-weight-bold mb-1">
      Verify for your email address.
    </h2>
    <p class="subtitle-1">
      We just emailed a six-digit code to <span class="accent--text"
      >{{email}}.</span>  <br />
      Keep this window open while you check your inbox, then enter the code below
    </p>
    <div class="my-5">
      <v-form>
        <v-row>
          <v-col cols="12">
            <v-row class="flex-nowrap">
              <v-col v-for="i in otpLength" :key="i" cols class="">
                <v-text-field
                  :id="`otp-${i}`"
                  :ref="`otp-${i}`"
                  outlined
                  hide-details
                  maxlength="1"
                  class="otp-input"
                  @input="(v) => changeFocus(i, v)"
                />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <div class="d-block d-md-inline-flex">
              <span class="subtitle">
                Make sure you keep this window open while you check your inbox.
              </span>
              <v-btn
                text
                color="accent"
                class="text-capitalize"
                @click="resendOtp"
              >
                Resend Code
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" class="text-center">
            <v-hover v-slot="{ hover }">
              <v-btn 
                color="accent"
                rounded
                :outlined="hover && true"
                class="font-weight-regular text-capitalize"
                depressed
                large
                @click="submit()"
              >
                Continue
              </v-btn>
            </v-hover>
          </v-col>
        </v-row>
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'secondary',
  props: {
    email: {
      type: String,
      default: '',
    }
  },
  data: () => ({
    otpLength: 6,
		otpVal: [],
  }),
  computed: {
		otp() {
			return this.otpVal.join('')
		},
	},
  methods: {
		changeFocus(i, v) {
			if (v.length === 1 && i < this.otpLength)
				document.getElementById(`otp-${i + 1}`).focus()
			this.otpVal[i - 1] = v
		},
		submit() {
			this.$emit('submit', { otp: this.otp })
		},
    resendOtp() {
      this.$emit('resend')
    }
	},
}
</script>

<style>

</style>
