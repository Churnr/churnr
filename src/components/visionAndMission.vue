<template>
  <section class="visionAndMission">
    <div class="visionAndMission-text-content">
      <div class="vision">
        <h2>Vores vision & mission</h2>
      </div>
      <div class="mission">
        <p>
          Vores drøm er, at sætte mennesket i fokus, ved at minimere brugen af
          autogenererede e-mails og gøre kundeoplevelsen mere menneskelig for
          forbrugeren, i en verden der bliver mere automatiseret for hver dag
          der går.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "visionAndMission",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.visionAndMission {
  width: 1150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 150px 0;
  border-top: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
}
.visionAndMission-text-content {
  width: 1150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.vision {
  width: 40%;
}
.mission {
  width: 45%;
}
.visionAndMission-text-content h2 {
  font-size: 45px;
  line-height: 1.5;
}
.visionAndMission-text-content p {
  font-size: 18px;
  line-height: 1.5;
  width: 80%;
}

</style>
