<template>
  <section class="px-0 bg-gray-100 py-12 mx-auto sm:px-4">
    <!-- Contact Us -->
    <!-- Features -->
    <!-- Features -->
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Title -->
      <div id="consulting" class="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
        <h2
          class="text-3xl lg:text-4xl text-gray-300 font-bold dark:text-gray-200"
        >
          deams is a leading
          <span class="text-blue-200">Design and Development </span> agency.
        </h2>
      </div>
      <!-- End Title -->

      <!-- Grid -->
      <div class="mx-auto max-w-3xl grid grid-cols-12 gap-6 lg:gap-8">
        <!-- Icon Block -->
        <div data-aos="slide-up" class="col-span-6 sm:col-span-4 text-center">
          <img
            class="mx-auto h-20 w-20 text-gray-800 dark:text-gray-200"
            src="~/assets/icons8-topic-75 8.png"
            alt=""
          />

          <div class="mt-2 sm:mt-6">
            <h3 class="text-lg font-semibold text-gray-500 dark:text-gray-200">
              Web applications
            </h3>
          </div>
        </div>
        <!-- End Icon Block -->

        <!-- Icon Block -->
        <div data-aos="slide-up" class="col-span-6 sm:col-span-4 text-center">
          <img
            class="mx-auto h-20 w-20 text-gray-800 dark:text-gray-200"
            src="~/assets/Group 3.png"
            alt=""
          />
          <div class="mt-2 sm:mt-6">
            <h3 class="text-lg font-semibold text-gray-500 dark:text-gray-200">
              Custom mobile apps
            </h3>
          </div>
        </div>
        <!-- End Icon Block -->

        <!-- Icon Block -->
        <div
          data-aos="slide-up"
          class="col-span-6 col-start-4 sm:col-span-4 text-center"
        >
          <img
            class="mx-auto h-20 w-20 text-gray-800 dark:text-gray-200"
            src="~/assets/icons8-project-management-50 2.png"
            alt=""
          />
          <div class="mt-2 sm:mt-6">
            <h3 class="text-lg font-semibold text-gray-500 dark:text-gray-200">
              Validate your idea
            </h3>
          </div>
        </div>
        <!-- End Icon Block -->
      </div>
      <!-- End Grid -->

      <!-- Grid -->
      <div
        class="mt-20 grid grid-cols-12 items-center gap-x-2 sm:gap-x-6 lg:gap-x-8"
      >
        <div class="hidden md:block col-span-4 md:col-span-3">
          <img
            data-aos="slide-up"
            class="rounded-xl"
            src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80"
            alt="Image Description"
          />
        </div>
        <!-- End Col -->

        <div class="col-span-4 md:col-span-3">
          <img
            data-aos="slide-up"
            class="rounded-xl"
            src="https://images.unsplash.com/photo-1587613991119-fbbe8e90531d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1003&q=80"
            alt="Image Description"
          />
        </div>
        <!-- End Col -->

        <div class="col-span-4 md:col-span-3">
          <img
            data-aos="slide-up"
            class="rounded-xl"
            src="https://images.unsplash.com/photo-1554295405-abb8fd54f153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=652&q=80"
            alt="Image Description"
          />
        </div>
        <!-- End Col -->

        <div class="col-span-4 md:col-span-3">
          <img
            data-aos="slide-up"
            class="rounded-xl"
            src="https://images.unsplash.com/photo-1640622300473-977435c38c04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
            alt="Image Description"
          />
        </div>
        <!-- End Col -->
      </div>
      <ScrollUp />
      <!-- End Grid -->
    </div>
    <!-- End Features -->
    <!-- End Features -->
    <!-- End Hero -->
  </section>
</template>

<script>
import ScrollUp from '@/components/ScrollUp.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import aosMixin from '~/mixins/aos'
export default {
  name: 'PageIndex',
  mixins: [aosMixin],
  mounted() {
    AOS.init({})
  },
  components: {
    ScrollUp,
  },
}
</script>

<style></style>
