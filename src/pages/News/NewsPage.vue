<script setup lang="ts">
import Banner from './NewsBanner/NewsBanner.vue';
import Control from './NewsControl/NewsControl.vue';
import Context from './NewsContext/NewsContext.vue';
</script>
<template>
  <div :class="$style.news">
    <banner />
    <control />
    <context />
  </div>
</template>

<style module scoped lang="scss">
@import './NewsPage.module.scss';
</style>
