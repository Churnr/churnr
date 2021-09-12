<template>
  <nav
    class="navbar navbar-expand-lg"
    :class="{ change_color: scrollPosition > 700 }"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="/">mundane</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Produkter</a
            >
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Privat person</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Erhvervs person</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Nyheder</a>
          </li>
          <li class="nav-item">
            <router-link to="/contact">Kontakt</router-link>
          </li>
          <button type="button" class="btn btn-primary">Opret sag</button>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navigation",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  height: 72px;
  background: transparent;
  z-index: 9999;
}
li a {
  padding: 0;
  margin: 0 20px 0 0;
  text-decoration: none;
  font-size: 16px;
  color: black;
}
.btn {
  color: white;
  background: #2196f3;
  margin: 0 0 0 10px;
  font-size: 16px;
}
.navbar-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.container-fluid {
  width: 1350px;
  padding: 0;
}
</style>