<template>
  <div class="info">
    <div class="info-inner">

    </div>
  </div>
</template>

<script>
export default {
name: "PinkContacts"
}
</script>

<style scoped lang="scss">
.info {
  width: 370px;
  background-color: #fe4c8d;
  height: 420px;
  margin-right: 20px;
  @media only screen and (max-width: 1200px) {
    margin-bottom: 20px;
    margin-right: 0;
  }
  @media only screen and (max-width: 577.98px) {
    width: 280px;
    height: 370px;
  }
  &-inner {
    width: 350px;
    height: 400px;
    margin: 10px;
    border: 1px dashed rgba(255, 255, 255, 0.5);
    @media only screen and (max-width: 577.98px) {
      width: 260px;
      height: 350px;
    }
  }
}
</style>