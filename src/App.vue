<script setup lang="ts">
import { RouterView } from 'vue-router';
import BaseHeader from './components/BaseHeader/BaseHeader.vue';
import BaseFooter from './components/BaseFooter/BaseFooter.vue';
</script>

<template>
  <BaseHeader />

  <RouterView />

  <BaseFooter />
</template>

<style scoped lang="scss"></style>
