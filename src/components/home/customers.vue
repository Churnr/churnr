<template>
  <div class="customers-inner">
    <section class="customers">
      <h2>Bliv vores næste partner</h2>
      <p>
        Vi er allerede godt i gang med at løse churn udfordringer for vores
        samarbejdspartnere — skal du være med?
      </p>
      <div class="customer-ribbon">
        <div class="customer-card">
          <a href="https://lalatoys.dk/" target="_blank"
            ><img
              src="../../assets/customers/lalatoys.png"
              alt="Logo af samarbejdspartner til Churnr, LalaToys"
          /></a>
        </div>
        <div class="customer-card">
          <a href="https://ideel-kaffe.dk/en/" target="_blank"
            ><img
              src="../../assets/customers/ideelcoffee.png"
              alt="Logo af samarbejdspartner til Churnr, Ideel Coffee"
          /></a>
        </div>
        <div class="customer-card">
          <a href="https://rista.dk/" target="_blank"
            ><img
              src="../../assets/customers/rista.svg"
              alt="Logo af samarbejdspartner til Churnr, Ideel Coffee"
          /></a>
        </div>
        <div class="customer-card">
          <a href="https://www.lepetitchefcph.com/" target="_blank"
            ><img
              src="../../assets/customers/lepetitchef.jpg"
              alt="Logo af samarbejdspartner til Churnr, Le Petit Chef"
          /></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "customers",
};
</script>

<style scoped>
.customers-inner {
  background: #f3f6f9;
}

.customers {
  width: 1150px;
  margin: 0 auto;
  text-align: center;
  padding: 125px 0 125px 0;
}
.customers h2 {
  padding-bottom: 25px;
  font-weight: 700;
  font-size: 50px;
}

.customers p {
  padding-bottom: 75px;
  font-size: 20px;
  width: 70%;
  line-height: 1.75;
  margin: 0 auto;
}

.customer-ribbon {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 35px;
  justify-items: center;
  align-items: center;
}
.customer-card {
  width: 100%;
  height: 200px;
  background: white;
  box-shadow: 0px 0px 30px 1px rgba(173, 216, 230, 0.5);
  -webkit-box-shadow: 0px 0px 30px 1px rgba(173, 216, 230, 0.5);
  -moz-box-shadow: 0px 0px 30px 1px rgba(173, 216, 230, 0.5);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center
}
.customer-card img {
  max-width: 100%;
  padding: 25px 50px;
}

/* Mobile media query */

@media only screen and (max-width: 728px) {
  .customers {
    width: 90%;
  }
  .customers h2 {
    font-size: 50px;
  }

  .customer-ribbon {
    grid-template-columns: 1fr;
    grid-row-gap: 35px;
  }
  .customer-card {
    width: 85%;
  }
}
</style>