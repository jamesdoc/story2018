<template>
  <main v-if="locationEvents.length">
    <h1 class="venueTitle">{{ locationEvents[0]['location'][0] }}</h1>
    <a :href="'https://www.google.com/maps?hl=en&q=' + locationEvents[0]['location_str']" class="venueMap" target="_blank" rel="noopener">Go to map</a>
    <div class="events">
      <event-detail
        v-for="(events, i) in locationEvents"
        :key="i"
        v-bind:details=events />
    </div>
  </main>
</template>

<script>
import eventDetail from './EventDetail';

export default {
  name: 'Venue',
  components: {
    eventDetail,
  },
  computed: {
    locationEvents() {
      return this.events.filter((x) => {
        if (x.locationSlug === this.$route.params.id) {
          return x;
        }
        return false;
      });
    },

  },
  data() {
    return {
      title: 'Venue',
      cal: [],
    };
  },
  props: {
    events: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    padding: 12px;
    justify-content: start;
    background-size: cover;
    background: url(/static/img/background.jpg) no-repeat center center;
  }

  .venueTitle {
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0 0 10px;
  }

  .venueMap {
    text-align: left;
    text-decoration: none;
    color: #c62127;
    text-transform: lowercase;
    transition: padding 0.2s;
    margin-bottom: 30px;
  }

  .venueMap:hover {
    text-decoration: underline;
  }

  @media (min-width: 800px) {
    .events {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
</style>
