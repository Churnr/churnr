<template>
  <section class="journey">
    <div class="journey-intro">
    <p class="benefit">Heldigvis har vi løsningen</p>
    <h2>Lad os snakke med kunderne —<br>fokuser på hvad der er vigtigt for dig</h2>
    </div>
    <div class="journey-card">
      <h3>Betalingsfejl</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, eius tempore exercitationem minus optio fugiat.</p>
    </div>
    <div class="joint">
      <div class="tasks">
        <div class="task"><h4>Onboarding task</h4><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, necessitatibus!</p></div>
        <div class="task"><h4>Onboarding task</h4><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, necessitatibus!</p></div>
        <div class="task"><h4>Onboarding task</h4><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, necessitatibus!</p></div>
      </div>
      <div class="journey-card">
      <h3>Onboarding process</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, eius tempore exercitationem minus optio fugiat.</p>
    </div>
    </div>
    <div class="joint">
      <div class="journey-card">
      <h3>Personaliseret outreach</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, eius tempore exercitationem minus optio fugiat.</p>
    </div>
    <div class="journey-card">
      <h3>Autogenererede e-mails</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, eius tempore exercitationem minus optio fugiat.</p>
    </div>
    </div>
    <div class="joint">
      <div class="journey-card">
      <h3>Gentilmelding</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, eius tempore exercitationem minus optio fugiat.</p>
    </div>
    <div class="tasks">
        <div class="task"><h4>Onboarding task</h4><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, necessitatibus!</p></div>
        <div class="task"><h4>Onboarding task</h4><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, necessitatibus!</p></div>
        <div class="task"><h4>Onboarding task</h4><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, necessitatibus!</p></div>
      </div>
    </div>
    <div class="journey-card profit">
      <h3>Kontinuerlig månedlig indkomst</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, eius tempore exercitationem minus optio fugiat.</p>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.journey {
  width: 1150px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.journey-intro {
  text-align: center;
  padding: 150px 0;
}
.journey-intro h2{
font-size: 40px;

}
.journey-intro p{
  font-size: 18px;
}
.journey-card {
  padding: 32px;
  box-shadow: 0 0 0 1px rgb(53 72 91 / 14%), 0 3px 2px rgb(0 0 0 / 4%), 0 7px 5px rgb(0 0 0 / 2%), 0 13px 10px rgb(0 0 0 / 2%), 0 22px 17px rgb(0 0 0 / 2%) !important;
  width: 45%;
  margin: 0 0 75px 0;
}
.journey-card h3 {
  font-size: 20px;
  line-height: 1.5;
}
.journey-card p {
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
}

.benefit {
  color: #3BD67F;
  font-weight: 600;
}

/* Chronological order of the cards */

.onboarding {
  align-self: flex-end;
}

.joint {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}

.profit {
  margin: 0 auto;
}

/* Tasks */

.tasks {
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.task {
  padding: 16px;
  box-shadow: 0 0 0 1px rgb(53 72 91 / 14%), 0 3px 2px rgb(0 0 0 / 4%), 0 7px 5px rgb(0 0 0 / 2%), 0 13px 10px rgb(0 0 0 / 2%), 0 22px 17px rgb(0 0 0 / 2%) !important;
  margin-bottom: 25px;
  width: 75%;
}
.task h4, .task p {
  font-size: 13px;
}
.task p {
  margin-bottom: 0;
}

/* Crazy code that needs replcaing soon'ish */

.tasks:nth-child(1) {
  margin-left: -50px;
}
.tasks:nth-child(2) {
  align-items: flex-start;
  margin-right: -50px;
}

.task:nth-child(1), .task:nth-child(3) {
  margin-left: -50px;
  margin-right: 50px;
}
.task:nth-child(4) {
  background: green !important;
}
</style>