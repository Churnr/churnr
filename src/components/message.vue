<template>
    <div class="container">
        <form>
          <label>Navn</label>
          <input 
            type="text" 
            v-model="name"
            name="name"
          >
          <label>E-mail</label>
          <input 
            type="email" 
            v-model="email"
            name="email"
            >
          <label>Besked</label>
          <textarea 
            name="message"
            v-model="message"
            cols="30" rows="5">
          </textarea>
          
          <input type="submit" value="Send">
        </form>
    </div>
</template>

<style scoped>
* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  width: 40%;
  padding-bottom: 150px;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: none;
}

input[type=submit] {
  background-color: #3BD67F;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

input[type=submit]:hover {
  opacity: 75%;
}
</style>

<script>

import emailjs from 'emailjs-com';

export default {
  name: 'message',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_w67cv5s', 'template_5hcivpg', e.target,
        'user_PIRF4RHGQmCseZS9dsiQk', {
          name: this.name,
          email: this.email,
          message: this.message
        })

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>