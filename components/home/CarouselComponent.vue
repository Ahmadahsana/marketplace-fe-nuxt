<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :mousewheel="false"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="false"
    :modules="modules"
    class="mySwiper aspect-auto h-32 rounded-md bg-slate-100 shadow lg:h-64"
  >
    <swiper-slide
      style="
        background-image: url(&quot;https://bemarketplace.muriatech.com/storage/produk/produk0506240805450.webp&quot;);
      "
      class="bg-cover bg-no-repeat"
    ></swiper-slide>
    <swiper-slide
      style="
        background-image: url(&quot;https://bemarketplace.muriatech.com/storage/produk/produk0506240805451.webp&quot;);
      "
      class="bg-cover bg-no-repeat"
    ></swiper-slide>
    <swiper-slide
      style="
        background-image: url(&quot;https://bemarketplace.muriatech.com/storage/produk/produk0506240805452.webp&quot;);
      "
      class="bg-cover bg-no-repeat"
    ></swiper-slide>
    <swiper-slide
      style="
        background-image: url(&quot;https://bemarketplace.muriatech.com/storage/produk/produk0506240805453.webp&quot;);
      "
      class="bg-cover bg-no-repeat"
    ></swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
// import "swiper/css";

// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import './style.css'

// import required modules
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation, Mousewheel],
    };
  },
};
</script>
