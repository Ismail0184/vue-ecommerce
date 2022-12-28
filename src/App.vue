<template>
  <HeaderView/>
  <router-view/>
  <FooterView/>
</template>

<style>

</style>
<script>
import HeaderView from "@/components/includes/HeaderView";
import FooterView from "@/components/includes/FooterView";
export default {
  components: {FooterView, HeaderView}
}
</script>