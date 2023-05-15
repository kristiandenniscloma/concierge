<template>
    <div class="w-full p-2.5 h-64">
        <div class="relative h-full p-2.5 bg-red-700 text-white rounded-3xl">
            <div>
                <img :src="imgUrl" />
            </div>
            <div class="absolute bottom-3">
                <div>
                    {{ item.name }}
                </div>
                <div>
                    P {{ item.price }}.00
                </div>
                <AddToBasketButton :item="item"></AddToBasketButton>
            </div>
        </div>
    </div>
</template>

<script>
    import AddToBasketButton from './AddToBasketButton.vue';

    export default {
        components: {
            AddToBasketButton
        },

        props: {
            item: Object,
        },

        data(){
            return{
                imgUrl: ''
            }
        },

        mounted(){
            this.imgUrl = '/src/assets/imgs/' + this.item.thumbnail
        }
    }
</script>