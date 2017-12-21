<template>
  <div class="container">
    <spine></spine>
    <router-view
      v-bind:cal=cal>
    </router-view>
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
    cal: {
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

  body {
    background-color: #92b3bc;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
    padding: 0;
  }

  .container {
    display: flex;
    height: 100vh;
  }

  main {
    width: calc(100vw - 90px);
  }
</style>
