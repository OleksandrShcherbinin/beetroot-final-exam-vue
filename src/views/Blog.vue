<template>
  <div class="blog-page">
    <h2 class="blog-page__title">Bon Appetite</h2>
    <video class="blog-page__video" width="60%" height="auto" controls>
      <source :src="getVideoUrl('/video/Pexels-Videos-1111421.mp4')" type="video/mp4">
      <source :src="getVideoUrl('/video/Pexels-Videos-1111421.ogg')" type="video/ogg">
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
name: "Blog",
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
.blog-page {
  max-width: 1970px;
  margin: 0 auto;
  padding: 87px 10% 10% 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 992px){
      padding: 87px 5% 5% 5%;
  }
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
}
</style>