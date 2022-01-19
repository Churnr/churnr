<template>
  <div class="feature">
    <img src="../assets/payment-methods.png" alt="" />
    <span>
      <p class="benefit">En nem, enkel og automatiseret løsning</p>

      <h2>Problemfri data integregring med jeres betalingssystem</h2>
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
  padding:0 !important;
  width: 1150px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.feature img {
  width: 45%;
}
.feature span {
  width: 45%;
}
.feature h2 {
  font-weight: 700;
  font-size: 45px;
  padding: 0px 0 15px 0;
}
.feature p {
  line-height: 1.5;
  font-size: 20px;
}
</style>
