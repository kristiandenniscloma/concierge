<template>
    <div class="p-4 bg-red-700 text-white text-right fixed w-full bottom-0">
        <!--<div>
            <button @click="increment">Increment + </button>
        </div>-->
        <RouterLink to="/view-basket"
        class="mt-2 bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded">
            Back
        </RouterLink>
        <RouterLink to="/welcome"
        class="mt-2 bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded">
            OK
        </RouterLink>
        <div class="float-right">
            Total: {{ total }}
        </div>
    </div>
</template>

<script>
    import mxBasketStore from '../mixins/mxBasketStore';

    export default {
        mixins: [
            mxBasketStore
        ],

        mounted(){
            this.getBasketStoreData();
        }

    }
</script>