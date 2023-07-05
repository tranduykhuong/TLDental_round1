<script setup lang="ts">
import HomeVector from '@/assets/imgs/Product/HomeNavigation.svg';
import NavIcon from '@/assets/imgs/Product/VectorNav.svg';
</script>
<template>
  <div :class="$style.navigation">
    <div :class="$style['navigation__container']">
      <img :class="$style['navigation__container--ichome']" :src="HomeVector" alt="Home" />
      <p :class="$style['navigation__container--nav']">Trang chủ&nbsp;</p>
      <img :class="$style['navigation__container--icnav']" :src="NavIcon" alt="nav" />
      <p :class="$style['navigation__container--nav']">&nbsp;Dụng cụ nha khoa</p>
    </div>
  </div>
</template>

<style module scoped lang="scss">
// @import '../ProductPage.module.scss';
@import '../ProductNavigation/ProductNavigation.module.scss';
</style>
