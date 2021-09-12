<!--<template>
  <section class="productOverview">
    <Carousel :itemsToShow="3.95" :wrapAround="true">
      <Slide v-for="(image) in images" :key="image.id">
        <img :src="image.url" />
      </Slide>
    </Carousel>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Autoplay",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      images: [
        { id: 1, url: require('@/assets/red.jpg')},
        { id: 1, url: require('@/assets/green.jpg')},
        { id: 1, url: require('@/assets/blue.jpg')},
      ],
    };
  },
});
</script>

<style scoped>
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.8) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.5) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(2);
}
.carousel__slide img {
  height: auto;
  z-index: 9999;
}

.productOverview {
  padding: 100px 0;
  width: 1350px;
  margin: 0 auto;
}
</style>-->

<template>
  <section class="productOverviewMaster">
    <div class="productOverview-content">
      <h2>Et kraftfuldt værktøj, når du har brug for det</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptate voluptates molestias,<br>dignissimos quaerat laboriosam! Fuga, architecto officiis! Odio, illo?</p>
      <img src="../assets/productOverviewMockup.png" alt="" draggable="false"/>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.productOverviewMaster {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 100px 0;
}
.productOverviewMaster h2 {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
}
.productOverviewMaster p {
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 75px;
}
</style>