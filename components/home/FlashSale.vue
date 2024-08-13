<template>
  <div class="group relative mt-6 rounded-md bg-white shadow">
    <div
      class="flex gap-4 border-b-2 px-3 py-3 font-semibold uppercase text-primary"
    >
      <div>Flash Sale</div>
      <div>
        <span
          class="countdown font-mono text-sm font-normal text-slate-700 lg:text-xl"
        >
          <span
            style="--value: 10"
            class="rounded-sm bg-slate-700 px-1 text-white"
          ></span
          >:
          <span
            style="--value: 24"
            class="rounded-sm bg-slate-700 px-1 text-white"
          ></span
          >:
          <span
            style="--value: 6"
            class="rounded-sm bg-slate-700 px-1 text-white"
          ></span>
        </span>
      </div>
    </div>
    <div
      class="absolute left-0 top-0 hidden h-full cursor-pointer items-center justify-center transition-opacity duration-700 group-hover:flex lg:-left-5"
      @click="scrollLeft"
    >
      <div
        class="flex justify-center rounded-full border bg-slate-50 p-2 shadow-lg"
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
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </div>
    </div>
    <div class="p-2">
      <ul
        class="list-product flex h-44 gap-2 overflow-x-scroll scroll-smooth py-2 lg:h-64"
        ref="tablist"
      >
        <li class="h-full w-28 flex-shrink-0 rounded-md lg:w-44">
          <div>
            <div
              role="image"
              class="aspect-square bg-cover"
              style="
                background-image: url(&quot;https://i.pinimg.com/564x/68/28/fd/6828fd5d65bba355774fa291e8af322e.jpg&quot;);
              "
            ></div>
            <div class="flex justify-center text-sm font-semibold lg:text-lg">
              Rp. 120.000
            </div>
            <div>
              <progress
                class="progress progress-primary w-full"
                value="70"
                max="100"
              ></progress>
            </div>
          </div>
        </li>
        <li class="h-full w-28 flex-shrink-0 rounded-md lg:w-44">
          <div>
            <div
              role="image"
              class="aspect-square bg-cover"
              style="
                background-image: url(&quot;https://i.pinimg.com/564x/79/bd/db/79bddb4f254aabfd89fe094b3797ad71.jpg&quot;);
              "
            ></div>
            <div class="flex justify-center text-sm font-semibold lg:text-lg">
              Rp. 120.000
            </div>
            <div>
              <progress
                class="progress progress-primary w-full"
                value="70"
                max="100"
              ></progress>
            </div>
          </div>
        </li>
        <li class="h-full w-28 flex-shrink-0 rounded-md lg:w-44">
          <div>
            <div
              role="image"
              class="aspect-square bg-cover"
              style="
                background-image: url(&quot;https://i.pinimg.com/564x/e2/33/c7/e233c702ffe42c44199560c01a705e01.jpg&quot;);
              "
            ></div>
            <div class="flex justify-center text-sm font-semibold lg:text-lg">
              Rp. 120.000
            </div>
            <div>
              <progress
                class="progress progress-primary w-full"
                value="70"
                max="100"
              ></progress>
            </div>
          </div>
        </li>
        <li class="h-full w-28 flex-shrink-0 rounded-md lg:w-44">
          <div>
            <div
              role="image"
              class="aspect-square bg-cover"
              style="
                background-image: url(&quot;https://i.pinimg.com/564x/7a/f1/78/7af178f2cfec5a539e40760d853f07ca.jpg&quot;);
              "
            ></div>
            <div class="flex justify-center text-sm font-semibold lg:text-lg">
              Rp. 120.000
            </div>
            <div>
              <progress
                class="progress progress-primary w-full"
                value="70"
                max="100"
              ></progress>
            </div>
          </div>
        </li>
        <li class="h-full w-28 flex-shrink-0 rounded-md lg:w-44">
          <div>
            <div
              role="image"
              class="aspect-square bg-cover"
              style="
                background-image: url(&quot;https://i.pinimg.com/564x/d8/c0/1e/d8c01ea3afb5c8b74be3e4d009865301.jpg&quot;);
              "
            ></div>
            <div class="flex justify-center text-sm font-semibold lg:text-lg">
              Rp. 120.000
            </div>
            <div>
              <progress
                class="progress progress-primary w-full"
                value="70"
                max="100"
              ></progress>
            </div>
          </div>
        </li>
        <li class="h-full w-28 flex-shrink-0 rounded-md lg:w-44">
          <div>
            <div
              role="image"
              class="aspect-square bg-cover"
              style="
                background-image: url(&quot;https://i.pinimg.com/564x/25/fe/52/25fe52998c95bebde04a91ea19048095.jpg&quot;);
              "
            ></div>
            <div class="flex justify-center text-sm font-semibold lg:text-lg">
              Rp. 120.000
            </div>
            <div>
              <progress
                class="progress progress-primary w-full"
                value="70"
                max="100"
              ></progress>
            </div>
          </div>
        </li>
        <li class="h-full w-28 flex-shrink-0 rounded-md lg:w-44">
          <div>
            <div
              role="image"
              class="aspect-square bg-cover"
              style="
                background-image: url(&quot;https://i.pinimg.com/564x/25/fe/52/25fe52998c95bebde04a91ea19048095.jpg&quot;);
              "
            ></div>
            <div class="flex justify-center text-sm font-semibold lg:text-lg">
              Rp. 120.000
            </div>
            <div>
              <progress
                class="progress progress-primary w-full"
                value="70"
                max="100"
              ></progress>
            </div>
          </div>
        </li>
        <li class="h-full w-28 flex-shrink-0 rounded-md lg:w-44">
          <div>
            <div
              role="image"
              class="aspect-square bg-cover"
              style="
                background-image: url(&quot;https://i.pinimg.com/564x/25/fe/52/25fe52998c95bebde04a91ea19048095.jpg&quot;);
              "
            ></div>
            <div class="flex justify-center text-sm font-semibold lg:text-lg">
              Rp. 120.000
            </div>
            <div>
              <progress
                class="progress progress-primary w-full"
                value="70"
                max="100"
              ></progress>
            </div>
          </div>
        </li>
        <!-- Tambahkan item lain di sini -->
      </ul>
    </div>
    <div
      class="absolute right-0 top-0 hidden h-full cursor-pointer items-center justify-center transition-opacity duration-700 group-hover:flex lg:-right-5"
      @click="scrollRight"
    >
      <div class="rounded-full border bg-slate-50 p-2 shadow-lg">
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
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const tablist = ref(null);
const scrollRight = () => {
  tablist.value.scrollLeft += 200;
};

const scrollLeft = () => {
  tablist.value.scrollLeft -= 200;
};
</script>

<style scoped>
.list-product {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.list-product::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>
