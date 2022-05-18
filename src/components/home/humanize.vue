<template>
  <div class="feature humanize">
  
    <span>
      <p class="benefit">En nem, enkel og automatiseret løsning</p>

      <h2>Gør dialogen mere menneskelig</h2>
      <p>
        Vi tager kontakten til jeres kunder på vegne af jer og genvinder fejlede
        abonnementsbetalinger, måned efter måned.
      </p>
      <router-link to="/contact" class="btn">Book et møde</router-link>
    </span>
    <img src="../../assets/humanize.jpg" alt="Churnr medarbejder sidder og giver god service til en abonnementskunde.">
  </div>
</template>

<script>
export default {
  name: "humanize",
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
  justify-content: space-between !important;
  align-items: center;
  border-top: 1px solid #dcdcdc;
}
.feature img {
  width: 40%;
  box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.15);
  -webkit-box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.15);
  -moz-box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 0.15);
  border-radius: 5px;
}
.feature span {
  width: 42.5%;
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
  width: 100%;
}

.feature a {
  outline: 1px solid black;
  margin-top: 20px;
  padding: 15px 30px;
  border-radius: 0;
  color: black;
  text-decoration: none;
}

/* Mobile media query */

@media only screen and (max-width: 728px) {
  .feature {
    width: 100%;
    padding: 150px 25px;
    margin: 0 auto;
    display: flex;
    flex-direction: column !important;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #dcdcdc;
    border-bottom: 1px solid #dcdcdc;
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
    font-weight: 700;
    line-height: 1.25;
    font-size: 50px;
    letter-spacing: -3px;
    padding: 0px 0 15px 0;
  }
  .feature p {
    line-height: 1.75;
    font-size: 18px;
    width: 100%;
  }
}
</style>