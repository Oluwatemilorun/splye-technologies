import colors from 'vuetify/es5/util/colors'
import '@mdi/font/css/materialdesignicons.min.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'

const theme = {
	dark: false,
	themes: {
		light: {
			primary: '#6C63FF',
			secondary: '#413F72',
			tertiary: colors.lightGreen.darken2,
			accent: '#D13B1A'
		}
	}
}

export default {
	// breakpoint: {},
	icons: { iconfont: 'mdi' },
	theme
}
