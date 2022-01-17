<template>
  <section class="contact">
    <div class="contact-content">
      <p class="benefit">Interesseret i at høre mere?</p>
      <h1>Kontakt os i dag</h1>
      <p><b>E-mail:</b> hello@churnr.dk</p>
      <p class="smaller">Vi bestræber os på at svare inden for 48 timer på hverdage</p>
      <p><b>Telefon:</b> +45 42 74 12 42</p>
      <p class="smaller">10:00 - 16:00 alle hverdage.</p>
    </div>
    <div class="message">
      <form>
        <label>Navn</label>
        <input type="text" v-model="name" name="name" />
        <label>E-mail</label>
        <input type="email" v-model="email" name="email" />
        <label>Besked</label>
        <textarea name="message" v-model="message" cols="30" rows="5">
        </textarea>

        <input type="submit" value="Send" />
      </form>
    </div>
  </section>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  name: "contact",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_w67cv5s",
          "template_5hcivpg",
          e.target,
          "user_PIRF4RHGQmCseZS9dsiQk",
          {
            name: this.name,
            email: this.email,
            message: this.message,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
.contact {
  padding: 150px 0;
  width: 1150px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: left;
  flex-direction: row;
}
.contact-content {
  width: 50%;
  display: flex;
  flex-direction: column;
}
.contact h1 {
  font-weight: 700;
  font-size: 45px;
  padding: 15px 0;
  margin: 0;
}

.contact-content p {
  padding: 0;
  margin: 0;
  line-height: 2;
}

.smaller {
  padding-bottom: 15px !important;
  font-size: 16px;
}

* {
  box-sizing: border-box;
}
.message {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  width: 45%;
}
label {
  float: left;
}
input[type="text"],
[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: none;
}
input[type="submit"] {
  background-color: black;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 25%;
  float: left;
}
input[type="submit"]:hover {
  opacity: 75%;
}
</style>
