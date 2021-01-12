<template>
  <div class="menu">
    <FoodMenuHeader/>
    <MenuPiece/>
    <picture class="menu__image">
      <source srcset="../../../assets/burito.webp" type="image/webp">
      <source srcset="../../../assets/burito.png" type="image/jpeg">
      <img src="../../../assets/burito.png" alt="burito">
    </picture>
  </div>
</template>

<script>
import FoodMenuHeader from "@/components/home/menu/FoodMenuHeader";
import MenuPiece from "@/components/home/menu/MenuPiece";
export default {
  name: "FoodMenu",
  components: {
    FoodMenuHeader,
    MenuPiece
  }
}
</script>

<style scoped lang="scss">
.menu {
  max-width: 1170px;
  width: 100%;
  min-height: 700px;
  position: relative;
  @media only screen and (max-width: 1200px) {
    width: 90%;
  }
  &__image {
    position: absolute;
    bottom: -100px;
    right: 15%;
  }
}

</style>