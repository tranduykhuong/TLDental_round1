<script setup lang="ts">
import { ref } from 'vue';
import Capgemini from '@/assets/imgs/Home/Capgemini.png';
import Yamaha from '@/assets/imgs/Home/Yamaha.png';
import DELL from '@/assets/imgs/Home/DELL.png';
import Biocon from '@/assets/imgs/Home/Biocon.png';

interface Company {
  id: number;
  name: string;
  image: string;
}

const companies = ref<Company[]>([
  { id: 1, name: 'Capgemini', image: Capgemini },
  { id: 2, name: 'Yamaha', image: Yamaha },
  { id: 3, name: 'Biocon', image: Biocon },
  { id: 4, name: 'DELL', image: DELL }
]);
</script>

<template>
  <div :class="$style.home__company">
    <h3>NHÃN HÀNG HỢP TÁC</h3>
    <div :class="[$style['home__company-ctn'], 'logos']">
      <div :class="[$style['home__company-list'], 'logos-slide']" ref="companyList">
        <div
          :class="$style['home__company-item']"
          v-for="(company, index) in companies"
          :key="index"
        >
          <img :src="company.image" :alt="company.name" />
        </div>
      </div>
      <div :class="[$style['home__company-list'], 'logos-slide']" ref="companyList">
        <div
          :class="$style['home__company-item']"
          v-for="(company, index) in companies"
          :key="index"
        >
          <img :src="company.image" :alt="company.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<style module scoped lang="scss">
@import './HomeCompany.module.scss';
</style>
