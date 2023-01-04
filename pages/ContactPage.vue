<template>
  <div class="home">
    <NavBar />
    <ContactForm />
    <SubscribePage />
  </div>
</template>

<script>
import NavBar  from '/components/NavBar.vue'
import ContactForm from '/components/ContactForm.vue'
import SubscribePage from '/components/SubscribePage.vue'
export default {
  components: {
    NavBar ,
    ContactForm,
    SubscribePage,
  },
}
</script>

<style>
</style>