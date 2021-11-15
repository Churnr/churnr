<template>
  <footer>
    <section class="test">
      <div class="ting1"><img src="../assets/churnr-logo.png" alt=""></div>
      <div class="ting2">
        <p>Hvis vi har fanget din interesse, så <a href="#">skriv til os</a>.</p>
      </div>
      <div class="ting3">
        <p>+45 42 74 12 42</p>
        <p>hello@churnr.dk</p>
        <p>&nbsp;</p>
        <p>Nørregaardsvej 30</p>
        <p>2800 Kongens Lyngby</p>
      </div>
      <div class="ting4">
        <span>
          <a href="https://twitter.com/hellochurnr" target="_blank"
            ><i class="fab fa-twitter"></i
          ></a>
          <a
            href="https://www.facebook.com/churnr-107508725081442"
            target="_blank"
            ><i class="fab fa-facebook-square"></i
          ></a>
          <a href="#" target="_blank"><i class="fab fa-youtube"></i></a>
          <a href="https://linkedin.com/company/churnr" target="_blank"
            ><i class="fab fa-linkedin-in"></i
          ></a>
          <a href="https://www.instagram.com/hellochurnr/" target="_blank"
            ><i class="fab fa-instagram"></i
          ></a>
        </span>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>CVR-Nummer: 12345678</p>
      </div>
      <div class="ting5">
        <p><b>Oversigt</b></p>
        <p>&nbsp;</p>
        <p>Priser</p>
        <p>Nyheder</p>
        <p>Kontakt</p>
      </div>
      <div class="ting6">
        <p><b>Resourcer</b></p>
        <p>&nbsp;</p>
        <p>Presse</p>
        <p>Rutevejledning</p>
        <p>Praktik</p>
      </div>
    </section>
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
  width: 1200px;
  margin: 0 auto;
  padding: 75px 0;
}

.test {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 0fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 1200px;
  margin: 0 auto;
  font-size: 16px;
}
.ting1 {
  grid-area: 1 / 1 / 2 / 2;
}
.ting1 img {
  height: 64px;
}
.ting2 {
  grid-area: 1 / 2 / 2 / 5;
  font-size: 32px;
  margin-bottom: 75px;
  font-weight: 700;
}
.ting3 {
  grid-area: 2 / 1 / 3 / 2;
}
.ting4 {
  grid-area: 2 / 2 / 3 / 3;
}
.ting4 i {
  font-size: 16px;
  margin-right: 15px;
  margin-bottom: 7.5px;
  border-radius: 100px;
  border: 1px solid black;
  color: black;
  height: 32px;
  width: 32px;
  text-align: center;
  line-height: 2;
}
.ting5 {
  grid-area: 2 / 3 / 3 / 4;
  padding-left: 75px;
}
.ting6 {
  grid-area: 2 / 4 / 3 / 5;
  padding-left: 75px;
}
</style>