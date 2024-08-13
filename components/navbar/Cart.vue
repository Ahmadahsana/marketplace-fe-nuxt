<template>
  <div class="dropdown dropdown-end">
    <div
      tabindex="0"
      role="button"
      class="btn btn-ghost btn-sm mx-2 p-0 lg:btn-md lg:mx-0"
    >
      <div class="indicator">
        <Icon
          name="material-symbols:shopping-cart-outline-rounded"
          class="text-2xl"
        />
        <span
          class="badge indicator-item badge-primary badge-xs text-white lg:badge-sm"
        ></span>
      </div>
    </div>
    <div
      tabindex="0"
      class="card dropdown-content card-compact z-[1] mt-3 w-96 bg-base-100 shadow"
    >
      <div class="card-body">
        <div class="flex items-center justify-between">
          <span class="font-bold">Keranjang ()</span>
          <RouterLink to="" class="text-xs font-thin text-primary"
            >Lihat</RouterLink
          >
        </div>
        <hr />
        <div>
          <ul class="custom-scrollbar max-h-96 overflow-y-auto">
            <li class="flex items-center py-2">
              <img
                src="https://via.placeholder.com/150"
                alt="Product Image"
                class="h-12 w-12 rounded-md object-cover"
              />
              <div class="ml-3 flex-grow">
                <div class="text-sm font-medium">Nama produk</div>
                <div class="text-xs text-gray-500">Toko</div>
              </div>
              <div class="text-sm font-bold">Rp. 90000</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
