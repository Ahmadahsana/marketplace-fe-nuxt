<template>
  <div v-if="isLoaded">
    <ProdukBreadcrumbs :detailProduk="detailProduk" />
    <div class="mt-2 flex flex-row">
      <div class="basis-5/12 p-3 pl-0">
        <ProdukImageGalery
          :images="detailProduk.foto_produk"
          :mainImage="mainImage"
          @updateMainImage="updateMainImage"
        />
      </div>
      <div class="flex basis-5/12 flex-col p-3">
        <ProdukInfo :detailProduk="detailProduk" :quantity="quantity" />
        <div class="mt-6 text-sm font-semibold">Deskripsi:</div>
        <div>
          <div
            class="overflow-hidden"
            :class="{ 'h-40': !showMore && isLongText }"
          >
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
        <ProdukShippingInfo :detailProduk="detailProduk" />
        <ProdukSellerInfo :detailProduk="detailProduk" />
      </div>
      <div class="basis-4/12 p-3 pr-0">
        <div class="rounded-md bg-white p-4 shadow">
          <div class="border-b-2 py-3 font-semibold">Set order</div>
          <div class="mt-3 flex items-center">
            <img
              :src="mainImage"
              class="aspect-square w-20 rounded-sm object-cover"
              alt=""
            />
            <div class="ml-3">
              <!-- <div class="text-slate-700 text-sm">{{ detailProduk.nama }}</div> -->
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
                v-model="quantity"
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
    </div>

    <!-- Ulasannnnnnn -->

    <div class="mt-10 rounded-md bg-white p-6 shadow-md">
      <div class="mb-4 flex items-center justify-between">
        <div>
          <h2 class="text-xl font-bold">Ulasan & Peringkat</h2>
          <div class="flex items-center gap-1">
            <template v-for="i in 5" :key="i">
              <span
                :class="{
                  'text-yellow-400': i <= Math.round(averageRating),
                  'text-gray-300': i > Math.round(averageRating),
                }"
                >⭐</span
              >
            </template>
            <div class="ml-2 text-lg font-semibold text-gray-800">
              {{ averageRating }} / 5.0
            </div>
          </div>
          <div class="text-sm text-gray-600">2.3k+ Ulasan</div>
        </div>
        <div class="space-y-2">
          <!--  bintang -->
          <div v-for="star in 5" :key="star" class="flex items-center">
            <div class="mr-3">
              ⭐
              <span class="">{{ star }}</span>
            </div>
            <progress
              class="progress progress-primary mr-3 w-56"
              :value="getProgress(star)"
              max="100"
            ></progress>
            <span>{{ getReviewCount(star) }}</span>
          </div>
        </div>
      </div>

      <!-- Reviews with Images and Videos -->
      <div class="mb-6 grid grid-cols-6 gap-4">
        <div v-for="(review, index) in reviews" :key="index" class="col-span-1">
          <img
            v-if="review.images.length"
            :src="review.images[0]"
            alt="Review Image"
            class="h-32 w-full rounded-lg object-cover"
          />
          <!-- <video v-if="review.videos.length" controls class="w-full h-32 rounded-lg mt-2">
              <source :src="review.videos[0]" type="video/mp4" />
            </video> -->
        </div>
      </div>

      <!-- Daftar ulasan -->
      <div
        v-for="review in reviews"
        :key="review.id"
        class="border-b-2 py-4 last:border-b-0"
      >
        <div class="text-lg font-semibold">{{ review.author }}</div>
        <div class="text-sm text-gray-500">{{ review.date }}</div>
        <div class="text-md">{{ review.comment }}</div>
        <div v-if="review.images.length" class="mt-2 flex space-x-2">
          <img
            v-for="image in review.images"
            :key="image"
            :src="image"
            :alt="`Gambar Ulasan ${image}`"
            class="h-16 w-16 rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "page",
});

import axios from "axios";

const route = useRoute();
const backendUrl = import.meta.env.VITE_BACKEND_URL;
const id = route.params.productId;
const detailProduk = ref();
const isLoaded = ref(false);
const mainImage = ref();
const kategoriProduk = ref();

const fetchDetailProduk = async (id) => {
  try {
    const response = await axios.get(`${backendUrl}api/seller/product/${id}`);
    if (response.data.code == 200) {
      detailProduk.value = response.data.data;
      isLoaded.value = true;
      mainImage.value = detailProduk.value.foto_produk[0].gambar;
      console.log(detailProduk.value);
      kategoriProduk.value = response.data.data.owner_kategori_id;
    }
  } catch (error) {
    console.error(error);
  }
};

const formatCurrency = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
};

// untuk deskripsi produk
const showMore = ref(false);
const isLongText = computed(() => detailProduk.value.deskripsi.length >= 200);

const toggleShowMore = () => {
  showMore.value = !showMore.value;
};

// untuk set order

const quantity = ref(1);

const incrementQuantity = () => {
  if (quantity.value < detailProduk.value.stok) {
    quantity.value++;
  }
};

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const totalPrice = computed(() => {
  return (quantity.value * detailProduk.value.harga).toFixed(2);
});

// untuk review
const reviews = ref([
  {
    id: 1,
    author: "Eren Y****r",
    date: "Kemarin",
    comment: "Produk sesuai ekspektasi. Pengiriman cepat. Terima kasih.",
    images: ["https://via.placeholder.com/150"],
    videos: [],
    rating: 5,
  },
  {
    id: 2,
    author: "Annie L****hart",
    date: "Kemarin",
    comment: "Kualitas bagus dan layanan responsif. Sangat puas!",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    videos: ["https://via.placeholder.com/300x150"],
    rating: 5,
  },
  {
    id: 3,
    author: "Levi A****man",
    date: "2 hari lalu",
    comment:
      "Sangat baik, produk datang dalam kondisi sempurna dan lebih cepat dari yang dijadwalkan.",
    images: ["https://via.placeholder.com/150"],
    videos: [],
    rating: 5,
  },
  {
    id: 4,
    author: "Wahyu",
    date: "2 hari lalu",
    comment:
      "Sangat baik, produk datang dalam kondisi sempurna dan lebih cepat dari yang dijadwalkan.",
    images: ["https://via.placeholder.com/150"],
    videos: [],
    rating: 1,
  },
]);

function getProgress(star) {
  const totalReviews = reviews.value.length;
  const starCount = reviews.value.filter(
    (review) => review.rating === star,
  ).length;
  return (starCount / totalReviews) * 100; // Persentase ulasan untuk setiap bintang
}

function getReviewCount(star) {
  return reviews.value.filter((review) => review.rating === star).length;
}

const averageRating = computed(() => {
  const total = reviews.value.reduce((acc, review) => acc + review.rating, 0);
  return (total / reviews.value.length).toFixed(1);
});

// untuk keranjang
const tambahKeranjang = (id) => {
  // axios
  //   .post(backendUrl + `api/order/cart?token=` + dataAuth.data, {
  //     id_produk: id,
  //     quantity: quantity.value
  //   })
  //   .then((response) => {
  //     // Handle respons dari server
  //     if (response.data.code == 200) {
  //       // console.log(response.data)
  //       console.log('berhasil tambah keranjang')
  //       addToCart()
  //     }
  //   })
  //   .catch((error) => {
  //     // Handle error jika ada
  //     console.error(error)
  //   })
};

// image galery
const updateMainImage = (image) => {
  mainImage.value = image;
};

onMounted(async () => {
  await fetchDetailProduk(id);
  //   await ambilDataWishlist();

  //   isProdukWishlisted();

  //   await getRelatedProduct(kategoriProduk.value);
});
</script>
