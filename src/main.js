
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faAlignLeft, faArrowRight, faArrowLeft, faPlus, faPaperPlane, faChevronRight, faChartBar, faAt, faDollarSign, faUsers, faExclamationCircle, faBriefcase, faTableCellsLarge, faPowerOff, faTv, faLink, faLayerGroup, faMicrochip, faSearch, faDownload, faClock, faBell, faCheck, faBars, faTimes, faUser, faChartLine, faBook, faShieldHalved, faLifeRing, faStar, faFeather, faCommentDots, faCartShopping, faFileCirclePlus, faUserPlus, faMaximize, faMinimize, faMoon, faSun, faPodcast, faSquareCheck, faBold } from '@fortawesome/free-solid-svg-icons'
import { faBluetoothB } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faAlignLeft, faArrowRight, faArrowLeft, faPlus, faPaperPlane, faChevronRight, faChartBar, faAt, faDollarSign, faUsers, faExclamationCircle, faBriefcase, faTableCellsLarge, faPowerOff, faTv, faLink, faLayerGroup, faMicrochip, faSearch, faDownload, faClock, faBell, faCheck, faBars, faTimes, faUser, faChartLine, faBook, faShieldHalved, faLifeRing, faStar, faFeather, faCommentDots, faBluetoothB, faCartShopping, faFileCirclePlus, faUserPlus, faMaximize, faMinimize, faMoon, faSun, faPodcast, faSquareCheck, faBold)

const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon) // Register FontAwesomeIcon globally
app.mount('#app')
