<template>
  <div class="home">
    <hero />

    <whyHowWhat />

    <div
      class="feature"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-once="true"
    >
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
    </div>

    <div
      class="feature humanize"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <span>
        <p class="benefit">Sig farvel til autogenererede e-mails</p>
        <h2>Gør dialogen mere menneskelig</h2>
        <p>
          Når der opstår uforudsete betalingsfejl, skal dine kunder snakke med
          rigtige mennesker — ikke med robotter.
        </p>
      </span>
      <img
        src="../assets/humanize.jpg"
        alt="Churnr medarbejder sidder og har menneskelig dialog med abonnementskunder"
      />
    </div>

    <featureIntegration />

    <div class="solution-stat">
      <div class="solution-content">
        <div
          class="stat"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h3>15%</h3>
          <p>af kunder fastholdes af autogenererede mails</p>
        </div>

        <div
          class="stat"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h3>63%</h3>
          <p>af kunder har Churnr indtil videre fastholdt</p>
        </div>

        <div
          class="stat"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h3>+80%</h3>
          <p>af kunder reagerer på Churnrs outreach</p>
        </div>
      </div>
    </div>

    <div
      class="feature partner"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <span>
        <p class="benefit">Teamet der får tingene til at ske</p>
        <h2>Din nye engagerede samarbejdspartner</h2>
        <p>
          Vi er en gruppe passionerede iværksættere med et mål om at minimere
          churn og innovere customer outreach.
        </p>
        <router-link to="/team" class="btn">Mød teamet</router-link>
      </span>
      <img
        src="../assets/partner.jpg"
        alt="Churnr medarbejder der står klar til at introducere resten af teamet til dig"
      />
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
  metaInfo: {
    title: "Churnr får dine kunder til at blive",
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
/* This div needs to be made into it's own component, and injected back into this site. */

.solution-stat {
  padding: 150px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: black;
  border: 1px solid #f2f2f2;
  background: #0abf53;
  color: white;
}

.solution-content {
  width: 950px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
}

.solution-content h3 {
  font-size: 70px;
  font-weight: 700;
  letter-spacing: 1px;
}

.solution-content p {
  font-size: 20px;
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
  box-shadow: 0px 0px 30px 1px rgba(173, 216, 230, 0.5);
  -webkit-box-shadow: 0px 0px 30px 1px rgba(173, 216, 230, 0.5);
  -moz-box-shadow: 0px 0px 30px 1px rgba(173, 216, 230, 0.5);
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

/* Mobile media query */

@media only screen and (max-width: 728px) {
  .solution-stat {
    padding: 150px 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: black;
    border: 1px solid #f2f2f2;
    color: white;
  }

  .solution-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .solution-content h3 {
    font-size: 70px;
    font-weight: 700;
    letter-spacing: -2px;
  }

  .solution-content p {
    font-size: 20px;
    line-height: 1.5;
  }

  .stat {
    width: 75%;
    text-align: center;
  }
  .stat:nth-child(2) {
    margin-top: 75px;
  }
  .stat:nth-child(3) {
    margin-top: 75px;
  }

  /* Front page features */

  .feature {
    padding: 125px 25px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
  }
  .feature img {
    width: 100%;
    margin-top: 100px;
  }
  .feature span {
    width: 100%;
  }
  .feature h2 {
    font-size: 36px;
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
  .humanize {
    border-top: 1px solid #dcdcdc;
    flex-direction: column !important;
  }
  .partner {
    flex-direction: column !important;
  }
}
</style>
