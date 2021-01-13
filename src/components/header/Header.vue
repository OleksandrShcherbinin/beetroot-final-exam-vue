<template>
  <header class="header" v-on:scroll="handleScrollForHeader" :style="style">
    <input id="burger" type="checkbox" class="header-burger-menu">
    <label for="burger" class="header-burger-img"></label>
    <nav class="header-nav">
      <img class="header-nav__img" alt="restaurant logo" src="../../assets/logo.png">
      <Menu/>
      <BookTable/>
    </nav>
  </header>
</template>

<script>
import Menu from "@/components/header/Menu";
import BookTable from "@/components/header/BookTable";

export default {
  name: "Header",
  components: {
    Menu,
    BookTable,
  },
  data() {
    return {style: ''}
  },
  created () {
    window.addEventListener('scroll', this. handleScrollForHeader);
  },
  destroyed () {
    window.removeEventListener('scroll', this. handleScrollForHeader);
  },
  methods: {
    handleScrollForHeader() {
      if (window.scrollY >= 1) {
        this.style = {
          boxShadow: "0px 10px 10px 5px #000000",
          backgroundColor: "gainsboro"
        }
      } else if (window.scrollY < 1) {
        this.style = {boxShadow: "none"}
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
.header {
  font-family: $SR;
  max-width: 1170px;
  min-height: 87px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999999999999;
  width: 100%;
  background-color: white;
  &-burger-menu {
    cursor: pointer;
    position: absolute;
    top: 35px;
    right: 65px;
    display: none;
  }
  &-burger-menu:checked ~ &-nav {
    display: flex;
    flex-direction: column;
    padding: 20px 10px 20px 10px;
    &-menu {
      width: 100%;
      margin: 0 0;
      padding: 25px 0 5px;
      &__item {
        width: 100%;
        margin-bottom: 5px;
        text-align: center;
        cursor: pointer;
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.8);
      }
      &__item:hover {
        transform: scale(1.1);
      }
      &__item:active {
        transform: scale(1);
      }
      &__link:hover {
        border: none;
        color: white;
        letter-spacing: 5px;
      }
      &__link {
      padding-top: 9px;
      text-transform: uppercase;
     }
    }
  }
  &-burger-img {
    @media only screen and (min-width: 992px){
      display: none;
    }
  }
  &-burger-img,
  &-burger-img:before,
  &-burger-img:after {
    position: absolute;
    top: 40px;
    right: 30px;
    z-index: 9999999;
    transform: translate(-50%, -50%);
    width: 42px;
    height: 5px;
    background: #262626;
    cursor: pointer;
  }
  &-burger-img:before {
    content: "";
    top: -8px;
    right: 0;
    transform: translate(0, 0);
    transition: all 0.3s;
  }
  &-burger-img:after {
    content: "";
    top: 8px;
    right:  0;
    transform: translate(0, 0);
    transition: all 0.3s;
  }
  &-burger-menu:checked ~ &-nav {
    display: flex;
    flex-direction: column;
    padding: 20px 10px 20px 10px;
  }
  &-burger-menu:checked ~ &-burger-img {
    transform: rotate(-45deg);
    transition: all 0.3s;
  }
  &-burger-menu:checked ~ &-burger-img:before {
    transform: rotate(90deg);
    transition: all 0.3s;
    top: 0;
  }
  &-burger-menu:checked ~ &-burger-img:after {
    display: none;
  }
  &-nav {
    width: 100%;
    min-height: 87px;
    background-color: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99999;
    @media only screen and (max-width: 992px) {
      display: none;
    }
    &__img {
      @media only screen and (max-width: 992px ) {
        align-self: flex-start;
      }
    }
  }
}
.shadow {
  -webkit-box-shadow: 10px 10px 15px 5px #545454;
  box-shadow: 10px 10px 15px 5px #545454;
}
.noShadow {
  box-shadow: none;
}

</style>