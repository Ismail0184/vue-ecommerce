<template>
  <div class="trending">
    <section class="trending-product section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title">
              <h2>Trending Product</h2>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                suffered alteration in some form.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6 col-12" v-for="(product,key) in products" :key="key">

            <div class="single-product">
              <div class="product-image">
                <img :src="product.image" alt="#" class="product-height-css">
                <div class="button">
                  <a href="product-details.html" class="btn"><i class="lni lni-cart"></i> Add to Cart</a>
                </div>
              </div>
              <div class="product-info">
                <span class="category">Watches</span>
                <h4 class="title">
                  <a href="product-grids.html">{{product.name}}</a>
                </h4>
                <ul class="review">
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star-filled"></i></li>
                  <li><i class="lni lni-star"></i></li>
                  <li><span>4.0 Review(s)</span></li>
                </ul>
                <div class="price">
                  <span>{{product.selling_price}}</span>
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
import axios from "axios"
export default {
  name: "TrendingView",
  data() {
    return{
      products : []
    }
  },

  created() {
    axios.get("http://127.0.0.1:8000/api/allproduct").then(response => {
      this.products = response.data;
    })
  }
}
</script>

<style scoped>
  .product-height-css {
    height: 300px;
  }
</style>