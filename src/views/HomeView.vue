<template>

    <div class="flex middle p-4">
      <section class="side-bar flex w-1/6">
        <SideCategories></SideCategories>
      </section>
      <section class="main flex w-5/6 p-4">
        <ItemList :category="currentCategory"></ItemList>
      </section>
    </div>
    <CartBottom></CartBottom>
</template>

<script>
  import SideCategories from '../components/SideCategories.vue' 
  import ItemList from '../components/ItemList.vue';
  import CartBottom from '../components/CartBottom.vue';
  
  export default{
    components: {
      SideCategories, ItemList, CartBottom
    },

    data()  {
      return{
        currentCategory : 0,
        items: []
      }
    },
  }

</script>

