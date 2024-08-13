<template>
  <div class="flex flex-col">
    <NavbarHeaderComponent />
    <main class="mt-20 flex flex-1">
      <div class="container mx-auto py-6">
        <slot></slot>
      </div>
    </main>
    <NavbarFooterComponent />
  </div>
</template>
