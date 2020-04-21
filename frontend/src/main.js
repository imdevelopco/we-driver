
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import router from './router';
import { VueSpinners } from '@saeris/vue-spinners'

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";
import Notifications from "./components/NotificationPlugin";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";
//Chartist
import Chartist from "chartist";

//state
import { store } from './store'


Vue.use(VueSpinners)
Vue.prototype.$Chartist = Chartist;

Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(Notifications);


/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  store,
  router,
  data: {
    Chartist: Chartist
  }
});
