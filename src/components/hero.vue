<template>
  <div class="hero" data-aos="fade-up" data-aos-duration="1000">
    <span>
      <h1>Kundefastholdelse med personlig outreach</h1>
      <p>
        Har I også oplevet betalingsfejl? Lad os hjælpe, med at maksimere jeres
        kundefastholdelse.
      </p>
      <router-link to="/features" class="btn">Se hvordan</router-link>
    </span>
    <img src="../assets/retention.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: "hero",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.hero {
  padding: 150px 0 125px 0;
  width: 1150px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hero h1 {
  font-size: 65px;
  line-height: 1.15;
  font-weight: 700;
  color: #2E3540;
  letter-spacing: -3px;
  margin: 0;
}
.hero p {
  font-size: 20px;
  line-height: 1.75;
  padding: 15px 0 30px 0;
  margin: 0;
}
.hero .btn {
  background: #0abf53;
  border: none;
  padding: 10px 30px;
  border-radius: 0;
  margin: 0;
  color: white;
  font-weight: 500;
}
a {
  background: transparent;
  border: 1px solid black;
  color: black;
  padding: 10px 30px;
  margin-left: 15px;
  border-radius: 0;
  text-decoration: none;
  font-weight: 500;
}
.hero img {
  width: 35%;
  box-shadow: 0px 0px 30px 1px rgba(173, 216, 230, .5);
  -webkit-box-shadow: 0px 0px 30px 1px rgba( 173, 216, 230, .5);
  -moz-box-shadow: 0px 0px 30px 1px rgba(173, 216, 230, .5);
  border-radius: 5px;
}
.hero span {
  width: 50%;
}
</style>
