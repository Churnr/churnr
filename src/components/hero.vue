<template>
  <div class="hero">
    <span>
      <h1>Kundefastholdelse vha. personlig outreach</h1>
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
  padding: 175px 0 150px 0;
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
}
.hero span {
  width: 50%;
}
</style>
