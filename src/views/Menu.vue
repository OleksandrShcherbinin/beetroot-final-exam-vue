<template>
  <div class="menu-page">
    <AfterHeader v-bind:header="header"/>
    <FoodMenuHeader style="padding-top: 50px; max-width: 1170px" v-bind:menu_page="menu_page"/>
    <button class="menu-page__button" type="submit">Explore food menu</button>
    <MenuSpeciality/>
    <OpeningHours v-bind:images="images"/>
  </div>
</template>

<script>
import FoodMenuHeader from "@/components/home/menu/FoodMenuHeader";
import MenuPagePiece from "@/components/menu/MenuPagePiece";
import MenuSpeciality from "@/components/menu/MenuSpeciality";
import OpeningHours from "@/components/home/menu/OpeningHours";
import AfterHeader from "@/components/header/AfterHeader";

import {
  allBig,
  allBreakfast,
  allLunch,
  allSnacks,
  allSoups,
  allPizza,
  allDinner
} from './bigmenu';
export default {
  name: 'Menu',
  components: {
    AfterHeader,
    FoodMenuHeader,
    MenuPagePiece,
    MenuSpeciality,
    OpeningHours
  },
  data() {
    return {
      images: {
        img1: "/dessert.webp",
        img2: "/dessert.png",
        img3: "/dessert.png",
        alt: "dessert"
      },
      menu_page: [allBig, allBreakfast, allLunch,
        allSnacks, allSoups, allPizza, allDinner
      ],
      header: ["Menu", "/menu.webp", "/menu.jpg",
        "/menu-small.webp", "/menu-small.jpg", "menu"]
    }
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