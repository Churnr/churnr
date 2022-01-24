<template>
  <div class="team-members">
    <h1>Meet the team</h1>
    <div class="team-members-content">
      <div class="member">
        <img src="../assets/team/anders.png" alt="" />
        <div class="member-content">
          <p class="employee-name">Anders Laurentiussen</p>
          <p class="title">CEO & Co-founder</p>
        </div>
      </div>
      <div class="member">
        <img src="../assets/team/benjamin.png" alt="" />
        <div class="member-content">
          <p class="employee-name">Benjamin Treadwell</p>
          <p class="title">CPO & Co-founder</p>
        </div>
      </div>
      <div class="member">
        <img src="../assets/team/jacob.png" alt="" />
        <div class="member-content">
          <p class="employee-name">Jacob Stentoft-Nielsen</p>
          <p class="title">CCO & Co-founder</p>
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
  background: #F6EDD9;
  display: flex;
  justify-content: center;
  margin-top: 150px;
  flex-direction: column;
  align-items: center;
}
.team-members h1 {
  font-weight: 700;
  font-size: 45px;
  margin-bottom: 75px;
}
.team-members-content {
  display: grid;
  width: 1150px;
  grid-template-columns: 1fr 1fr 1fr;
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
.employee-social-media {
  font-size: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 15px;
}
.member {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.member-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.member img {
  height: 60px;
  width: 60px;
  margin-right: 15px;
}
.member p {
  line-height: 1;
  text-align: center;
  line-height: 30px;
  margin: 0;
  padding: 0;
}
</style>
