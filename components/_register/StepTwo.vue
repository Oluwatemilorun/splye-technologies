<template>
  <div>
    <h2 class="display-1 font-weight-bold mb-1">
      Get started absolutely free.
    </h2>
    <p class="subtitle-1">
      The best platform to help you start that your amazing career.
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
          <v-col cols="12">
            <label for="name" class="subtitle-2 font-weight-regular">
              Your name
            </label>
            <v-text-field id="name" v-model="name" dense />
          </v-col>
          <v-col cols="12">
            <label for="career" class="subtitle-2 font-weight-regular">
              Career
            </label>
            <v-text-field id="career" v-model="career" dense />
          </v-col>
          <v-col cols="12" class="py-0">
            <span class="subtitle-2 font-weight-regular mr-2">
              Upload your CV
            </span>
            <v-text-field v-model="cv" type="file" placeholder="Choose File" class="d-inline-block my-0" />
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
  name: 'register-step-two',
  data: () => ({
    email: '',
    name: '',
    career: '',
    cv: null,
  }),
  methods: {
		submit() {
			this.$emit('submit', {
				email: this.email,
        name: this.name,
        career: this.career,
        cv: this.cv,
			})
		},
	},
}
</script>

<style>

</style>