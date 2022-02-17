<template>
  <section class="culture">
    <div class="culture-header-content">
      <p class="benefit">Alt starter med den rigtige kultur</p>
      <h2>Vores kultur & værdier</h2>
    </div>
    <div class="culture-text-content">
      <div class="human-centric">
        <h2>Menneskecentreret</h2>
        <!-- <hr /> -->
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque quam, labore cum commodi culpa earum.
        </p>
      </div>
      <div class="responsibility">
        <h2>Ansvarlighed</h2>
        <!-- <hr /> -->
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A animi ab enim maiores error facilis.
        </p>
      </div>
      <div class="inclusion">
        <h2>Inklusion</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, facere beatae nisi non libero eius!
        </p>
      </div>
      <div class="innovation">
        <h2>Innovation</h2>
        <!-- <hr /> -->
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, sequi quas? Iusto dignissimos eveniet dolorem.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "culture",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.culture {
  width: 1150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 150px 0 0 0;
  border-top: 1px solid #dcdcdc;
  text-align: center;
}
.culture-header-content {
  width: 1150px;
}
.culture-header-content h2 {
  font-size: 40px;
  font-weight: 700;
  padding-bottom: 100px;
}

.culture-text-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 50px 25px;
  grid-template-areas:
    ". ."
    ". .";
    
}

.culture-text-content h2 {
  font-size: 25px;
  margin: 25px 0;
  font-weight: 700;
}

.culture-text-content hr {
  width: 25%;
  height: 7.5px;
  color: #0abf53;
}
.culture-text-content p {
  color: #323338;
  margin: 0;
  padding: 0 50px;
}

</style>
