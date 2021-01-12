<template>
  <footer class="footer">
    <div class="footer-wrapper">
      <NavMenu/>
      <Subscribe/>
      <Applications/>
    </div>
    <Copyright/>
  </footer>

</template>

<script>
import NavMenu from "@/components/footer/NavMenu";
import Subscribe from "@/components/footer/Subscribe";
import Applications from "@/components/footer/Applications";
import Copyright from "@/components/footer/Copyright";

export default {
name: "Footer",
  components: {
    NavMenu,
    Subscribe,
    Applications,
    Copyright
  }
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
.footer {
  max-width: 1970px;
  min-height: 510px;
  background-color: #373844;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media only screen and (max-width: 1200px) {
    padding: 0 30px;
  }
  @media only screen and (max-width: 576px) {
    padding: 0 10px;
  }
  &-wrapper {
    max-width: 1170px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 992px) {
      flex-direction: column;
      align-items: center;
    }
  }
}

</style>