<template>
  <div>
    <h1>{{ locationEvents[0]['location'][0] }}</h1>
    {{ locationEvents }}
  </div>
</template>

<script>
export default {
  name: 'Venue',
  methods: {
    collectEvents() {
      const vm = this;
      vm.locationEvents = vm.events.filter((x) => {
        if (x.locationSlug === this.$route.params.id) {
          return x;
        }
        return false;
      });
    },
  },
  created() {
    this.collectEvents();
  },
  data() {
    return {
      title: 'Venue',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
