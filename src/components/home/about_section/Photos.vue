<template>
  <div class="photos">
    <div class="photos-first">
      <img src="../../../assets/small-burger.jpeg" alt="burger">
      <img src="../../../assets/small-pizza.jpg" alt="pizza">
    </div>
    <div class="photos-second">
      <img src="../../../assets/small-steak.jpg" alt="steak">
      <img src="../../../assets/small-pasta.jpg" alt="pasta">
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