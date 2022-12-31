<template>
  <div class="home">

    <HeroView/>
    <FeaturedView/>
    <TrendingView/>
    <BannerView/>
    <SpecialOfferView/>
    <ProductListView/>
    <BrandView/>
    <OurLatestNews/>
    <ShippingInfoView/>
    <a href="#" class="scroll-top">
      <i class="lni lni-chevron-up"></i>
    </a>
  </div>
</template>

<script>
import HeroView from "@/components/Home/HeroView";
import FeaturedView from "@/components/Home/FeaturedView";
import TrendingView from "@/components/Home/TrendingView";
import BannerView from "@/components/Home/BannerView";
import SpecialOfferView from "@/components/Home/SpecialOfferView";
import ProductListView from "@/components/Home/ProductListView";
import BrandView from "@/components/Home/BrandView";
import OurLatestNews from "@/components/Home/OurLatestNews";
import ShippingInfoView from "@/components/Home/ShippingInfoView";
export default {
  components: {
    ShippingInfoView,
    OurLatestNews,
    BrandView, ProductListView, SpecialOfferView, BannerView, TrendingView, FeaturedView, HeroView},

  created() {
    document.title = "Best Ecommerce website in Bangladesh"
  }
}

</script>

<style>

</style>