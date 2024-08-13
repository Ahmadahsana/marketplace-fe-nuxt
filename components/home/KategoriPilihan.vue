<template>
  <div class="group/main relative lg:w-full">
    <div class="my-4 w-full rounded-md bg-white shadow">
      <div class="border-b-2 p-3 font-semibold uppercase text-primary">
        Kategori Pilihan
      </div>
      <div class="relative">
        <button
          @click="scrollLeft"
          class="invisible absolute left-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full border bg-slate-50 p-2 shadow-lg group-hover/main:visible lg:-left-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          @click="scrollRight"
          class="invisible absolute right-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full border bg-slate-50 p-2 shadow-lg group-hover/main:visible lg:-right-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <ul
          ref="scrollContainer"
          class="scrollbar-hide flex h-24 gap-4 overflow-x-scroll p-3"
        >
          <li
            class="group flex w-48 flex-shrink-0 items-center rounded-md shadow-md hover:bg-primary"
            v-for="(item, index) in items"
            :key="index"
          >
            <div class="flex w-2/6 justify-center group-hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                />
              </svg>
            </div>
            <div class="flex w-4/6 justify-center group-hover:text-white">
              {{ item }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  "Perabot rumah Tangga",
  "Elektronik",
  "Pakaian",
  "Alat Tulis",
  "Mainan Anak",
  "Peralatan Dapur",
  "Olahraga",
  "Buku",
]);

const scrollContainer = ref(null);

function scrollLeft() {
  scrollContainer.value.scrollBy({ left: -200, behavior: "smooth" });
}

function scrollRight() {
  scrollContainer.value.scrollBy({ left: 200, behavior: "smooth" });
}
</script>

<style scoped>
.scrollbar-hide {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}
.scrollbar-hide::-webkit-scrollbar {
  display: none; /* WebKit */
}
</style>
