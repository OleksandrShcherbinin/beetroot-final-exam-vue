<template>
  <h2 class="blog-page__title">Bon Appetite</h2>
  <video class="blog-page__video" width="60%" height="auto" controls>
    <source :src="getVideoUrl('/video/Pexels-Videos-1111421.mp4')" type="video/mp4">
    <source :src="getVideoUrl('/video/Pexels-Videos-1111421.ogg')" type="video/ogg">
    Your browser does not support the video tag.
  </video>
</template>

<script>
export default {
name: "BlogArticle",
  methods: {
    getVideoUrl(video) {
      return require("@/assets" + video)
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";

&__title {
    @include title(#14141d, $PD, 35px, 700);
  }
  &__video {
    @media only screen and (max-width: 992px){
      width: 80%;
    }
    @media only screen and (max-width: 576px){
      width: 95%;
    }
  }

</style>