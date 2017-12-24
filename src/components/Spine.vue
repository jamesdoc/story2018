<template>
  <div class="sidebar">

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
        <p>Menu</p>
      </div>
    </div>

    <transition name="slide-fade" mode="out-in">
      <core-nav
        v-if="navOpen"
        v-bind="{navToggle}" />
    </transition>

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
  .spine {
    background: white;
    bottom: 0;
    box-shadow: black 1px 0px 4px 0px;
    overflow-x: hidden;
    position: absolute;
    top: 0;
    width: 40px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
  }

  .spine__item {
    padding: 5px;
  }

  .spine__item--logo {
    width: 100%;
    padding: 5px;
  }

  .spine__item--logo a {
    display: block;
    height: 30px;
    transition: transform 1s ease-in-out;
    width: 30px;
  }

  .spine__item--logo a:hover {
    transform: rotate(360deg);
  }

  .spine__item--logo img {
    width: 100%;
  }

  @media (min-width: 800px) {
    .spine {
      background-color: #406d96;
      font-size: 12px;
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

    .spine__item--logo a {
      height: 70px;
      width: 70px;
      padding: 0;
    }
  }

  .hamburger {
    display: inline-block;
    margin: 0 auto 10px;
  }

  .spine__item--nav p {
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transform: rotate(90deg);
  }

  .hamburger span {
    content: '';
    background: #DFEDF1;
    height: 5px;
    width: 26px;
    display: block;
    border-radius: 8px;
    margin: 5px 0;
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
    margin-top: -20px;
    margin-bottom: 10px;
    background-color: #1B305B;
  }

  @media (min-width: 800px) {
    .hamburger span {
      width: 45px;
      margin: 8px;
      height: 8px;
    }

    .hamburger--open span:last-child {
      margin-top: -32px;
    }
  }
</style>
