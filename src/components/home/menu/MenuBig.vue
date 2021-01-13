<template>
  <section class="big-menu">
    <picture class="big-menu__image">
      <source srcset="../../../assets/bread.webp" type="image/webp">
      <source srcset="../../../assets/bread.png" type="image/jpeg">
      <img src="../../../assets/bread.png" alt="bread">
    </picture>
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
  @media only screen and (max-width: 578px) {
    min-height: 1670px;
  }
  @media only screen and (max-width: 420px) {
    min-height: 1800px;
  }
  @media only screen and (max-width: 375px) {
    min-height: 1900px;
  }
  @media only screen and (max-width: 330px) {
    min-height: 1950px;
  }
  &__image {
    position: absolute;
    top: calc(100vw * 0.25);
    left: 0;
    opacity: 1;
    z-index: 5;
    @media only screen and (max-width: 578px) {
      display: none;
    }
  }
}

</style>