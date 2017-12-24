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
      <a href="https://www.facebook.com/storylondon2018/" class="nav__social__icon" target="_blank" rel="noopener">
        Facebook
      </a>

      <a href="https://www.instagram.com/storylondon2018/" class="nav__social__icon" target="_blank" rel="noopener">
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
  data() {
    return {
      nav_items: [
        {
          label: 'Home',
          route: 'Landing',
        },
        {
          label: 'Central events',
          route: 'Landing',
          subtext: 'Regent Street',
        },
        {
          label: 'Local events',
          route: 'Location',
          subtext: 'Universities across London',
        },
        {
          label: 'Find out more',
          route: 'About',
        },
      ],
    };
  },
};
</script>

<style scoped>
  .nav {
    position: absolute;
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
  }



  /* .nav__links li {
    margin: 40px 0;
    font-size: 40px;
    letter-spacing: 8px;
    font-weight: 700;
  }

  .nav__social {
    margin-right: 40px;
  }

  .nav__social a {
    display: block;
    margin: 40px 0;
  } */
</style>
