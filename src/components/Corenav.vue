<template>
  <nav class="nav">
    <ul class="nav__links">
      <li v-for="n in nav_items">
        {{ n.label }}
        <span>{{ n.subtext }}</span>
      </li>
    </ul>

    <div class="nav__social">
      <a href="#" class="nav__social__icon">
        Facebook
      </a>

      <a href="#" class="nav__social__icon">
        Instagram
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Corenav',
  data() {
    return {
      nav_items: [
        {
          label: 'Home',
          link: '#',
        },
        {
          label: 'Central events',
          link: '#',
          subtext: 'Regent Street',
        },
        {
          label: 'Local events',
          link: '#',
          subtext: 'Universities across London',
        },
        {
          label: 'Find out more',
          link: '#',
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
  }

  .nav__links span {
    display: block;
    text-transform: initial;
  }

  .nav__social {
    margin-right: 40px;
  }

  .nav__social a {
    display: block;
    margin: 40px 0;
  }
</style>
