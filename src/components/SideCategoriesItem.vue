<template>
    <div class="w-full mb-4">
        <div @click="chooseCategory(subCategory)">
             <img :src="imgUrl" class="w-full">
        </div>
        <div class="text-center">
            {{ subCategory.name }}
        </div>
    </div>
</template>

<script>
import { useVariableStore } from "../stores/VariableStore";

export default{
    props:{
        subCategory: Object
    },

    data(){
        return{
            imgUrl: ''
        }
    },

    mounted(){
        this.imgUrl = 'http://127.0.0.1:8000/images/' + this.subCategory.thumbnail
    },

    methods: {
        chooseCategory(category){
            useVariableStore().updateCurrentCategory(category);
            console.log(category);
        }
    }
}

</script>