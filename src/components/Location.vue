<template>
  <div>
    <h1>{{ title }}</h1>
    <li v-for="(location, i) in venueTitles" :key="i">
      <router-link :to="{ name: 'Venue', params: { id: location.slug } }">
        {{ location.title }}
      </router-link>
    </li>
  </div>
</template>

<script>
  import slugify from 'slugify';

  export default {
    name: 'Location',
    created() {
      const opts = { replacement: '-', remove: /[$*_+~.()'"!\-:@]/g, lower: true };
      this.venueTitles = this.locations.map((x) => {
        const e = {};
        e.title = x;
        e.slug = slugify(x, opts);
        return e;
      });
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
