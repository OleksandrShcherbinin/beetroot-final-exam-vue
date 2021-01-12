<template>
  <nav class="food">
    <h2 class="food__title">Food Menu</h2>
    <ul class="food-menu">
      <li v-for="item of menu" class="food-menu__item"><a class="food-menu__link">
        {{item}}</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
name: "FoodMenuHeader",
  data: function () {
    return {
      menu: ['All', 'Breakfast', 'Lunch', 'Snacks', 'Pizza', 'Soups','Dinner']
    }
  },
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.food {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 10;
  &__title {
    @include title(#14141d, $PD, 35px, 700);
    margin-bottom: 50px;
  }
  &-menu {
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 0;
    justify-content: space-between;
    @media only screen and (max-width: 576px) {
      width: 85%;
    }
    &__item {
      position: relative;
      cursor: pointer;
      margin-right: 45px;
      margin-bottom: 50px;
      @media only screen and (max-width: 576px) {
        margin-right: 15px;
      }
      @media only screen and (max-width: 375px) {
        margin-right: 5px;
      }

    }
    @media only screen and (max-width: 576px) {
      margin-right: 20px;
      margin-bottom: 20px;
    }
    &__link {
      @include title(#14141d, $PD, 20px, 700);
      cursor: pointer;
    }
    &__item:before {
      position: absolute;
      width: 26px;
      height: 26px;
      top: -35px;
      left: 50%;
      transform: translateX(-50%);
    }
    &__item:first-child:before {
      content: url("../../../assets/icons/spoon-and-fork.svg");
    }
    &__item:first-child:hover:before {
      content: url("../../../assets/icons/spoon-and-fork-h.svg");
    }
    &__item:nth-child(2):before {
      content: url("../../../assets/icons/coffee.svg");
    }
    &__item:nth-child(2):hover:before {
      content: url("../../../assets/icons/coffee-h.svg");
    }
    &__item:nth-child(3):before {
      content: url("../../../assets/icons/cooking.svg");
    }
    &__item:nth-child(3):hover:before {
      content: url("../../../assets/icons/cooking-h.svg");
    }
    &__item:nth-child(4):before {
      content: url("../../../assets/icons/muffin.svg");
    }
    &__item:nth-child(4):hover:before {
      content: url("../../../assets/icons/muffin-h.svg");
    }
    &__item:nth-child(5):before {
      content: url("../../../assets/icons/pizza.svg");
    }
    &__item:nth-child(5):hover:before {
      content: url("../../../assets/icons/pizza-h.svg");
    }
    &__item:nth-child(6):before {
      content: url("../../../assets/icons/bowl.svg");
    }
    &__item:nth-child(6):hover:before {
      content: url("../../../assets/icons/bowl-h.svg");
    }
    &__item:last-child:before {
      content: url("../../../assets/icons/fish.svg");
    }
    &__item:last-child:hover:before {
      content: url("../../../assets/icons/fish-h.svg");
    }
  }
}
.food:after {
  content: " ";
  max-width: 1970px;
  width: 100%;
  background-color: #a3b0ba;
  height: 1px;
  position: absolute;
  bottom: 25px;
  z-index: 0;
}

</style>