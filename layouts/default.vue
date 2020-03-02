<template>
	<v-app>
		<Nav></Nav>
		<nuxt />
	</v-app>
</template>

<script>
import Nav from '@/components/Nav'

export default {
	components: { Nav },
	data() {
		return {}
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');

* {
	font-family: 'Raleway';
}
</style>
