<template>
  <div class="main-recipe">
    <div class="main-recipe-inner">
      <h2 class="main-recipe-inner__title">Pakoda Chatny</h2>
      <picture class="main-recipe-inner__image">
        <source  media="(min-width:768px)" srcset="../../assets/recipe-back.webp" type="image/webp">
        <source  media="(min-width:768px)" srcset="../../assets/recipe-back.jpg" type="image/jpeg">
        <source  media="(max-width:767.98px)" srcset="../../assets/recipe-back-small.webp" type="image/webp">
        <source  media="(max-width:767.98px)" srcset="../../assets/recipe-back-small.jpg" type="image/jpeg">
        <source  media="(max-width:576px)" srcset="../../assets/recipe-back-smallest.webp" type="image/webp">
        <source  media="(max-width:576px)" srcset="../../assets/recipe-back-smallest.jpg" type="image/jpeg">
        <img src="../../assets/recipe-back-smallest.jpg" alt="recipe background pasts">
      </picture>
      <ShortRecipe/>
      <p class="main-recipe-inner__text">Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing.
      </p>
      <div class="main-recipe-inner-nutrition">
        <ingredients v-bind:ingredients="ingredients"/>
        <Nutrition/>
      </div>
    </div>
  </div>

</template>

<script>
import ShortRecipe from "@/components/recipe/ShortRecipe";
import Nutrition from "@/components/recipe/Nutrition";
import Ingredients from "@/components/recipe/Ingredients";
export default {
name: "MainRecipe",
  components: {
    ShortRecipe,
    Ingredients,
    Nutrition
  },
  data() {
    return {
      ingredients: ["1/2 chopped red onions", "2 ounce lemon drop chupas chups beans",
        "3 pounds sesame snaps powder gingerbread", "1/4 cup jujubes jelly chupa",
        "1/2 cup sour cream(optional)", "1 ounce sugar plum pastry fruitcake",
        "1/4 cup jujubes jelly chupas"]
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.main-recipe {
  max-width: 1970px;
  min-height: 1360px;
  display: flex;
  justify-content: center;
  align-items: center;
  &-inner {
    max-width: 1170px;
    width: 60%;
    min-height: 1170px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    @media only screen and (max-width: 992px) {
      width: 95%;
    }
    &__title {
      @include title(#14141d, $PD, 35px, 700);
      position: relative;
      margin-bottom: 90px;
    }
    &__title:after {
      content: "\2B50\2B50\2B50\2B50\2B50";
      position: absolute;
      left: 0;
      bottom: -35px;
      width: 100px;
      height: 30px;
    }
    &__image {
      width: 100%;
      display: flex;
      position: relative;
    }
    &__image * {
    object-fit: cover;
    width: 100%;
    min-height: 200px;
    height: auto;
    }
    &__text {
      @include title(#5c6369, $SR, 14px, 400);
      line-height: 26px;
      padding: 10%;
    }
    &-nutrition {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }
  }
}
</style>