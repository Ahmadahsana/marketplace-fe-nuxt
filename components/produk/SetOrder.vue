<!-- <template>
  <div>
    <div class="rounded-md bg-white p-4 shadow">
      <div class="border-b-2 py-3 font-semibold">Set order</div>
      <div class="mt-3 flex items-center">
        <img
          :src="mainImage"
          class="aspect-square w-20 rounded-sm object-cover"
          alt=""
        />
        <div class="ml-3">
          <div class="font-semibold">{{ detailProduk.nama }}</div>
        </div>
      </div>
      <div class="mt-4 flex items-center justify-between">
        <div class="flex gap-1 rounded-md border p-1 shadow">
          <button
            @click="decrementQuantity"
            class="btn btn-primary btn-sm text-white"
          >
            -
          </button>
          <input
            type="number"
            v-model.number="quantity"
            value="1"
            min="1"
            :max="detailProduk.stok"
            class="w-18 input input-sm input-bordered max-w-xs"
          />
          <button
            @click="incrementQuantity"
            class="btn btn-primary btn-sm text-white"
          >
            +
          </button>
        </div>
        <div class="ml-3 text-sm font-semibold">
          Stok : {{ detailProduk.stok }}
        </div>
      </div>
      <div class="mt-5 flex justify-between">
        <div class="text-sm text-slate-500">Total harga :</div>
        <div class="font-semibold">{{ formatCurrency(totalPrice) }}</div>
      </div>
      <div class="mt-3 flex flex-col gap-3">
        <div class="btn btn-primary">Buy Now</div>
        <div
          @click="tambahKeranjang(detailProduk.id)"
          class="btn btn-outline btn-primary"
        >
          Add to chart
        </div>
      </div>
      <div id="share" class="mt-4 flex justify-between border-t-2 text-sm">
        <div class="flex cursor-pointer items-center gap-2 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
          chat seller
        </div>
        <div class="flex cursor-pointer items-center gap-2 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
            />
          </svg>
          Share Produk
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { defineEmits } from "vue";

const props = defineProps({
  detailProduk: Object,
  mainImage: String,
  quantity: Number,
});

const emit = defineEmits(["updateQuantity"]);

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
    emit("updateQuantity", quantity.value);
  }
};

const incrementQuantity = () => {
  if (quantity.value < detailProduk.stok) {
    quantity.value++;
    emit("updateQuantity", quantity.value);
  }
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
};

const totalPrice = computed(() => {
  return (quantity.value * detailProduk.harga).toFixed(2);
});
</script> -->
