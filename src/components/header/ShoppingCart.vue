<template>
  <div class="shopping">
    <svg class="shopping__cart"><use xlink:href="../../assets/icons/shopping-cart.svg#cart"></use></svg>
  </div>
</template>

<script>
export default {
name: "ShoppingCart"
}
</script>

<style scoped lang="scss">
.shopping {
  position: relative;
  &__cart {
    width: 21px;
    height: 17px;
    cursor: pointer;
  }
}
.shopping::after {
  content: "\25BC";
  position: absolute;
  top: 4px;
  font-size: 13px;
  right: -15px;
  width: 10px;
  height: 10px;
  cursor: pointer;
}
</style>