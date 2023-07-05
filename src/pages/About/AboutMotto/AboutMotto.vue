<script setup lang="ts">
import Motto from '@/assets/imgs/About/Motto.png';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronLeft, faChevronRight, faL } from '@fortawesome/free-solid-svg-icons';
import { ref } from 'vue';

const mottoItems = [
  {
    title: 'Sự đổi mới sáng tạo 1',
    content:
      'Apple luôn tập trung vào việc đổi mới và tạo ra các sản phẩm và dịch vụ đột phá. Công ty luôn khuyến khích nhân viên tìm kiếm cách tiếp cận vấn đề từ góc độ khác biệt và đưa ra giải pháp sáng tạo.',
    img: Motto
  },
  {
    title: 'Sự đổi mới sáng tạo 2',
    content:
      'Apple luôn tập trung vào việc đổi mới và tạo ra các sản phẩm và dịch vụ đột phá. Công ty luôn khuyến khích nhân viên tìm kiếm cách tiếp cận vấn đề từ góc độ khác biệt và đưa ra giải pháp sáng tạo.',
    img: Motto
  },
  {
    title: 'Sự đổi mới sáng tạo 3',
    content:
      'Apple luôn tập trung vào việc đổi mới và tạo ra các sản phẩm và dịch vụ đột phá. Công ty luôn khuyến khích nhân viên tìm kiếm cách tiếp cận vấn đề từ góc độ khác biệt và đưa ra giải pháp sáng tạo.',
    img: Motto
  },
  {
    title: 'Sự đổi mới sáng tạo 4',
    content:
      'Apple luôn tập trung vào việc đổi mới và tạo ra các sản phẩm và dịch vụ đột phá. Công ty luôn khuyến khích nhân viên tìm kiếm cách tiếp cận vấn đề từ góc độ khác biệt và đưa ra giải pháp sáng tạo.',
    img: Motto
  },
  {
    title: 'Sự đổi mới sáng tạo 5',
    content:
      'Apple luôn tập trung vào việc đổi mới và tạo ra các sản phẩm và dịch vụ đột phá. Công ty luôn khuyến khích nhân viên tìm kiếm cách tiếp cận vấn đề từ góc độ khác biệt và đưa ra giải pháp sáng tạo.',
    img: Motto
  },
  {
    title: 'Sự đổi mới sáng tạo 6',
    content:
      'Apple luôn tập trung vào việc đổi mới và tạo ra các sản phẩm và dịch vụ đột phá. Công ty luôn khuyến khích nhân viên tìm kiếm cách tiếp cận vấn đề từ góc độ khác biệt và đưa ra giải pháp sáng tạo.',
    img: Motto
  },
  {
    title: 'Sự đổi mới sáng tạo 7',
    content:
      'Apple luôn tập trung vào việc đổi mới và tạo ra các sản phẩm và dịch vụ đột phá. Công ty luôn khuyến khích nhân viên tìm kiếm cách tiếp cận vấn đề từ góc độ khác biệt và đưa ra giải pháp sáng tạo.',
    img: Motto
  },
  {
    title: 'Sự đổi mới sáng tạo 8',
    content:
      'Apple luôn tập trung vào việc đổi mới và tạo ra các sản phẩm và dịch vụ đột phá. Công ty luôn khuyến khích nhân viên tìm kiếm cách tiếp cận vấn đề từ góc độ khác biệt và đưa ra giải pháp sáng tạo.',
    img: Motto
  }
];

const move = ref(0);
const isDisableLeft = ref(false);
const isDisableRight = ref(false);

const handleClickLeft = () => {
  const widthItem = document.getElementById('1');

  if (widthItem) {
    isDisableRight.value = false;
    if (move.value === 0) (move.value = widthItem.offsetWidth + 150), (isDisableLeft.value = true);
    else {
      move.value += widthItem.offsetWidth + 150;
    }
  }
};

const handleClickRight = () => {
  isDisableLeft.value = false;
  const widthItem = document.getElementById('1');

  if (widthItem) {
    if (move.value === (3 - mottoItems.length) * (widthItem.offsetWidth + 150))
      (move.value -= widthItem.offsetWidth + 150), (isDisableRight.value = true);
    else {
      move.value -= widthItem.offsetWidth + 150;
    }
  }
};
</script>

<template>
  <div :class="$style.about__motto">
    <p :class="$style['about__motto-title']">PHƯƠNG CHÂM - GIÁ TRỊ</p>

    <div>
      <div
        :class="$style['about__motto-slider']"
        id="motto-list"
        :style="{ transform: 'translateX' + '(' + move + 'px' + ')' }"
      >
        <div
          :class="$style['about__motto-slider-item']"
          v-for="(item, index) in mottoItems"
          :key="index"
          :id="index.toString()"
        >
          <img :src="item.img" alt="" />

          <p :class="$style['about__motto-slider-item-title']">{{ item.title }}</p>

          <p :class="$style['about__motto-slider-item-content']">
            {{ item.content }}
          </p>
        </div>
      </div>

      <div :class="$style['about__motto-curtain']">
        <div :class="$style['about__motto-curtain-left']"></div>

        <div :class="$style['about__motto-curtain-button']">
          <button
            :class="$style['about__motto-curtain-button-left']"
            @click="handleClickLeft"
            :disabled="isDisableLeft"
          >
            <font-awesome-icon
              :icon="faChevronLeft"
              :class="$style['about__motto-curtain-button-ic']"
            />
          </button>
          <button
            :class="$style['about__motto-curtain-button-right']"
            @click="handleClickRight"
            :disabled="isDisableRight"
          >
            <font-awesome-icon
              :icon="faChevronRight"
              :class="$style['about__motto-curtain-button-ic']"
            />
          </button>
        </div>

        <div :class="$style['about__motto-curtain-right']"></div>
      </div>
    </div>
  </div>
</template>

<style module scoped lang="scss">
@import './AboutMotto.module.scss';
</style>
