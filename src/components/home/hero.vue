<template>
  <div class="hero" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
    <span>
      <h1>We got 99 problems, but churn aint one</h1>
      <p>
        Alle abonnementsvirksomheder mister kunder pga. betalingsfejl. Lad os hjælpe med at fastholde jeres abonnementskunder.
      </p>
    </span>
    <iframe width="1150" height="646.88" src="https://www.youtube.com/embed/SOEyxPNE9gw?controls=0&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: "hero",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.hero {
  padding: 250px 0 125px 0;
  width: 1150px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.hero h1 {
  font-size: 65px;
  line-height: 1.15;
  font-weight: 700;
  color: #2e3540;
  letter-spacing: -2px;
  margin: 0;
  width: 75%;
  margin: 0 auto;
}
.hero p {
  font-size: 20px;
  line-height: 1.75;
  padding: 35px 0 100px 0;
  margin: 0 auto;
  width: 70%;

}
.hero .btn {
  background: #0abf53;
  border: none;
  padding: 10px 30px;
  border-radius: 0;
  margin: 0;
  color: white;
  font-weight: 500;
}
.btn:hover {
  color: white;
  opacity: .75;
}
a {
  background: transparent;
  border: 1px solid black;
  color: black;
  padding: 10px 30px;
  margin-left: 15px;
  border-radius: 0;
  text-decoration: none;
  font-weight: 500;
}
.hero img {
  width: 50%;
}
.hero span {
  width: 75%;
}

iframe {
  box-shadow: 0px 0px 30px 1px rgba(173, 216, 230, 0.5);
  -webkit-box-shadow: 0px 0px 30px 1px rgba(173, 216, 230, 0.5);
  -moz-box-shadow: 0px 0px 30px 1px rgba(173, 216, 230, 0.5);
  border-radius: 5px;
}

/* Mobile media query */

@media only screen and (max-width: 728px) {
  .hero {
    padding: 200px 25px 0px 25px;
    width: 100% !important;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .hero h1 {
    font-size: 36px;
    line-height: 1.25;
    font-weight: 700;
    color: #2e3540;
    letter-spacing: -3px;
    margin: 0;
  }
  .hero p {
    font-size: 20px;
    line-height: 1.75;
    padding: 35px 0 75px 0;
    margin: 0;
    width: 100%;
  }
  .hero .btn {
    background: #0abf53;
    border: none;
    padding: 10px 30px;
    border-radius: 0;
    margin: 0;
    color: white;
    font-weight: 500;
  }
  a {
    background: transparent;
    border: 1px solid black;
    color: black;
    padding: 10px 30px;
    margin-left: 15px;
    border-radius: 0;
    text-decoration: none;
    font-weight: 500;
  }
  .hero img {
    width: 100%;
    margin-top: 100px;
  }
  .hero span {
    width: 100%;
  }
  iframe {
    width: 100%;
    height: 250px;
  }
}
</style>