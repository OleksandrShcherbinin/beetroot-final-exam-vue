<template>
  <nav class="nav">
    <h4 class="nav__title">Navigation</h4>
    <ul class="nav-menu">
      <li v-for="item in menu" class="nav-menu__item">
        <router-link class="nav-menu__link" :to="item.link">{{item.title}}</router-link>
      </li>
    </ul>
  </nav>

</template>

<script>
export default {
  name: "NavMenu",
  data: function () {
    return {
      menu: [
        {title: 'Home', link: '/'},
        {title: 'Menu', link: '/menu'},
        {title: 'Reservation', link: '/reservation'},
        {title: 'Recipe', link: '/recipe'},
        {title: 'Blog', link: '/blog'},
        {title: 'Contact', link: '/contact'},
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.nav {

  &__title {
    @include title(#ffffff, $PD, 24px, 700);
  }
  &-menu {
    font-family: $SR;
    display: flex;
    flex-direction: column;
    &__item {
      @media only screen and (max-width: 576px) {
        margin-bottom: 10px;
      }
    }
    &__link {
      color: #adb2b7;
      font-size: 14px;
      font-weight: 400;
      line-height: 30px;
      letter-spacing: 0.35px;
      @media only screen and (max-width: 576px) {
        font-size: 30px;
      }
    }
    &__link:hover {
      border-bottom: 2px solid #adb2b7;
    }
  }
}

</style>