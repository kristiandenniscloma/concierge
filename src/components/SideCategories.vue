<template>
    <div class="w-full">
        <SideCategoriesItem 
            v-for="subCategory in filteredSubCategories"
            :key="subCategory.id"
            :subCategory="subCategory"
        >
        </SideCategoriesItem>
    </div>
</template>

<script>
import { getCategories } from '../api';
import { useDBStore } from '../stores/DbStore';
import SideCategoriesItem from './SideCategoriesItem.vue';

    export default {
        emits: ['chooseCategoryToHome'],
        components:{
            SideCategoriesItem
        },

        data(){
            const dbStore = useDBStore();

            return{
                subCategories: [],
                loading: dbStore.loading,
                error: dbStore.error
            }
        },

        async created(){
            //const categories = await getCategories();
            //this.subCategories = categories.data;

            const dbStore = useDBStore();

            this.subCategories = dbStore.categories;

            console.log(this.subCategories);
        },

        computed: {
            filteredSubCategories() {
                if(this.subCategories == null){ 
                    this.$router.push('/welcome');
                
                    return true;
                }
                
                return this.subCategories.filter(subCategory => subCategory.status == 1);
            }
        },
    }
</script>

