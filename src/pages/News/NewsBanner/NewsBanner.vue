<script setup lang="ts">
import Banner from '@/assets/imgs/News/NewsBg.png';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb.vue';

const pathBC = 'tintuc';
</script>
<template>
  <div :class="$style.news__banner">
    <img :src="Banner" alt="banner" />
  </div>
  <bread-crumb :tags="pathBC" />
</template>

<style module scoped lang="scss">
@import './NewsBanner.module.scss';
</style>
