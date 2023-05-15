import { useBasketStore } from "../stores/BasketStore";

export default{
    data(){
        return {
            basket : {},
            count: 0,
            total: 0
        }
    },

    methods: {
        getBasketStoreData(){
            const useBasket = useBasketStore();

            this.basket = useBasket.basket;

            for(let basket_item in this.basket){
                this.total += this.basket[basket_item]['price'];
            }

            this.count = useBasket.count;

            this.$watch(() => useBasket.total, (newValue, oldValue) => {
                //console.log(`Total changed from ${oldValue} to ${newValue}`);
                this.total = newValue;
            });
        
            this.$watch(() => useBasket.count, (newValue, oldValue) => {
                //console.log(`Count changed from ${oldValue} to ${newValue}`);
                this.count = newValue;
            });
        },

    }
}