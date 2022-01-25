<template>
  <div class="test">
    <div class="text-content">
      <h1>Hej</h1>
    </div>

    <div class="parallax-wrapper">
      <div class="parallax_group intro_screen" id="intro">Benjamin er gud</div>

      <div class="parallax_group" id="group-1">
        <div class="parallax-layer base_layer">Base Layer</div>
        <div class="parallax-layer mid_layer">Mid Layer</div>
      </div>

      <div class="parallax_group outro_screen" id="outro">The End</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "test",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.test {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}

* {
  padding: 0;
  margin: 0;
}

.parallax-wrapper {
  height: 100vh;
  overflow-y: auto;
  perspective: 300px;
}

.parallax_group {
  position: relative;
  height: 100vh;
  transform-style: preserve-3d;
  box-sizing: border-box;
}

.parallax_layer {
  position: absolute;
  inset: 0;
}

.base_layer {
  transform: translateZ(-300px) scale(2);
  height: 300px;
  width: 300px;
}

.mid_layer {
  transform: translateZ(0);
  height: 300px;
  width: 300px;
  background: green;
}

.top_layer {
  transform: translateZ(210px) scale(0.3);
}

#group-1 {
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
}

#group-1 > .base_layer {
  background-color: crimson;
}
</style>
