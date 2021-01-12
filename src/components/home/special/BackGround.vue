<template>
  <div class="special">
    <SpecialSlider/>
  </div>
</template>
<script>
import SpecialSlider from "@/components/home/special/SpecialSlider";
export default {
name: "BackGround",
  components: {SpecialSlider}
}
</script>
<style scoped lang="scss">
.special {
  max-width: 1970px;
  max-height: 440px;
  background: center / cover url(../../../assets/coffee.webp);
  position: relative;
  display: flex;
  justify-content: center;
}
</style>