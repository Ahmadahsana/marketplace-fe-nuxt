<template>
  <div>
    <div role="name" class="text-xl font-semibold">
      {{ detailProduk.nama }}
    </div>
    <div class="mt-1 flex flex-row gap-4 text-sm text-slate-500">
      <div class="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-4 w-4 text-yellow-500"
        >
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="mx-1 font-semibold text-slate-700">4,6</span>
        Rating
      </div>
      <div>
        <span class="mx-1 font-semibold text-slate-700">207</span>Review
      </div>
      <div>
        <span class="mx-1 font-semibold text-slate-700">1,2 K</span>Terjual
      </div>
      <div>
        <button @click="toggleWishlist" class="btn btn-ghost btn-sm"></button>
      </div>
    </div>
    <div class="mt-6 text-sm font-semibold">Pilih ukuran:</div>
    <div class="mt-6 text-sm font-semibold">Spesifikasi:</div>
    <div class="overflow-x-auto">
      <table class="table">
        <tbody class="pb-0 text-sm">
          <tr>
            <td>Merk</td>
            <td>: {{ detailProduk.spesifikasi.merk }}</td>
          </tr>
          <tr>
            <td>Kategori</td>
            <td>: {{ detailProduk.kategori.kategori }}</td>
          </tr>
          <tr>
            <td>Produk bahaya</td>
            <td>: {{ detailProduk.spesifikasi.produk_berbahaya }}</td>
          </tr>
          <tr>
            <td>Kondisi</td>
            <td>: {{ detailProduk.kondisi }}</td>
          </tr>
          <tr>
            <td>Berat</td>
            <td>: {{ detailProduk.shipping.berat }} g</td>
          </tr>
          <tr>
            <td>Stok</td>
            <td>: {{ detailProduk.stok }}</td>
          </tr>
          <tr>
            <td>Barang Preorder</td>
            <td>: {{ detailProduk.pre_order }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
defineProps({
  detailProduk: Object,
  quantity: Number,
});
</script>
