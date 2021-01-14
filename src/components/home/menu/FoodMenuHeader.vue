<template>
  <nav class="food">
    <h2 class="food__title">Food Menu</h2>
    <ul class="food-menu">
      <li v-for="item of menu" class="food-menu__item">
        <a :href="`#${item}`" v-on:click="setIndex(menu.indexOf(item))" v-bind:class="item.toLowerCase()" class="food-menu__link">
        {{item}}</a>
      </li>
    </ul>
    <MenuPiece v-bind:item_list="menu_page[index]"/>
  </nav>
</template>

<script>
import MenuPiece from "@/components/home/menu/MenuPiece";
export default {
name: "FoodMenuHeader",
  components: {MenuPiece},
  props: ['menu_page'],
  data: function () {
    return {
      menu: ['All', 'Breakfast', 'Lunch', 'Snacks', 'Pizza', 'Soups','Dinner'],
      index: 0,
      active: true,
    }
  },
  methods: {
    setIndex(index) {
  	  this.index = index
    },
  }
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
    &__link:before {
      position: absolute;
      width: 26px;
      height: 26px;
      top: -35px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}

.all:before {
  content: url("../../../assets/icons/spoon-and-fork.svg");
}
.all:active:before {
   content: url("../../../assets/icons/spoon-and-fork-h.svg");
}
.breakfast:before {
   content: url("../../../assets/icons/coffee.svg");
}
.breakfast:active:before {
   content: url("../../../assets/icons/coffee-h.svg");
}
.lunch:before {
   content: url("../../../assets/icons/cooking.svg");
}
.lunch:active:before {
   content: url("../../../assets/icons/cooking-h.svg");
}
.snacks:before {
   content: url("../../../assets/icons/muffin.svg");
}
.snacks:active:before {
   content: url("../../../assets/icons/muffin-h.svg");
}
.soups:before {
   content: url("../../../assets/icons/bowl.svg");
}
.soups:active:before {
   content: url("../../../assets/icons/bowl-h.svg");
}
.pizza:before {
    content: url("../../../assets/icons/pizza.svg");
}
.pizza:active:before {
    content: url("../../../assets/icons/pizza-h.svg");
}
.dinner:before {
   content: url("../../../assets/icons/fish.svg");
}
.dinner:active:before {
   content: url("../../../assets/icons/fish-h.svg");
}

</style>