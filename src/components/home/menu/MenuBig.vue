<template>
  <section class="big-menu">
    <img class="big-menu__image" src="../../../assets/bread.png" alt="bread">

    <FoodMenu/>
  </section>

</template>

<script>
import FoodMenu from "@/components/home/menu/FoodMenu";
export default {
name: "MenuBig",
  components: {
    FoodMenu,

  }
}
</script>

<style scoped lang="scss">
.big-menu {
  max-width: 1970px;
  min-height: 1240px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  @media only screen and (max-width: 767px) {
    min-height: 1350px;
  }
  @media only screen and (max-width: 577.98px) {
    min-height: 1670px;
  }
  @media only screen and (max-width: 420px) {
    min-height: 1800px;
  }
  @media only screen and (max-width: 375px) {
    min-height: 1850px;
  }
  @media only screen and (max-width: 320px) {
    min-height: 1900px;
  }
  &__image {
    position: absolute;
    top: calc(100vw * 0.25);
    left: 0;
    opacity: 1;
    z-index: 5;
  }
}

</style>