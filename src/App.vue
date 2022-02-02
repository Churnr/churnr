<template>
  <div id="app">
    <navigation />
    <router-view></router-view>
    <callToAction />
    <aFooter />
  </div>
</template>

<script>
import navigation from "./components/navigation.vue";
import callToAction from "./components/callToAction.vue";
import aFooter from "./components/aFooter.vue";
export default {
  components: { navigation, callToAction, aFooter },
  name: "app",
};
</script>

<style>
* {
  font-family: "Gilroy", sans-serif;
  margin: 0;
  padding: 0;
}
body {
  zoom: 90%;
}
html {
  scroll-behavior: auto !important;
}
p {
  font-size: 18px;
  line-height: 1.5;
}
.benefit {
  color: #0abf53 !important;
  font-weight: 700;
  font-size: 20px;
}
@font-face {
  font-family: 'Gilroy';
  font-weight: 300;
  src: url('./fonts/Gilroy-Light.ttf');
}
@font-face {
  font-family: 'Gilroy';
  font-weight: 400;
  src: url('./fonts/Gilroy-Regular.ttf');
}
@font-face {
  font-family: 'Gilroy';
  font-weight: 500;
  src: url('./fonts/Gilroy-Medium.ttf');
}
@font-face {
  font-family: 'Gilroy';
  font-weight: 600;
  src: url('./fonts/Gilroy-SemiBold.ttf');
}
@font-face {
  font-family: 'Gilroy';
  font-weight: 700;
  src: url('./fonts/Gilroy-Bold.ttf');
}
</style>