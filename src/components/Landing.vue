<template>
  <div>
  
    <main>
      <div class="background"></div>

      <header class="logo">
        <h1>Story London</h1>
        <h2>22-26 January 2018</h2>
      </header>

      <section class="tag">
        <p>We all have stories to tell. What's yours?</p>
        <p>Story is a week of events across London universities, exploring stories of life, meaning, and faith.</p>
      </section>

      <section>
        <button class="film_btn">
          Watch the film
        </button>

        <router-link :to="{ name: 'Location' }" class="event_btn">
          Come to an event
        </router-link>
      </section>

    </main>
  </div>
</template>

<script>
export default {
  name: 'Landing',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

main {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  padding: 10vh 12px;
  justify-content: space-between;
  background-size: cover;
  background: url(/static/img/background.jpg) no-repeat center center;
}

.film_btn { display: none; }

.event_btn {
  color: #c62127;
  text-transform: lowercase;
  text-decoration: none;
  border-bottom: 1px solid #c62127;
  font-size: 20px;
  letter-spacing: 1px;
}

.logo h1 {
  background: url('/static/img/story-logotype.svg') no-repeat top center;
  background-size: cover;
  height: 96px;
  width: 100%;
  max-width: 296px;
  text-indent: -99999px;
  margin: 0 auto 22px;
}

.logo h2 {
  color: white;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 3.5px;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  padding: 5px 10px;
  display: inline-block;
  margin: 0;
}

.tag p:first-child {
  text-transform: uppercase;
  font-size: 28px;
  font-weight: 700;
}

@media (min-width: 800px) {
  .tag p {
    font-size: 24px;
  }
  .tag p:first-child {
    max-width: 430px;
    font-size: 35px;
    line-height: 48px;
    letter-spacing: 2px;
    margin: 0 auto;
  }

  .event_btn {
    font-size: 34px;
    border-bottom-width: 3px;
  }
}

</style>
