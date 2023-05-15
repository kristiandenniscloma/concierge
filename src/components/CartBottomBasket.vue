<template>
    <div class="p-4 bg-red-700 text-white text-right fixed w-full bottom-0">
        <!--<div>
            <button @click="increment">Increment + </button>
        </div>-->
        <RouterLink to="/"
        class="mt-2 bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded">
            Back
        </RouterLink>
        <RouterLink to="/pay"
        class="mt-2 bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded">
            Next
        </RouterLink>
        <div class="float-right">
            Total: {{ total }}
        </div>
    </div>
</template>

<script>
    import mxBasketStore from '../mixins/mxBasketStore.js';

    export default {
        mixins: [
            mxBasketStore
        ],
        data() {
        },

        computed: {
            filteredBasket(){
                //const items =  this.items.filter(item => item.active == 1);
               
                for(let basket_item in this.basket ){
                    //console.log(basket_item);
                }
               // return this.basket;
            }
        },

        mounted(){
            this.getBasketStoreData();  
        }
    }
</script>