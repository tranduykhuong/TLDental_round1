<script setup lang="ts">
import Category from '@/components/Category/BaseCategory.vue';
import Pagination from '@/components/Pagination/BasePagination.vue';
import router from '@/router/index';
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { news } from './ContextHandle';

const currentPage = ref(1);
const pageSize = ref(8);
const isDesktop = ref(true);

const checkScreenSize = () => {
  if (window.innerWidth < 739) {
    isDesktop.value = false;
  } else {
    isDesktop.value = true;
  }
};

const scrollToTop = (top: number) => {
  window.scrollTo({
    top: top,
    behavior: 'smooth' // Tạo hiệu ứng cuộn mượt
  });
};

const handlePageChange = (page: number) => {
  currentPage.value = page;
  if (window.innerWidth < 739) {
    isDesktop.value = false;
    scrollToTop(0);
  } else {
    scrollToTop(400);
  }
};

const displayNews = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return news.slice(start, end);
});

const linkDetail = () => {
  router.push('/tintuc/a');
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>
<template>
  <div :class="$style.news__context">
    <div :class="$style['news__context-left']">
      <div
        :class="$style['news__context-item']"
        v-for="(item, index) in displayNews"
        :key="index"
        @click="linkDetail()"
      >
        <div :class="$style['news__item-left']">
          <img :src="item.src" alt="BGItem" />
        </div>
        <div :class="$style['news__item-right']">
          <div :class="$style['news__item-date']">
            <p>{{ item.time }}</p>
            <span></span>
          </div>
          <h4>{{ item.title }}</h4>
          <span>{{ item.description }}</span>
          <div :class="$style['news__item-footage']">
            <div :class="$style['news__footage-line']"></div>
            <span style="text-transform: uppercase">{{ item.tag }}</span>
            <div :class="$style['news__footage-line--mb']"></div>
          </div>
        </div>
      </div>
      <pagination
        :class="$style['news__context-left-pagination']"
        style="margin-top: 50px"
        :total="Math.ceil(news.length / pageSize)"
        :current-page="currentPage"
        :page-size="pageSize"
        @current-change="handlePageChange"
      />
    </div>
    <div :class="$style['news__context-right']">
      <category :class="$style['news__context-right-category']" style="margin-top: 0" />
    </div>
  </div>
</template>

<style module scoped lang="scss">
@import './NewsContext.module.scss';
</style>
