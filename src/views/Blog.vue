<template>
  <div class="blog-page">
    <AfterHeader v-bind:header="header"/>
    <div class="blog-page-wrapper">
      <MainBlog/>
      <Aside/>
    </div>
  </div>
</template>

<script>
import AfterHeader from "@/components/header/AfterHeader";
import MainBlog from "@/components/blog/MainBlog";
import Aside from "@/components/blog/Aside";
export default {
name: "Blog",
  components: {
    AfterHeader,
    MainBlog,
    Aside,
  },
  data() {
    return {
      header: ["Blog", "/blog.webp", "/blog.jpg",
        "/blog-small.webp", "/blog-small.jpg", "blog seafood"],
    }
  },
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.blog-page {
  max-width: 1970px;
  margin: 0 auto;
  padding-top: 87px;
  &-wrapper {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 97px 0 97px 0;
  }
}
</style>