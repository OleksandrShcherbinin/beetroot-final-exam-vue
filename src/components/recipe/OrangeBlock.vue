<template>
  <div class="orange">
    <RecipeOrder/>
  </div>

</template>

<script>
import RecipeOrder from "@/components/recipe/RecipeOrder";
export default {
name: "OrangeBlock",
  components: {
      RecipeOrder
  }
}
</script>

<style scoped lang="scss">
.orange {
  max-width: 1970px;
  min-height: 566px;
  background: url(../../assets/orange-top.png) right no-repeat;
  background-color: #fea100;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>