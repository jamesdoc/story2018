// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import slugify from 'slugify';
import moment from 'moment';
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
          vm.simplifyCal();
          return vm;
        });
    },
    simplifyCal() {
      const opts = { replacement: '-', remove: /[$*_+~.()'"!\-:@]/g, lower: true };
      this.events = this.cal.map((x) => {
        const e = {};
        e.title = x.summary;
        e.desc = x.description;
        e.location = x.location.split(', ');
        e.dtStart = moment(x.dtstart);
        e.dtEnd = moment(x.dtend);
        e.locationSlug = slugify(e.location[0], opts);
        return e;
      });
      this.events.sort((a, b) => a.dtStart - b.dtStart);
      this.extractLocations();
    },
    extractLocations() {
      this.locations = [...new Set(this.events.map(x => x.location[0]))];
      this.locations.sort();
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
