<template>
    <div class="home">
      <NavBar/>
      <CareerPage />
      <SubscribePage />
    </div>
  </template>
  
  <script>
//   import ContactNav from '/components/ContactNav.vue'
  import NavBar from '/components/NavBar.vue'
  import CareerPage from '/components/CareerPage.vue'
  import SubscribePage from '/components/SubscribePage.vue'
  export default {
    components: {
    //   ContactNav,
    NavBar,
      CareerPage,
      SubscribePage,
    },
  }
  </script>
  
  <style>
  </style>