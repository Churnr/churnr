<template>
  <section class="pricing-whole">
  <section class="pricing-header" data-aos="fade-up" data-aos-duration="1000">
    <div class="pricing-header-content">
      <p class="benefit">Sammensat efter jeres behov</p>
      <h1>Skræddersyet pris</h1>
    </div>
  </section>

  <section class="pricing-model" data-aos="fade-up" data-aos-duration="1000">
    <div class="pricing-model-box">
      <div class="pricing-model-boxleft">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptatem corrupti mollitia sapiente quam? Debitis.</p>
      </div>
      <div class="pricing-model-boxright">
        <div class="pricing-model-boxdrop">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="pricing-model-boxdrop">
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div class="pricing-model-boxdrop">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="pricing-tasks">
    <div class="pricing-tasks-content">
      <p class="benefit">Vi vil</p>
      <h2>Churnr's opgaver</h2>
      <ul>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
        <li>Lorem ipsum dolor sit.</li>
        <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>
    </div>
  </section>

  <section class="pricing-benefit">
    <div class="pricing-benefit-content">
      <p class="benefit">I får</p>
      <h2>Churnr's fordele</h2>
    </div>
    <div class="pricing-box">
      <div class="pricing-box-content">
        <img src="../assets/churnr_flueben.png" alt="">
        <p>Fastholdt omsætning</p>
      </div>
      <div class="pricing-box-content">
        <img src="../assets/churnr_flueben.png" alt="">
        <p>Øget lifetime value</p>
      </div>
      <div class="pricing-box-content">
        <img src="../assets/churnr_flueben.png" alt="">
        <p>Mindsket Arbejdsbyrde</p>
      </div>
      <div class="pricing-box-content">
        <img src="../assets/churnr_flueben.png" alt="">
        <p>Brand værdi</p>
      </div>
    </div>
  </section> 
  
  

  <section class=pricing-body>
    <img src="../assets/churnrs_prismodel.png" alt="">
    <div class=pricing-body-content>
      <p class=benefit>Vi tager</p>
      <h2>Churnrs prismodel</h2>
      <ul>
        <li>Værdien af den fastholdte kunde i 2 måneder</li>
        <li>Efterfølgende er 100% af værdien jeres</li>
      </ul>
    </div>
  </section>

  <section class=pricing-body>
    <img src="../assets/churnrs_uforpligtigende_samtale.png" alt="">
    <div class=pricing-body-content>
      <p class=benefit>Lad os tale sammen</p>
      <h2>Uforpligtigende samtale</h2>
      <p>Churnr tilbyder et gratis, uforpligtigende møde, hvor vi sammen kan kigge på jeres tal, og lave en vurdering af hvor meget værdi Churnr kan fastholde</p>
      <router-link to="/contact" class="btn">Book et møde</router-link>
    </div>
  </section>
  </section>
</template>

<script>
//Husk at ændre meta data før siden bliver postet

export default {
  name: "pricing",
  metaInfo: {
    title: "pricing",
    meta: [
      {
        vmid: "description",
        name: "churnr|pricing",
        content:
          "Hos Churnr skræddersyer vi en pris, som passer til jeres virksomhed samt respekterer vores arbejdskraft.",
      },
    ],
  },
  
  props: {
    msg: String,
  },
};
</script>

<style scoped>
  .pricing-header {
  padding: 250px 0 150px 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
  .pricing-header h1 {
  font-weight: 700;
  font-size: 65px;
  letter-spacing: -2px;
  margin-bottom: 100px;
  color: #2e3540;
}
  .pricing-header {
  width: 1150px;
  z-index: 1;
}
  
.benefit{
    padding-top: 20px;
}

.pricing-model{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pricing-model-box{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 45px 30px;
  color: #2e3540;
  border: 5px solid #2e3540;
  border-radius: 40px;
  margin: -150px 0px 150px 0px;
  width: 1150px;
}

.pricing-model-boxright{
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 25px;
}

.pricing-model-boxdrop{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #2e3540;
  border-radius: 10px;
  padding: 45px 30px;
}

.pricing-tasks{
  padding: 125px 0;
  width: 1150px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #dcdcdc;
}

.pricing-tasks-content{
  width: 50%;
}

.pricing-tasks-content h2 {
  font-size: 50px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -2px;
  margin: 0;
  color: #2e3540;
  padding: 5px 0 20px 0;
}

.pricing-tasks-content li {
  font-size: 20px;
  line-height: 1.75;
  width: 100%;
}

.pricing-benefit{
  padding: 125px 0;
  width: 1150px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #dcdcdc;
}

.pricing-benefit-content{
  width: 50%;
  padding: 25px 0;
}

.pricing-benefit-content h2{
  font-size: 50px;
  font-weight: 700;
  line-height: 1.25;
  margin: 0;
  color: #2e3540;
  padding: 5px 0 20px 0
}

.pricing-box{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 25px;
  grid-row-gap: 50px;
  width: 100%;
}

.pricing-box-content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 45px 30px;
  color: #0abf53;
  border: 3px solid #0abf53;
  border-radius: 10px;
}

.pricing-box-content p {
  margin: 0;
}

.pricing-box-content img {
  max-width:25%;
  margin-bottom: 15px;
}
  .pricing-body {
  padding: 125px 0;
  width: 1150px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #dcdcdc;
  
}
.pricing-body-content {
  width: 50%;
}
.pricing-body-content h2 {
  font-size: 50px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -2px;
  margin: 0;
  color: #2e3540;
  padding: 5px 0 20px 0;
}
.pricing-body-content li {
  font-size: 20px;
  line-height: 1.75;
  width: 80%;
}
.pricing-body img {
  width: 35%;
  border-radius: 5px;
}
.pricing-body-content .btn {
  margin-top: 15px;
  background: #0abf53;
  color: white;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 16px;
  border-radius: 0;
}
.pricing-body-content .btn:hover {
  opacity: 0.75;
}


/* Mobile media query */

@media only screen and (max-width: 728px) {
  /* Pricing page */

  .pricing-header {
    padding: 200px 25px 150px 25px;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .pricing-header img {
    width: 100%;
  }
  .whatprice{
    margin-top: -250px;
    padding-top: 150px;
    padding-bottom: 75px;
  }
  .whatprice-text-content{
    text-align: center;
    justify-content: center;
    width: 100%;
  }
  .pricing-body{
    padding: 100px 25px 100px 25px;
    width: 100%;
    flex-direction: column;
  }
  .pricing-body img{
    width: 100%;
  }
  .pricing-body-content{
    width: 100%;
  }
  
}
</style>