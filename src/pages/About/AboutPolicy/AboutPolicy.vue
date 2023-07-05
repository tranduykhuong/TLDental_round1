<script setup lang="ts">
import Policy from '@/assets/imgs/About/Policy.png';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const listPolicy = [
  {
    title: 'Chính sách bảo mật',
    content: 'Chúng tôi cam kết sẽ bảo mật những thông tin mang tính riêng tư của bạn.',
    img: Policy
  },
  {
    title: 'Chính sách bảo mật',
    content: 'Chúng tôi cam kết sẽ bảo mật những thông tin mang tính riêng tư của bạn.',
    img: Policy
  },
  {
    title: 'Chính sách bảo mật',
    content: 'Chúng tôi cam kết sẽ bảo mật những thông tin mang tính riêng tư của bạn.',
    img: Policy
  },
  {
    title: 'Chính sách bảo mật',
    content: 'Chúng tôi cam kết sẽ bảo mật những thông tin mang tính riêng tư của bạn.',
    img: Policy
  },
  {
    title: 'Chính sách bảo mật',
    content: 'Chúng tôi cam kết sẽ bảo mật những thông tin mang tính riêng tư của bạn.',
    img: Policy
  },
  {
    title: 'Chính sách bảo mật',
    content: 'Chúng tôi cam kết sẽ bảo mật những thông tin mang tính riêng tư của bạn.',
    img: Policy
  },
  {
    title: 'Chính sách bảo mật',
    content: 'Chúng tôi cam kết sẽ bảo mật những thông tin mang tính riêng tư của bạn.',
    img: Policy
  },
  {
    title: 'Chính sách bảo mật',
    content: 'Chúng tôi cam kết sẽ bảo mật những thông tin mang tính riêng tư của bạn.',
    img: Policy
  },
  {
    title: 'Chính sách bảo mật',
    content: 'Chúng tôi cam kết sẽ bảo mật những thông tin mang tính riêng tư của bạn.',
    img: Policy
  }
];
</script>
<template>
  <div :class="$style.about__policy">
    <h3>CHÍNH SÁCH CÔNG TY</h3>

    <div :class="$style['about__policy-list']">
      <div
        :class="$style['about__policy-items']"
        v-for="(itemPolicy, index) in listPolicy"
        :key="index"
      >
        <!-- <font-awesome-icon :icon="faChevronLeft" :class="$style['about__policy-ic']" /> -->
        <img :src="itemPolicy.img" alt="" :class="$style['about__policy-ic']" />

        <p :class="$style['about__policy-items-title']">{{ itemPolicy.title }}</p>
        <p :class="$style['about__policy-items-content']">
          {{ itemPolicy.content }}
        </p>

        <div>
          <p :class="$style['about__policy-items-more']">Xem thêm về {{ itemPolicy.title }}</p>
          <font-awesome-icon :icon="faChevronRight" :class="$style['about__policy-ic-right']" />
        </div>
      </div>
    </div>
  </div>
</template>

<style module scoped lang="scss">
@import './AboutPolicy.module.scss';
</style>
