<template>
  <!-- <div class="moneyRetained">
    <h2>10.420,69 DKK</h2>
    <p>har vi fastholdt for vores kunder indtil videre</p>
  </div> -->
  <div class="sinek">
    <div
      class="why card"
      data-aos="fade-up"
      data-aos-duration="750"
      data-aos-once="true"
      data-aos-easing="ease-out"
    >
      <div class="card-header">
        <div class="why-icon"></div>
        <h3>Menneskecentreret</h3>
      </div>
      <div class="card-body">
        <p>
          Når kunderne støder på problemer, er det altid bedre at snakke med
          mennesker fremfor robotter.
        </p>
      </div>
    </div>
    <div
      class="how card"
      data-aos="fade-up"
      data-aos-duration="750"
      data-aos-delay="100"
      data-aos-once="true"
      data-aos-easing="ease-out"
    >
      <div class="card-header">
        <div class="how-icon"></div>
        <h3>Minimer betalingsfejl</h3>
      </div>
      <div class="card-body">
        <p>
          For abonnementsvirksomheder er betalingsfejl en katastrofe. Vi hjælper
          med at komme dem til livs.
        </p>
      </div>
    </div>
    <div
      class="what card"
      data-aos="fade-up"
      data-aos-duration="750"
      data-aos-delay="200"
      data-aos-once="true"
      data-aos-easing="ease-out"
    >
      <div class="card-header">
        <div class="what-icon"></div>
        <h3>Personlig outrach</h3>
      </div>
      <div class="card-body">
        <p>
          Stop med at brug robotter i dialogen med jeres kunder - lad dem tale
          med rigtige mennesker.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "whyHowWhat",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.sinek {
  width: 1150px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 25px;
  padding-bottom: 125px;
  border-bottom: 1px solid #dcdcdc;
}
.sinek .card {
  width: 100%;
  padding: 30px;
  border: none;
  box-shadow: 0px 0px 15px 1px rgba(173, 216, 230, 0.35);
  -webkit-box-shadow: 0px 0px 15px 1px rgba(173, 216, 230, 0.35);
  -moz-box-shadow: 0px 0px 15px 1px rgba(173, 216, 230, 0.35);
  border-radius: 5px;
}
.sinek .card:hover {
  cursor: default;
}
.card-header {
  background: white;
  border: none;
  display: flex;
  padding: 0;
}
.card-header h3 {
  font-weight: 700;
  margin: 0 0 25px 0;
  color: #2e3540;
  font-size: 25px;
  letter-spacing: -1.5px;
}
.card-body {
  padding: 0;
  margin: 0;
}
.card-body p {
  padding: 0;
  margin: 0;
  color: #333333;
  font-size: 18px;
  line-height: 1.75;
}
.how-icon {
  height: 35px;
  width: 35px;
  margin-right: 15px;
  background: url(../assets/decreasing.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.why-icon {
  height: 35px;
  width: 35px;
  margin-right: 15px;
  background: url(../assets/human.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.what-icon {
  height: 35px;
  width: 35px;
  margin-right: 15px;
  background: url(../assets/tailored.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Mobile media query */

@media only screen and (max-width: 728px) {
  .sinek {
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 25px;
    row-gap: 50px;
    padding: 0 25px 125px 25px;
    border-bottom: 1px solid #dcdcdc;
  }
  .sinek .card {
    width: 100%;
    padding: 30px;
    border: none;
    box-shadow: 0px 0px 15px 1px rgba(173, 216, 230, 0.35);
    -webkit-box-shadow: 0px 0px 15px 1px rgba(173, 216, 230, 0.35);
    -moz-box-shadow: 0px 0px 15px 1px rgba(173, 216, 230, 0.35);
    border-radius: 5px;
  }
  .sinek .card:hover {
    cursor: default;
  }
  .card-header {
    background: white;
    border: none;
    display: flex;
    padding: 0;
  }
  .card-header h3 {
    font-weight: 700;
    margin: 0 0 25px 0;
    color: #2e3540;
    font-size: 25px;
    letter-spacing: -1.5px;
  }
  .card-body {
    padding: 0;
    margin: 0;
  }
  .card-body p {
    padding: 0;
    margin: 0;
    color: #333333;
    font-size: 18px;
    line-height: 1.75;
  }
  .how-icon {
    height: 35px;
    width: 35px;
    margin-right: 15px;
    background: url(../assets/decreasing.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .why-icon {
    height: 35px;
    width: 35px;
    margin-right: 15px;
    background: url(../assets/human.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .what-icon {
    height: 35px;
    width: 35px;
    margin-right: 15px;
    background: url(../assets/tailored.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
