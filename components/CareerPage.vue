<template>
  <div class="carousel-inner relative w-full overflow-hidden h-screen">
    <div
      class="carousel-item active relative float-left w-full h-screen bg-no-repeat bg-cover bg-center"
    >
      <video
        class="min-w-full min-h-full max-w-fit xl:min-w-0 xl:min-h-0"
        playsinline
        autoplay
        muted
        loop
      >
        <source
          class=""
          src="https://mdbootstrap.com/img/video/Lines.mp4"
          type="video/mp4"
        />
      </video>

      <div
        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style="background-color: rgba(0, 0, 0, 0.6)"
      >
        <div class="flex justify-center items-center h-full">
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            class="text-white text-center px-14 px-md-0"
          >
            <h1
              class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-500 md:text-5xl lg:text-6xl text-white"
            >
              We believe in investing in talent
            </h1>
            <p
              class="mb-6 text-lg font-normal text-gray-300 text-left text-s sm:px-16 xl:px-48 text-white"
            >
              If you trying to add value and want to be part of a great team
              come to deams
            </p>
            <nuxt-link
              href="#"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-450 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              :to="{ path: 'Jobs' }"
            >
              View jobs
              <svg
                class="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div
      class="carousel-item relative float-left w-full h-screen bg-no-repeat bg-cover bg-center"
    >
      <video
        class="min-w-full min-h-full max-w-fit xl:min-w-0 xl:min-h-0"
        playsinline
        autoplay
        muted
        loop
      >
        <source
          class=""
          src="https://mdbootstrap.com/img/video/forest.mp4"
          type="video/mp4"
        />
      </video>
      <div
        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style="background-color: rgba(0, 0, 0, 0.3)"
      >
        
      </div>
    </div>
    <div
      class="carousel-item relative float-left w-full h-screen bg-no-repeat bg-cover bg-center"
    >
      <video
        class="min-w-full min-h-full max-w-fit xl:min-w-0 xl:min-h-0"
        playsinline
        autoplay
        muted
        loop
      >
        <source
          class=""
          src="https://mdbootstrap.com/img/video/Tropical.mp4"
          type="video/mp4"
        />
      </video>
      
        
      
    </div>
  </div>
</template>

<script>
import aosMixin from '~/mixins/aos'
export default {
  name: 'PageIndex',
  mixins: [aosMixin],
}
</script>

<style>



</style>
