import { defineStore } from "pinia";

export const useVariableStore = defineStore('variable', {
    state(){
        return{
            currentCategory: {}
        }
    },

    actions: {
        updateCurrentCategory(category = {}){
            this.currentCategory = category;

            console.log(this.currentCategory);
        }
    }
});