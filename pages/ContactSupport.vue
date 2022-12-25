<template>
    <div class="App">
    <ContactNav />
  <ContactSupport />
  <SubscribePage />
</div>
</template>

<script>
import ContactNav from '/components/ContactNav.vue'
import ContactSupport from '~/components/ContactSupport.vue';
import SubscribePage from '/components/SubscribePage.vue'
export default {
component: ContactSupport,ContactNav,SubscribePage
}
</script>

<style>

</style>

