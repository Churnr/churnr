<template>
  <section class="productOverviewMaster">
    <div>
    <p class="benefit">Heldigvis har vi en løsning på problemet</p>
    <h2>Lad os snakke med kunderne —<br>fokuser på hvad der er vigtigt for dig</h2>
    <p>Vi faciliterer dialogen med dine abonnementskunder - fra den indledende kontakt til kunden er fastholdt.</p>
    </div>
    <div class="productOverview-content">
      <img src="../assets/overview.png" alt="">
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
  padding: 100px 0;
}
.productOverviewMaster h2 {
  font-size: 40px;
  margin: 15px 0;
  color: #454f63;
  line-height: 1.5;
}
.productOverviewMaster p {
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 150px;
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
  width: 1150px;
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

.productOverview-content img{
  width: inherit;
  height: auto;
}
</style>