<template>
  <div class="features">

    <section class="features-hero">
      <div class="features-hero-content">
        <p class="benefit">Simpelthen en genial idé</p>
        <h1>Udliciter din customer outreach ved betalingsfejl</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore molestiae quae est minus dicta cupiditate dolorem harum aperiam nemo placeat aspernatur perferendis eius tenetur, magnam praesentium quisquam quod.</p>
        <router-link to="/contact" class="btn">Kontakt os</router-link>
      </div>
      <img src="../assets/twest.png" alt="">
    </section>

    <section class="features-journey">
      <div class="features-journey-content">
        <h2>Steps to get started with an online payment service</h2>
        <div class="features-journey-steps">
          <div class="journey-step">
            <p class="number">1</p>
            <h3>Speak to our team</h3>
            <p>Get in touch with sales to identify the best set-up for your business and receive a custom proposal
            </p>
          </div>
          <div class="journey-step">
            <p class="number">2</p>
            <h3>Speak to our team</h3>
            <p>Get in touch with sales to identify the best set-up for your business and receive a custom proposal
            </p>
          </div>
          <div class="journey-step">
            <p class="number">3</p>
            <h3>Speak to our team</h3>
            <p>Get in touch with sales to identify the best set-up for your business and receive a custom proposal
            </p>
          </div>
          <div class="journey-step">
            <p class="number">4</p>
            <h3>Speak to our team</h3>
            <p>Get in touch with sales to identify the best set-up for your business and receive a custom proposal
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
        <p class="benefit">Simpelthen en genial idé</p>
        <h2>Vi udarbejder et sammen med jer et manuskript til dialogen med dine kunder
        </h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore molestiae quae est minus dicta cupiditate dolorem harum aperiam nemo placeat aspernatur perferendis eius tenetur, magnam praesentium quisquam quod.</p>
      </div>
      <img src="../assets/twest.png" alt="">
    </div>

    <div class="features-dashboard">
      <div class="features-dashboard-content">
        <p class="benefit">Simpelthen en genial idé</p>
        <h2>Løbende overblik over hvem og hvor mange<br />af dine kunder vi fastholder</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore molestiae quae est minus dicta cupiditate dolorem harum aperiam nemo placeat aspernatur perferendis eius tenetur, magnam praesentium quisquam quod.</p>
        <div class="features-dashboard-image"></div>
      </div>
    </div>

    <section class="features-communication">
      <div class="features-communication-content">
        <p class="benefit">Simpelthen en genial idé</p>
        <h2>Som din samarbejdspartner<br />skal vi kunne kommunikere<br />nemt og enkelt</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore molestiae quae est minus dicta cupiditate dolorem harum aperiam nemo placeat aspernatur perferendis eius tenetur, magnam praesentium quisquam quod.</p>
      </div>
      <img src="../assets/twest.png" alt="">
    </section>

    <faq/>

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
  padding: 5px 0 15px 0;
}

.features-hero-content p {
  font-size: 20px;
  line-height: 1.5;
}

.features-hero-content .btn {
  margin-top: 15px;
  background: #0ABF53;
  color: white;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 16px;
}

.features-hero img {
  width: 45%;
}

/* Feature journey */

.features-journey {
  width: 100%;
  padding: 150px 0;
  background: #f3f6f9;
}
.features-journey h2 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 75px;
  text-align: center;
}
.features-journey-content {
  width: 1150px;
  margin: 0 auto;
}
.features-journey-steps {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 15px;
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
  font-size: 45px;
  margin: 0;
  padding: 5px 0 20px 0;
}

.features-scripts-content p {
  font-size: 20px;
  line-height: 1.5;
}

.features-scripts img {
  width: 45%;
}

/* Feature dashboard */

.features-dashboard {
  padding: 0 0 150px 0;
}

.features-dashboard-content {
  width: 1150px;
  margin: 0 auto;
  text-align: center;
}

.features-dashboard-content h2 {
  font-size: 45px;
  font-weight: 700;
  margin: 0;
  padding: 5px 0 20px 0;
}

.features-dashboard-content p {
  font-size: 20px;
  line-height: 1.5;
}

.features-dashboard-image {
  margin-top: 75px;
  width: 1150px;
  height: 600px;
  background: #0abf53;
}

/* Feature communication */

.features-communication {
  padding: 0 0 150px 0;
  width: 1150px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.features-communication-content {
  width: 50%;
}
.features-communication-content h2 {
  font-size: 45px;
  font-weight: 700;
  margin: 0;
  padding: 5px 0 20px 0;
}
.features-communication-content p {
  font-size: 20px;
  line-height: 1.5;
}
.features-communication img {
  width: 45%;
}
</style>
