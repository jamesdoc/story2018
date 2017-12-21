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
      return fetch('/static/cal/basic.json')
        .then(res => res.json())
        .then((cal) => {
          vm.cal = cal;
          vm.extractLocations();
          return vm;
        });
    },
    extractLocations() {
      this.locations = [...new Set(this.cal.map(x => x.location))];
    },
  },
  router,
  template: `
    <App
      v-bind:locations="locations"
      v-bind:cal="cal" />
  `,
  props: {
    cal: {
      type: Array,
      default: () => [],
    },
    locations: {
      type: Array,
      default: () => [],
    },
  },
  components: { App },
});
