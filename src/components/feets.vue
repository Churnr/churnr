<template>
  <footer>
    <div class="information">
      <img src="../assets/churnr-logo.png" alt="">
      <p>© Churnr A/S.<br>Alle rettigheder forbeholdt 2021</p>
    </div>
    <div class="menus">
      <div class="menu">
        <p><b>Information</b></p>
        <router-link to="/pricing">Priser</router-link>
        <router-link to="/about">Om os</router-link>
        <router-link to="/news">Nyheder</router-link>
        <router-link to="/contact">Kontakt</router-link>
      </div>
      <div class="menu">
        <p><b>Support</b></p>
        <a href="#">+45 42 74 12 42</a>
        <a href="#">kontakt@churnr.dk</a>
        <p>Nørgaardsvej 30</p>
        <p>2800 Lyngby</p>
      </div>
      <div class="menu">
        <p><b>Følg os</b></p>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "feets",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
footer {
  height: auto;
  width: 1150px;
  margin: 0 auto;
  padding: 75px 0;
  display: flex;
  justify-content: space-between;
}
.information {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.information p{
  line-height: 2;
  margin-bottom: 0;
}
.menus {
  display: flex;
}
.menu {
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  line-height: 3;
}
.menu p{
  line-height: 3;
  margin-bottom: 0;
  color: #454f63;
}
.menu a{
  text-decoration: none;
  color: #454f63;
}
footer img {
  width: 150px;
}
</style>