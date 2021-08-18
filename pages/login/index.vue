<template>
  <v-row align="center" class="pa-5 fill-height">
    <v-col cols="12" align-self="start">
      <div class="d-flex justify-end align-center">
        <span class="subtitle-2 font-weight-regular">
          Do not have an account?
        </span>
        <v-hover v-slot="{ hover }">
          <v-btn 
            outlined 
            :color="hover ? 'accent' : ''" 
            rounded 
            class="mx-2 font-weight-regular text-capitalize"
            to="/register"
          >
            Get Started
          </v-btn>
        </v-hover>
      </div>
    </v-col>
    <v-col cols="12">
      <v-row justify="center">
        <v-col cols="12" sm="9" md="8" lg="7">
          <h2 class="display-1 font-weight-bold mb-1">
            Sign in to Splye.
          </h2>
          <p class="subtitle-1">
            Enter your details below.
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
                  <label for="password" class="subtitle-2 font-weight-regular">
                    Password
                  </label>
                  <div class="d-flex justify-end">
                    <nuxt-link 
                      to=""
                      class="accent--text subtitle-2 font-weight-regular text-decoration-none"
                    >
                      Forgot Password?
                    </nuxt-link>
                  </div>
                  <v-text-field id="password" v-model="password" type="password" dense />
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
                    >
                      Continue
                    </v-btn>
                  </v-hover>
                </v-col>
              </v-row>
            </v-form>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'secondary',
  data: () => ({
    email: '',
    password: '',
  })
}
</script>

<style>

</style>
