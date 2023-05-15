<template>
    <button 
    @click="addItemToBasket(item)"
    class="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded">
        Add to basket
    </button>
</template>

<script>
    import { useBasketStore } from '../stores/BasketStore'
    import swal from 'sweetalert'

    //basket.fill();
    
    export default{
        props: {
            item: Object
        },

        methods: {
            addItemToBasket(params){
                useBasketStore().addToBasket(params);
                swal("Item added to basket");
            }
        }
    }
</script>