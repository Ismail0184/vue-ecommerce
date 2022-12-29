<template>
  <div class="brandsection">
    <div class="brands">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3 col-md-12 col-12">
            <h2 class="title">Popular Brands</h2>
          </div>
        </div>
        <div class="brands-logo-wrapper">
          <div class="brands-logo-carousel d-flex align-items-center justify-content-between">
            <div class="brand-logo">
              <img src="assets/images/brands/01.png" alt="#">
            </div>
            <div class="brand-logo">
              <img src="assets/images/brands/02.png" alt="#">
            </div>
            <div class="brand-logo">
              <img src="assets/images/brands/03.png" alt="#">
            </div>
            <div class="brand-logo">
              <img src="assets/images/brands/04.png" alt="#">
            </div>
            <div class="brand-logo">
              <img src="assets/images/brands/05.png" alt="#">
            </div>
            <div class="brand-logo">
              <img src="assets/images/brands/06.png" alt="#">
            </div>
            <div class="brand-logo">
              <img src="assets/images/brands/03.png" alt="#">
            </div>
            <div class="brand-logo">
              <img src="assets/images/brands/04.png" alt="#">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {tns} from 'tiny-slider/src/tiny-slider'
export default {
  name: "BrandView",
  mounted() {
    tns({
      container: '.brands-logo-carousel',
      autoplay: true,
      autoplayButtonOutput: false,
      mouseDrag: true,
      gutter: 15,
      nav: false,
      controls: false,
      responsive: {
        0: {
          items: 1,
        },
        540: {
          items: 3,
        },
        768: {
          items: 5,
        },
        992: {
          items: 6,
        }
      }
    });
  }
}
</script>

<style scoped>

</style>