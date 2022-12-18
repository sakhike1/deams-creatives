<template>
 
    <div id="app" fixed>
      <div id=" nav" class=" py-2 bg-gradient-to-r from-gray-100 to-gray-300">
        <nav class="container px-6 py-6 mx-auto md:flex md:justify-between md:items-center">
          <div class="flex items-center justify-between">
            <router-link
              to="/"
              class="font-bold text-blue-300 md:text-2xl hover:text-blue-200"
              >DEAMS CREATIVES
            </router-link>
            <!-- Mobile menu button -->
            
          </div>
  
          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <ul
            :class="showMenu ? 'flex' : 'hidden'"
            class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
          >
            
            <li class="pt-2">
              
              <button
                type="button"
                class="text-white shadow-lg bg-blue-300 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-4 text-center mr-2 mb-2"
              >
                <Nuxt-link class=" flex text-white" :to="{ path: '/' }"
                  >Back to home</Nuxt-link
                >
              </button>
            </li>
  
            
          </ul>
        </nav>
      </div>
      
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  
  export default {
    name: 'Nav',
    setup() {
      let showMenu = ref(false);
      const toggleNav = () => (showMenu.value = !showMenu.value);
      return { showMenu, toggleNav };
    },
    props: ["showExtra"],
  
    mounted() {
      console.log(this.$root);
    },
  };
  </script>
  
  <style lang="css">
  .scale-slide-enter-active,
  .scale-slide-leave-active {
    position: fixed;
    transition: all 0.85s ease;
  }
  
  .scale-slide-enter-from {
    left: -100%;
  }
  
  .scale-slide-enter-to {
    left: 0%;
  }
  
  .scale-slide-leave-from {
    transform: scale(1);
  }
  
  .scale-slide-leave-to {
    transform: scale(0.8);
  }
  </style>
  