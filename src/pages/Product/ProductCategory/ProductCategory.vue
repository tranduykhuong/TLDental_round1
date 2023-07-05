<script setup lang="ts">
import { ref, nextTick } from 'vue';
import IcDownCategory from '@/assets/icons/IcSortDown.svg';

const isAnimationVisible = ref(false);

const toggleAnimation = () => {
  isAnimationVisible.value = !isAnimationVisible.value;
  if (isAnimationVisible.value) {
    nextTick(() => {
      const animationContainer = document.querySelector('.category__firstX--animation');
      if (animationContainer) {
        animationContainer.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
};

const isActive = ref(false);

const toggleActive = () => {
  isActive.value = !isActive.value;
};
</script>
<template>
  <div :class="$style.category">
    <div :class="$style['category__title']">Danh mục</div>
    <div :class="$style['category__firstX']">
      <div
        :class="[
          $style['category__firstX--choose'],
          { [$style['category__firstX--active']]: isActive }
        ]"
        @click="toggleActive"
      >
        <p>Vật liệu chỉnh nha ABC</p>
        <img :src="IcDownCategory" alt="sort down" />
      </div>
      <div></div>
    </div>
    <div :class="[$style['category__firstX']]">
      <div
        @click="toggleAnimation"
        :class="[
          $style['category__firstX--choose'],
          { [$style['category__firstX--active']]: isAnimationVisible }
        ]"
      >
        <p>Vật liệu chỉnh nha ABC</p>
        <img
          :class="$style['category__firstX--choose-icon']"
          :src="IcDownCategory"
          alt="sort down"
        />
      </div>

      <div
        :class="[
          $style['category__firstX--animation'],
          { [$style['category__firstX--show-animation']]: isAnimationVisible }
        ]"
        ref="animationContainer"
      >
        <div :class="$style['category__second']">Lò xo chỉnh nha</div>
        <div :class="$style['category__second']">Thun chỉnh nha</div>
        <div :class="$style['category__second']">Chỉ nha khoa</div>
        <div :class="$style['category__secondX']">Kẹp gấp mắc cài</div>
        <div :class="$style['category__second']">Răng sứ các loại</div>
        <div :class="$style['category__second']">Máy cứng silicon</div>
      </div>
    </div>
    <div :class="$style['category__firstX']">
      <div :class="$style['category__firstX--choose']">
        <p>Vật liệu chỉnh nha ABC</p>
        <img :src="IcDownCategory" alt="sort down" />
      </div>
      <div></div>
    </div>
  </div>
</template>

<style module scoped lang="scss">
// @import '../ProductPage.module.scss';
@import '../ProductCategory/ProductCategory.module.scss';
</style>
