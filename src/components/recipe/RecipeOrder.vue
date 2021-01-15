<template>
  <div class="order">
    <h2 class="order__title">Food Step</h2>
    <RecipeStep v-for="step in steps" v-bind:step="step" :key="step.num"/>

  </div>

</template>

<script>
import RecipeStep from "@/components/recipe/RecipeStep";
export default {
  name: "RecipeOrder",
  components: {
    RecipeStep
  },
  data() {
    return {
      steps: [
        {num: 1, text: "Established fact that a reader will be distracted by the " +
              "readable content of a page when looking at its layout. The point of " +
              "using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed"},
        {num: 2, text: "Centuries, but also the leap into electronic typesetting, " +
              "remaining essentially unchanged. It was popularised in the 1960s with " +
              "the release of Letraset sheets containing Lorem Ipsum passages, and more recently"},
        {num: 3, text: "Content of a page when looking at its layout. The point of " +
              "using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed"},
        {num: 4, text: "Established fact that a reader will be distracted by the " +
              "readable content of a page when looking at its layout. The point of " +
              "using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed"},
        {num: 5, text: "Centuries, but also the leap into electronic typesetting, " +
              "remaining essentially unchanged. It was popularised in the 1960s with " +
              "the release of Letraset sheets containing Lorem Ipsum passages, and more recently"},
        {num: 6, text: "Content of a page when looking at its layout. The point of " +
              "using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed"}
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.order {
  max-width: 1170px;
  width: 60%;
  height: 350px;
  @supports (-webkit-overflow-scrolling: touch) {
    min-height: 350px;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: auto;
  &__title {
    @include title(#ffffff, $PD, 35px,700);
    margin: 0;
  }
}
::-webkit-scrollbar {
  width: 9px;
}
::-webkit-scrollbar-track {
  background-color: #cc8306;
}
::-webkit-scrollbar-thumb {
  max-height: 60px;
  background-color: #503608;
  border-radius: 50px;
}

</style>