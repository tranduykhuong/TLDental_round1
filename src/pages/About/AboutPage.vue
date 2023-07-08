<script setup lang="ts">
import AboutHeader from './AboutHeader/AboutHeader.vue';
import AboutInfoCompany from './AboutInfoCompany/AboutInfoCompany.vue';
import AboutThanks from './AboutThanks/AboutThanks.vue';
import AboutMotto from './AboutMotto/AboutMotto.vue';
import AboutBusinessItems from './AboutBusinessItems/AboutBusinessItems.vue';
import AboutPolicy from './AboutPolicy/AboutPolicy.vue';
import AboutFacility from './AboutFacility/AboutFacility.vue';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb.vue';

const pathAbout = 'gioithieu';
</script>
<template>
  <div :class="$style.about">
    <bread-crumb :tags="pathAbout" />
    <about-header />
    <about-thanks />
    <about-infoCompany />
    <about-motto />
    <about-businessItems />
    <about-policy />
    <about-facility />
  </div>
</template>

<style module scoped lang="scss">
@import './AboutPage.module.scss';
</style>
