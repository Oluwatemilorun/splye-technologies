<template>
  <div>
    <h2 class="display-1 font-weight-bold mb-1">
      Get started absolutely free.
    </h2>
    <p class="subtitle-1">
      For free. No credit card needed.
    </p>
    <div class="my-5">
      <v-form>
        <v-row>
          <v-col cols="12">
            <label for="email" class="subtitle-2 font-weight-regular">
              Email address
            </label>
            <v-text-field id="email" v-model="email" type="email" dense />
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
  name: 'register-step-one',
  data: () => ({
    email: '',
  }),
  methods: {
		submit() {
			this.$emit('submit', { email: this.email })
		},
	},
}
</script>

<style>

</style>