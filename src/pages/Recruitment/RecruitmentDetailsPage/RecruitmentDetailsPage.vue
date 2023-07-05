<script setup lang="ts">
import logo from '@/assets/imgs/logo.png';
import RecruitmentDetailsItem from './RecruitmentDetailsItem/RecruitmentDetailsItem.vue';
import RecruitmentCard from '../RecruitmentCard/RecruitmentCard.vue';
import { data, recContentDetails } from './RecruitmentDetailsHandle';
import { ic_bag, ic_hourglass, ic_location } from '@/assets/imgs/Recruitment/RecruitmentImgs';

const typeRecuit = [
  {
    icon: { link: ic_location, style: 'type6' },
    title: { content: data.location, style: 'type6' },
    content: { content: '', style: '' },
    image: { link: '', style: '' }
  },
  {
    icon: { link: ic_bag, style: 'type6' },
    title: { content: data.typeWork, style: 'type6' },
    content: { content: '', style: '' },
    image: { link: '', style: '' }
  },
  {
    icon: { link: ic_hourglass, style: 'type6' },
    title: { content: data.time, style: 'type6' },
    content: { content: '', style: '' },
    image: { link: '', style: '' }
  }
];

const contentOrganite = [
  'Cơ hội thăng tiến dựa trên năng lực của bạn',
  'Phần thưởng dựa trên năng suất lao động',
  'Các chuyến du lịch hàng năm cùng công ty',
  'Kiểm tra sức khoẻ hàng năm',
  'Hỗ trợ bảo hiểm sức khỏe'
];
</script>
<template>
  <div :class="$style.container">
    <div :class="$style.container__heading">
      <div :class="$style['container__heading-logo']"><img :src="logo" alt="none" /></div>
      <div :class="$style['container__heading-title']">
        <div :class="$style['container__heading-title-rec']">
          <p>TUYỂN DỤNG</p>
        </div>
        <div :class="$style['container__heading-title-name']"><p>DENTAL GROUP</p></div>
      </div>
    </div>
    <div :class="$style.container__content">
      <div :class="$style['container__content-right']">
        <div :class="$style['container__content-right-title']">{{ data.title }}</div>
        <div :class="$style['container__content-right-type']">
          <recruitment-card :items="typeRecuit" :style="'type6'" />
        </div>
        <div
          :class="$style['container__content-right-content']"
          v-for="(item, index) in recContentDetails"
          :key="index"
        >
          <recruitment-details-item :items="item" />
        </div>
      </div>
      <div :class="$style['container__content-left']">
        <div :class="$style['container__content-left-title']">Đãi ngộ hấp dẫn</div>
        <ul>
          <li v-for="(item, index) in contentOrganite" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style module scoped lang="scss">
@import './RecruitmentDetailsPage.module.scss';
</style>
