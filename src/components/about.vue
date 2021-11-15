/<template>
  <section class="about">
    <p>Mød holdet bag churnr</p>
    <h1>Vi syntes selv vi er ret fede</h1>
    <img src="../assets/team.gif" alt="" />
  </section>
</template>

<script>
export default {};
</script>

<style>
.about {
  width: 1200px;
  margin: 0 auto;
  padding: 150px 0 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.about h1 {
    font-weight: 700;
    font-size: 50px;
}
.about p {
    font-weight: 700;
    color: #3BD67F;
    font-size: 20px;
}
.about img {
  width: inherit;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 100px;
}
</style>