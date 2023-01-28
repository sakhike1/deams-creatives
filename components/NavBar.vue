<template>
  <div id="app" fixed>
    <div id=" nav" class="bg-gradient-to-r from-gray-100 to-gray-300 py-2">
      <nav
        class="container px-6 py-6 mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between">
          <nuxt-link
            to="/"
            class="font-bold text-blue-300 md:text-2xl hover:text-blue-200"
            >DEAMS CREATIVES
          </nuxt-link>
          <!-- Mobile menu button -->
          <div @click="toggleNav" class="flex-end md:hidden">
            <button
              type="button"
              class="text-white hover:text-gray-1000 focus:outline-none focus:text-gray-400"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
        >
          <li>
            <a
              href="#consulting"
              class="text-black text-s hover:text-blue-300"
              
              >Our services</a
            >
          </li>
          <li>
            <a
              to="/"
              class="text-black text-s hover:text-blue-300"
              href="#Design"
              >How we work
            </a>
          </li>
          <li>
            <a class="text-black text-s hover:text-blue-300" href="#services"
              >About us
            </a>
          </li>
          <li class="pt-2">
            <button
              type="button"
              class="text-white shadow-lg bg-blue-300 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-4 text-center mr-2 mb-2"
            >
              <Nuxt-link class="flex text-white" :to="{ path: 'Contact' }"
                >Work with Us</Nuxt-link
              >
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Nav',
  setup() {
    let showMenu = ref(false)
    const toggleNav = () => (showMenu.value = !showMenu.value)
    return { showMenu, toggleNav }
  },
  props: ['showExtra'],

  mounted() {
    console.log(this.$root)
  },
}
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
