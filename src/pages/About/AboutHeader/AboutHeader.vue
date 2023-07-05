<script setup lang="ts">
import Intro from '@/assets/imgs/About/Intro.png';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
</script>
<template>
  <div :class="$style.about__header">
    <div :class="$style['about__header-introduce']">
      <img :src="Intro" alt="" />

      <p>Giới Thiệu</p>
    </div>
  </div>
</template>

<style module scoped lang="scss">
@import './AboutHeader.module.scss';
</style>
