<template>
    <div class="home">
      <NavBar/>
      <JobForm />
      <SubscribePage />
    </div>
  </template>
  
  <script>
//   import ContactNav from '/components/ContactNav.vue'
  import NavBar from '/components/NavBar.vue'
  import JobForm from '/components/JobForm.vue'
  import SubscribePage from '/components/SubscribePage.vue'
  export default {
    components: {
    //   ContactNav,
    NavBar,
    JobForm,
      SubscribePage,
    },
  }
  </script>
  
  <style>
  </style>