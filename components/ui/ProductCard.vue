<template>
  <!-- :to="{ name: 'detail-produk', params: { produkId: produk.id } }" -->
  <div class="h-56 rounded-md lg:h-72">
    <NuxtLink
      :to="`/produk/${produk.id}`"
      class="card card-compact h-full w-full cursor-pointer bg-base-100 shadow-xl"
    >
      <figure class="aspect-square">
        <img
          :src="produk.foto_produk[0].gambar"
          :alt="produk.nama"
          class="aspect-square object-cover"
        />
      </figure>
      <div class="flex flex-col p-1 text-sm text-slate-700 lg:p-2 lg:text-base">
        <h2 class="m-0">{{ produk.nama }}</h2>
        <h3 class="font-semibold">{{ formatCurrency(produk.harga) }}</h3>
        <p class="text-xs">{{ produk.provinsi }}</p>
        <div class="flex text-xs lg:text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="orange"
            class="h-3 w-3 lg:h-5 lg:w-4"
          >
            <path
              fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clip-rule="evenodd"
            />
          </svg>
          <div>4.9</div>
          <div class="mx-2">|</div>
          <div>{{ produk.dilihat }} terjual</div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  produk: {
    type: Object,
    required: true,
  },
});

const formatCurrency = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
};
</script>

<style scoped>
/* Tambahkan styling khusus jika diperlukan */
</style>
