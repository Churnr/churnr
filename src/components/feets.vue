<template>
    <footer>
        <div class="footer-column">
            <h3>Produkter</h3>
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
            <h3>Spørgsmål</h3>
            <p>Privat person</p>
            <p>Erhvers person</p>
            <p>Privat person</p>
            <p>Erhvers person</p>
        </div>
        <div class="footer-column">
            <h3>Kontakt</h3>
            <p>Presse</p>
            <p>Privat person</p>
            <p>Erhvers person</p>
            <p>Privat person</p>
            <p>Erhvers person</p>
        </div>
    </footer>
    <section class="footer-bottom">
          <span>
            <p>Status</p>
            <p>Privatlivspolitik</p>
            <p>Betingelser</p>
            <p>Cookie indstillinger</p>
            <p>Kontakt os</p>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
    height: auto;
    width: 1440px;
    margin: 0 auto;
    padding: 75px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    text-align: left;
}
footer h3 {
  font-weight: 700;
  font-size: 20px;
  margin: 0;
  padding: 0;
}
footer p {
  font-weight: 400;
  font-size: 16px;
  margin: 25px 0 0 0;
  padding: 0;
}
.footer-bottom {
  border-top: 1px solid #C0C0C0;
  box-sizing: border-box;
  width: 1440px;
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