<template>
  <div>
      <section class="calculator">
          <!-- <div ng-app="calculoid" ng-controller="CalculoidMainCtrl" ng-init="init({calcId:92888,apiKey:'176b0b8e620b959ea98bd',showTitle:0,showDescription:0})" ng-include="load()"></div> -->
      
      </section>
    <section class="pricing">
      <h1>Find den rigtige løsning til jer</h1>
      <div class="product-cards">
        <div class="product-card bronze">
          <h3>Starter</h3>
          <ul>
            <li>1 dedikeret medarbejder</li>
            <li>48 timers support</li>
            <li>Anuller når som helst</li>
            <h2>> 500 kunder / md</h2>
            <router-link to="/contact" class="product-btn"
              >Book et salgsmøde</router-link
            >
          </ul>
        </div>
        <div class="product-card silver">
          <h3>Professional</h3>
          <ul>
            <li>2 dedikerede medarbejder</li>
            <li>24 timers support</li>
            <li>Anuller når som helst</li>
            <h2>> 2500 kunder / md</h2>
            <router-link to="/contact" class="product-btn"
              >Book et salgsmøde</router-link
            >
          </ul>
        </div>
        <div class="product-card gold">
          <h3>Business</h3>
          <ul>
            <li>3 dedikerede medarbejder</li>
            <li>24/7 support</li>
            <li>Anuller når som helst</li>
            <h2>2500+ kunder / md</h2>
            <router-link to="/contact" class="product-btn"
              >Book et salgsmøde</router-link
            >
          </ul>
        </div>
        
        </div>
        <div class="pfp">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, eius.</p>
            <router-link to="/contact" class="pfp-btn"
              >Book et salgsmøde</router-link
            >
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "pricing",
  metaInfo: {
    title: "Vores løsning | Churnr",
    meta: [
      {
        vmid: "description",
        name: "description",
        content:
          "Hos Churnr har vi specialiseret os i at bekæmpe den ufrivillige churn, der sker på grund af betalingsfejl - vi sikrer en skræddersyet serviceoplevelse til dine kunder.",
      },
    ],
  },
};
</script>

<style scoped>
.pricing {
  padding: 200px 0px 150px 0px;
}
.pricing h1 {
  font-weight: 700;
  text-align: center;
}
.product-cards {
  height: auto;
  width: 1150px;
  margin: 0 auto;
  padding: 200px 0 25px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 25px;
}

.product-card {
  padding: 35px 50px;
  margin: 0;
  box-shadow: 0px 0px 20px 1px rgb(173 216 230 / 50%);
  -webkit-box-shadow: 0px 0px 20px 1px rgb(173 216 230 / 50%);
  -moz-box-shadow: 0px 0px 20px 1px rgba(173, 216, 230, 0.5);
  border-radius: 5px;
}
.product-card h3 {
  text-align: center;
  margin: 0;
  font-weight: 700;
  letter-spacing: 0px;
  font-size: 24px;
  padding-bottom: 35px;
}
.product-card h2 {
  padding-top: 35px;
  font-size: 28px;
  text-align: center;
  font-weight: 600;
}
.product-card ul {
  margin: 0;
  padding: 0;
}
.product-card ul li {
  list-style-type: none;
  font-size: 18px;
}
.product-card ul li:before {
  content: "✓ ";
  font-weight: 700;
  line-height: 2;
}
.product-btn {
  background: #0abf53;
  width: 100%;
  display: block;
  text-align: center;
  padding: 15px;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  color: white;
  margin-top: 35px;
}
.pfp {
  width: 1150px;
  margin: 0 auto;
  padding: 35px;
  box-shadow: 0px 0px 20px 1px rgb(173 216 230 / 50%);
  -webkit-box-shadow: 0px 0px 20px 1px rgb(173 216 230 / 50%);
  -moz-box-shadow: 0px 0px 20px 1px rgba(173, 216, 230, 0.5);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
}
</style>
