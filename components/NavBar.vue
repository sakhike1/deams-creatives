<template>
  <div id="app" fixed>
    <div id="nav" class="py-2 bg-gradient-to-r from-gray-100 to-gray-300">
      <nav class="container">
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="font-bold text-blue-300 md:text-2xl hover:text-blue-200"
          >
            DEAMS CREATIVES
          </router-link>
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
        <ul :class="['menu', showMenu ? 'flex' : 'hidden']">
          <li>
            <a href="#consulting">Our services</a>
          </li>
          <li>
            <a href="#Design">How we work</a>
          </li>
          <li>
            <a href="#services">About us</a>
          </li>
          <li class="pt-2">
            <button type="button">
              <Nuxt-link class="flex text-white" :to="{ path: 'ContactPage' }">
                Work with Us
              </Nuxt-link>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'Nav',

  props: ['showExtra'],

  setup() {
    const showMenu = ref(false)

    const toggleNav = () => (showMenu.value = !showMenu.value)

    return {
      showMenu,
      toggleNav,
    }
  },
})
</script>

<style lang="css">
.container {
  @apply px-6 py-6 mx-auto md:flex md:justify-between md:items-center;
}

.menu {
  @apply flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0;
}

.menu li a {
  @apply text-black text-sm hover:text-blue-300;
}

.menu li button {
  @apply px-5 py-4 mb-2 mr-2 text-sm font-medium text-center text-white bg-blue-300 rounded-lg shadow-lg
  hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800;
}

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
