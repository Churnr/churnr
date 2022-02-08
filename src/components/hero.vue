<template>
  <div class="hero" data-aos="fade-up" data-aos-duration="1000">
    <span>
      <h1>Kundefastholdelse med personligt outreach</h1>
      <p>
        Alle abonnementsvirksomheder mister kunder pga. betalingsfejl - lad os hjælpe med at fastholde jeres abonnementskunder.
      </p>
      <router-link to="/features" class="btn">Se hvordan</router-link>
    </span>
    <img src="../assets/hero-image.png" alt="To mennesker sidder og snakker om kundefastholdelse" />
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
  padding: 150px 0 125px 0;
  width: 1150px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hero h1 {
  font-size: 65px;
  line-height: 1.15;
  font-weight: 700;
  color: #2e3540;
  letter-spacing: -3px;
  margin: 0;
}
.hero p {
  font-size: 20px;
  line-height: 1.75;
  padding: 15px 0 30px 0;
  margin: 0;
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
  width: 45%;
}

/* Mobile media query */

@media only screen and (max-width: 728px) {
  .hero {
    padding: 200px 25px 150px 25px;
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
    padding: 15px 0 30px 0;
    margin: 0;
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
}
</style>
