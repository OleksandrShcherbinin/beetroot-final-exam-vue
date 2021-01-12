<template>
  <div class="socials">
    <svg class="socials__icon"><use xlink:href="../../assets/icons/facebook.svg#facebook"></use></svg>
    <svg class="socials__icon"><use xlink:href="../../assets/icons/twitter.svg#twitter"></use></svg>
    <svg class="socials__icon"><use xlink:href="../../assets/icons/google-plus2.svg#plus"></use></svg>
  </div>
</template>

<script>
export default {
  name: "Socials"
}
</script>

<style scoped lang="scss">
.socials {
  display: flex;
  height: 52px;
  width: 180px;
  margin-top: 20px;
  &__icon {
    cursor: pointer;
  }
  &__icon:hover {
    transform: scale(1.1);
  }
}
</style>