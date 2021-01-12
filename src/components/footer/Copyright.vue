<template>
  <h5 class="copyright">2016 ©  <strong>Luxury RestaurAnt</strong>, All rights reserved</h5>
</template>

<script>
export default {
name: "Copyright"
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.copyright {
  position: relative;
  margin: 0 auto;
  @include text(#adb2b7, $SR, 13px, 400, uppercase);
  letter-spacing: 0.97px;
  strong {
    color: #ffffff;
  }
}
.copyright:before {
  content: " ";
  position: absolute;
  width: 370px;
  top: 6px;
  left: -107%;
  height: 1px;
  background-color: #52535e;
  @media only screen and (max-width: 1200px) {
    display: none;
  }
}
.copyright:after {
  content: " ";
  position: absolute;
  width: 370px;
  height: 1px;
  top: 6px;
  right: -107%;
  background-color: #52535e;
  @media only screen and (max-width: 1200px) {
    display: none;
  }
}
</style>