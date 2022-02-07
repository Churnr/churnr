<template>
  <div
    class="feature"
    data-aos="fade-right"
    data-aos-duration="1000"
    data-aos-once="true"
  >
    <img src="../assets/payment-methods.png" alt="Visualisering af de betalingsplatforme som Churnr integrerer med" />
    <span>
      <p class="benefit">En nem, enkel og automatiseret løsning</p>

      <h2>Problemfri dataintegrering med jeres betalingssystem</h2>
      <p>
        Vi tager kontakten til jeres kunder på vegne af jer og genvinder fejlede
        abonnementsbetalinger, måned efter måned.
      </p>
    </span>
  </div>
</template>

<script>
export default {
  name: "featureIntegration",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.feature {
  width: 1150px;
  padding: 150px 0;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
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
  line-height: 1.25;
  font-size: 50px;
  letter-spacing: -3px;
  padding: 0px 0 15px 0;
}
.feature p {
  line-height: 1.75;
  font-size: 20px;
  width: 80%;
}

/* Mobile media query */

@media only screen and (max-width: 728px) {
  .feature {
    width: 100%;
    padding: 150px 25px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #dcdcdc;
    border-bottom: 1px solid #dcdcdc;
  }
  .feature img {
    width: 100%;
    margin-top: 100px;
  }
  .feature span {
    width: 100%;
  }
  .feature h2 {
    font-weight: 700;
    line-height: 1.25;
    font-size: 36px;
    letter-spacing: -3px;
    padding: 0px 0 15px 0;
  }
  .feature p {
    line-height: 1.75;
    font-size: 18px;
    width: 80%;
  }
}
</style>
