<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
</script>
<template>
  <div :class="$style.header__contact">
    <div :class="$style['header__contact-item']">
      <font-awesome-icon :icon="faPhone" :class="$style['header__contact-icon']" />
      <p>070 404 2234</p>
    </div>
    |
    <div :class="$style['header__contact-item']">
      <font-awesome-icon :icon="faEnvelope" :class="$style['header__contact-icon']" />
      <p>ceo.tldental.group@gmail.com</p>
    </div>
    |
    <div :class="$style['header__contact-item']">
      <font-awesome-icon :icon="faLocationDot" :class="$style['header__contact-icon']" />
      <p>45 Thạch Thị Thanh, phường Tân Định, Quận 1, TP Hồ Chí Minh</p>
    </div>
  </div>
</template>

<style module scoped lang="scss">
@import './BaseHeader.module.scss';
</style>
