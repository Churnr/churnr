<template>
  <nav>
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
};
</script>

<style scoped>
nav {
  background: white;
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
  color: black;
  text-decoration: none;
}
.navbar-brand img {
  height: 25px;
}
.btn {
  background: #0ABF53;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
}
</style>
