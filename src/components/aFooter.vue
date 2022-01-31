<template>
  <footer>
    <div class="footer-menu">
      <div class="footer-menu-column">
        <img src="../assets/churnr-logo.png" alt="" />
      </div>
      <div class="footer-menu-column">
        <h6>Oversigt</h6>
        <router-link to="/features">Vores løsning</router-link>
        <router-link to="/team">Om os</router-link>
        <router-link to="/contact">Kontakt</router-link>
      </div>
      <div class="footer-menu-column">
        <h6>Virksomhed</h6>

        <!-- Fiks den her fucking forbandede PDF link asap -->

        <a href="./brochure.pdf" target="_blank">Hvad er Churnr?</a>
        <a href="#/privacyPolicy">Privatlivsvilkår</a>
        <a href="#/cookies">Cookiepolitik</a>
      </div>
      <div class="footer-menu-column">
        <h6>Følg os</h6>
        <a
          href="https://www.facebook.com/churnr-107508725081442"
          target="_blank"
          >Facebook</a
        >
        <a href="https://twitter.com/hellochurnr" target="_blank">Twitter</a>
        <a href="https://www.linkedin.com/company/77019295/">LinkedIn</a>
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
  font-weight: 700;
  margin-bottom: 15px;
}
footer a {
  line-height: 2.5;
  opacity: 0.75;
  color: black;
  text-decoration: none;
}
</style>
