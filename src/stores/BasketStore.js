import { defineStore } from 'pinia'

export const useBasketStore = defineStore('basket', {
    state(){
        return {
            basket: [],
            count: 0,
            total: 0,
        }
    },

    getters: {
        /*getBasket(){
            state.basket = [2];
            return state.basket;
        },*/
        /*getCount(){
            return state.count;
        }*/
    },

    actions: {
        increment() {
            this.count++;
            console.log('increment');
        },

        decrement() {
            this.count--;
            console.log('decrement');
        },

        addToBasket(params) {
            //let obj = {};
            let key = Math.floor(1000000000 + Math.random() * 9000000000);
        
            params['key'] = key;
            this.basket.push(params);
            
            this.count = Object.keys(this.basket).length;

            
            let final_total = 0;
            for(let index in this.basket){
                //x += this.basket[index].price;
                final_total += this.basket[index].price;
            }
            this.total = final_total;
        },

        removeItem(key){
            //const find = this.basket.findIndex(obj => obj.key === key);
            const index = this.basket.findIndex(item => item.key === key);

            if(index !== -1){
                this.basket.splice(index, 1);
            }

            this.count = Object.keys(this.basket).length;

            let final_total = 0;
            for(let index in this.basket){
                final_total += this.basket[index].price;
            }

            this.total = final_total;
        },

        reset(){
            this.basket = [];
            this.count =  0;
            this.total = 0;
        }
    }
});