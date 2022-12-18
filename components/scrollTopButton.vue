<!-- <template>
    <div
        ref="scrollTopButton"
        class="sticky w-full flex justify-end bottom-0 pb-3 pr-5 transition sticky w-full flex justify-end bottom-0 pb-3 pr-5 lg:pr-16 transition invisible sticky w-full flex justify-end bottom-0 pb-3 pr-5 lg:pr-16 transition"
        
    >
        <div
            class="text-gray-400 hover:text-blue-400 transition"
        >
        <button @click="scrollToTop"> 
            </button>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from "vue";
 
    export default defineComponent({
        mounted() {
            window.addEventListener("scroll", this.handleScroll);
        },
 
        beforeUnmount() {
            window.removeEventListener("scroll", this.handleScroll);
        },
 
        methods: {
            handleScroll() {
                const scrollBtn = this.$refs.scrollTopButton;
                window.scrollTo({ top: 0, behavior: "smooth" });
 
                if (window.scrollY > 0) {
                    scrollBtn.classList.remove("invisible");
                } else {
                    scrollBtn.classList.add("invisible");
                }
            },
        },
    });
</script> -->