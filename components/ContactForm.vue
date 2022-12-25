<template>
  
  <!-- Contact Us -->
<div  data-aos="fade-down-right" class="max-w-[85rem] bg-gradient-to-r from-gray-100 to-gray-300   px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
   <!-- Container for demo purpose -->
<!-- Contact Us -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="max-w-2xl lg:max-w-5xl mx-auto">
    <div class="sm:text-left">
      <h2 class="text-lg font-semibold leading-8 text-blue-300">Speak to us</h2>
      <p class="mt-2 text-3xl text-left font-bold tracking-tight text-gray-900 sm:text-4xl">We’ll Get Back To
       <br> You Within 24hrs</p>
      
    </div>

    <div class="mt-12 grid items-center rounded-xl  lg:bg-gray-50
    dark:lg:bg-darker  shadow-2xl lg:grid-cols-2 gap-6 lg:gap-16">
      <!-- Card -->
      <div class="flex flex-col  rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
        <h2 class="mb-8 text-xl font-semibold text-blue-300 dark:text-gray-200">
          Fill in the form
        </h2>

        <form>
          <div class="  ">
            <form  enctype="multipart/form-data"
            method="POST"
            @submit.prevent="onSubmit">
              <div class="form-group mb-6">
                <input   required="required" v-model="name" type="text" class="form-control block

                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                  placeholder="Name">
              </div>
              <div class="form-group mb-6">
                <input   required="required"  v-model="email" type="email" class="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                  placeholder="Email address">
              </div>
              <div class="form-group mb-6">
                <textarea
                required="required"
                class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="exampleFormControlTextarea13"
                rows="3"
                placeholder="Message"
              ></textarea>
              </div>
              
              <button type="submit" class="
                w-full
                px-6
                py-2.5
                bg-blue-300
                text-white
                font-medium
                text-xs
                leading-tight
                rounded
                shadow-md
                hover:bg-blue-400 hover:shadow-lg
                
               
                transition
                duration-150
                ease-in-out">Send an inquiry</button>
                <p class="text-gree" v-if="isSuccess">Message sent.</p>
            </form>
          </div>
          <!-- End Grid -->

          

          <div class="mt-3 text-center">
            <p class="text-sm text-gray-500">
              We'll get back to you in 1-2 business days.
            </p>
          </div>
        </form>
      </div>
      <!-- End Card -->

      <div class="divide-y divide-gray-200 dark:divide-gray-800">
        <!-- Icon Block -->
        <div class="flex gap-x-7 py-6">
          <svg class="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
          </svg>
          <div>
            <h3 class="font-semibold text-gray-800 dark:text-gray-200">Knowledgebase</h3>
            <p class="mt-1 text-sm text-gray-500">We're here to help with any questions or code.</p>
            <nuxt-link class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" :to="{ path: 'ContactSupport' }">
              Contact support
              <svg class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
              </svg>
            </nuxt-link>
          </div>
        </div>
        <!-- End Icon Block -->

        
        
        <!-- End Icon Block -->

        <!-- Icon Block -->
        <div class=" flex gap-x-7 py-6">
          <svg class="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
          </svg>
          <div>
            <h3 class="font-semibold text-gray-800 dark:text-gray-200">Contact us by email</h3>
            <p class="mt-1 text-sm text-gray-500">If you wish to write us an email instead please use</p>
            <p class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">
              deams@deamscreactive.com
            </p>
          </div>
        </div>
        <!-- End Icon Block -->
      </div>
    </div>
  </div>
</div>
<!-- End Contact Us -->
<!-- Container for demo purpose -->
  </div>
  <!-- End Contact Us -->
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      loading: false,
      name: "",
      email: "",
      files: [],
      isSuccess: false,
    };
  },
  methods: {
    processFile(event) {
      this.files = event.target.files[0];
    },
    onSubmit() {
      if (this.loading) return;
      this.loading = true;
      const formData = new FormData();
      formData.append("file", this.files);
      formData.append("name", this.name);
      formData.append("email", this.email);

      axios
        .post(
          "https://getform.io/f/8a375f0f-1748-4e5f-ac53-da63282411ea",
          formData,
          {
            headers: {
              Accept: "application/json",
            },
          }
        )
        .then(
          (response) => {
            this.isSuccess = response.data.success;
            this.name = "";
            this.email = "";
            this.message = "";
            
          },
          (response) => {
            // Error
          }
        );
    },
  },
};
</script>

<style>
.max-w-\[85rem\] {
    max-width: 125rem;

}
</style>