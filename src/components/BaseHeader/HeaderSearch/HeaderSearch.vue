<script setup lang="ts">
import { ref, computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSearch, faRemove } from '@fortawesome/free-solid-svg-icons';

const isFocus = ref(false);
const focusComputed = computed(() => {
  if (window.innerWidth < 1240) {
    return isFocus.value ? '100%' : '0px';
  }
  return isFocus.value ? 'calc(100vw - 100px)' : '0px';
});
</script>
<template>
  <div :class="$style['header-search']">
    <div :class="$style['header-search__icon']" v-on:click="isFocus = true">
      <font-awesome-icon :class="$style['header-search__icon-svg']" :icon="faSearch" />
    </div>

    <div :class="$style['header-search__wrapper']" :style="{ width: focusComputed }">
      <form :class="$style['header-search__input']">
        <input type="text" name="search" placeholder="Tìm kiếm" />
        <font-awesome-icon
          :class="$style['header-search__input-icon']"
          :icon="faRemove"
          v-on:click="isFocus = false"
        />
      </form>
    </div>
  </div>
</template>

<style scoped module lang="scss">
@import './HeaderSearch.module.scss';
</style>
