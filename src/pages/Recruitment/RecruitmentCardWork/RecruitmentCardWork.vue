<script setup lang="ts">
import RecruitmentCard from '.././RecruitmentCard/RecruitmentCard.vue';
import { ic_bag, ic_hourglass, ic_location } from '@/assets/imgs/Recruitment/RecruitmentImgs';
import { type PropType } from 'vue';
import { RouterLink } from 'vue-router';

type FormartCardWork = {
  title: string;
  typeWork: string;
  time: string;
  location: string;
};

const props = defineProps({
  infor: { type: Object as PropType<FormartCardWork>, required: true }
});

const locationItem = [
  {
    icon: { link: ic_location, style: 'type6' },
    title: { content: props.infor.location, style: 'type6' },
    content: { content: '', style: '' },
    image: { link: '', style: '' }
  }
];

const contentRecruit = [
  {
    icon: { link: ic_bag, style: 'type6' },
    title: { content: props.infor.typeWork, style: 'type6' },
    content: { content: '', style: '' },
    image: { link: '', style: '' }
  },
  {
    icon: { link: ic_hourglass, style: 'type6' },
    title: { content: props.infor.time, style: 'type6' },
    content: { content: '', style: '' },
    image: { link: '', style: '' }
  }
];
</script>

<template>
  <div v-if="props.infor.title !== ''" :class="$style.container__card">
    <div :class="$style['container__card-left']">
      <div :class="$style['container__card-left-title']">{{ props.infor.title }}</div>
      <div :class="$style['container__card-left-content']">
        <recruitment-card :items="contentRecruit" :style="'type6'" />
      </div>
    </div>
    <div :class="$style['container__card-right']">
      <div :class="$style['container__card-right-item']">
        <recruitment-card :items="locationItem" :style="'type6'" />
      </div>
      <router-link :to="`/tuyendung/${infor.title}`" :class="$style['container__card-right-btn']">
        <p>Ứng tuyển ngay</p>
      </router-link>
    </div>
  </div>
</template>

<style module scoped lang="scss">
@import './RecruitmentCardWork.module.scss';
</style>
