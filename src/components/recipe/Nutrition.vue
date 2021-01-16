<template>
  <div class="nutrition">
    <h3 class="nutrition__title">Nutrition</h3>
    <div class="nutrition-inner">
      <div class="nutrition-inner-data">
        <h4 class="nutrition-inner-data__title">Nutrient</h4>
        <NutritionData v-bind:nutrition="nutrition_array1"/>
      </div>
      <div class="nutrition-inner-data">
        <h4 class="nutrition-inner-data__title">DV</h4>
        <NutritionData v-bind:nutrition="nutrition_array2"/>
      </div>
      <div class="nutrition-inner-data">
        <h4 class="nutrition-inner-data__title">DV%</h4>
        <NutritionData v-bind:nutrition="nutrition_array3"/>
      </div>
    </div>

  </div>
</template>

<script>
import NutritionData from "@/components/recipe/NutritionData";
export default {
name: "Nutrition",
  components: {
    NutritionData
  },
  data() {
    return {
      nutrition_array1: ["protein", "fat", "carbohydrates", "calories", "cholesterol"],
      nutrition_array2: ["3.2 GR", "6.5 GR", "3.2 GR", "4.8 GG", "102 KCAL"],
      nutrition_array3: ["5%", "6%", "9%", "2%", "8%"],
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/scss/variables";
@import "src/scss/mixins";
.nutrition {
  box-sizing: border-box;
  width: 40%;
  max-width: 470px;
  min-width: 320px;
  min-height: 370px;
  box-shadow: 0 19px 49px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(237, 237, 237, 0.7);
  background-color: #ffffff;
  padding: 5%;
  &__title {
    @include title(#14141d, $PD, 24px, 700);
    margin-bottom: auto;
  }
  &-inner {
    display: flex;
    justify-content: space-between;
    &-data {
      &__title {
        @include title(#fe4c8d, $PD, 18px, 700);
        line-height: 22px;
      }
    }
  }
}

</style>