<template>
  <footer>
     <div class="footer-menu">
       <div class="footer-menu-column">
         <!-- <h6>Kontakt</h6>
         <a href="mailto:hello@churnr.dk">hello@churnr.dk</a>
         <a href="tel:+4542741242">+45 42 74 12 42</a>
         <a href="https://goo.gl/maps/6pZed9zQDxgYZiAT6" target="_blank">Nørgaardsvej 30,<br>2800 Kongens Lyngby</a> -->
         <img src="../assets/churnr-logo.png" alt="">
       </div>
       <div class="footer-menu-column">
         <h6>Oversigt</h6>
         <a href="/">Forside</a>
         <a href="#/features">Features</a>
         <a href="#/team">Team</a>
         <a href="#/contact">Kontakt</a>
       </div>
       <div class="footer-menu-column">
         <h6>Virksomhed</h6>
         <a href="#">Presse</a>
         <a href="#">Privatlivsvilkår</a>
         <a href="#">Cookiepolitik</a>
         <a href="#">Praktik</a>
       </div>
       <div class="footer-menu-column">
         <h6>Følg os</h6>
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
  name: "aFooter",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
footer {
  padding: 100px 0;
  width: 1150px;
  margin: 0 auto;
}
footer img {
  width: 125px;
  margin-bottom: 75px;
}
.footer-menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-between;
}
.footer-menu-column {
  display: flex;
  flex-direction: column;
}
footer h6 {
  font-weight: 600;
  margin-bottom: 15px;
}
footer a {
  line-height: 2.5;
  opacity: .75;
  color: black;
  text-decoration: none;
}
</style>
