<template>
  <div id="app">
    <navigation/>
    <router-view></router-view>
    <callToAction/>
    <aFooter/>
  </div>
</template>

<script>
import navigation from './components/navigation.vue';
import callToAction from './components/callToAction.vue';
import aFooter from './components/aFooter.vue';
export default {
  components: { navigation, callToAction, aFooter},
  name: "app",
};
</script>

<style>
 * {
   font-family: 'Poppins', sans-serif;
 }
 p {
   font-size: 18px;
   line-height: 1.5;
 }
 .benefit {
   color: #26C280;
   font-weight: 600;
 }
</style>
