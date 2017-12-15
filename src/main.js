// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  created() {
    this.goGet();
  },
  methods: {
    goGet() {
      const vm = this;
      return fetch('static/cal/basic.json')
        .then(res => res.json())
        .then((cal) => {
          vm.cal = cal;
          return vm;
        });
    },
  },
  router,
  template: `
    <App
      v-bind:cal="cal">
    </App>
  `,
  props: {
    cal: {
      type: Array,
      default: () => [],
    },
  },
  components: { App },
});
