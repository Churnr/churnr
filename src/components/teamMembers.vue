<template>
  <div class="team-members">
    <h1>Meet the team</h1>
    <p>
      Passionerede ildsjæle der brænder for at komme betalingsfejl til livs
    </p>
    <div class="team-members-content">
      <div class="member">
        <img src="../assets/team/anders.jpg" alt="Profilbillede af Churnrs CEO, Anders Laurentiussen" />
        <div class="member-content">
          <p class="employee-name">Anders Laurentiussen</p>
          <p class="title">CEO & Co-founder</p>
          <p><b>E-mail:</b> <a href="mailto:anders@churnr.dk">anders@churnr.dk</a></p>
          <!-- <a href="https://www.linkedin.com/in/anders-ottzen-laurentiussen-57670279/" target="_blank"><i class="fab fa-linkedin"></i></a> -->
        </div>
      </div>
      <div class="member">
        <img src="../assets/team/benjamin.jpg" alt="Profilbillede af Churnrs CPO, Benjamin Treadwell" />
        <div class="member-content">
          <p class="employee-name">Benjamin Treadwell</p>
          <p class="title">CPO & Co-founder</p>
          <p><b>E-mail:</b> <a href="mailto:benjamin@churnr.dk">benjamin@churnr.dk</a></p>
          <!-- <a href="https://github.com/bentreadwell" target="_blank"><i class="fab fa-github-square"></i></a> -->
        </div>
      </div>
      <div class="member">
        <img src="../assets/team/jacob.jpg" alt="Profilbillede af Churnrs CMO, Jacob Stentoft-Nielsen" />
        <div class="member-content">
          <p class="employee-name">Jacob Stentoft-Nielsen</p>
          <p class="title">CMO & Co-founder</p>
          <p><b>E-mail:</b> <a href="mailto:jacob@churnr.dk">jacob@churnr.dk</a></p>
          <!-- <a href="https://www.linkedin.com/in/jacob-stentoft-nielsen-428a63142/" target="_blank"><i class="fab fa-linkedin"></i></a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "teamMembers",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.team-members {
  width: 100%;
  padding: 150px 0 0 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* background: #6C6CFF;
  color: white; */
}
.team-members h1 {
  font-weight: 700;
  font-size: 40px;
}
.team-members p {
  margin-top: 25px;
  margin-bottom: 75px;
  font-size: 18px;
}
.team-members-content {
  width: 1150px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 40px;
  grid-template-areas:
    ". ."
    ". .";
}
.employee-name {
  font-size: 24px !important;
  font-weight: 700;
  line-height: 20;
}
.title {
  font-size: 18px !important;
  margin-top: 5px !important;
  font-weight: 400;
}
a {
  text-decoration: none;
  color: #333333;
  transition: .05s all ease-out;
}
a:hover {
  color: blue;
}
.member {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 0px;
  background: white;
}
.member-content {
  display: flex;
  flex-direction: column;
  text-align: left !important;
}
.member img {
  height: auto;
  width: 100%;
  margin-bottom: 25px;
}
.member p {
  line-height: 1;
  line-height: 30px;
  margin: 0;
  padding: 0;
}
.member i {
  margin-top: 25px;
  color: black;
  font-size: 30px;
}

/* Mobile media query */

@media only screen and (max-width: 728px) {
  .team-members {
    width: 100%;
    padding: 0px;
    text-align: center;
  }
  .team-members h1 {
    padding-bottom: 15px;
    font-size: 36px;
  }
  .team-members p {
    font-size: 20px;
  }
  .team-members-content {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .employee-name {
    font-size: 20px;
    font-weight: 700;
    line-height: 20;
  }
  .title {
    font-size: 20px;
    font-weight: 400;
  }
  .member {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0px;
    background: white;
  }
  .member:nth-child(2) {
    margin-top: 0px;
  }
  .member:nth-child(3) {
    margin-top: 0px;
  }
  .member-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .member img {
    height: auto;
    width: 100%;
    margin-bottom: 25px;
  }
  .member p {
    line-height: 1;
    text-align: center;
    line-height: 30px;
    margin: 0;
    padding: 0;
  }
  .member i {
    margin-top: 25px;
    font-size: 30px;
  }
}
</style>
