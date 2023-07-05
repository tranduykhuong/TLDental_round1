<script setup lang="ts">
import ProductBanner from './ProductBanner/ProductBanner.vue';
import ProductCard from '@/components/Card/ProductCard.vue';
import MobileCard from '@/components/MBCard/MobileCard.vue';
import BaseCategory from '@/components/Category/BaseCategory.vue';
import ProductNavigation from './ProductNavigation/ProductNavigation.vue';
import ServiceQuality from '@/components/ServiceQuality/ServiceQuality.vue';
import BasePagination from '@/components/Pagination/BasePagination.vue';
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb.vue';
import { products } from '../Product/ProductHandle';
import { category } from './ProductCategory/ProductCategory';
import IcSortDown from '@/assets/icons/IcSortDown.svg';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { computed, onMounted, ref } from 'vue';
import {
  faArrowDownAZ,
  faArrowDownShortWide,
  faFilter,
  faBars
} from '@fortawesome/free-solid-svg-icons';

const categories = [
  {
    title: 'Vật liệu chỉnh nha ABC',
    data: [
      {
        name: 'Lò xo chỉnh nha'
      },
      {
        name: 'Kềm chỉnh nha'
      },
      {
        name: 'Thun chỉnh chỉnh nha'
      },
      {
        name: 'Chỉ chỉnh nha'
      },
      {
        name: 'Kẹp gấp mắc cài'
      }
    ]
  },
  {
    title: 'Vật liệu chỉnh nha ADC',
    data: [
      {
        name: 'Lò xo chỉnh nha'
      },
      {
        name: 'Kềm chỉnh nha'
      },
      {
        name: 'Thun chỉnh chỉnh nha'
      },
      {
        name: 'Chỉ chỉnh nha'
      },
      {
        name: 'Kẹp gấp mắc cài'
      }
    ]
  },
  {
    title: 'Vật liệu chỉnh nha XYZ',
    data: [
      {
        name: 'Lò xo chỉnh nha'
      },
      {
        name: 'Kềm chỉnh nha'
      },
      {
        name: 'Thun chỉnh chỉnh nha'
      },
      {
        name: 'Chỉ chỉnh nha'
      },
      {
        name: 'Kẹp gấp mắc cài'
      }
    ]
  }
];

const currentPage = ref(1);
const pageSize = ref(12);
const pathBC = 'sanpham';
const isDesktop = ref(true);
const isActive = ref(false);

// Define reactive properties
const isDropdownOpen = ref(false);
const selectedOption = ref('Sắp xếp');
const options = ['Mới nhất', 'Giá tăng dần', 'Giá giảm dần'];

// Define methods
const toggleDropdown = () => {
  isActive.value = !isActive.value;
  isDropdownOpen.value = !isDropdownOpen.value;
};

const closeDropdown = () => {
  isActive.value = false;
  isDropdownOpen.value = false;
};

function updateSelectedOption(option: string) {
  selectedOption.value = option;
  closeDropdown();
}

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

const displayedProducts = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return products.slice(start, end);
});

onMounted(() => {
  checkScreenSize();
  updateSelectedOption('Sắp xếp');
});
window.addEventListener('resize', checkScreenSize);
</script>

<template>
  <div>
    <div :class="$style['product__header']">
      <product-banner :class="$style['product__header-banner']" />
      <!-- <product-navigation :class="$style['product__header-navigation']" /> -->
    </div>
    <bread-crumb :tags="pathBC" />
    <div :class="$style['product__content']">
      <base-category v-if="isDesktop" />
      <div :class="$style['product__content-wrap']">
        <div :class="$style['product__content-sort']">
          <p :class="$style['product__content-sort--info']">
            Hiển thị <strong>{{ (currentPage - 1) * pageSize + 1 }}</strong> đến
            <strong>{{ Math.min(currentPage * pageSize, products.length) }}</strong> trên
            <strong>{{ Math.ceil(products.length) }}</strong> kết quả
          </p>

          <div :class="$style['product__content-sort--type']" @click="toggleDropdown">
            <p>{{ selectedOption }}</p>
            <!-- <img :src="IcSortDown" alt="sort down" /> -->
            <font-awesome-icon :icon="faCaretDown" />
          </div>

          <div
            v-if="isDropdownOpen"
            @click="closeDropdown"
            :class="$style['product__content-sort--content']"
          >
            <!-- Nội dung dropdown -->
            <ul :class="$style['dropdown-list']">
              <li
                :class="$style['dropdown-item']"
                v-for="option in options"
                :key="option"
                @click="updateSelectedOption(option)"
              >
                {{ option }}
              </li>
            </ul>
          </div>
        </div>

        <!-- mobile sort-->
        <div v-if="!isDesktop" :class="$style['product__content-mbsort']">
          <div
            :class="[
              $style['product__content-mbsort--type'],
              {
                [$style['product__content-mbsort--active']]: isActive
              }
            ]"
            @click="toggleDropdown"
          >
            <font-awesome-icon
              :class="$style['product__content-mbsort--type--icon']"
              :icon="faArrowDownShortWide"
            />
            <p :class="$style['product__content-mbsort--type--text']">{{ selectedOption }}</p>
          </div>
          <div
            v-if="isDropdownOpen"
            @click="closeDropdown"
            :class="$style['product__content-mbsort--contents']"
          >
            <!-- Nội dung dropdown -->
            <ul :class="$style['dropdown-list']">
              <li
                :class="$style['dropdown-item']"
                v-for="option in options"
                :key="option"
                @click="updateSelectedOption(option)"
              >
                {{ option }}
              </li>
            </ul>
          </div>
        </div>
        <div v-if="isActive" :class="$style.overlay" @click="closeDropdown"></div>
        <!-- mobile content -->
        <div v-if="isDesktop" :class="$style['product__content-container']">
          <product-card
            v-for="(item, index) in displayedProducts"
            :key="index"
            :product="item"
            :class="$style['product__content-container--card']"
          />
        </div>
        <div v-else :class="$style['product__content-mobile']">
          <mobile-card
            v-for="(item1, index1) in displayedProducts"
            :key="index1"
            :product="item1"
          />
        </div>
        <div>
          <base-pagination
            :total="Math.ceil(products.length / pageSize)"
            :current-page="currentPage"
            :page-size="pageSize"
            @current-change="handlePageChange"
          />
        </div>
      </div>
    </div>

    <div>
      <ServiceQuality />
    </div>
  </div>
</template>
s
<style scoped module lang="scss">
@import './ProductPage.module.scss';
</style>
