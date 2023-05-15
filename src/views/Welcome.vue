<template>
    <RouterLink to="/" class="block h-screen bg-red-700 text-white">
        ORDER HERE (touch the screen)
    </RouterLink>
</template>

<script>
import { useDBStore } from '../stores/DbStore';

export default {
    async mounted() {
        const dbStore = useDBStore();
        
        let fetchItems = await dbStore.fetchData();
    }
}

</script>