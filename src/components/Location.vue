<template>
  <main class="locations">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="(location, i) in venueTitles" :key="i">
        <router-link :to="{ name: 'Venue', params: { id: location.slug } }">
          {{ location.title }}
        </router-link>
      </li>
    </ul>
  </main>
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
  .locations {
    position: absolute;
    top: 0;
    overflow-y: scroll;
    height: 100vh;
    padding: 0 15px;
    text-align: left;
    background-size: cover;
    background: url('/static/img/paper.jpg') no-repeat;
  }

  .locations h1 {
    text-transform: uppercase;
    letter-spacing: 2.5px;
    margin-top: 12px;
    color: #1B305B;
    max-width: 912px;
  }

  .locations ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    max-width: 912px;
  }

  .locations li {
    margin: 0;
    padding: 17px 0;
  }

  .locations a {
    color: #C62127;
    text-decoration: none;
    border-bottom: 2px solid #C62127;
    transition: padding 0.2s;
  }

  .locations a:hover {
    padding-bottom: 2px;
  }

  @media (min-width: 800px) {
    .locations ul {
      display: flex;
      flex-wrap: wrap;
    }

    .locations li {
      padding: 33px 0;
      width: 50%;
    }
  }
</style>
