<template>
    <BasketItem
        v-for="item in filteredItems"
        :key="item.id"
        :item="item"
        :itemKey="$key"
    >  
    </BasketItem>
    <CartBottomBasket></CartBottomBasket>
</template>
<script>
    import BasketItem from '../components/BasketItem.vue';
    import { useBasketStore } from '../stores/BasketStore';
    import CartBottomBasket from '../components/CartBottomBasket.vue';

    export default {
        components:{
            BasketItem,
            CartBottomBasket
        }, 

        data(){
            return{
                item: Object,
            }
        },

        created(){
            const useBasket = useBasketStore();

            this.basket = useBasket.basket;

            this.$watch(() => useBasket.basket, (newValue, oldValue) => {
                this.basket = newValue[0];
            });
            //console.log('test');
            console.log(this.basket);
        },

        computed: {
            filteredItems(){
                return this.basket;
                //const items_less_100 = this.items.filter(item => item.price > 100);
                
                //console.log(items_less_100);
            }
        }
    }
</script>
