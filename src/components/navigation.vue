<template>
  <div class="nav" :class="scrolled ? 'scroll' : ''">
    <b-navbar toggleable="lg">
      <b-navbar-brand href="/"
        ><img src="../assets/churnr-logo.png" alt=""
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ms-auto">
          <b-nav-item href="#"
            ><router-link to="/features">Vores løsning</router-link></b-nav-item
          >
          <b-nav-item href="#"
            ><router-link to="/team">Om os</router-link></b-nav-item
          >
          <b-nav-item href="#"
            ><router-link to="/contact">Kontakt</router-link></b-nav-item
          >
        </b-navbar-nav>
        <button href="#" class="btn">Log ind</button>
      </b-collapse>
    </b-navbar>
  </div>
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
.nav {
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  background: white;
  z-index: 999;
}
.navbar {
  width: 1150px !important;
  height: 85px;
  margin: 0 auto;
  border-bottom: none;
}

.navbar ul li,
.navbar a {
  margin-right: 7.5px;
  padding: 0;
  color: #333333;
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
  font-weight: 500;
  color: white;
}
.scroll {
  box-shadow: 14px 14px 40px 0 rgb(118 126 173 / 8%);
  box-sizing: border-box;
  width: 100%;
}

/* Mobile media query */

@media only screen and (max-width: 728px) {
  .nav {
    box-sizing: border-box;
    position: fixed;
    width: 100%;
    background: white;
    z-index: 999;
    padding: 0 25px;
  }
  .navbar {
    width: 100%;
    height: 85px;
    margin: 0 auto;
    border-bottom: none;
  }

  .navbar ul li,
  .navbar a {
    margin-right: 7.5px;
    padding: 0;
    color: #333333;
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
    font-weight: 500;
    color: white;
  }
  .scroll {
    box-shadow: 14px 14px 40px 0 rgb(118 126 173 / 8%);
    box-sizing: border-box;
    width: 100%;
  }
}
</style>
