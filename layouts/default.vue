<template>
	<v-app>
		<Nav />
		<v-content>
			<nuxt />
		</v-content>
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
* {
	font-family: 'Raleway';
}
.v-content {
	padding-top: 0 !important;
}
</style>
