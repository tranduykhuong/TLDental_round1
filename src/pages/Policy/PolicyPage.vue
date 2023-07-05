<script setup lang="ts">
import background from '@/assets/imgs/Policy/bg.png';
import { listPolicy } from './PolicyHandle';
import { ref } from 'vue';

const selectedItem = ref(0);
const showNav = ref(false);

const handleSelected = (index: any) => {
  selectedItem.value = Number(index);
  console.log(index);
};

const handleActiveNav = () => {
  showNav.value = !showNav.value;
};
</script>
<template>
  <div :class="$style.container">
    <div :class="$style.container__bg">
      <img :src="background" alt="none" />
    </div>
    <div :class="$style.container__content">
      <div :class="$style['container__content-nav']">
        <div
          :class="[
            $style['container__content-nav-title'],
            $style[showNav ? 'container__content-nav-title-active' : '']
          ]"
          @click="handleActiveNav"
        >
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#000000"
                fill-rule="evenodd"
                d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
              ></path>
            </g>
          </svg>
          <h3>Chính sách</h3>
        </div>
        <ul>
          <li
            v-for="(item, index) in listPolicy"
            :key="index"
            @click="handleSelected(index)"
            :class="$style[showNav ? 'active' : 'hidden']"
          >
            <div
              :class="[
                $style[index === selectedItem ? `container__content-nav-item-active` : ''],
                $style[`container__content-nav-item`]
              ]"
            >
              {{ item.title }}
            </div>
          </li>
        </ul>
      </div>
      <div :class="$style['container__content-section']">
        <div :class="$style['container__content-section-title']">
          {{ listPolicy[selectedItem].title }}
        </div>
        <div
          :class="$style['container__content-section-details']"
          v-html="listPolicy[selectedItem].content"
        ></div>
      </div>
    </div>
  </div>
</template>

<style module scoped lang="scss">
@import './PolicyPage.module.scss';
</style>
