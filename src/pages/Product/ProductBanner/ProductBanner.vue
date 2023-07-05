<script setup lang="ts">
import ImgageBanner from '@/assets/imgs/Product/imageBanner.png';
</script>
<template>
  <div :class="$style.banner">
    <img :class="$style.banner__background" :src="ImgageBanner" alt="banner" />
    <div :class="$style.banner__content">
      <div :class="$style['banner__content--rectangle']"></div>
      <div :class="$style['banner__content--txttitle']">DỤNG CỤ - THIẾT BỊ NHA KHOA</div>
      <div :class="$style['banner__content--txtnavigation']">TRANG CHỦ / SẢN PHẨM</div>
    </div>
  </div>
</template>

<style module scoped lang="scss">
// @import '../ProductPage.module.scss';
@import '../ProductBanner/ProductBanner.module.scss';
</style>
