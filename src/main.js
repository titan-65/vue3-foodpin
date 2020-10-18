import { createApp } from 'vue'
import App from './App.vue'

import './assets/styles/index.css'
import './assets/styles/material-kit.min_v=2.2.0.css'



import BaseCard from './components/UI/BaseCard.vue'
import BaseModal from './components/UI/BaseModal.vue'

const app = createApp(App)

app.component('base-card', BaseCard)
app.component('base-modal', BaseModal)
app.mount('#app')
