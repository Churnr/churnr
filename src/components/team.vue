<template>
  <section class="productOverview">
    <div class="productOverview-content">
      <span>
        <p class="benefit">Mød holdet der får tingene til at ske</p>
        <h2>Holdet der får tingene til at ske</h2>
        <p>
          Dine abonnementskunder skal snakke med mennesker — ikke med robotter.
        </p>
      </span>
      <img src="../assets/meettheteam.gif" alt="" draggable="false"/>
    </div>
  </section>
</template>

<script>
export default {
  name: "productFeatureTwo",
};
</script>

<style>
</style>

<style scoped>
.productOverview {
  width: 100%;
  display: flex;
  justify-content: center;
}
.productOverview-content {
  height: inherit;
  width: 1150px;
  padding: 100px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.productOverview-content h2 {
  font-size: 40px;
  line-height: 1.5;
  padding: 10px 0 5px 0;
  color: #454f63;
  font-weight: 600;
}
.productOverview-content p,
.benefit {
  font-size: 20px;
  line-height: 1.5;
  width: 80%;
  margin-bottom: 0;
  padding: 0;
  color: #454f63;
}
.productOverview-content 
.benefit {
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 0;
  width: 63.8%;
  padding: 0;
  color: #3BD67F;
  font-weight: 600;
}
.productOverview-content img {
  width: 37.5%;
}
</style>