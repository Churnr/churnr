<!--
    background: linear-gradient(
180deg, #F5F6F8 0%, rgba(245, 246, 248, 0) 67.54%);
-->

<template>
  <section class="productOverview">
    <div class="productOverview-content">
      <span  data-aos="fade-right" data-aos-delay="200" data-aos-duration="1500" data-aos-once="true">
        <p class="benefit">Kundefastholdelse kan være svært</p>
        <h2>50% af churn skyldes<br>betalings problemer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          repellat molestiae quasi molestias, voluptatibus cumque.
        </p>
      </span>
      <img src="../assets/dankort.png" alt="" draggable="false" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1500" data-aos-once="true" />
    </div>
  </section>
</template>

<script>
export default {
  name: "theProblem",
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
  width: 1200px;
  padding: 100px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.productOverview-content h2 {
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  padding: 10px 0 5px 0;
  color: #454f63;
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
.benefit {
  color: #0d6efd !important;
}
.productOverview-content img {
  width: 45%;
}
</style>