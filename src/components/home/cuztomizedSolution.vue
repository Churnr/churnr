<template>
  <div class="customizedsolution-inner">
    <section class="customizedsolution">
      <p class="benefit">Heldigvis har vi den perfekte løsning</p>
      <h2>Skræddersyet fastholdelse</h2>
      <p>
        Vi optimerer, rapporterer og kommunikerer løbende for 🤪 høj
        kundefastholdelse.
      </p>
      <img
        src="../../assets/customizedsolution.svg"
        alt="Visualisering af Churnr s løsning; samarbejde, rapportering og kommunikation."
      />
    </section>
  </div>
</template>

<script>
export default {
  name: "cuztomizedSolution",
};
</script>

<style scoped>
.customizedsolution {
  width: 1150px;
  margin: 0 auto;
  text-align: center;
  padding: 125px 0 125px 0;
  border-top: 1px solid #dcdcdc;
}
.customizedsolution h2 {
  font-weight: 700;
  font-size: 50px;
  margin: 0;
  padding: 15px 0 25px 0;
}

.customizedsolution p {
  font-size: 20px;
  line-height: 1.75;
  margin: 0 auto;
}

.customizedsolution img {
  margin-top: 50px;
  width: 100%;
}

/* Mobile media query */

@media only screen and (max-width: 728px) {
  .customizedsolution {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding: 125px 0 125px 0;
    border-top: 1px solid #dcdcdc;
  }
  .customizedsolution h2 {
    font-weight: 700;
    font-size: 50px;
    margin: 0;
    padding: 15px 0 25px 0;
  }

  .customizedsolution p {
    font-size: 20px;
    line-height: 1.75;
    margin: 0 auto;
  }

  .customizedsolution img {
    margin-top: 50px;
    width: 100%;
  }
}
</style>