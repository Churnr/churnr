<template>
  <div class="home">
    <hero />

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

    <div class="feature">
      <img src="../assets/payment-methods.png" alt="" />
      <span>
        <p class="benefit">
          En nem, enkel og automatiseret løsning
        </p>
        
        <h2>Problemfri data integregring med jeres betalingssystem</h2>
        <p>
          Vi tager kontakten til jeres kunder på vegne af jer og genvinder fejlede abonnementsbetalinger, måned efter måned.
        </p>
      </span>
    </div>

    <div class="feature">
      <span>
        <p class="benefit">Uddeleger de rigtige opgaver til de rigtige personer</p>
        <h2>En personlig løsning, der sparer tid og ressourcer</h2>
        <p>
          Vi sørger for at jeres kunder får en personlig service oplevelse, der vil øge kundeloyalitet og tilfredshed.
        </p>
      </span>
      <img src="../assets/grahps.png" alt="" />
    </div>

    <moneyRetained />

    <div class="feature">
      <img src="../assets/twest.png" alt="" />
      <span>
        <p class="benefit">Teamet der får tingene til at ske</p>
        <h2>Din nye samarbejdspartner</h2>
        <p>
          Vi er en gruppe passionerede iværksættere med en plan om at optimere
          churn og innovere customer outreach.
        </p>
        <a href="#">Mød teamet</a>
      </span>
    </div>
  </div>
</template>

<script>
import hero from "../components/hero.vue";
import moneyRetained from "../components/moneyRetained.vue"
export default {
  components: { hero, moneyRetained },
  name: "home",
  props: {
    msg: String,
  },
};
</script>

<style scoped>

/* This div needs to be made into it's own component, and injected back into this site. */

.money-stat {
  padding: 150px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #508991;
  color: white;
}
.money-stat h2 {
  font-size: 75px;
  font-weight: 600;
  color: #41f890;
}

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
  font-size: 75px;
  font-weight: 600;
}

.solution-content p {
  font-size: 20px;
  line-height: 24px;
}

.stat {
  width: 25%;
  text-align: center;
}

/* Front page features */

.feature {
  padding: 150px 0;
  width: 1150px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.feature img {
  width: 42.55%;
}
.feature span {
  width: 50%;
}
.feature h2 {
  font-weight: 600;
  font-size: 45px;
  padding: 0px 0 15px 0;
}
.feature p {
  line-height: 1.75;
}
.feature:nth-of-type(2) {
  background: red;
}
</style>
