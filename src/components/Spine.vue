<template>
  <div>

    <div class="spine">
      <div class="spine__item spine__item--logo">
        Story
      </div>

      <div class="spine__item spine__item--nav" v-on:click="navToggle">
        Menu
      </div>
    </div>

    <corenav v-if="navOpen" />

  </div>
</template>

<script>
import Corenav from './Corenav';

export default {
  name: 'Spine',
  components: {
    corenav: Corenav,
  },
  data() {
    return {
      navOpen: false,
    };
  },
  methods: {
    navToggle() {
      this.navOpen = !this.navOpen;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .spine {
    background-color: #406d96;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    width: 90px;
    height: 100vh;
  }

  .spine__item {
    padding: 10px;
  }
</style>
