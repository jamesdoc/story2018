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
import Spine from './components/Spine';

export default {
  components: {
    spine: Spine,
  },
  name: 'app',
  props: {
    events: {
      type: Array,
      default: () => [],
    },
    locations: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>
  * {
    box-sizing: border-box;
    font-family: Futura, 'Avenir', Helvetica, Arial, sans-serif;
  }

  body, html {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #92b3bc;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
    padding: 0;
  }

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
