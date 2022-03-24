<template>
  <div class="home">
    <hero />

    <moneyRetained />

    <!-- <div class="feature">
      <img
        src="../assets/graphs.jpg"
        alt="Visualisering af fordelene ved at vælge Churnrs ydelser."
      />
      <span>
        <p class="benefit">Giv de rigtige opgaver til de rigtige personer</p>
        <h2>En skræddersyet løsning, der sparer tid og ressourcer</h2>
        <p>
          Læn jer tilbage mens vi sørger for en personlig service oplevelse for
          jeres kunder, der samtidig vil øge deres livstidsværdi.
        </p>
      </span>
    </div> -->

    <div class="feature frustration">
      <span>
        <p class="benefit">Kan du genkende frustrationen?</p>
        <h2>Betalings problemer fjerner dit fokus</h2>
        <p>
          Der er mange facetter af, at drive en virksomhed - at svare på
          kundespørgsmål dag efter dag skal ikke være en af dem.
        </p>
      </span>
      <img
        src="../assets/questions.svg"
        alt="Frustrerede kunder tager kontakt og stiller spørgsmål omrking betalingsfejl"
      />
    </div>

    <cuztomizedSolution />

    <humanize />
    <customers />

    <div class="feature partner">
      <span>
        <p class="benefit">Churnr får tingene til at ske</p>
        <h2>Vi står klar til at hjælpe</h2>
        <p>
          Vi er en gruppe passionerede iværksættere med et mål om at minimere
          churn og innovere customer outreach.
        </p>
        <router-link to="/about" class="btn">Mød teamet</router-link>
      </span>
      <img
        src="../assets/partner.jpg"
        alt="Churnr medarbejder der står klar til at introducere resten af teamet til dig"
      />
    </div>
  </div>
</template>

<script>
import hero from "../components/home/hero.vue";
import moneyRetained from "../components/home/moneyRetained.vue";
import cuztomizedSolution from "../components/home/cuztomizedSolution.vue";
import humanize from "../components/home/humanize.vue";
import customers from "../components/home/customers.vue";
export default {
  components: {
    hero,
    humanize,
    customers,
    moneyRetained,
    cuztomizedSolution,
  },
  name: "home",
  metaInfo: {
    title: "Churnr: Kundefastholdelse for abonnementsvirksomheder",
    meta: [
      {
        vmid: "description",
        name: "description",
        content:
          "Churnr er en platform der hjælper abonnementsvirksomheder med at fastholde deres abonnementskunder.",
      },
    ],
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped>
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
  width: 55%;
  /* box-shadow: 0px 0px 30px 1px rgba(173, 216, 230, 0.5);
  -webkit-box-shadow: 0px 0px 30px 1px rgba(173, 216, 230, 0.5);
  -moz-box-shadow: 0px 0px 30px 1px rgba(173, 216, 230, 0.5);
  border-radius: 5px; */
}
.feature span {
  width: 45%;
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
  font-size: 20px;
  width: 80%;
}
.btn {
  outline: 1px solid black;
  padding: 15px 30px;
  margin-top: 20px;
  border-radius: 0;
  color: black;
}
.humanize {
  border-top: 1px solid #dcdcdc;
}

.partner img {
  width: 40%;
  box-shadow: 0px 0px 30px 1px rgba(173, 216, 230, 0.5);
  -webkit-box-shadow: 0px 0px 30px 1px rgba(173, 216, 230, 0.5);
  -moz-box-shadow: 0px 0px 30px 1px rgba(173, 216, 230, 0.5);
  border-radius: 5px;
}

/* Mobile media query */

@media only screen and (max-width: 728px) {
  /* Front page features */

  .feature {
    padding: 125px 25px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
  .feature img {
    width: 100%;
    margin-top: 100px;
  }
  .feature span {
    width: 100%;
  }
  .feature h2 {
    font-size: 50px;
  }
  .feature p {
    line-height: 1.75;
    font-size: 20px;
    width: 100%;
  }
  .feature .btn {
    outline: 1px solid black;
    padding: 15px 30px;
    margin-top: 20px;
    border-radius: 0;
  }
  .feature .humanize {
    border-top: 1px solid #dcdcdc;
    flex-direction: column-reverse!important;
  }
  .partner {
    flex-direction: column !important;
  }
   .frustration {
    flex-direction: column;
  }
   .frustration img{
    margin-top: 25px;
  }
}
</style>