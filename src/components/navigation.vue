<template>
  <nav :class="scrolled ? 'scroll' : ''">
    <b-navbar>
      <b-navbar-brand href="/"
        ><img src="../assets/churnr-logo.png" alt=""
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ms-auto">
          <router-link to="/features">Vores løsning</router-link>

          <router-link to="/team">Om os</router-link>

          <router-link to="/contact">Kontakt</router-link>

          <b-button>Log ind</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </nav>
</template>

<script>
export default {
  name: "navigation",
  props: {
    msg: String,
  },
  data() {
    return {
      scrolled: false,
    };
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
nav {
  width: 100%;
  background: white;
  z-index: 999;
  /* box-shadow: 0px 18px 30px rgb(0 0 0 / 2%); */
}
.navbar {
  max-width: 1150px;
  height: 85px;
  margin: 0 auto;
  border-bottom: none;
}
.navbar-nav {
  display: flex !important;
  align-items: center !important;
}

.navbar ul li,
.navbar a {
  margin-right: 40px;
  padding: 0;
  color: #656565;
  text-decoration: none;
}
.navbar-brand img {
  height: 25px;
}
.btn {
  background: #0abf53;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
}
.scroll {
  box-shadow: 14px 14px 40px 0 rgb(118 126 173 / 8%);
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  transition: 0.25s all ease-in;
}
</style>
