<template>
  <div class="featured-block">
    <picture class="featured-block__image">
      <source media="(min-width:576px)" :srcset="getImgUrl(recipe.img1)" type="image/webp">
      <source media="(min-width:576px)" :srcset="getImgUrl(recipe.img2)" type="image/jpeg">
      <source media="(max-width:575.98px)" :srcset="getImgUrl(recipe.img1Small)" type="image/webp">
      <source media="(max-width:575.98px)" :srcset="getImgUrl(recipe.img2Small)" type="image/jpeg">
      <img :src="getImgUrl(recipe.img2)" :alt="recipe.alt">
    </picture>
    <h3 class="featured-block__title">{{recipe.title}}</h3>
    <p class="featured-block__text">{{recipe.text}}</p>
    <button class="featured-block__button">recipe details</button>
  </div>

</template>

<script>
export default {
  name: "FeaturedBlock",
  props: ['recipe'],
  methods: {
    getImgUrl(img) {
      return require('@/assets' + img)
    },
  }
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.featured-block {
  border: 1px solid #e8edef;
  height: 498px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 370px;
  margin-bottom: 20px;
  @media only screen and (max-width: 576px){
    max-width: 280px;
  }
  &__title {
    padding: 0 10% 0 10%;
    @include title(#14141d, $PD, 26px, 700);
    position: relative;
  }
  &__title:after {
    content: "\2B50\2B50\2B50\2B50\2B50";
    position: absolute;
    left: 10%;
    bottom: -35px;
    width: 100px;
    height: 30px;
  }
  &__text {
    padding: 0 10% 0 10%;
    @include title(#5c6369, $SR, 14px, 400);
    line-height: 26px;
  }
  &__button {
    width: 159px;
    height: 51px;
    background-color: #fea100;
    border: none;
    margin: 0 0 10% 10%;
    border-radius: 5px;
    @include text(#ffffff, $SR, 14px, 700, uppercase);
    letter-spacing: 0.35px;
    cursor: pointer;
  }
  &__button:focus {
    outline: none;
  }
  &__button:active {
    transform: scale(0.9);
  }
}

</style>