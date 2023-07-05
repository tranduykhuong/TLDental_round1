<script setup lang="ts">
import { type PropType } from 'vue';

type FormartItemDetails = {
  title: string;
  content: string;
};

const props = defineProps({
  items: { type: Object as PropType<FormartItemDetails>, required: true }
});
</script>
<template>
  <div :class="$style.container">
    <div :class="$style.container__title">{{ props.items.title }}</div>
    <!-- <ul :class="$style.container__content">
      <li></li>
    </ul> -->
    <div :class="$style.container__content" v-html="props.items.content"></div>
  </div>
</template>

<style module scoped lang="scss">
@import './RecruitmentDetailsItem.module.scss';
</style>
