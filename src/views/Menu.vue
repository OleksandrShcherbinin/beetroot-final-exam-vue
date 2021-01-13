<template>
  <div class="menu-page">
    <h2 class="menu-page__title">Menu</h2>
    <picture class="menu-page__image">
      <source  media="(min-width:992px)" srcset="../assets/menu.webp" type="image/webp">
      <source  media="(min-width:992px)" srcset="../assets/menu.jpg" type="image/jpeg">
      <source  media="(max-width:991.98px)" srcset="../assets/menu-small.webp" type="image/webp">
      <source  media="(max-width:991.98px)" srcset="../assets/menu-small.jpg" type="image/jpeg">
      <img src="../assets/menu.jpg" alt="menu">
    </picture>
    <FoodMenuHeader style="padding-top: 50px; width: 100%"/>
    <MenuPagePiece/>
    <button class="menu-page__button" type="submit">Explore food menu</button>
    <MenuSpeciality/>
    <OpeningHours/>
  </div>
</template>

<script>
import FoodMenuHeader from "@/components/home/menu/FoodMenuHeader";
import MenuPagePiece from "@/components/menu/MenuPagePiece";
import MenuSpeciality from "@/components/menu/MenuSpeciality";
import OpeningHours from "@/components/home/menu/OpeningHours";
export default {
  name: 'Menu',
  components: {
    FoodMenuHeader,
    MenuPagePiece,
    MenuSpeciality,
    OpeningHours
  },
}
</script>
<style lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.menu-page {
  max-width: 1970px;
  margin: 0 auto;
  padding-top: 87px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title {
    @include title(#ffffff, $PD, 56px, 700);
    position: absolute;
    top: 115px;
    left: 50%;
    transform: translateX(-50%);
  }
  &__image {
    width: 100%;
    display: flex;
  }
  &__image * {
    object-fit: cover;
    width: 100%;
    min-height: 200px;
    height: auto;
  }
  &__button {
    margin: 70px 0 100px 0;
    width: 199px;
    height: 51px;
    background-color: #fea100;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    @include text(#ffffff, $SR, 14px, 700, uppercase);
    letter-spacing: 0.35px;
  }
  &__button:active {
    transform: scale(0.9);
  }
  &__button:focus {
    outline: none;
  }
}

</style>