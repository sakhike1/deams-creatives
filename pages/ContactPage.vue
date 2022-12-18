<template>
  <div class="home">
    <ContactNav />
    <ContactForm />
    <SubscribePage />
  </div>
</template>

<script>
import ContactNav from '/components/ContactNav.vue'
import ContactForm from '/components/ContactForm.vue'
import SubscribePage from '/components/SubscribePage.vue'
export default {
  components: {
    ContactNav,
    ContactForm,
    SubscribePage,
  },
}
</script>

<style>
</style>