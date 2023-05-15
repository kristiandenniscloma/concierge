<template>
  <div ref="page" @mousemove="resetTimer">
    <header class="p-4 flex" v-if="showHeader">
      <div class="w-1/6">
        <img alt="MCDO LOGO" class="w-1/2 mb-10" src="@/assets/mcdo-logo.png" width="125" height="125" />
      </div>
      <div class="w-1/2 text-3xl">
        <b>Hey,</b> <br />
        what's up?
      </div>
    </header>

    <RouterView />
  </div>
</template>

<script>
  import { RouterView } from 'vue-router'
  import { useDBStore } from './stores/DbStore';

  export default {
    data()  {
      const dbStore = useDBStore();

      return{
        current_url: this.$route.path,
        loading : dbStore.loading,
        error : dbStore.error
      }
    },

    computed: {
      showHeader(){
        return this.current_url !== '/welcome';
      }
    },

    mounted() {
        this.$watch('$route.path', (newValue) => {
          this.current_url = newValue;
        });

        this.startTimer();
    },

    methods: {
      startTimer(){
        this.timeout = setTimeout(() => {
          //const router = useRouter();

          //console.log(this.loading);
          this.$router.push('/welcome');
        }, 500099999999);
      },
      resetTimer(){
        clearTimeout(this.timeout);
        this.startTimer();

        //console.log('test');
      }
    },

    beforeRouteUpdate(to, from, next){
      //console.log('redirected');
    }
  }
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
