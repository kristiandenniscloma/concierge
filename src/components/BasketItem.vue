<template>
    <div class="w-full bg-red-700 text-white p-4 text-1xl border-dashed border-b-4">
        <div>
            <img 
            :src="imgUrl"
            class="w-24"
            />
        </div>
        <div>
            {{ this.name }}
        </div>
        <div>
            {{ this.price }}
        </div>
        <button @click="removeItem(this.item.key)" class="bg-yellow-500 hover:bg-yellow-400 text-red-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded">
            Remove
        </button>
    </div>
</template>

<script>
    import { useBasketStore } from '../stores/BasketStore';

    export default {
        props: {
            item : Object,
        },

        data(){
            return{
                name : this.item.name,
                price : this.item.price,
                imgUrl : '/src/assets/imgs/' + this.item.thumbnail
            }
        },

        created(){
            //console.log('item key: ' + this.itemKey);
            console.log(this.item);
        },

        methods: {
            removeItem(key){
                console.log('key: ' + key);

                useBasketStore().removeItem(key);
            }
        }

    }
</script>