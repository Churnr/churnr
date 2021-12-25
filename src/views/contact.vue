<template>
  <navigation />
  <div class="contact">
    <p class="benefit">Lad os endelig høre fra dig</p>
    <h1>Kontakt os i dag</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, aut.
    </p>
  </div>
  <message />
  <cta />
  <feets />
</template>

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 150px 0;
}
.contact h1 {
  font-size: 40px;
  font-weight: 600;
  padding-bottom: 15px;
  color: #454f63;
}
.contact p {
  font-size: 20px;
}
</style>

<script>
import navigation from "@/components/navigation.vue";
import message from "@/components/message.vue";
import cta from "@/components/cta.vue";
import feets from "@/components/feets.vue";
import Message from "../components/message.vue";

export default {
  name: "contact",
  components: {
    navigation,
    message,
    cta,
    feets,
  },
};

Message;
</script>

<style scoped>
</style>