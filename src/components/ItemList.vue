<template>
    <div class="w-full grid grid-cols-3">
        <Item
            v-for="item in filteredItems"
            :key="item.id"
            :item="item"
        >
        </Item>
    </div>
</template>

<script>
import Item from "./Item.vue";
import { useVariableStore } from "../stores/VariableStore";
import { useDBStore } from "../stores/DbStore";

export default {
    components: {
        Item
    },


    props: {
        category_id: {
            type: Number,
            default: 1
        }
    },

    data(){
        const dbStore = useDBStore();

        return{
            items: [],
            loading : dbStore.loading,
            error: dbStore.error
        }
    },

    async created(){
        const dbStore = useDBStore()

        this.items = dbStore.items;

        console.log(this.items);
    },

    computed: {
        filteredItems(){
            let currentCategory = useVariableStore().currentCategory;
            let currentCategoryId = currentCategory.id;

                if(this.items == null){ 
                    this.$router.push('/welcome');
                
                    return true;
                }


            const items =  this.items.filter(item => item.active == 1);
            
            console.log('category id: ' + currentCategoryId);
            
            return currentCategoryId ? items.filter(item => item.category == currentCategoryId) : items;
        }
    },

    mounted() {
        
    }

}

</script>

