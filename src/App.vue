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
   font-family: 'Cabin', sans-serif;
   margin: 0;
   padding: 0;
 }
 p {
   font-size: 18px;
   line-height: 1.5;
 }
 .benefit {
   color: #0ABF53;
   font-weight: 700;
   font-size: 20px;
 }
</style>
