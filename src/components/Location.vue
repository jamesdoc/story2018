<template>
  <div>
    <h1>{{ title }}</h1>
    <li v-for="(location, i) in venueTitles" :key="i">
      <router-link :to="{ name: 'Venue', params: { id: location } }">
        {{ location }}
      </router-link>
    </li>
  </div>
</template>

<script>
  export default {
    name: 'Location',
    created() {
      this.venueTitles = this.locations.map(x => x.split(', ')[0]);
      this.venueTitles.sort();
    },
    props: {
      locations: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        title: 'Locations',
      };
    },
  };
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
