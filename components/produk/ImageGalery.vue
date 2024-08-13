<template>
  <div>
    <div class="overflow-hidden rounded-md bg-red-100 shadow">
      <img :src="mainImage" class="aspect-square object-cover" alt="" />
    </div>

    <div class="mt-3 grid grid-cols-5 gap-2">
      <div
        v-for="image in images"
        :key="image.id"
        class="overflow-hidden rounded-md shadow"
        @click="updateMainImage(image.gambar)"
      >
        <img :src="image.gambar" class="aspect-square object-cover" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

const props = defineProps({
  images: Array,
  mainImage: String,
});

const emit = defineEmits(["updateMainImage"]);

const updateMainImage = (image) => {
  emit("updateMainImage", image);
};
</script>
