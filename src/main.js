import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSplide from '@splidejs/vue-splide';
import * as VueGoogleMaps from "vue2-google-maps";
import 'core-js/stable';
import 'regenerator-runtime/runtime';

Vue.use(VueGoogleMaps, {
  load: {
    key: "",
  }
});


Vue.config.productionTip = false
Vue.use( VueSplide );

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
