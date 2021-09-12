<template>
    <footer>
        <div class="footer-column">
            <h3>LOGO</h3>
        </div>
        <div class="footer-column">
            <h3>Produkt</h3>
            <p>Privat person</p>
            <p>Erhvers person</p>
            <p>Privat person</p>
            <p>Erhvers person</p>
        </div>
        <div class="footer-column">
            <h3>Nyheder</h3>
            <p>Privat person</p>
            <p>Erhvers person</p>
            <p>Privat person</p>
            <p>Erhvers person</p>
        </div>
        <div class="footer-column">
            <h3>Resourcer</h3>
            <p>Betingelser</p>
            <p>Privatlivspolitik</p>
            <p>Presse</p>
            <p>Job</p>
        </div>
        <div class="footer-column">
            <h3>Kontakt</h3>
            <p>hej@mundane.dk</p>
            <p>+45 42 74 12 42</p>
            <p>CVR-NR: 12345678</p>
            <p>Rutevejledning</p>
        </div>
    </footer>
    <section class="footer-bottom">
          <span>
            <p>LOGO</p>
          </span>
          <span>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-youtube"></i>
            <i class="fab fa-linkedin-in"></i>
            <i class="fab fa-instagram"></i>
          </span>
        </section>
</template>

<script>
export default {
  name: 'feets',
  props: {
    msg: String
  }
}
</script>

<style scoped>
footer {
    height: auto;
    width: 1350px;
    margin: 0 auto;
    padding: 75px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
footer h3 {
  font-weight: 700;
  font-size: 16px;
  margin: 0;
  padding: 0;
}
footer p {
  font-weight: 400;
  font-size: 16px;
  margin: 20px 0 0 0;
  padding: 0;
}
.footer-bottom {
  border-top: 1px solid #C0C0C0;
  box-sizing: border-box;
  width: 1350px;
  margin: 0 auto;
  padding: 25px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.footer-bottom p, .footer-bottom i {
  margin-bottom: 0;
  padding-right: 20px;
  font-size: 16px;
}
.footer-bottom i {
  margin-bottom: 0;
  padding-right: 0px;
  padding-left: 20px;
  font-size: 20px;
}
.footer-bottom span {
  display: flex;
  flex-direction: row;
}
</style>