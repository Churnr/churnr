<template>
  <div class="team-members">
    <h1>Meet the team</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, at?</p>
    <div class="team-members-content">
      <div class="member">
        <img src="../assets/team/anders.png" alt="" />
        <div class="member-content">
          <p class="employee-name">Anders Laurentiussen</p>
          <p class="title">CEO & Co-founder</p>
          <i class="fab fa-linkedin"></i>
        </div>
      </div>
      <div class="member">
        <img src="../assets/team/benjamin.png" alt="" />
        <div class="member-content">
          <p class="employee-name">Benjamin Treadwell</p>
          <p class="title">CPO & Co-founder</p>
          <i class="fab fa-github-square"></i>
        </div>
      </div>
      <div class="member">
        <img src="../assets/team/jacob.png" alt="" />
        <div class="member-content">
          <p class="employee-name">Jacob Stentoft-Nielsen</p>
          <p class="title">CMO & Co-founder</p>
            <i class="fab fa-linkedin"></i>
        </div>
        
      </div>
      <div class="member">
        <img src="../assets/team/jacob.png" alt="" />
        <div class="member-content">
          <p class="employee-name">Jens Ohlendorff Brønd</p>
          <p class="title">Datamatiker praktikant</p>
            <i class="fab fa-linkedin"></i>
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
  padding: 150px 0;
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
  
  margin-bottom: 75px;
  font-size: 18px;
}
.team-members-content {
  width: 1150px;
    display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 40px;
  grid-template-areas:
    ". ."
    ". .";
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
  padding: 50px 30px;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
  background: white;
}
.member-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.member img {
  height: 100px;
  width: 100px;
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
</style>
