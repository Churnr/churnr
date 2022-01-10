<template>
  <div class="home">
    <hero />

    <div class="solution-stat">
      <h2>Har du styr på churn rate<br>og betalingsfejl?</h2>
      <div class="solution-content">
        <div class="stat">
          <h3>50%</h3>
          <p>af virksomheders churn rate skyldes betalingsfejl</p>
        </div>
        <div class="stat">
          <h3>15%</h3>
          <p>ag betalingsfejl fastholdes af autogenerede mails</p>
        </div>
        <div class="stat">
          <h3>67%</h3>
          <p>af vores kunders betalingsfejl fastholdes vha. personlig outreach</p>
        </div>
      </div>
    </div>

    <div class="feature">
      <span>
        <p class="benefit">Vink farvel til autogenererede e-mails</p>
        <h2>Gør dialogen mere menneskelig</h2>
        <p>
          Når der opstår udforudsete betalingsfejl, skal dine kunder snakke med
          rigtige mennesker — ikke med robotter
        </p>
      </span>
      <img src="../assets/twest.png" alt="" />
    </div>

    <div class="feature">
      <img src="../assets/twest.png" alt="" />
      <span>
        <p class="benefit">
          En nem, enkel og automatiseret løsning
        </p>
        
        <h2>Problemfri data integrering med dit betalingssytem</h2>
        <p>
          Vi tager kontakten til dine kunder på vegne af dig, og fastholder
          abonnementsbetalingerne måned efter måned.
        </p>
      </span>
    </div>

    <div class="feature">
      <span>
        <p class="benefit">Uddeleger de rigtige opgaver til de rigtige personer</p>
        <h2>En personlig løsning til dig og dine kunder</h2>
        <p>
          Vi er en gruppe passionerede iværksættere med en plan om at optimere
          churn og innovere customer outreach.
        </p>
        <a href="#">Mød teamet</a>
      </span>
      <img src="../assets/twest.png" alt="" />
    </div>

    <div class="money-stat">
      <p>Indtil videre har vi fastholdt</p>
      <h2>10.420 DKK</h2>
    </div>

    <div class="feature">
      <img src="../assets/squad.jpg" alt="" />
      <span>
        <p class="benefit">Mød holdet der får tingene til at ske</p>
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
export default {
  components: { hero },
  name: "home",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.home {
  padding-bottom: 150px;
}

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
}

.solution-stat h2 {
  font-size: 45px;
  color: black;
  padding-bottom: 100px;
  font-weight: 600;
  text-align: center;
  line-height: 1.25;
}

.solution-content {
  width: 1050px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
}

.stat {
  width: 30%;
}

.solution-stat h3 {
  font-size: 75px;
  font-weight: 600;
  color: #26C280;
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
</style>
