<template>
  <div class="hello">
    <ul>
      <li v-for="(c, i) in cal" :key="i">
        {{ c.summary }}
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'Landing',
  props: {
    cal: {
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
