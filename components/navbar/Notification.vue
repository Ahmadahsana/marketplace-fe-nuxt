<template>
  <div class="dropdown dropdown-end">
    <div
      tabindex="0"
      role="button"
      class="btn btn-ghost btn-sm mx-2 p-0 lg:btn-md lg:mx-0"
    >
      <div class="indicator">
        <!-- <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 lg:h-5 lg:w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg> -->
        <Icon name="ic:outline-notifications-none" class="text-2xl" />
        <span
          class="badge indicator-item badge-primary badge-xs text-white lg:badge-sm"
          >8</span
        >
      </div>
    </div>
    <div
      tabindex="0"
      class="card dropdown-content card-compact z-[1] mt-3 w-96 bg-base-100 shadow"
    >
      <div class="card-body">
        <div class="flex items-center justify-between">
          <span class="font-bold">Notifikasi baru</span>
          <a href="#" class="text-xs font-thin text-primary"
            >Tandai sudah dibaca</a
          >
        </div>
        <hr />
        <div>
          <ul class="custom-scrollbar h-96 overflow-hidden">
            <li class="flex py-1">
              <div class="flex w-28 items-center">
                <div class="indicator">
                  <span class="badge indicator-item badge-warning"></span>
                  <img
                    alt="Tailwind CSS Navbar component"
                    class="w-10 rounded-md"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <div class="ml-3">
                <div class="text-base font-medium">Pesanan telah dikirim</div>
                <div class="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  voluptate libero laboriosam voluptatum sunt.
                </div>
              </div>
            </li>
            <li class="flex py-1">
              <div class="flex w-28 items-center">
                <img
                  alt="Tailwind CSS Navbar component"
                  class="w-10 rounded-md"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
              <div class="ml-3">
                <div class="text-base font-medium">Pesanan telah dikirim</div>
                <div class="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  voluptate libero laboriosam voluptatum sunt.
                </div>
              </div>
            </li>
          </ul>
        </div>
        <hr />
        <div class="flex justify-center">
          <span class="text-xs text-info">Lihat Semua Notifikasi</span>
        </div>
      </div>
    </div>
  </div>
</template>
