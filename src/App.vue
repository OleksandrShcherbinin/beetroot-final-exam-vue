<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
    <GoTop :has-outline="false"/>
  </div>
</template>
<script>
import Header from "@/components/header/Header";
import Home from "@/views/Home";
import Footer from "@/components/footer/Footer";
import GoTop from '@inotom/vue-go-top';

export default {
  name: 'Home',
  components: {
    Header,
    Home,
    Footer,
    GoTop
  },
}
</script>

<style lang="scss">
@import "scss/normalize";
@import "scss/fonts";
@import "scss/variables";
@import "scss/mixins";

#app {
  max-width: 1970px;
  margin: 0 auto;
}

</style>
