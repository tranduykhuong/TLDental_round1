<script setup lang="ts">
import ContactForm from './ContactForm/ContactForm.vue';
import ContactMaps from './ContactMaps/ContactMaps.vue';
import ContactFacility from './ContactFacility/ContactFacility.vue';
import ContactActivity from '../Home/HomeActivity/HomeActivity.vue';
import ContactMessage from './ContactMessage/ContactMessage.vue';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb.vue';

import MessageV2 from '@/assets/imgs/Contact/MessageV2.png';
import Close from '@/assets/imgs/Contact/Close.png';
import { ref } from 'vue';

const pathContact = 'lienhe';

const isOpen = ref(false);
</script>
<template>
  <div :class="$style.contact">
    <bread-crumb :tags="pathContact" :class="$style.contact__breadcrumb" />
    <contact-form />
    <contact-maps />
    <contact-facility />
    <contact-activity />
    <contact-message />
  </div>
</template>

<style module scoped lang="scss">
@import './ContactPage.module.scss';
</style>
