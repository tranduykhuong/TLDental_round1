<script setup lang="ts"></script>

<template>
  <div :class="$style.contact__maps">
    <iframe
      :class="$style['contact__maps-frame']"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5736868084896!2d106.69224417517916!3d10.767301989380964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f15f08d6fa1%3A0x7b2e11ab195377b!2zMTM1YiDEkC4gVHLhuqduIEjGsG5nIMSQ4bqhbywgUGjGsOG7nW5nIEPhuqd1IMOUbmcgTMOjbmgsIFF14bqtbiAxLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1687174673884!5m2!1svi!2s"
      allowfullscreen="false"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<style module scoped lang="scss">
@import './ContactMaps.module.scss';
</style>
