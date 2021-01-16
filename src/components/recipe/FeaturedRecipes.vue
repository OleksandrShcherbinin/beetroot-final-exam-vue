<template>
  <div class="featured">
    <h2 class="featured__title">Featured Recipies</h2>
    <div class="featured-inner">
      <FeaturedBlock v-for="recipe in recipes" v-bind:recipe="recipe" :key="recipe.title"/>
    </div>
    </div>
</template>

<script>
import FeaturedBlock from "@/components/recipe/FeaturedBlock";
export default {
  name: "FeaturedRecipes",
  components: {
    FeaturedBlock
  },
  data() {
    return {
      recipes: [
        {
          img1: "/featured1.webp",
          img2: "/featured1.jpg",
          img1Small: "/featured1-small.webp",
          img2Small: "/featured1-small.jpg",
          alt: "goose leg",
          title: "Pakoda Chatny",
          text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
        },
          {
          img1: "/featured2.webp",
          img2: "/featured2.jpg",
          img1Small: "/featured2-small.webp",
          img2Small: "/featured2-small.jpg",
          alt: "fruit salad",
          title: "Prawns tikka",
          text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
        },
          {
          img1: "/featured3.webp",
          img2: "/featured3.jpg",
          img1Small: "/featured3-small.webp",
          img2Small: "/featured3-small.jpg",
          alt: "porige",
          title: "Onion pakkavada",
          text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.featured {
  min-height: 900px;
  max-width: 1970px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  &__title {
    @include title(#14141d, $PD, 35px, 700);
  }
  &-inner {
    max-width: 1170px;
    width: 85%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media only screen and (max-width: 1300px) {
      width: 90%;
      justify-content: center;
    }
    @media only screen and (max-width: 768px) {
      width: 95%;
    }
  }
}

</style>