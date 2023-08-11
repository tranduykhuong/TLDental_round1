<script setup lang="ts">
import logo from '@/assets/imgs/logo_nobg.png';
import shield from '@/assets/imgs/shield.png';
import { RouterLink, useRoute } from 'vue-router';
import { ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons';
import HeaderCategory from './HeaderCategory/HeaderCategory.vue';
import HeaderSearch from './HeaderSearch/HeaderSearch.vue';
import HeaderCategoryRespo from './HeaderCategoryRespo/HeaderCategoryRespo.vue';
import { pages } from './HeaderHandle';
import router from '@/router/index';

const path = useRoute();
const pageHover = ref('none'); // Web

const flagMobile = ref(false); // Mobile + Tablet
const pageMobile = ref('none'); // check click item mobile

const hiddenNav = () => {
  // hidden nav on mobile
  flagMobile.value = false;
};
</script>
<template>
  <div :class="$style.header__nav">
    <div :class="$style['header__nav-logo']" @click="() => router.push('/trangchu')">
      <img :src="logo" alt="logo" width="50" height="50" />
      <div>
        <h4>TL Dental Group</h4>
        <p>Dental distributors</p>
      </div>
    </div>
    <div :class="$style['header__nav-shield']" @click="() => router.push('/chinhsach')">
      <div :class="$style['header__nav-shield-content']">
        <h4>12</h4>
        <h5>MONTHS</h5>
        <span></span>
        <p>TRADITION</p>
      </div>
      <img :src="shield" alt="shield" width="50" />
    </div>
    <div :class="$style['header__nav-list']">
      <div
        :class="$style['header__nav-item']"
        v-for="item in pages"
        :key="item.slug"
        v-on:mouseenter="pageHover = item.slug"
        v-on:mouseleave="pageHover = 'none'"
      >
        <router-link
          :to="'/' + item.slug"
          :class="$style['header__nav-item-link']"
          :active-class="$style['nav-active']"
          >{{ item.name }}
          <font-awesome-icon v-if="item.slug === 'sanpham'" :icon="faChevronDown" size="xs" />
        </router-link>
        <span
          :class="[
            $style[pageHover === item.slug && item.slug !== 'sanpham' ? 'nav-hover' : ''],
            $style[
              (path.fullPath === '/' && item.slug === '') ||
              (path.fullPath.includes(item.slug) &&
                item.slug !== '' &&
                !path.fullPath.includes('sanpham'))
                ? 'nav-hover'
                : ''
            ]
          ]"
        ></span>
        <header-category v-if="item.slug === 'sanpham'" :page-hover="pageHover" />
      </div>
    </div>
    <header-search />

    <!-- MOBILE + TABLET -->
    <div :class="$style['header__nav-mobile']">
      <div :class="$style['header__nav-mobile--btn']" @click="flagMobile = !flagMobile">
        <font-awesome-icon :icon="faBars" size="xl" />
      </div>
      <div
        :class="[
          $style['header__nav-mobile--list'],
          $style[flagMobile ? 'header__nav-mobile--show' : '']
        ]"
      >
        <form :class="$style['header__nav-mobile--search']">
          <input type="text" name="search" placeholder="Tìm kiếm" />
        </form>
        <!-- List page -->
        <div :class="$style['header__nav-mobile--item']" v-for="item in pages" :key="item.slug">
          <router-link
            :to="'/' + item.slug"
            :class="$style['header__nav-mobile-item-link']"
            @click="
              () => {
                if (item.slug !== 'sanpham') flagMobile = !flagMobile;
                pageMobile = pageMobile === 'sanpham' ? 'none' : item.slug;
              }
            "
            >{{ item.name }}
            <font-awesome-icon v-if="item.slug === 'sanpham'" :icon="faChevronDown" size="sm" />
          </router-link>

          <!-- Category -->
          <header-category-respo
            :page-mobile="pageMobile"
            :current-item="item.slug"
            :hiddenNav="hiddenNav"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style module scoped lang="scss">
@import './BaseHeader.module.scss';
</style>
