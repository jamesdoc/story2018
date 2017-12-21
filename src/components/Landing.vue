<template>
  <div>
    <div class="background"></div>
    <main>

      <header class="logo">
        <h1>Story London</h1>
        <h2>22-26 January 2018</h2>
      </header>

      <section class="tag">
        <p>What's your story?</p>
        <p>Story is a week of events across London universities, exploring stories of life, meaning, and faith.</p>
      </section>

      <button class="film_btn">
        Watch the film
      </button>

      <router-link :to="{ name: 'Location' }" class="event_btn">
        Come to an event
      </router-link>

    </main>
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

.background {
  background-size: cover;
  background: url('/static/img/background.jpg') no-repeat;
  height: 100vh;
  position: absolute;
  width: calc(100vw - 90px);
  z-index: -1;
}

main {
  background-color: rgba(146, 179, 188, .2);
  height: 100vh;
  margin: 0;
  position: absolute;
}

.logo {
  background: url('/static/img/story-logotype.svg') no-repeat top center;
  background-size: contain;
  display: block;
  height: 380px;
  margin: 40px auto 0;
  max-width: 600px;
  width: 100%;
}

.logo h1 {
  text-indent: -9999px;
}

.logo h2 {
  border-bottom: 3px solid #c7dde5;
  border-top: 3px solid #c7dde5;
  color: #D7001A;
  display: inline-block;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 5px;
  padding: 10px 15px;
  text-transform: uppercase;
  margin-top: 175px;
}

.film_btn {
  background: transparent;
  border-radius: 100px;
  border: 3px solid #1B305D;
  color: #1B305D;
  cursor: pointer;
  display: block;
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 3.5px;
  line-height: 22px;
  margin: 0 auto;
  outline: none;
  padding: 10px 20px;
  text-transform: uppercase;
  transition: all .5s ease-in-out;
}

.tag {
  color: #1B305D;
  font-size: 32px;
  letter-spacing: 3.5px;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
}

.tag p:first-child {
  text-transform: uppercase;
  font-size: 52px;
  letter-spacing: 6px;
  margin: 30px 0 0;
}

.film_btn:hover {
  border-color: #C62127;
  color: #C62127;
}

.event_btn {
  border-bottom: 1px solid #1B305D;
  color: #1B305D;
  display: inline-block;
  font-size: 20px;
  letter-spacing: 1.5px;
  margin-top: 20px;
  padding: 0 2px 2px;
  text-decoration: none;
  text-transform: lowercase;
  transition: all .2s ease-in-out;
}

.event_btn:hover {
  padding-bottom: 4px;
  border-bottom-color: #C62127;
}
</style>
