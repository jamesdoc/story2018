<template>
  <div>

    <div class="spine">
      <div class="spine__item spine__item--logo">
        <router-link :to="{ name: 'Landing' }">
          <img src="/static/img/story-button.svg">
        </router-link>
      </div>

      <div class="spine__item spine__item--nav" @click="navOpen = !navOpen">
        <div class="hamburger" v-bind:class="{ 'hamburger--open': navOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
        Menu
      </div>
    </div>

    <core-nav
      v-if="navOpen"
      v-bind="{navToggle}" />

  </div>
</template>

<script>
import coreNav from './Corenav';

export default {
  name: 'Spine',
  components: {
    coreNav,
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
  .hamburger {
    display: inline-block;
    margin: 0 auto 10px;
  }

  .hamburger span {
    content: '';
    background: #DFEDF1;
    height: 8px;
    width: 45px;
    display: block;
    border-radius: 8px;
    margin: 8px 0;
    transition: all 1s;
  }

  .hamburger span:last-child {
    margin-bottom: 0;
  }

  .hamburger--open span {
    opacity: 0;
  }

  .hamburger--open span:first-child {
    opacity: 1;
    transform: rotate(45deg);
    transform-origin: bottom;
    margin-top: 20px;
    background-color: #C62127;
  }

  .hamburger--open span:last-child {
    opacity: 1;
    transform: rotate(-45deg);
    transform-origin: bottom;
    margin-top: -32px;
    margin-bottom: 10px;
    background-color: #1B305B;
  }

  .spine {
    background-color: #406d96;
    display: flex;
    flex-direction: column-reverse;
    font-size: 12px;
    font-weight: 700;
    height: 100vh;
    justify-content: space-between;
    letter-spacing: 1px;
    position: relative;
    text-transform: uppercase;
    width: 90px;
    z-index: 2;
  }

  .spine__item {
    padding: 10px;
  }

  .spine__item--nav {
    cursor: pointer;
    transition: all .5s;
  }

  .spine__item--nav:hover {
    color: #DFEDF1;
  }

  .spine__item--logo {
    height: 70px;
    margin: 10px auto;
    width: 70px;
    padding: 0;
  }

  .spine__item--logo a {
    display: block;
    height: 70px;
    transition: all 1s ease-in-out;
    width: 70px;
  }

  .spine__item--logo a:hover {
    transform: rotate(360deg);
  }

  .spine__item--logo img {
    width: 100%;
  }
</style>
