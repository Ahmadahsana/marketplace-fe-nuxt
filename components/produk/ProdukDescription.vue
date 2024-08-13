<template>
  <div>
    <div class="mt-6 text-sm font-semibold">Deskripsi:</div>
    <div>
      <div class="overflow-hidden" :class="{ 'h-40': !showMore && isLongText }">
        {{ detailProduk.deskripsi }}
      </div>
      <button
        v-if="isLongText"
        class="mt-2 font-medium text-primary"
        @click="toggleShowMore"
      >
        {{ showMore ? "Show less" : "Show more" }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

defineProps({
  detailProduk: Object,
});

console.log(detailProduk);

// const showMore = ref(false);
// const isLongText = computed(() => detailProduk.deskripsi.length >= 200);

const toggleShowMore = () => {
  showMore.value = !showMore.value;
};
</script>
