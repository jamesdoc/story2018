<template>
  <nav class="nav">
    <ul class="nav__links">
      <li v-for="(n, i) in nav_items" :key="i">
        <router-link :to="{ name: n.route }" v-on:click.native="navToggle()">
          {{ n.label }}
          <span>{{ n.subtext }}</span>
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
    width: calc(100vw - 90px);
    background: #92B3BC;
    left: 90px;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    animation-duration: 1s;
    animation-name: slidein;
  }

  @keyframes slidein {
    from {
      left: -100vw;
    }

    to {
      left: 90px;
    }
  }

  .nav__links {
    display: block;
    list-style-type: none;
    margin: 0;
    text-align: left;
    text-transform: uppercase;
  }

  .nav__links li {
    margin: 40px 0;
    font-size: 40px;
    letter-spacing: 8px;
    font-weight: 700;
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
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 3px;
  }

  .nav__social {
    margin-right: 40px;
  }

  .nav__social a {
    display: block;
    margin: 40px 0;
  }
</style>
