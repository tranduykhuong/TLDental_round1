<script setup lang="ts">
import LogoNoBg from '@/assets/imgs/logo_nobg.png';
import ProductPic from '@/assets/imgs/Product/product.png';
import LogoCompany from '@/assets/imgs/Product/logoCompany.png';
import OkSticker from '@/assets/imgs/Product/GroupOk.svg';
import Insurance from '@/assets/imgs/Product/GroupInsurance.svg';
import SupportSticker from '@/assets/imgs/Product/GroupSupport.svg';
import { useRouter } from 'vue-router';
import { type PropType } from 'vue';

export interface Product {
  nameProduct: string;
  price: string | number;
  description: string;
  tag: string;
  company: string;
}
const router = useRouter();

const goToDetailPage = () => {
  router.push('/chitiet');
};

defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  }
});
</script>
<template>
  <div :class="$style.mbcard" @click="goToDetailPage">
    <div :class="$style['mbcard__left']">
      <!-- <img :class="$style['mbcard__left-image']" :src="LogoCompany" alt="logo" /> -->
      <div :class="$style['mbcard__left-header']">
        <img :src="LogoCompany" alt="logo" />
      </div>
      <div :class="$style['mbcard__left-cpn']">
        <img :src="ProductPic" alt="product" />
      </div>

      <div :class="$style['mbcard__left-infor']">
        <div :class="$style['mbcard__left-logo']">
          <img :class="$style['mbcard__left-logo']" :src="LogoNoBg" alt="logo" />
          <p>Group</p>
        </div>
        <h3>{{ product.tag }} {{ product.company }}</h3>
      </div>
    </div>
    <div :class="$style['mbcard__right']">
      <h4 :class="$style['mbcard__right-title']">
        {{ product.nameProduct }}
      </h4>
      <p>{{ product.description }}</p>
      <div :class="$style['mbcard__right-list']">
        <div :class="$style['mbcard__right--genuine']">
          <img :class="$style['mbcard__right-sticker']" :src="OkSticker" alt="sticker" />
          <p :class="$style['mbcard__right-text']">100% chính hãng</p>
        </div>
        <div :class="$style['mbcard__right--genuine']">
          <img :class="$style['mbcard__right-sticker']" :src="Insurance" alt="sticker" />
          <p :class="$style['mbcard__right-text']">Bảo hành 12 tháng</p>
        </div>
        <div :class="$style['mbcard__right--genuine']">
          <img :class="$style['mbcard__right-sticker']" :src="SupportSticker" alt="sticker" />
          <p :class="$style['mbcard__right-text']">Hỗ trợ đổi trả</p>
        </div>
      </div>
      <h4 :class="$style['mbcard__right-price']">{{ product.price }}</h4>
    </div>
  </div>
</template>

<style module scoped lang="scss">
@import './MobileCard.module.scss';
</style>
