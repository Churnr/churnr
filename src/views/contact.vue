<template>
  <section class="contact">
    <div class="contact-content">
      <p class="benefit">Interesseret i at høre mere?</p>
      <h1>Kontakt os i dag</h1>
      <p><b>E-mail:</b> hello@churnr.dk</p>
      <p class="smaller">
        Vi bestræber os på at svare inden for 24 timer på hverdage
      </p>
      <p><b>Telefon:</b> +45 42 74 12 42</p>
      <p class="smaller">10:00 - 16:00 alle hverdage.</p>
    </div>
    <div class="message">
      <form ref="form" @submit.prevent="sendEmail">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message"></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  </section>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  name: "contact",
  metaInfo: {
    title: "Kontakt | Churnr",
    meta: [
      {
        vmid: "description",
        name: "description",
        content:
          "Har vi vækket din interesse, eller brænder du inde med et spørgsmål, så kontakt Churnr i dag og hør hvad vi kan gøre for jeres virksomhed!",
      },
    ],
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          this.$refs.form.reset(),
          "service_w67cv5s",
          "template_5hcivpg",
          this.$refs.form,
          "user_PIRF4RHGQmCseZS9dsiQk"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>

<style scoped>
.contact {
  padding: 225px 0 150px 0;
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
  font-size: 50px;
  padding: 5px 0 15px 0;
  margin: 0;
  letter-spacing: -2px;
  color: #2E3540;
}

.contact-content p {
  padding: 0;
  margin: 0;
  font-size: 20px;
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
/* Mobile media query */

@media only screen and (max-width: 728px) {
  .contact {
    padding: 200px 25px 150px 25px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: left;
    flex-direction: column;
  }
  .contact-content {
    width: 100%;
  }
  .contact h1 {
    font-size: 36px;
    margin-bottom: 100px;
  }
  .contact-content p {
    padding: 0;
    margin: 0;
    line-height: 1.75;
    font-size: 20px;
  }

  .smaller {
    padding-bottom: 15px !important;
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
  }
  .message {
    width: 100%;
    margin-top: 100px;
    font-size: 20px;
  }
  input[type="submit"] {
    background-color: black;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 50%;
    float: left;
  }
}
</style>