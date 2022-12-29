<template>
  <div class="hero">
    <section class="hero-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-12 custom-padding-right">
            <div class="slider-head">

              <div class="hero-slider">

                <div class="single-slider" style="background-image: url(assets/images/hero/slider-bg1.jpg);">
                  <div class="content">
                    <h2><span>No restocking fee ($35 savings)</span>
                      M75 Sport Watch
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut
                      labore dolore magna aliqua.</p>
                    <h3><span>Now Only</span> $320.99</h3>
                    <div class="button">
                      <a href="product-grids.html" class="btn">Shop Now</a>
                    </div>
                  </div>
                </div>


                <div class="single-slider" style="background-image: url(assets/images/hero/slider-bg2.jpg);">
                  <div class="content">
                    <h2><span>Big Sale Offer</span>
                      Get the Best Deal on CCTV Camera
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut
                      labore dolore magna aliqua.</p>
                    <h3><span>Combo Only:</span> $590.00</h3>
                    <div class="button">
                      <a href="product-grids.html" class="btn">Shop Now</a>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
          <div class="col-lg-4 col-12">
            <div class="row">
              <div class="col-lg-12 col-md-6 col-12 md-custom-padding">

                <div class="hero-small-banner" style="background-image: url('assets/images/hero/slider-bnr.jpg');">
                  <div class="content">
                    <h2>
                      <span>New line required</span>
                      iPhone 12 Pro Max
                    </h2>
                    <h3>$259.99</h3>
                  </div>
                </div>

              </div>
              <div class="col-lg-12 col-md-6 col-12">

                <div class="hero-small-banner style2">
                  <div class="content">
                    <h2>Weekly Sale!</h2>
                    <p>Saving up to 50% off all online store items this week.</p>
                    <div class="button">
                      <a class="btn" href="product-grids.html">Shop Now</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {tns} from 'tiny-slider/src/tiny-slider'
export default {
  name: "HeroView",
  mounted() {
    tns({
      container: '.hero-slider',
      slideBy: 'page',
      autoplay: true,
      autoplayButtonOutput: false,
      mouseDrag: true,
      gutter: 0,
      items: 1,
      nav: false,
      controls: true,
      controlsText: ['<i class="lni lni-chevron-left"></i>', '<i class="lni lni-chevron-right"></i>'],
    });
  }
}
</script>

<style scoped>

</style>