<template>
  <div class="nav" :class="scrolled ? 'scroll' : ''">
    <b-navbar toggleable="lg">
      <b-navbar-brand href="/"
        ><img src="../assets/churnr-logo.png" alt=""
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ms-auto">
          <b-nav-item><router-link to="/">Forside</router-link></b-nav-item>
          <b-nav-item
            ><router-link to="/features">Vores løsning</router-link></b-nav-item
          >
          <b-nav-item><router-link to="/team">Om os</router-link></b-nav-item>
          <b-nav-item
            ><router-link to="/contact">Kontakt</router-link></b-nav-item
          >
        </b-navbar-nav>
        <router-link to="" class="login-btn">Log ind</router-link>
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
  watch: {
    $route() {
      const element = document.querySelector("#nav-collapse");
      let isShown = element.classList.contains("show");
      if (isShown) {
        this.$root.$emit("bv::toggle::collapse", "nav-collapse");
      }
    },
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
.login-btn {
  background: #0abf53;
  border: none;
  padding: 10px 20px !important;
  font-size: 16px;
  font-weight: 500;
  color: white !important;
}
.btn:hover {
  color: white;
  opacity: 0.75 !important;
}
.scroll {
  box-shadow: 14px 14px 40px 0 rgb(118 126 173 / 8%);
  box-sizing: border-box;
  width: 100%;
}

/* Mobile media query */

@media only screen and (max-width: 728px) {
  #nav-collapse {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    background: white;
    animation: MobileFadeIn 0.25s ease-in;
  }
  .nav {
    padding: 0 25px;
  }

  /* Reinstate and make a smoother toggle animation */

  .collapsing {
    -webkit-transition: none;
    transition: none;
    display: none;
  }

  .navbar-nav,
  .navbar-nav .ml-auto .center-nav {
    align-self: left;
    margin-left: unset !important;
  }

  a {
    font-size: 20px;
    padding: 10px 0 !important;
  }
  .btn {
    display: none;
  }
  .navbar-toggler:focus {
    box-shadow: none;
  }
  .navbar-toggler {
    border: none;
  }
  .login-btn {
    display: none;
  }
  .scroll {
    box-shadow: 14px 14px 40px 0 rgb(118 126 173 / 8%);
    box-sizing: border-box;
    width: 100%;
  }
  @keyframes MobileFadeIn {
    0% {
      height: 0vh;
    }
    100% {
      height: 100vh;
    }
  }
}
</style>
