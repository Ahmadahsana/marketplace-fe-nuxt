<template>
  <div class="breadcrumbs text-sm">
    <ul class="text-primary">
      <li><a>Produk</a></li>
      <li><a>Fashion</a></li>
      <li class="font-semibold text-slate-700">{{ detailProduk.nama }}</li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  detailProduk: Object,
});
</script>
