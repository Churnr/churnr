<template>
  <section class="productOverview">
    <div class="productOverview-content second-feature">
      <span>
        <p class="benefit">Lad ikke betalingsfejl stoppe dig</p>
        <h2>Hold fast i dine kunder</h2>
        <p>
          Når kunderne oplever betalngsfejl, skal de hjælpes igennem processen og føle sig værdsat.
        </p>
      </span>
      <img src="../assets/pf1.png" alt="" draggable="false"/>
    </div>
  </section>
</template>

<script>
export default {
  name: "productFeatureOne",
};
</script>

<style>
</style>

<style scoped>
.productOverview {
  height: 700px;
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
  line-height: 30px;
  width: 75%;
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




/* .productOverview-content .second-feature{
  flex-direction: row-reverse !important;
}

.second-feature span {
  width: 55%;
} */
</style>