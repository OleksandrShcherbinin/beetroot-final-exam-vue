<template>
  <div class="after-header">
    <h2 class="after-header__title">{{header[0]}}</h2>
    <picture class="after-header__image">
      <source  media="(min-width:992px)" :srcset="getImgUrl(header[1])" type="image/webp">
      <source  media="(min-width:992px)" :srcset="getImgUrl(header[2])" type="image/jpeg">
      <source  media="(max-width:991.98px)" :srcset="getImgUrl(header[3])" type="image/webp">
      <source  media="(max-width:991.98px)" :srcset="getImgUrl(header[4])" type="image/jpeg">
      <img :src="getImgUrl(header[2])" :alt="header[5]">
    </picture>
  </div>
</template>

<script>
export default {
name: "AfterHeader",
  props: ['header'],
  methods: {
    getImgUrl(img) {
      return require("@/assets" + img)
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.after-header {
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
}
</style>