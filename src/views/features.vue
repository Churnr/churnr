<template>
  <div class="features">
    <section class="features-hero">
      <div class="features-hero-content">
        <p class="benefit">Den enkle løsning til at optimere jeres omsætning</p>
        <h1>I got 99 problems<br>- but churn aint one</h1>
        <p>
          Hos Churnr har vi specialiseret os i, at bekæmpe den ufrivillige
          churn, der sker på grund af betalingsfejl. Vores løsning er
          skræddersyet til jeres behov.
        </p>
        <router-link to="/contact" class="btn">Kontakt os</router-link>
      </div>
      <img src="../assets/dunning.jpg" alt="" />
    </section>

    <section class="features-journey">
      <div class="features-journey-content">
        <h2>En nem opskrift til kundefastholdelse</h2>
        <div class="features-journey-steps">
          <div class="journey-step">
            <p class="number">1</p>
            <h3>Analysering af behov</h3>
            <p>
              Vi leverer en løsning, skræddersyet til jeres behov og jeres
              kunder
            </p>
          </div>
          <div class="journey-step">
            <p class="number">2</p>
            <h3>Problemfri data integrering</h3>
            <p>
              Vi integrerer og henter data, direkte fra jeres betalingsplatform
            </p>
          </div>
          <div class="journey-step">
            <p class="number">3</p>
            <h3>Vedvarende kommunikation</h3>
            <p>
              Vi opretholder kontakten med jer, for et konstant
              tilfredsstillende produkt
            </p>
          </div>
          <div class="journey-step">
            <p class="number">4</p>
            <h3>Målbare resultater</h3>
            <p>
              Vi rapporterer om vores arbejde og resultater i intervaller, der
              passer jer
            </p>
          </div>
        </div>
      </div>
    </section>

    <div class="features-employee-image-box">
      <div class="features-employee-image"></div>
    </div>

    <div class="features-scripts">
      <div class="features-scripts-content">
        <p class="benefit">Skræddersyet til jeres brand</p>
        <h2>Manuskript udarbejdet i fællesskab med jer</h2>
        <p>
          I samarbejde med jer udarbejder vi et manuskript, der bedst muligt
          afspejler jeres identitet. Manuskriptet er vores hellige bog, og
          fungerer som rettesnor i kontakten med jeres kunder.
        </p>
        <ul>
          <li> Uarbejdet i fællesskab</li>
          <li> Tilpasset din eksisterende branding</li>
          <li> Menneskecentreret kommunikation</li>
        </ul>
      </div>
      <img src="../assets/script.png" alt="" />
    </div>

    <div class="features-dashboard">
      <div class="features-dashboard-content">
        <p class="benefit">Løbende overblik</p>
        <h2>Følg med i vores resultater</h2>
        <p>
          Med vores dashboard vil I kunne følge med i de resultater vi skaber.
          Dashboardet leveres skræddersyet til jer, i lige præcis det format I
          foretrækker.
        </p>
        <div class="features-dashboard-image"></div>
      </div>
    </div>

    <section class="features-communication">
      <div class="features-communication-content">
        <p class="benefit">Let's stay in touch</p>
        <h2>Nem og hurtig kommunikation</h2>
        <p>
          For at skabe en løbende dialog, vil vi i onboarding processen få sat
          en kommunikationskanal op, i jeres foretrukne kommunikations system.
        </p>
        <a href="/contact">Kontakt os nu</a>
      </div>
      <img src="../assets/communication.jpg" alt="" />
    </section>

    <faq />
  </div>
</template>

<script>
import faq from "../components/faq.vue";

export default {
  name: "features",
  components: { faq },
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.features-hero {
  padding: 75px 0 150px 0;
  width: 1150px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.features-hero-content {
  width: 50%;
}
.features-hero-content h1 {
  font-weight: 700;
  margin: 0;
  line-height: 1.5;
  padding: 5px 0 15px 0;
}

.features-hero-content p {
  font-size: 18px;
  line-height: 1.75;
  width: 80%;
  color: #333333;
}

.features-hero-content .btn {
  margin-top: 15px;
  background: #0abf53;
  color: white;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 16px;
  border-radius: 0;
}

.features-hero img {
  width: 35%;
}

/* Feature journey */

.features-journey {
  width: 100%;
  padding: 150px 0;
  background: #f3f6f9;
}
.features-journey h2 {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 100px;
  text-align: center;
}
.features-journey-content {
  width: 1150px;
  margin: 0 auto;
}
.features-journey-steps {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 20px;
}
.journey-step .number {
  background: #0abf53;
  color: white;
  font-weight: 700;
  border-radius: 100%;
  height: 32px;
  width: 32px;
  text-align: center;
  line-height: 2;
}
.journey-step h3 {
  font-size: 20px;
  font-weight: 700;
}
.journey-step p {
  font-size: 16px;
  color: #333333;
}

/* Feature employee image */

.features-employee-image-box {
  height: 300px;
  background: #f3f6f9;
  display: flex;
  justify-content: center;
  margin-bottom: 300px;
}
.features-employee-image {
  height: 600px;
  width: 1150px;
  background: url(../assets/squad.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

/* Feature scripts */

.features-scripts {
  padding: 150px 0;
  width: 1150px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.features-scripts-content {
  width: 50%;
}

.features-scripts-content h2 {
  font-weight: 700;
  font-size: 40px;
  margin: 0;
  padding: 5px 0 20px 0;
  line-height: 1.5;
}

.features-scripts-content p {
  font-size: 18px;
  line-height: 1.75;
  width: 90%;
  color: #333333;
}

.features-scripts-content ul {
  list-style: none;
  line-height: 36px;
  padding-left: 0;
  padding-top: 15px;
  font-size: 18px;
  color: #333333;
}

.features-scripts-content ul li:before {
  content: '✓';
  color: #0abf53;
  font-weight: 700;
}

.features-scripts img {
  width: 35%;
  box-shadow: 0px 0px 30px 1px rgba(173, 216, 230, .5);
  -webkit-box-shadow: 0px 0px 30px 1px rgba( 173, 216, 230, .5);
  -moz-box-shadow: 0px 0px 30px 1px rgba(173, 216, 230, .5);
  border-radius: 5px;
}

/* Feature dashboard */

.features-dashboard {
  padding: 150px 0;
  border-top: 1px solid #dcdcdc;
  width: 1150px;
  margin: 0 auto;
}

.features-dashboard-content {
  width: 1150px;
  text-align: center;
}

.features-dashboard-content h2 {
  font-size: 40px;
  font-weight: 700;
  margin: 0;
  padding: 5px 0 20px 0;
}

.features-dashboard-content p {
  font-size: 18px;
  line-height: 1.75;
  width: 65%;
  margin: 0 auto;
  color: #333333;
}

.features-dashboard-image {
  margin-top: 100px;
  width: 1150px;
  height: 600px;
  background: url(../assets/dashboard.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 1px 0px 30px 1px rgba(173, 216, 230, .5);
  -webkit-box-shadow: 1px 0px 30px 1px rgba( 173, 216, 230, .5);
  -moz-box-shadow: 1px 0px 30px 1px rgba(173, 216, 230, .5);
  border-radius: 5px;
}

/* Feature communication */

.features-communication {
  padding: 150px 0;
  width: 1150px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #dcdcdc;
}
.features-communication-content {
  width: 50%;
}
.features-communication-content h2 {
  font-size: 40px;
  font-weight: 700;
  margin: 0;
  padding: 5px 0 20px 0;
}
.features-communication-content p {
  font-size: 18px;
  line-height: 1.75;
  width: 75%;
}
.features-communication-content a {
  background: transparent;
  border: 1px solid rgb(133, 133, 133);
  color: #333333;
  padding: 10px 30px;
  border-radius: 0;
  text-decoration: none;
  font-weight: 500;
  display: block;
  margin-top: 35px;
  width: fit-content;
}
.features-communication img {
  width: 35%;
}

@media only screen and (max-width: 728px) {
  .features-hero {
  padding: 25px 0 150px 0;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.features-hero-content {
  width: 100%;
}
.features-hero-content h1 {
  font-weight: 700;
  margin: 0;
  line-height: 1.5;
  padding: 5px 0 15px 0;
}

.features-hero-content p {
  font-size: 18px;
  line-height: 1.75;
  width: 100%;
  color: #333333;
}

.features-hero-content .btn {
  margin-top: 15px;
  background: #0abf53;
  color: white;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 16px;
  border-radius: 0;
}

.features-hero img {
  width: 100%;
}

/* Feature journey */

.features-journey {
  width: 100%;
  padding: 150px 0;
  background: #f3f6f9;
}
.features-journey h2 {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 100px;
  text-align: center;
}
.features-journey-content {
  width: 100%;
  margin: 0 auto;
}
.features-journey-steps {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 20px;
}
.journey-step .number {
  background: #0abf53;
  color: white;
  font-weight: 700;
  border-radius: 100%;
  height: 32px;
  width: 32px;
  text-align: center;
  line-height: 2;
}
.journey-step h3 {
  font-size: 20px;
  font-weight: 700;
}
.journey-step p {
  font-size: 16px;
  color: #333333;
}

/* Feature employee image */

.features-employee-image-box {
  height: 300px;
  background: #f3f6f9;
  display: flex;
  justify-content: center;
  margin-bottom: 300px;
}
.features-employee-image {
  height: 600px;
  width: 100%;
  background: url(../assets/squad.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

/* Feature scripts */

.features-scripts {
  padding: 150px 0;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
.features-scripts-content {
  width: 100%;
}

.features-scripts-content h2 {
  font-weight: 700;
  font-size: 40px;
  margin: 0;
  padding: 5px 0 20px 0;
  line-height: 1.5;
}

.features-scripts-content p {
  font-size: 18px;
  line-height: 1.75;
  width: 90%;
  color: #333333;
}

.features-scripts-content ul {
  list-style: none;
  line-height: 36px;
  padding-left: 0;
  padding-top: 15px;
  font-size: 18px;
  color: #333333;
}

.features-scripts-content ul li:before {
  content: '✓';
  color: #0abf53;
  font-weight: 700;
}

.features-scripts img {
  width: 100%;
  box-shadow: 0px 0px 30px 1px rgba(173, 216, 230, .5);
  -webkit-box-shadow: 0px 0px 30px 1px rgba( 173, 216, 230, .5);
  -moz-box-shadow: 0px 0px 30px 1px rgba(173, 216, 230, .5);
  border-radius: 5px;
}

/* Feature dashboard */

.features-dashboard {
  padding: 150px 0;
  border-top: 1px solid #dcdcdc;
  width: 100%;
  margin: 0 auto;
}

.features-dashboard-content {
  width: 100%;
  text-align: center;
}

.features-dashboard-content h2 {
  font-size: 40px;
  font-weight: 700;
  margin: 0;
  padding: 5px 0 20px 0;
}

.features-dashboard-content p {
  font-size: 18px;
  line-height: 1.75;
  width: 65%;
  margin: 0 auto;
  color: #333333;
}

.features-dashboard-image {
  margin-top: 100px;
  width: 100%;
  height: 600px;
  background: url(../assets/dashboard.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 1px 0px 30px 1px rgba(173, 216, 230, .5);
  -webkit-box-shadow: 1px 0px 30px 1px rgba( 173, 216, 230, .5);
  -moz-box-shadow: 1px 0px 30px 1px rgba(173, 216, 230, .5);
  border-radius: 5px;
}

/* Feature communication */

.features-communication {
  padding: 150px 0;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-top: 1px solid #dcdcdc;
}
.features-communication-content {
  width: 100%;
}
.features-communication-content h2 {
  font-size: 40px;
  font-weight: 700;
  margin: 0;
  padding: 5px 0 20px 0;
}
.features-communication-content p {
  font-size: 18px;
  line-height: 1.75;
  width: 75%;
}
.features-communication-content a {
  background: transparent;
  border: 1px solid rgb(133, 133, 133);
  color: #333333;
  padding: 10px 30px;
  border-radius: 0;
  text-decoration: none;
  font-weight: 500;
  display: block;
  margin-top: 35px;
  width: fit-content;
}
.features-communication img {
  width: 100%;
}
}

</style>
