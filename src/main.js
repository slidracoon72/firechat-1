// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import VueTypedJs from 'vue-typed-js';
import VueChatScroll from 'vue-chat-scroll';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.use(VueChatScroll);
Vue.use(VueTypedJs);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
