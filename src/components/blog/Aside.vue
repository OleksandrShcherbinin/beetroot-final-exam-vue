<template>
  <aside class="aside">
    <Categories v-bind:categories="categories"/>
    <Tags v-bind:tags="tags"/>
  </aside>

</template>

<script>
import Categories from "@/components/blog/Categories";
import Tags from "@/components/blog/Tags";
export default {
name: "Aside",
  components: {
    Categories,
    Tags
  },
  data() {
    return {
      categories: [
          {title: 'All foods'},
          {title: 'Vegitables'},
          {title: 'Delicious food'},
          {title: 'Special dishes'},
          {title: 'Juices'},
      ],
      tags: [
        {title:'Juice'},
        {title:'vegitables'},
        {title:'Special dishes'},
        {title:'lunch'},
      ]
    }
  },

}
</script>

<style scoped lang="scss">
.aside {
  flex: 30%;
}
</style>