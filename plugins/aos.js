/* eslint-disable prettier/prettier */
import AOS from 'aos'

import 'aos/dist/aos.css'

export default ({ app }) => {
  // eslint-disable-next-line prettier/prettier
  app.AOS = new AOS.init({ disable: 'phone' }) // eslint-disable-line new-cap
}
