<template>
	<div>
		<v-toolbar class="nav-toolbar" flat>
			<v-container>
				<div class="navbar">
					<v-toolbar-title>
						<nuxt-link to="/">
							splye
						</nuxt-link>
					</v-toolbar-title>
					<div class="navbar-nav hidden-sm-and-down">
						<li class="nav-item">
							<nuxt-link to="our-story" class="nav-link">
								our story
							</nuxt-link>
						</li>
						<li class="nav-item">
							<nuxt-link to="our-services" class="nav-link">
								our services
							</nuxt-link>
						</li>
						<li class="nav-item">
							<nuxt-link to="portfolio" class="nav-link">
								portfolio
							</nuxt-link>
						</li>
						<li class="nav-item">
							<nuxt-link to="contact" class="nav-link">
								contact us
							</nuxt-link>
						</li>
					</div>
					<v-app-bar-nav-icon
						@click.stop="drawer = !drawer"
						class="hidden-md-and-up nav-toggler"
					>
					</v-app-bar-nav-icon>
				</div>
			</v-container>
		</v-toolbar>

		<v-navigation-drawer
			id="drawer"
			v-model="drawer"
			temporary
			absolute
			width="300"
			class="sidenav"
		>
			<div class="site-logo">
				sply tech
			</div>
			<div class="sidenav-nav">
				<li class="sidenav-link">
					<nuxt-link to="our-story">
						our story
					</nuxt-link>
				</li>
				<li class="sidenav-link">
					<nuxt-link to="our-services">
						our services
					</nuxt-link>
				</li>
				<li class="sidenav-link">
					<nuxt-link to="portfolio">
						portfolio
					</nuxt-link>
				</li>
				<li class="sidenav-link">
					<nuxt-link to="contact">
						contact us
					</nuxt-link>
				</li>
			</div>
		</v-navigation-drawer>
	</div>
</template>

<script>
export default {
	name: 'top-nav',
	data() {
		return {
			drawer: null
		}
	}
}
</script>

<style lang="scss">
#drawer {
	background: rgba(240, 240, 240, 1);
}

.nav-toolbar {
	min-height: 100px;
	background-color: transparent !important;
	.navbar {
		display: flex;
		padding-top: 2rem;
		align-items: center;
		.navbar-nav {
			display: flex;
			margin-left: auto;
		}

		.nav-toggler {
			margin-left: auto;
		}

		.nav-item {
			list-style: none;
			padding: 0.5rem;
			&:not(:last-child) {
				margin-right: 1rem;
			}

			.nav-link {
				color: black;
				text-transform: uppercase;
				text-decoration: none;
			}
		}
	}
}

.sidenav {
	padding: 2rem;
	.site-logo {
		margin-bottom: 2rem;
		text-transform: uppercase;
	}

	.sidenav-link {
		padding: 0.5rem 0;
		a {
			text-decoration: none;
			text-transform: capitalize;
			color: #434175;
			&:hover {
				color: hsla(242, 29%, 36%, 0.479) !important;
			}
		}
	}
}
</style>
