<template>
  <div>
    <div class="mt-6 text-sm font-semibold">Shipping Information:</div>
    <div>
      Dikirim dari <span>{{ detailProduk.provinsi }}</span>
    </div>
    <div>Estimasi tiba <span>22 -24 Maret</span></div>
  </div>
</template>

<script setup>
defineProps({
  detailProduk: Object,
});
</script>
