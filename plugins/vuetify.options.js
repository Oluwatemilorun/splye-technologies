import colors from 'vuetify/es5/util/colors'
import '@mdi/font/css/materialdesignicons.min.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'

const theme = {
	dark: false,
	themes: {
		light: {
			primary: colors.indigo.base,
			secondary: colors.blueGrey.darken2,
			tertiary: colors.lightGreen.darken2,
			accent: colors.pink.accent2
		}
	}
}

export default {
	// breakpoint: {},
	icons: { iconfont: 'mdi' },
	theme
}
