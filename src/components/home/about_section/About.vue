<template>
  <section class="about">
    <div class="about-wrapper">
      <Article/>
      <Photos/>
    </div>
  </section>
</template>

<script>
import Article from "@/components/home/about_section/Article";
import Photos from "@/components/home/about_section/Photos";
export default {
name: "About",
  components: {
    Article,
    Photos
  }
}
</script>

<style scoped lang="scss">
.about {
  max-width: 1970px;
  min-height: 570px;
  display: flex;
  align-items: center;
  &-wrapper {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    @media only screen and (max-width: 576px) {
      flex-direction: column;
      padding: 10px 0;
    }
  }
}

</style>