<template>
  <section id="services" class="bg-gray-100 pt-15">
    <div
      class="bg-gradient-to-r from-gray-100 to-gray-300 py-20 border hover:rounded"
      data-aos="fade-down-right"
    >
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <p
              class="text-base leading-relaxed text-s text-left xl:w-2/4 lg:w-3/4 mx-auto"
            >
              Services
            </p>
            <h1
              class="text-3xl font-bold text-gray-700 text-left xl:w-2/4 lg:w-3/4 mx-auto"
            >
              We provide advanced app solutions <br />
              by Driving excellence
            </h1>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="p-2 sm:w-1/2 w-full">
              <div
                class="bg-gray-100 hover:scale-75 rounded flex p-4 h-full items-center"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-blue-300 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font text-xs font-medium"
                  >Software Enhancement and Modernization
                </span>
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div
                class="bg-gray-100 hover:scale-75 rounded flex p-4 h-full items-center"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-blue-300 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font text-xs font-medium"
                  >Quality Custom Software Development</span
                >
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div
                class="bg-gray-100 hover:scale-75 rounded flex p-4 h-full items-center"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-blue-300 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font text-xs font-medium"
                  >Project Recovery Solutions</span
                >
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div
                class="bg-gray-100 hover:scale-75 rounded flex p-4 h-full items-center"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-blue-300 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font text-xs font-medium"
                  >Enterprise Software Development</span
                >
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div
                class="bg-gray-100 hover:scale-75 rounded flex p-4 h-full items-center"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-blue-300 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font text-xs font-medium"
                  >Software Maintenance Services</span
                >
              </div>
            </div>
            <div class="p-2 sm:w-1/2 w-full">
              <div
                class="bg-gray-100 hover:scale-75 rounded flex p-4 h-full items-center"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  class="text-blue-300 w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span class="title-font text-xs font-medium"
                  >Third-party Customization
                </span>
              </div>
            </div>
          </div>
          <button
            v-wave
            class="flex mx-auto mt-16 text-white bg-blue-300 border-0 py-4 px-11 focus:outline-none hover:bg-blue-400 shadow-2xl rounded-full text-m"
          >
            <Nuxt-link class="flex text-white" :to="{ path: 'Contact' }"
              >Talk to us</Nuxt-link
            >
          </button>
        </div>
      </section>
    </div>
  </section>
</template>

<style>
.py-12 {
  padding-top: 3rem;
  padding-bottom: 9rem;
}
</style>
