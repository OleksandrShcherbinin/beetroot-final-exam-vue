<template>
  <ul class="header-nav-menu">
    <li v-for="item in menu" class="header-nav-menu__item">
      <router-link class="header-nav-menu__link"
                   v-on:click.native="scrollToTop()"
                   :to="item.link">{{item.title}}
      </router-link>
    </li>
    <ShoppingCart/>
  </ul>

</template>

<script>
import ShoppingCart from "@/components/header/ShoppingCart";
export default {
name: "Menu",
  components: {ShoppingCart},
    data: function () {
    return {menu: [
          {title: 'Home', link: '/'},
          {title: 'Menu', link: '/menu'},
          {title: 'Reservation', link: '/reservation'},
          {title: 'Recipe', link: '/recipe'},
          {title: 'Blog', link: '/blog'},
          {title: 'Contact', link: '/contact'},
      ]
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    },
  }
}
</script>

<style lang="scss">
.header-nav-menu {
  width: 53%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 992px){
    width: 90%;
  }
  @media only screen and (max-width: 576px) {
    flex-direction: column;
    padding: 20px 10px 20px 10px;
  }
  &__item {
    @media only screen and (max-width: 576px) {
      margin-bottom: 25px;
    }
  }
  &__link {
    color: #2c465a;
    font-size: 14px;
    font-weight: 700;
    line-height: 30px;
    text-transform: uppercase;
    letter-spacing: 0.35px;
    @media only screen and (max-width: 576px) {
      font-size: 30px;
    }
  }
  &__link:hover {
    border-bottom: 2px solid #fea100;
  }
}

</style>