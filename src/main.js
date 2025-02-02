import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import { store } from './store/store'
import Notifications from 'vue-notification'
import Gravatar from 'vue-gravatar';

Vue.component('v-gravatar', Gravatar);
Vue.use(Notifications)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store: store,
  render: h => h(App)
}).$mount('#app')
