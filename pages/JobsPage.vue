<template>
    <div class="home">
      <!-- <ContactNav /> -->
      <NavBar/>
      <JobsPage />
      <SubscribePage />
    </div>
  </template>
  
  <script>
//   import ContactNav from '/components/ContactNav.vue'
  import NavBar from '/components/NavBar.vue'
  import JobsPage from '/components/JobsPage.vue'
  import SubscribePage from '/components/SubscribePage.vue'
  export default {
    components: {
    //   ContactNav,
    NavBar,
      JobsPage,
      SubscribePage,
    },
  }
  </script>
  
  <style>
  </style>