<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const pathAD = defineProps({
  tags: {
    type: String,
    required: true
  }
});

const predefinedItems = [
  {
    slug: 'tintuc',
    name: 'Tin tức'
  },
  {
    slug: 'gioithieu',
    name: 'Giới thiệu'
  },
  {
    slug: 'chinhsach',
    name: 'Chính sách'
  },
  {
    slug: 'sanpham',
    name: 'Sản phẩm'
  },
  {
    slug: 'kep-gap-mac-cai-R6,7-kep-gap-Tube-PMC-ORTHOR',
    name: 'Kẹp gấp mắc cài R6,7/ kẹp gấp Tube - PMC ORTHO'
  },
  {
    slug: 'dung-cu-nha-khoa',
    name: 'Dụng cụ nha khoa'
  },
  {
    slug: 'kep-chinh-nha',
    name: 'Kẹp chỉnh nha'
  },
  {
    slug: 'hoat-dong-chong-dich-tinh-nguyen',
    name: 'Hoạt động chống dịch tình nguyện'
  },
  {
    slug: 'dungcu',
    name: 'Dụng cụ nha khoa'
  },
  {
    slug: 'lienhe',
    name: 'Liên hệ'
  },
  {
    slug: 'chinh-sach-bao-mat',
    name: 'Chính sách bảo mật'
  },
  {
    slug: 'chinh-sach-bao-mat',
    name: 'Chính sách bảo mật'
  },
  {
    slug: 'kem-chinh-nha-abc',
    name: 'Kem chỉnh nha ABC'
  },
  {
    slug: 'keo-chinh-nha',
    name: 'Kẹp chỉnh nha'
  },
  {
    slug: 'timkiem',
    name: 'Kết quả tìm kiếm'
  }
];

const pathSegments = pathAD.tags.split('/').filter((segment) => segment !== '');
const breadcrumbItems = pathSegments.map((segment) => {
  const predefinedItem = predefinedItems.find((item) => item.slug === segment);
  return predefinedItem ? predefinedItem.name : segment;
});
</script>
<template>
  <div :class="$style.news__breadcrum">
    <div :class="$style['news__breadcrum-home']">
      <font-awesome-icon :icon="faHome" :class="$style['news__breadcrum-ic']" />
      <span>Home</span>
    </div>
    <div :class="$style['news__breadcrum-tag']" v-for="item in breadcrumbItems" :key="item">
      <font-awesome-icon :icon="faChevronRight" :class="$style['news__breadcrum-ic']" />
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<style module scoped lang="scss">
@import './BreadCrumb.module.scss';
</style>
