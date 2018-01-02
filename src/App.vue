<template>
  <div class="container">
    <spine></spine>

    <transition name="fade" mode="out-in">
      <router-view
        v-bind:events=events
        v-bind:locations=locations
        :key="$route.fullPath">
      </router-view>
    </transition>
  </div>
</template>

<script>
import slugify from 'slugify';
import moment from 'moment';
import Spine from './components/Spine';

export default {
  components: {
    spine: Spine,
  },
  name: 'app',
  data() {
    return {
      events: [],
      locations: [],
      cal: [],
    };
  },
  created() {
    this.goGet();
  },
  methods: {
    goGet() {
      fetch('/static/cal/basic.json')
        .then(res => res.json())
        .then(this.simplifyCal);
    },
    simplifyCal(cal) {
      const opts = { replacement: '-', remove: /[$*_+~.()'"!\-:@]/g, lower: true };
      this.events = cal.map((x) => {
        const e = {};
        e.title = x.summary;
        e.desc = x.description;
        e.location_str = x.location;
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
};
</script>

<style>
  main {
    width: calc(100vw - 40px);
    left: 40px;
    position: absolute;
  }

  @media (min-width: 800px) {
    main {
      width: calc(100vw - 90px);
      left: 90px;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  .slide-fade-enter-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(100vw);
    opacity: 0;
  }
  .drop-enter-active, .drop-leave-active {
    transition: all 1s;
    height: 100%;
  }
  .drop-enter, .drop-leave-to {
    opacity: 0;
    height: 0;
    transform: translateY(30px);
  }
</style>
