<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { RouterLink } from 'vue-router';
import { computed, ref } from 'vue';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { categories } from '../HeaderHandle';

const props = defineProps({
  pageHover: String
});

const cate1Hover = ref('');

const heightCate1 = computed(() => {
  return props.pageHover === 'sanpham' ? 100 : 0;
});

const heightCate2 = (slug: string) => {
  return cate1Hover.value === slug ? 100 : 0;
};
</script>
<template>
  <div>
    <ul
      :class="[
        $style['header-category'],
        $style[props.pageHover === 'sanpham' ? 'header-category-show' : 'header-category--hidden']
      ]"
      :style="{ maxHeight: heightCate1 + 'vh' }"
    >
      <li :class="$style['header-category__line']"></li>
      <li
        v-for="item1 in categories.slice(0, 6)"
        v-on:mouseenter="cate1Hover = item1.slug"
        v-on:mouseleave="cate1Hover = ''"
        :key="item1.slug"
        :class="$style['header-category__item']"
      >
        <router-link to="" :class="$style['header-category__item-link']">
          <p>{{ item1.name }}</p>
          <font-awesome-icon :icon="faChevronRight" size="xs" />
        </router-link>

        <ul
          :class="[
            $style['header-category'],
            $style['header-category-sub'],
            $style[cate1Hover === item1.slug ? 'header-category-show' : 'header-category--hidden']
          ]"
          :style="{ maxHeight: heightCate2(item1?.slug) + 'vh' }"
        >
          <li :class="$style['header-category__line']"></li>
          <li
            v-for="item2 in item1.list.slice(0, 8)"
            :key="item2.slug"
            :class="$style['header-category__item']"
          >
            <router-link to="" :class="$style['header-category__item-link']">
              <p>{{ item2.name }}</p>
            </router-link>
          </li>

          <li :class="$style['header-category__more']" key="xemtatca">
            <router-link to="/sanpham" :class="$style['header-category__more-link']">
              Xem tất cả
            </router-link>
          </li>
        </ul>
      </li>

      <li :class="$style['header-category__more']" key="xemtatca">
        <router-link to="/sanpham" :class="$style['header-category__more-link']">
          Xem tất cả
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style module scoped lang="scss">
@import './HeaderCategory.module.scss';
</style>
