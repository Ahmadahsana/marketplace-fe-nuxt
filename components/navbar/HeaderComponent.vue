<template>
  <header class="fixed left-0 top-0 z-50 flex w-full flex-col">
    <div class="bg-black text-white">
      <div class="container mx-auto">
        <div class="hidden justify-between lg:flex">
          <ul class="flex text-sm">
            <li>Follow Us: FB</li>
          </ul>
          <ul class="flex text-sm">
            <li class="mx-3">Seller Center</li>
            <li class="mx-3">Download</li>
            <li class="ml-3">Bantuan</li>
          </ul>
        </div>
      </div>
    </div>
    <nav class="navbar bg-base-100 px-2 shadow lg:px-4">
      <div class="container mx-auto flex justify-between">
        <div class="hidden items-center lg:flex lg:w-1/6">
          <RouterLink to="/" class="text-2xl font-bold text-primary"
            >SMARTshop</RouterLink
          >
        </div>
        <div class="flex items-center lg:w-3/6">
          <!-- <div class="hidden lg:block">Kategori</div> -->
          <!-- Search -->
          <NavbarSearch />
        </div>
        <div class="flex items-center justify-end lg:w-2/6">
          <!-- Notification -->
          <NavbarNotification />
          <!-- Keranjang belanja -->
          <NavbarCart />
          <!-- Profile -->
          <div class="dropdown dropdown-end ml-2 hidden lg:block">
            <div
              tabindex="0"
              role="button"
              class="btn btn-ghost flex items-center rounded-md"
            >
              <div class="rounded-md">
                <img
                  class="h-10 w-10 rounded-md"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
              <div class="flex h-full items-center justify-center">
                <div>Nama user</div>
              </div>
            </div>
            <ul
              tabindex="0"
              class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <RouterLink to="" class="p-2 text-base">Profile</RouterLink>
              </li>
              <li>
                <RouterLink to="" class="p-2 text-base">Wishlist</RouterLink>
              </li>
              <li><a to="/logout" class="p-2 text-base">Logout</a></li>
            </ul>
          </div>
          <!-- <RouterLink to="/login" v-if="!login" class="btn btn-primary btn-sm ml-2 hidden text-white lg:flex">Masuk</RouterLink> -->
        </div>
      </div>
    </nav>
  </header>
</template>
