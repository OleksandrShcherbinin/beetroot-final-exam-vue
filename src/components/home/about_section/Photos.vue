<template>
  <div class="photos">
    <div class="photos-first">
      <picture class="menu__image">
        <source srcset="../../../assets/small-burger.webp" type="image/webp">
        <source srcset="../../../assets/small-burger.jpeg" type="image/jpeg">
        <img src="../../../assets/small-burger.jpeg" alt="burger">
      </picture>
      <picture class="menu__image">
        <source srcset="../../../assets/small-pizza.webp" type="image/webp">
        <source srcset="../../../assets/small-pizza.jpg" type="image/jpeg">
        <img src="../../../assets/small-pizza.jpg" alt="small pizza">
      </picture>
    </div>
    <div class="photos-second">
      <picture class="menu__image">
        <source srcset="../../../assets/small-steak.webp" type="image/webp">
        <source srcset="../../../assets/small-steak.jpg" type="image/jpeg">
        <img src="../../../assets/small-steak.jpg" alt="small pizza">
      </picture>
      <picture class="menu__image">
        <source srcset="../../../assets/small-pasta.webp" type="image/webp">
        <source srcset="../../../assets/small-pasta.jpg" type="image/jpeg">
        <img src="../../../assets/small-pasta.jpg" alt="small pizza">
      </picture>
    </div>
  </div>
</template>

<script>
export default {
name: "Photos"
}
</script>

<style scoped lang="scss">
.photos {
  width: 45%;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  grid-gap: 10px;
  @media only screen and (max-width: 576px) {
    width: 75%;
  }
  @media only screen and (max-width: 1240px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }
  &-first, &-second {
    cursor: pointer;
  }
  &-first {
    margin-top: 50px;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    grid-gap: 10px;
    @media only screen and (max-width: 1240px) {
       margin-top: 0;
    }
  }
  &-first *:hover, &-second *:hover {
    transform: scale(1.05);
  }
  &-second {
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    grid-gap: 10px;
    @media only screen and (max-width: 1240px) {
       margin-bottom: 0;
    }
  }
}

</style>