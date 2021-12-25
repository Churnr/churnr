<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"><img class="logo" src="../assets/churnr-logo.png" alt=""></a>
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
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Features
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Om os
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
          <li class="nav-item">
            <router-link to="/contact">Kontakt</router-link>
          </li>
        </ul>
        <button type="button" class="btn btn-success">Book et møde</button>
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
  height: 80px;
  background: transparent;
  z-index: 9999;
  border-bottom: 1px solid #e4e5e7;
  position: fixed;
  width: 100%;
  background: white;
}
li a {
  padding: 0;
  margin: 0 50px 0 0;
  text-decoration: none;
  font-size: 16px;
  color: black;
  font-weight: 500;
}
#navbarDropdown {
  padding: 0;
}
.btn {
  color: white;
  margin: 0 0 0 10px;
  font-size: 16px;
}
.navbar-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.container-fluid {
  width: 1150px;
  padding: 0;
}
.logo {
  height: 38px;
}
</style>