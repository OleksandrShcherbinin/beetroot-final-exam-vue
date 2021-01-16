<template>
  <div class="recipe-page">
    <AfterHeader v-bind:header="header"/>
    <MainRecipe/>
    <OrangeBlock/>
    <FeaturedRecipes/>
    <OpeningHours v-bind:images="images"/>
  </div>
</template>

<script>
import AfterHeader from "@/components/header/AfterHeader";
import MainRecipe from "@/components/recipe/MainRecipe";
import OrangeBlock from "@/components/recipe/OrangeBlock";
import OpeningHours from "@/components/home/menu/OpeningHours";
import FeaturedRecipes from "@/components/recipe/FeaturedRecipes";

export default {
  name: 'Recipe',
  components: {
    OpeningHours,
    MainRecipe,
    AfterHeader,
    FeaturedRecipes,
    OrangeBlock,
  },
  data() {
    return {
      header: ["Recipe", "/recipe.webp", "/recipe.jpg",
        "/recipe-small.webp", "/recipe-small.jpg", "recipe"],
      images: {
        img1: "/antipasti.png",
        img2: "/antipasti.png",
        img3: "/antipasti.png",
        alt: "antipasti"
      },
    }
  }
}
</script>
<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.recipe-page {
  max-width: 1970px;
  margin: 0 auto;
  padding-top: 87px;
}

</style>