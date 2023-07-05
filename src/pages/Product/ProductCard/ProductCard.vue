<script setup lang="ts">
import LogoNoBg from '@/assets/imgs/logo_nobg.png';
import ProductPic from '@/assets/imgs/Product/product.png';
import LogoCompany from '@/assets/imgs/Product/logoCompany.png';
import OkSticker from '@/assets/imgs/Product/GroupOk.svg';
import Insurance from '@/assets/imgs/Product/GroupInsurance.svg';
import SupportSticker from '@/assets/imgs/Product/GroupSupport.svg';
import { type PropType } from 'vue';

export interface Product {
  nameProduct: string;
  price: string | number;
  description: string;
  tag: string;
  company: string;
}

defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  }
});
</script>
<template>
  <div :class="$style.card">
    <div :class="$style.card__show">
      <p :class="$style['card__show--info']">{{ product.description }}</p>
      <div :class="$style['card__show--button']">Xem chi tiết</div>
    </div>
    <div :class="$style.card__header">
      <div :class="$style['card__header--container']">
        <div>
          <div :class="$style['card__header--genuine']">
            <img :class="$style['card__header--genuine-sticker']" :src="OkSticker" alt="sticker" />
            <p :class="$style['card__header--genuine-text']">100% chính hãng</p>
          </div>
          <div :class="$style['card__header--insurance']">
            <img
              :class="$style['card__header--insurance-sticker']"
              :src="Insurance"
              alt="sticker"
            />
            <p :class="$style['card__header--insurance-text']">Bảo hành 12 tháng</p>
          </div>
          <div :class="$style['card__header--support']">
            <img
              :class="$style['card__header--insurance-sticker']"
              :src="SupportSticker"
              alt="sticker"
            />
            <p :class="$style['card__header--insurance-text']">Hỗ trợ đổi trả</p>
          </div>
          <div :class="$style['card__header--wgenuine']">
            <div :class="$style['card__header--wgenuine-confirm']"></div>
            <!-- <div :class="$style['product__card--triangle']"></div> -->
          </div>
          <p :class="$style['card__header--txtconfirm']">Chính hãng</p>
        </div>
        <div :class="$style['card__header--title']">
          <img :class="$style['card__header--title-logo']" :src="LogoNoBg" alt="logononbg" />
          <div :class="$style['card__header--title-content']">
            {{ product.tag }} {{ product.company }}
          </div>
        </div>
        <div>
          <img :class="$style['card__header--picture']" :src="ProductPic" alt="product" />
        </div>
      </div>
    </div>
    <div :class="$style.card__body">
      <p :class="$style['card__body--name']">
        {{ product.nameProduct }}
      </p>
      <div :class="$style['card__body--info']">
        <img :class="$style['card__body--info-company']" :src="LogoCompany" alt="Logo company" />
        <p :class="$style['card__body--info-price']">{{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<style module scoped lang="scss">
// @import '../ProductPage.module.scss';
@import '../ProductCard/ProductCard.module.scss';
</style>
