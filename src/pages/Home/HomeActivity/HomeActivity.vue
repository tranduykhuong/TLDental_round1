<script setup lang="ts">
import Act from '@/assets/imgs/Home/Activiy.png';
import { ref } from 'vue';
import router from '@/router/index';

const activities = [
  {
    title: 'TL Dental Group tham gia các sự kiện Nha khoa, chỉnh nha trong và ngoài nước',
    description:
      'Nhận được sự quan tâm đến từ rất nhiều quý bác sĩ, đối tác nhà cung cấp sản phẩm chỉnh nha'
  },
  {
    title: 'TL Dental Group tham gia các sự kiện Nha khoa, chỉnh nha trong và ngoài nước',
    description:
      'Nhận được sự quan tâm đến từ rất nhiều quý bác sĩ, đối tác nhà cung cấp sản phẩm chỉnh nha'
  },
  {
    title: 'TL Dental Group tham gia các sự kiện Nha khoa, chỉnh nha trong và ngoài nước',
    description:
      'Nhận được sự quan tâm đến từ rất nhiều quý bác sĩ, đối tác nhà cung cấp sản phẩm chỉnh nha'
  },
  {
    title: 'TL Dental Group tham gia các sự kiện Nha khoa, chỉnh nha trong và ngoài nước',
    description:
      'Nhận được sự quan tâm đến từ rất nhiều quý bác sĩ, đối tác nhà cung cấp sản phẩm chỉnh nha'
  },
  {
    title: 'TL Dental Group tham gia các sự kiện Nha khoa, chỉnh nha trong và ngoài nước',
    description:
      'Nhận được sự quan tâm đến từ rất nhiều quý bác sĩ, đối tác nhà cung cấp sản phẩm chỉnh nha'
  },
  {
    title: 'TL Dental Group tham gia các sự kiện Nha khoa, chỉnh nha trong và ngoài nước',
    description:
      'Nhận được sự quan tâm đến từ rất nhiều quý bác sĩ, đối tác nhà cung cấp sản phẩm chỉnh nha'
  },
  {
    title: 'TL Dental Group tham gia các sự kiện Nha khoa, chỉnh nha trong và ngoài nước',
    description:
      'Nhận được sự quan tâm đến từ rất nhiều quý bác sĩ, đối tác nhà cung cấp sản phẩm chỉnh nha'
  },
  {
    title: 'TL Dental Group tham gia các sự kiện Nha khoa, chỉnh nha trong và ngoài nước',
    description:
      'Nhận được sự quan tâm đến từ rất nhiều quý bác sĩ, đối tác nhà cung cấp sản phẩm chỉnh nha'
  }
  // Thêm các hoạt động khác vào đây
];

const selectedItem = ref(-1);

const HandleClick = (index: number) => {
  selectedItem.value = index;
};

const SeeAll = () => {
  router.push('/tintuc');
};
</script>
<template>
  <div :class="$style.home__activities">
    <h3>CÁC HOẠT ĐỘNG CỦA CÔNG TY</h3>
    <button :class="$style['home__activities-button']" @click="SeeAll">Xem tất cả</button>
    <div :class="$style['home__activities-list']">
      <button>Tất cả</button>
      <button>Hội nghị tháng 6</button>
      <button>Sự kiện</button>
      <button>Hội nghị tháng 4</button>
      <button>Hội nghị tháng 3</button>
    </div>
    <div :class="$style['home__activities-grid']">
      <div
        v-for="(activity, index) in activities"
        :key="index"
        :class="$style['home__activities-item']"
        @click="HandleClick(index)"
      >
        <img :src="Act" alt="activity" />
        <div
          :class="$style['home__activities-hover']"
          :style="selectedItem === index ? 'display: flex' : ''"
        >
          <div :class="$style['home__activities-text']">
            <h4>{{ activity.title }}</h4>
            <span>{{ activity.description }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style module scoped lang="scss">
@import './HomeActivity.module.scss';
</style>
