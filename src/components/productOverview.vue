<template>
  <section class="productOverviewMaster">
    <div data-aos="fade-in" data-aos-delay="500" data-aos-duration="1500" data-aos-once="true">
    <p class="benefit">Heldigvis har vi løsningen</p>
    <h2>Simpel process fra start til slut</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore atque obcaecati.</p>
    </div>
    <div class="productOverview-content"  data-aos="fade-up" data-aos-delay="500" data-aos-duration="1500" data-aos-once="true">
      <div class="step">
        <img src="../assets/churnr1.png" alt="" draggable="false"/>
        <h3>Integrer dine data med Churnr</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestiae ipsa commodi facilis saepe nobis?</p>
      </div>
      <div class="step">
        <h3>Lad os forstå dig og dine behov</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestiae ipsa commodi facilis saepe nobis?</p>
      </div>
      <div class="step">
        <h3>Fasthold dine kunder igen og igen</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem molestiae ipsa commodi facilis saepe nobis?</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.productOverviewMaster {
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 200px 0;
}
.productOverviewMaster h2 {
  font-size: 40px;
  font-weight: 700;
  margin: 15px 0;
  color: #454f63;
}
.productOverviewMaster p {
  font-size: 20px;
  line-height: 30px;
}

.productOverviewMaster .benefit {
  font-size: 20px;
  margin-bottom: 0;
  padding: 0;
  color: #3BD67F;
}

.productOverview-content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 1200px;
}

.productOverview-content h3{
  font-size: 20px;
  font-weight: 700;
  margin: 30px 0;
  color: #454f63;
}

.productOverview-content h5{
  font-size: 70px;
  font-weight: 700;
  color: #454f63;
}

.productOverview-content p{
  padding: 0 50px;
  font-size: 20px;
  color: #454f63;
}

.productOverview-content .step img{
  width: 400px;
  height: auto;
  margin: 75px 0;
}
</style>