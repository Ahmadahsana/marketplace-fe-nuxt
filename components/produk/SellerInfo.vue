<template>
  <div>
    <div class="mt-6 text-sm font-semibold">Seller Information:</div>
    <div class="flex w-full items-center">
      <div class="">
        <div class="avatar online">
          <div class="w-20 rounded-full">
            <img :src="detailProduk.gambar_toko" />
          </div>
        </div>
      </div>
      <div class="ml-2">
        <div class="font-semibold">{{ detailProduk.nama_toko }}</div>
        <div class="text-sm text-slate-500">
          Aktif 6 jam yang lalu | 4,6 Penilaian Toko
        </div>
        <NuxtLink to="/jajal" class="btn btn-outline btn-primary btn-sm"
          >Kunjungi toko</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  detailProduk: Object,
});
</script>
