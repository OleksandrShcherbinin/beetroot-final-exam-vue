<template>
  <aside class="aside">
    <Categories v-bind:categories="categories"/>
    <RecentPost v-bind:posts="posts"/>
    <Archive v-bind:archive="archive"/>
    <Tags v-bind:tags="tags"/>
  </aside>

</template>

<script>
import Categories from "@/components/blog/Categories";
import RecentPost from "@/components/blog/RecentPost";
import Archive from "@/components/blog/Archive";
import Tags from "@/components/blog/Tags";
export default {
name: "Aside",
  components: {
    Categories,
    RecentPost,
    Tags,
    Archive
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
        {title: 'Juice'},
        {title: 'vegitables'},
        {title: 'Special dishes'},
        {title: 'lunch'},
      ],
      archive: [
        {month: 'January', posts: '15'},
        {month: 'February', posts: '08'},
        {month: 'March', posts: '09'},
        {month: 'April', posts: '55'},
        {month: 'May', posts: '36'},
      ],
      posts: [
          [
          {
            img: '/small/1.jpg',
            date: '08-nov-2016',
            title: 'Suspendisse eu dui libero malesuada'
          },
          {
            img: '/small/2.jpg',
            date: '13-nov-2016',
            title: 'Quisque pellentes turpis sit amet'
          },
          {
            img: '/small/3.jpg',
            date: '20-nov-2016',
            title: 'Suspendisse eu dui libero malesuada'
          }
          ],
          [
          {
            img: '/small/4.jpg',
            date: '18-dec-2016',
            title: 'Suspendisse eu dui libero malesuada'
          },
          {
            img: '/small/5.jpg',
            date: '20-dec-2016',
            title: 'Quisque pellentes turpis sit amet'
          },
          {
            img: '/small/6.jpg',
            date: '25-dec-2016',
            title: 'Suspendisse eu dui libero malesuada'
          }
          ],
          [
          {
            img: '/small/7.jpg',
            date: '03-jan-2017',
            title: 'Suspendisse eu dui libero malesuada'
          },
          {
            img: '/small/8.jpg',
            date: '15-jan-2017',
            title: 'Quisque pellentes turpis sit amet'
          },
          {
            img: '/small/9.jpg',
            date: '21-jan-2017',
            title: 'Suspendisse eu dui libero malesuada'
          }
          ]
      ]
    }
  },

}
</script>

<style scoped lang="scss">
.aside {
  width: 25%;
  min-width: 280px;
}
</style>