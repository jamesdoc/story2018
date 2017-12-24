// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import slugify from 'slugify';
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
          vm.simplifyCal();
          return vm;
        });
    },
    simplifyCal() {
      const opts = { replacement: '-', remove: null, lower: true };
      this.events = this.cal.map((x) => {
        const e = {};
        e.title = x.summary;
        e.desc = x.description;
        e.location = x.location.split(', ');
        e.dtStart = x.dtstart;
        e.dtEnd = x.dtend;
        e.locationSlug = slugify(e.location[0], opts);
        return e;
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
      v-bind:events="events" />
  `,
  props: {
    locations: {
      type: Array,
      default: () => [],
    },
    events: {
      type: Array,
      default: () => [],
    },
  },
  components: { App },
});
