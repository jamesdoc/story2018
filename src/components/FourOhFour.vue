<template>
  <main class="about">
    <h1>404</h1>
    <p>Sorry this page doesn't exist</p>

    <p>
      <router-link :to="{ name: 'Location' }" class="event_btn">
        Come to an event
      </router-link>
    </p>
  </main>
</template>

<script>
export default {
  name: 'FourOhFour',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .about {
    position: absolute;
    top: 0;
    overflow-y: scroll;
    height: 100vh;
    padding: 0 15px;
    text-align: left;
    background-size: cover;
    background: url('/static/img/paper.jpg') no-repeat;
  }

  .about h1 {
    font-size: 28px;
    letter-spacing: 3px;
    text-transform: uppercase;
    max-width: 800px;
  }


   @media (min-width: 800px) {
    .about {
      padding-top: 25px;
    }

    .about h1, .about p {
      margin-left: 55px;
    }
   }
</style>
