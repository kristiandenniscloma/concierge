<template>
    Pay at the cashier

    Amount: {{ total }}

    <CartBottomPay></CartBottomPay>
</template>

<script>
import { useBasketStore } from '../stores/BasketStore';
import CartBottomPay from '../components/CartBottomPay.vue';

    export default{
    data() {
        return {
            total: 0,
        };
    },
    created() {
        const useBasket = useBasketStore();
        this.total = useBasket.total;
    },

    components: { CartBottomPay }
}
</script>