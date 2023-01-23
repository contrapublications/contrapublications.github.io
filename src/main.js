import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import App from './App.vue'
import App from './Test.vue'
// import App from './components/Header/Header.vue'
// import App from './components/MenuInfoBlock/DateTimeSlider.vue'
// import App from './components/MenuInfoBlock/Publications.vue'
// import App from './components/MenuInfoBlock/MenuInfoBlock.vue'

import './assets/main.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')

// if pinia is remove used this init
// createApp(App).mount('#app')
