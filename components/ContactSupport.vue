<template>
    
    <div class="py-16 bg-gradient-to-r from-gray-100 to-gray-300">
        <div class=" py-6 sm:py-8 lg:py-12">
            <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
              <div class="max-w-xl flex flex-col items-center text-left mx-auto">
          
                <h1 class="text-black-800 text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12">Give us a call your ideas matter to us </h1>
          
                <div class="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
                 
          
                  
                </div>
              </div>
            </div>
          </div>
      <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
        
        <div
          data-aos="fade-down-right"
          class="
          bg-gradient-to-r from-orange-600 to-orange-500
            dark:lg:bg-darker
            lg:p-16
            rounded-[4rem]
            space-y-6
            md:flex
            flex-row-reverse
            md:gap-6
            justify-center
            md:space-y-0
            lg:items-center
            hover:shadow-lg transition duration-300 ease-in-out
          "
        >
          <div class="md:5/12 lg:w-1/2">
            <img src="~/assets/developer-team.png" loading="lazy" width="400px" height="400px" />
          </div>
          <div class="md:7/12 lg:w-1/2">
            <h1 class="text-4xl text-white ">Get in touch</h1>
            <div class="mt-8 flex gap-4 md:items-center">
            <div class="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
             
                
                <div class="py-6 md:py-0 md:px-6">
                    
                    <p class="pt-2 text-white pb-4">Give us a call lets talk about your idea</p>
                    <div class="space-y-4">
                       
                        <p class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <span class="text-white">087552166</span>
                        </p>
                        <p class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <span class="text-white">deams@deamscreactive.com</span>
                        </p>
                    </div>
                </div>
                  
               
                
           
              
                 
            
                <div class="w-5/6">
                  
                </div>
              </div>
            </div>
          </div>
         
        </div> 
        
        <!-- <AnimatedCursor /> -->
        <!-- <scrollTopButton/> -->
      </div>
     
      
        
      <cursor-fx/>
    </div>
    
  </template>
  
  <script>
  import aosMixin from '~/mixins/aos'
  import { CursorFx } from '@luxdamore/vue-cursor-fx';
  
  // import AnimatedCursor from 'vue-animated-cursor'
  // import scrollTopButton from '/components/scrollTopButton.vue'
  
  
  
  // import { CursorFx } from '@luxdamore/vue-cursor-fx';
  
  
  export default {
    components: {
      'cursor-fx': CursorFx,
      // AnimatedCursor,
      // scrollTopButton
      
     
      // 'cursor-fx': CursorFx,
    },
    name: 'PageIndex',
    mixins: [aosMixin],
   
    
  }
  
  </script>
  
  <style src="@luxdamore/vue-cursor-fx/dist/CursorFx.css">
  .v-application .py-15 {
    padding-top: 60px !important;
    padding-bottom: 70px !important;
  }
  
  .relative {
    margin-bottom: -10px;
  }
  </style>