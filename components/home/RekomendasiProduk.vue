<template>
  <div class="mt-8 rounded-md bg-white shadow lg:mt-8">
    <div class="rounded-md">
      <div class="mb-2 border-b-2 px-3 py-3">
        <div class="font-semibold uppercase text-primary lg:text-base">
          Produk incaran anda
        </div>
      </div>
      <div
        class="grid grid-cols-2 gap-2 px-2 pb-4 lg:grid-cols-5 lg:gap-5 xl:grid-cols-6"
      >
        <!-- daftar produk -->
        <UiProductCard
          v-for="produk in daftarProduk"
          :key="produk.id"
          :produk="produk"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

// console.log(backendUrl);
const daftarProduk = ref([]);

const getProduk = () => {
  axios
    .get(backendUrl + "api/seller/product")
    .then((response) => {
      // Handle respons dari server
      if (response.data.code == 200) {
        // console.log(response.data.data.data);
        daftarProduk.value = response.data.data.data;
      }
    })
    .catch((error) => {
      // Handle error jika ada
      console.error(error);
    });
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
};

onMounted(() => {
  getProduk();
});
</script>
