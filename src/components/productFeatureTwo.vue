<template>
  <section class="productOverview">
    <div class="productOverview-content">
      <img src="../assets/productMockup.png" alt="" draggable="false" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1500" data-aos-once="true"/>
      <span data-aos="fade-left" data-aos-delay="500" data-aos-duration="1500" data-aos-once="true">
        <p class="benefit">Vi er specialister i kundeoplevelser</p>
        <h2>Vores fokus er din kundefastholdelse</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellat molestiae quasi molestias, voluptatibus cumque.</p>
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: "productFeatureTwo",
};
</script>

<!-- This styling desperately needs fixing!!! -->

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
  width: 63.8%;
  color: #454f63;
}
.productOverview-content p,
.benefit {
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 0;
  width: 63.8%;
  padding: 0;
  color: #454f63;
}
.benefit {
  color: #0d6efd !important;
}
.productOverview-content img {
  width: 45%;
  box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.15);
}
.productOverview-content span {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}
</style>