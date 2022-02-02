<template>
  <div class="home">
    <hero />

    <whyHowWhat />

    <div class="feature">
      <img src="../assets/graphs.jpg" alt="" />
      <span>
        <p class="benefit">
          Uddeleger de rigtige opgaver til de rigtige personer
        </p>
        <h2>En personlig løsning, der sparer tid og ressourcer</h2>
        <p>
          Læn jer tilbage, og se til imens vi sørger for en personlig
          serviceoplevelse til jeres kunder, der samtidig vil øge deres LTV.
        </p>
      </span>
      
    </div>

    <div class="feature humanize">
      <span>
        <p class="benefit">Sig farvel til autogenererede e-mails</p>
        <h2>Gør dialogen mere menneskelig</h2>
        <p>
          Når der opstår udforudsete betalingsfejl, skal dine kunder snakke med
          rigtige mennesker — ikke med robotter
        </p>
      </span>
      <img src="../assets/humanize.jpg" alt="" />
    </div>

    <featureIntegration />

    

    <div class="solution-stat">
      <div class="solution-content">
        <div class="stat">
          <h3>15%</h3>
          <p>af kunder fastholdes af autogenererede mails</p>
        </div>

        <div class="stat">
          <h3>+80%</h3>
          <p>af kunder reagerer på Churnrs outreach</p>
        </div>

        <div class="stat">
          <h3>63%</h3>
          <p>af kunder har Churnr indtil videre fastholdt</p>
        </div>
      </div>
    </div>

    <div class="feature">
      <img src="../assets/twest.png" alt="" />
      <span>
        <p class="benefit">Teamet der får tingene til at ske</p>
        <h2>Din nye samarbejdspartner</h2>
        <p>
          Vi er en gruppe passionerede iværksættere med en plan om at optimere
          churn og innovere customer outreach.
        </p>
        <a class="btn" href="/team">Mød teamet</a>
      </span>
    </div>
  </div>
</template>

<script>
import featureIntegration from "../components/featureIntegration.vue";
import hero from "../components/hero.vue";
import whyHowWhat from "../components/whyHowWhat.vue";
export default {
  components: { hero, whyHowWhat, featureIntegration },
  name: "home",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
/* This div needs to be made into it's own component, and injected back into this site. */

.solution-stat {
  padding: 150px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;
  border: 1px solid #f2f2f2;
  background: #2B2C5D;
  color: white;
}

.solution-content {
  width: 1150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
}

.solution-content h3 {
  font-size: 70px;
  font-weight: 700;
  letter-spacing: -2px;
}

.solution-content p {
  font-size: 18px;
  line-height: 1.5;
}

.stat {
  width: 25%;
  text-align: center;
}

/* Front page features */

.feature {
  padding: 125px 0;
  width: 1150px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.feature img {
  width: 35%;
  box-shadow: 0px 0px 30px 1px rgba(173, 216, 230, .5);
  -webkit-box-shadow: 0px 0px 30px 1px rgba( 173, 216, 230, .5);
  -moz-box-shadow: 0px 0px 30px 1px rgba(173, 216, 230, .5);
  border-radius: 5px;
}
.feature span {
  width: 50%;
}
.feature h2 {
  font-weight: 700;
  padding: 0px 0 15px 0;
  line-height: 1.25;
  font-size: 50px;
  letter-spacing: -3px;
}
.feature p {
  line-height: 1.75;
  font-size: 18px;
  width: 80%;
}
.feature .btn {
  outline: 1px solid black;
  padding: 15px 30px;
  margin-top: 20px;
  border-radius: 0;
}
 .humanize {
  border-top: 1px solid #dcdcdc;
}
</style>
