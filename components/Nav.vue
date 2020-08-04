<template>
	<div>
		<v-app-bar app flat color="transparent" class="container app-bar">
			<v-toolbar-title>
				<nuxt-link to="/">
					<img :src="logo" alt="" width="100px" srcset="" />
				</nuxt-link>
			</v-toolbar-title>
			<v-spacer />
			<v-btn text class="hidden-sm-and-down" to="/our-story">
				our story
			</v-btn>
			<v-btn text class="hidden-sm-and-down" to="/our-services">
				our services
			</v-btn>
			<v-btn text class="hidden-sm-and-down" to="/portfolio">
				portfolio
			</v-btn>
			<v-btn text class="hidden-sm-and-down" to="/contact">
				contact us
			</v-btn>
			<v-app-bar-nav-icon
				class="hidden-md-and-up nav-toggler"
				@click.stop="drawer = !drawer"
			/>
		</v-app-bar>

		<v-navigation-drawer
			id="drawer"
			v-model="drawer"
			temporary
			absolute
			width="300"
			class="sidenav"
		>
			<v-list>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title>
							<v-btn block text to="/" class="justify-start">
								sply tech
							</v-btn>
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title>
							<v-btn
								block
								text
								to="/our-story"
								class="justify-start"
								active-class=""
							>
								our story
							</v-btn>
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title>
							<v-btn block text to="/our-services" class="justify-start">
								our services
							</v-btn>
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title>
							<v-btn block text to="/portfolio" class="justify-start">
								portfolio
							</v-btn>
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title>
							<v-btn block text to="/contact" class="justify-start">
								contact us
							</v-btn>
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script>
import logo from '@/static/img/logo.png'
export default {
	name: 'top-nav',
	data() {
		return {
			drawer: null,
			logo
		}
	}
}
</script>

<style lang="scss">
.v-app-bar.v-app-bar--fixed {
	position: unset;
}

#drawer {
	background: rgba(240, 240, 240, 1);
}

.v-toolbar__content {
	padding: 0;
	@include xs {
		padding-right: 16px;
	}
}

.v-btn {
	transition: font-weight 500ms ease-in-out;
	&::before {
		background-color: transparent;
	}

	&:hover {
		color: #434175;
	}
}
</style>
