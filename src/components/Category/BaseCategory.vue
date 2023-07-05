<script setup lang="ts">
import { ref, nextTick } from 'vue';
import IcDownCategory from '@/assets/icons/IcsortDown.svg';
import { category } from '../Category/Category';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const isAnimationVisible = ref(false);
const selectedItem = ref(-1);
const selectedCategoryItem = ref({ categoryIndex: -1, itemIndex: -1 });

const toggleAnimation = (index: number) => {
  if (isAnimationVisible.value && selectedItem.value == index) {
    isAnimationVisible.value = false;
    selectedItem.value = -1;
  } else {
    isAnimationVisible.value = true;
    selectedItem.value = index;
  }
  if (isAnimationVisible.value) {
    nextTick(() => {
      const animationContainer = document.getElementById(`id-${index}`);
      const dropdownContainer = document.getElementById('dropdown-container');

      if (animationContainer && dropdownContainer) {
        const dropdownContainerRect = dropdownContainer.getBoundingClientRect();
        const animationContainerRect = animationContainer.getBoundingClientRect();

        if (
          animationContainerRect.top < dropdownContainerRect.top ||
          animationContainerRect.bottom > dropdownContainerRect.bottom
        ) {
          const scrollPosition = animationContainer.offsetTop - dropdownContainer.offsetTop;
          dropdownContainer.scrollTop = scrollPosition;
        }
      }
    });
  }
};

const idDefine = (index: number) => {
  return `id-${index}`;
};

const logAndSelectCategory = (categoryIndex: number, itemIndex: number) => {
  console.log(category[categoryIndex].data[itemIndex]);
  selectedCategoryItem.value = { categoryIndex, itemIndex };
};

const isSelectedCategory = (categoryIndex: number, itemIndex: number) => {
  return (
    selectedCategoryItem.value.categoryIndex === categoryIndex &&
    selectedCategoryItem.value.itemIndex === itemIndex
  );
};
</script>
<template>
  <div id="dropdown-container" :class="$style.category">
    <div :class="$style['category__title']">Danh mục</div>
    <div :class="[$style['category__firstX']]" v-for="(item, index) in category" :key="index">
      <div
        @click="toggleAnimation(index)"
        :class="[
          $style['category__firstX--choose'],
          { [$style['category__firstX--active']]: isAnimationVisible && selectedItem === index }
        ]"
      >
        <p>{{ item.title }}</p>
        <font-awesome-icon :class="$style['category__firstX--choose-icon']" :icon="faCaretDown" />
      </div>
      <div
        :id="idDefine(index)"
        :class="[
          $style['category__firstX--animation'],
          {
            [$style['category__firstX--show-animation']]:
              isAnimationVisible && selectedItem === index
          }
        ]"
        ref="animationContainer"
      >
        <div
          @click="logAndSelectCategory(index, idx)"
          :class="[
            $style['category__second'],
            { [$style['category__second--selected']]: isSelectedCategory(index, idx) }
          ]"
          v-for="(item1, idx) in item.data"
          :key="idx"
        >
          {{ item1.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style module scoped lang="scss">
@import './Category.module.scss';
</style>
