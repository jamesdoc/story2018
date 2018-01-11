<template>
  <nav class="nav">
    <ul class="nav__links">
      <li>
        <router-link :to="{ name: 'Landing' }" v-on:click.native="navToggle()">
          Home
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Venue', params: { id: 'all-souls-langham-place' } }" v-on:click.native="navToggle()">
          Central events
          <span>Regents Street</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Location' }" v-on:click.native="navToggle()">
          Local events
          <span>Universities across London</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'About' }" v-on:click.native="navToggle()">
          Find out more
        </router-link>
      </li>
    </ul>

    <div class="nav__social">
      <a href="https://www.facebook.com/storylondon2018/" class="nav__social__icon nav__social__icon--facebook" target="_blank" rel="noopener">
        Facebook
      </a>

      <a href="https://www.instagram.com/storylondon2018/" class="nav__social__icon nav__social__icon--instagram" target="_blank" rel="noopener">
        Instagram
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Corenav',
  props: {
    navToggle: {
      type: Function,
    },
  },
};
</script>

<style scoped>
  .nav {
    position: fixed;
    top: 0;
    width: calc(100vw - 40px);
    background: #92B3BC;
    left: 40px;
    bottom: 0;
    z-index: 1;
    pointer-events: all;
  }

  .nav__links {
    display: flex;
    flex-direction: column;
    height: 50vh;
    margin: 25vh 0;
    justify-content: space-between;
    list-style-type: none;
    padding: 0 0 0 12px;
    text-align: left;
    text-transform: uppercase;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 5px;
  }

  .nav__links li {
    transition: margin .2s;
  }

  .nav__links li a {
    text-decoration: none;
    color: #1B305B;
    transition: all .2s;
  }

  .nav__links li a:hover {
    color: #406d96;
  }

  .nav__links span {
    display: block;
    text-transform: initial;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 3px;
  }

  .nav__social {
    position: absolute;
    bottom: 20px;
    display: block;
  }

  .nav__social a {
    text-decoration: none;
    margin-left: 12px;
    color: #c62228;
    font-weight: bold;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .nav__social a:hover {
    color: #1b315b;
  }

  @media (min-width: 800px) {
    .nav {
      width: calc(100vw - 90px);
      left: 90px;
    }

    .nav__links {
      padding-left: 50px;
      font-size: 45px;
      height: 66vh;
      margin: 17vh 0;
    }

    .nav__links li:hover {
      margin-left: 20px;
    }

    .nav__social {
      right: 50px;
      top: 0;
      display: flex;
      margin: 25vw 0;
      flex-direction: column;
      justify-content: space-between;
    }

    .nav__social a{
      display: block;
    }

    .nav__social__icon {
      background-color: #c6dee5;
      background-repeat: no-repeat;
      background-position: center center;
      border-radius: 50%;
      box-shadow: 0 0 0 4px #92b3bc, 0 0 0 6px #c6dee5;
      color: #c62127;
      display: block;
      display: flex;
      flex-direction: column;
      flex: 0 0 auto;
      height: 75px;
      justify-content: center;
      margin-bottom: 50px;
      text-indent: -9999999px;
      width: 75px;
      transition: box-shadow .2s;
    }

    .nav__social__icon:hover {
      box-shadow: 0 0 0 4px #c62228, 0 0 0 6px #c6dee5;
    }

    .nav__social__icon--instagram {
      background-image: url('/static/img/instagram.svg');
    }

    .nav__social__icon--facebook {
      background-image: url('/static/img/facebook.svg');
    }
  }
</style>
