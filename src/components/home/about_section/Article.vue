<template>
  <article class="article">
    <h2 class="article__title">About Restaurant</h2>
    <p class="article__text">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essentially unchanged...
    </p>
    <div class="article-button">
      <div class="article-button__button">
        <h3 class="article-button__button__title">Read more</h3>
      </div>
      <picture class="article-button__image">
        <source srcset="../../../assets/awards.webp" type="image/webp">
        <source srcset="../../../assets/awards.jpg" type="image/jpeg">
        <img src="../../../assets/awards.jpg" alt="awards">
      </picture>
    </div>
  </article>
</template>

<script>
export default {
name: "Article"
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.article {
  width: 45%;
  @media only screen and (max-width: 576px) {
    width: 90%;
  }
  &__title {
    @include title(#14141d, $PD, 35px, 700);
  }
  &__text {
    @include text(#5c6369, $SR, 14px, 400, none);
    line-height: 26px;
  }
  &-button {
    margin-top: 47px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    &__button {
      width: 149px;
      height: 51px;
      border-radius: 3px;
      background-color: #fea100;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-right: 49px;
      &__title {
        @include text(#ffffff, $SR, 14px, 700, uppercase);
        letter-spacing: 0.35px;
      }
    }
    &__button:active {
    transform: scale(0.9);
    }
  }
}
</style>