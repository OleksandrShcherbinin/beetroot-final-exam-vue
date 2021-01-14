<template>

</template>

<script>
import FoodMenuHeader from "@/components/home/menu/FoodMenuHeader";
export default {
  name: "MenuPagePiece",
  components: {FoodMenuHeader}
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.my-menu-page {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1170px;
  width: 100%;
  @media only screen and (max-width: 1200px) {
    box-sizing: border-box;
    padding: 20px;
  }
  @media only screen and (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
  &-piece {
    width: 48%;
    display: flex;
    justify-content: space-between;
    border-bottom: 3px solid #eeeeee;
    @media only screen and (max-width: 576px) {
      width: 100%;
    }
    &-item {
      &__title {
        @include text(#14141d, $SR, 16px, 700, uppercase);
      }
      &__description {
        @include title(#5c6369, $SR, 14px, 400);
        line-height: 26px;
      }
    }
  }
  &__price {
    @include text( #fea100, $PD, 26px, 700, uppercase);
  }
  &__price:first-letter {
    font-size: 16px;
    vertical-align: top;
  }
}

</style>