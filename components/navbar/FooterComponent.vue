<template>
  <footer class="footer mt-14 bg-base-200 p-10 text-base-content">
    <div
      class="container mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      <nav>
        <h6 class="footer-title">Services</h6>
        <a class="link-hover link">Branding</a>
        <a class="link-hover link">Design</a>
        <a class="link-hover link">Marketing</a>
        <a class="link-hover link">Advertisement</a>
      </nav>
      <nav>
        <h6 class="footer-title">Company</h6>
        <a class="link-hover link">About us</a>
        <a class="link-hover link">Contact</a>
        <a class="link-hover link">Jobs</a>
        <a class="link-hover link">Press kit</a>
      </nav>
      <nav>
        <h6 class="footer-title">Legal</h6>
        <a class="link-hover link">Terms of use</a>
        <a class="link-hover link">Privacy policy</a>
        <a class="link-hover link">Cookie policy</a>
      </nav>
      <form>
        <h6 class="footer-title">Newsletter</h6>
        <fieldset class="form-control">
          <label class="label">
            <span class="label-text">Enter your email address</span>
          </label>
          <input
            type="email"
            class="input input-bordered w-full max-w-xs"
            placeholder="Email"
          />
          <button class="btn btn-primary mt-2">Subscribe</button>
        </fieldset>
      </form>
    </div>
  </footer>
</template>
