import axios from "axios";
import { defineStore } from "pinia";


export const useDBStore = defineStore('db', {
    state() {
        return{
            items: null,
            categories: null,
            loading: false,
            error: null
        };
    },

    getters: {
        //items: state => state.dbItems
    },

    actions: {
        async fetchData(){
            console.log('fetch items');
            
            this.loading = true;

            try{
                const itemsResponse = await axios.get('http://127.0.0.1:8000/api/items');
                this.items = itemsResponse.data;

                const categoriesResponse = await axios.get('http://127.0.0.1:8000/api/categories');
                this.categories = categoriesResponse.data;

                return {
                    itemsResponse,
                    categoriesResponse
                }
            }catch (error){
                this.error = error.message;
                
                console.log(error.message);
                
            }

            this.loading = false;
        }
    }  
});