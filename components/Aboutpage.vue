<template>
    <section class="pt-10 bg-gray-100  2xl:py-24  sm:pt-16 md:pt-0">
        <section class="py-10  sm:py-16 lg:py-24">
            <div data-aos="fade-up" data-aos-duration="3000" class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div class="max-w-xl mx-auto text-center">
                    <div
                        class="inline-flex px-4 py-1.5 mx-auto rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600">
                        <p class="text-xs font-semibold tracking-widest text-white uppercase">lets help you do it </p>
                    </div>
                    <h2 class="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">With Deams
                        Creatives, clients can expect an enjoyable process </h2>

                </div>


            </div>
        </section>

        <div data-aos="fade-up" data-aos-duration="3000"
            class="px-4 mx-auto rounded-md shadow-2xl bg-amber-100 max-w-7xl sm:px-6 lg:px-8">
            <div class="2xl:pl-24">
                <div class="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 2xl:gap-x-20">
                    <div class="text-center md:py-16 xl:py-24 md:text-left">
                        <blockquote>
                            <p class="text-1xl font-semibold leading-relaxed text-gray-600">We are experts in mobile app
                                development and web development, and we would like to offer our services to you.
                                With the rise of the digital age, having a mobile app for your business has become
                                increasingly important.



                            </p>
                        </blockquote>

                        <p class="mt-12 text-base text-gray-900 lg:mt-20">Work with deams lets create it for you</p>
                        <a href="#" title=""
                            class="inline-flex shadow-2xl items-center justify-center px-8 py-4 mt-4 text-base font-semibold text-black transition-all duration-200 bg-gradient-to-r from-green-200 via-green-300 to-blue-500 rounded-md hover:opacity-80 focus:opacity-80"
                            role="button"> Create your first App </a>
                    </div>

                    <div class="relative">
                        <img class="md:absolute md:bottom-0 md:scale-110 md:origin-bottom-right lg:scale-75 2xl:scale-100 2xl:-mt-20"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/11/smiling-man.png"
                            alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script>
import aosMixin from '~/mixins/aos'

export default {
    data() {
        return {
            x: 0,
        }
    },
    methods: {
        onMousemove(e) {
            this.x = e.clientX
        },
    },
    components: {},

    name: 'PageIndex',
    mixins: [aosMixin],
}
</script>

<style>

</style>