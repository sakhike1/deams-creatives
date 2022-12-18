<template>
  <div class="home">
    <NavBar />
    <HeroPage />
    <OurClients />
    <WhatWeDo />
    <WeDesignPage />
    <ServicePage />
    <MeetTheTeam/>
    <Testimonials/>
    <LeadingDesign/>
    <SubscribeForm/>
   
    
 
  </div>
</template>

<script>
import NavBar from '/components/NavBar.vue'
import HeroPage from '@/components/HeroPage.vue'
import OurClients from '@/components/OurClients.vue'
import WhatWeDo from '@/components/WhatWeDo.vue'
import WeDesignPage from '@/components/WeDesignPage.vue'
import  ServicePage from '@/components/ServicePage.vue'
import MeetTheTeam from '@/components/MeetTheTeam.vue'
import Testimonials from '@/components/Testimonials.vue'
import LeadingDesign from '/components/LeadingDesign.vue'
import SubscribeForm from '/components/SubscribeForm.vue'






export default {
    components: {
    NavBar,
    HeroPage,
    OurClients,
    WhatWeDo,
    WeDesignPage,
    ServicePage,
    MeetTheTeam,
    Testimonials,
    LeadingDesign,
    SubscribeForm,
 
   
    
}
 
}
</script>
