<template>
  <section class="customers">
    <h2>Nogle af vores kunder</h2>
    <div class="customer-ribbon">
      <img
        src="../../assets/customers/lalatoys.png"
        alt="Visualisering af de betalingsplatforme som Churnr integrerer med"
      />
      <img
        src="../../assets/customers/ideelcoffee.png"
        alt="Visualisering af de betalingsplatforme som Churnr integrerer med"
      />
      <img
        src="../../assets/customers/rista.svg"
        alt="Visualisering af de betalingsplatforme som Churnr integrerer med"
      />
      <img
        src="../../assets/customers/lepetitchef.jpg"
        alt="Visualisering af de betalingsplatforme som Churnr integrerer med"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "customers",
};
</script>

<style scoped>
.customers {
    width: 1150px;
    margin: 0 auto;
    text-align: center;
    padding: 25px 0 125px 0;
    border-bottom: 1px solid #dcdcdc;
}
.customers h2 {
    padding-bottom: 50px;
    font-weight: 600;
    font-size: 32px;
}

.customers p {
    padding-bottom: 75px;
    font-size: 20px;
}

.customer-ribbon {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    align-items: center;
}
.customer-ribbon img {
    height: 75px;
}
.customer-ribbon img:nth-child(1) {
    height: 100px;
}
.customer-ribbon img:nth-child(2) {
    height: 125px;
}
.customer-ribbon img:nth-child(4) {
    height: 85px;
}
</style>