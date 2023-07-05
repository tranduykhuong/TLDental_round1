<script setup lang="ts">
import BreadCrumb from '@/components/BreadCrumb/BreadCrumb.vue';
import ServiceQuality from '@/components/ServiceQuality/ServiceQuality.vue';
import SimilarProduct from '@/components/SimilarProduct/SimilarProduct.vue';
import DetailImage from '@/assets/imgs/Product/Rectangle.png';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faRegistered } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import {
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlassPlus,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import ZaloImg from '@/assets/imgs/Contact/Zalo.svg';
import Product1 from '@/assets/imgs/Product/Rectangle2061.png';
import Product2 from '@/assets/imgs/Product/Rectangle2062.png';
import Product3 from '@/assets/imgs/Product/Rectangle2063.png';
import Product4 from '@/assets/imgs/Product/Rectangle2064.png';
import { ref, onMounted, onUnmounted, computed } from 'vue';

const pathBC = 'dung-cu-nha-khoa/kep-chinh-nha/kep-gap-mac-cai-R6,7-kep-gap-Tube-PMC-ORTHOR';
const images = [DetailImage, Product1, Product2, Product3, Product4];
const isDesktop = ref(false);

const wItem = ref(0);
const tranfX = ref(0);
let resizeListener: () => void;
const isDialogOpen = ref(false);
const currentIndex = ref(0);
const startIndex = ref(0);
const displayedImagesCount = 3;

const setCurrentImage = (index: number) => {
  currentIndex.value = index;
};

const displayedImages = computed(() =>
  images.slice(startIndex.value, startIndex.value + displayedImagesCount)
);

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};

const currentImage = computed(() => images[currentIndex.value]);

const showDialog = () => {
  isDialogOpen.value = true;
};

const closeDialog = () => {
  isDialogOpen.value = false;
};

onMounted(() => {
  const container = document.getElementById('trend-wrapper');

  if (container) {
    if (window.innerWidth < 739) {
      wItem.value = container.offsetWidth / 2;
    } else {
      wItem.value = container.offsetWidth / 4;
    }
  }

  resizeListener = function () {
    if (window.innerWidth < 739) {
      isDesktop.value = false;
    } else {
      isDesktop.value = true;
    }
    const container = document.getElementById('trend-wrapper');
    if (container) {
      if (window.innerWidth < 739) {
        wItem.value = container.offsetWidth / 2;
      } else {
        wItem.value = container.offsetWidth / 4;
      }

      tranfX.value = 0;
    }
  };

  window.addEventListener('resize', resizeListener);
});

onUnmounted(() => {
  window.removeEventListener('resize', resizeListener);
});
</script>
<template>
  <div>
    <bread-crumb :tags="pathBC" />
    <div :class="$style.detail">
      <div :class="$style.detail__image">
        <div :class="$style['detail__image--ctn']">
          <img
            :class="$style['detail__image--ctn-main']"
            :src="currentImage"
            alt="Detail Product"
          />
          <button :class="$style['detail__image--ctn-left']" @click="prevImage">
            <font-awesome-icon :icon="faChevronLeft" :class="$style['home__trend-ic']" />
          </button>
          <button :class="$style['detail__image--ctn-right']" @click="nextImage">
            <font-awesome-icon :icon="faChevronRight" :class="$style['home__trend-ic']" />
          </button>
          <button :class="$style['detail__image--ctn-zoom']" @click="showDialog">
            <font-awesome-icon :icon="faMagnifyingGlassPlus" :class="$style['home__trend-ic']" />
          </button>
        </div>

        <div v-if="isDialogOpen" :class="$style.dialog" @click="closeDialog">
          <img
            @click.stop
            :src="currentImage"
            alt="Detail Product"
            :class="$style['dialog-image']"
          />
          <button @click="closeDialog" :class="$style['dialog-close']">
            <font-awesome-icon :icon="faTimes" />
          </button>
        </div>

        <div :class="$style['detail__image--multi']">
          <img
            v-for="(image, index) in displayedImages"
            :key="index"
            :class="[
              $style['detail__image--multi-product'],
              {
                [$style['detail__image--multi-product-active']]: index === currentIndex
              }
            ]"
            :src="image"
            alt="product1"
            @click="setCurrentImage(index)"
          />
          <div :class="$style['detail__image--multi-products']">
            <img
              :class="[
                $style['detail__image--multi-product'],
                {
                  [$style['detail__image--multi-product-active']]: currentIndex === 3
                }
              ]"
              :src="images[3]"
              alt="product4"
            />
            <div
              :class="[
                $style['detail__image--multi-products-count'],
                {
                  [$style['detail__image--multi-product-active']]: currentIndex === 3
                }
              ]"
            >
              <p>+ {{ images.length - 3 }}</p>
            </div>
          </div>
        </div>
        <div v-if="!isDesktop" :class="$style['detail__image--counts']">
          <p>{{ currentIndex + 1 }}/{{ images.length }}</p>
        </div>
      </div>
      <div :class="$style.detail__content">
        <div :class="$style['detail__content--name']">
          Kẹp gấp mắc cài R6,7/ Kẹp gấp TUBE - PMC ORTHO
        </div>
        <div :class="$style['detail__content--price']">4.000.000đ</div>
        <div :class="$style['detail__content--object']">Chính Sách Bảo Hành - Đổi Trả</div>
        <ul :class="$style['detail__content--list']">
          <li :class="$style['detail__content--list-detail']">
            Sản phẩm chính hãng, được bảo hành lên đến 12 tháng
          </li>
          <li :class="$style['detail__content--list-detail']">Miễn phí vận chuyển toàn quốc</li>
          <li :class="$style['detail__content--list-detail']">
            Miễn phí kiểm tra và thử sản phẩm (nội thành TP. HCM)
          </li>
          <li :class="$style['detail__content--list-detail']">
            Đổi trả miễn phí trong 30 ngày (chưa qua sử dụng)
          </li>
        </ul>

        <div :class="$style['detail__content--object']">
          Tại sao nên mua hàng tại TL Dental Group
        </div>
        <ul :class="$style['detail__content--list']">
          <li :class="$style['detail__content--list-detail']">
            Thương hiệu uy tín, nhà phân phối độc quyền
          </li>
          <li :class="$style['detail__content--list-detail']">
            Mức giá cạnh tranh, chất lượng cao
          </li>
          <li :class="$style['detail__content--list-detail']">
            Đội ngũ nhân viên tận tâm, giàu kinh nghiệm
          </li>
        </ul>
        <div :class="$style['detail__content--brand']">
          <font-awesome-icon :icon="faRegistered" :class="$style['detail__content--brand-icon']" />
          <p :class="$style['detail__content--brand-text']">Thương hiệu:</p>
          <p :class="$style['detail__content--brand-company']">Biocon</p>
        </div>
        <div :class="$style['detail__content--contact']">
          <div :class="$style['detail__content--contact-btn1']">
            <font-awesome-icon :class="$style['fb-logo']" :icon="faFacebook" />
            <p :class="$style['detail__content--contact-btn1-text']">Tư vấn qua Facebook</p>
          </div>
          <div :class="$style['detail__content--contact-btn2']">
            <img :class="$style['zalo-logo']" :src="ZaloImg" alt="Zalo logo" />
            <p :class="$style['detail__content--contact-btn2-text']">Tư vấn qua Zalo</p>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.description">
      <div :class="$style.description__title">
        <div :class="$style['description__title--line']"></div>
        <p :class="$style['description__title--text']">MÔ TẢ CHI TIẾT SẢN PHẨM</p>
      </div>
      <div :class="$style.description__name">Kẹp gấp mắc cài R6,7/ Kẹp gấp TUBE - PMC ORTHO</div>
      <div :class="$style.list">
        <ul>
          <p :class="$style.list__title">1. Thông tin sản phẩm</p>
          <li :class="$style['list__content']">Kẹp gắp đầu cong để gắp mắc cài R6,7 và button.</li>
          <li :class="$style['list__content']">
            Kẹp gấp mắc cài được thiết kế rộng đầu kẹp giúp hỗ trợ tốt hơn khi đặt mắc cài.
          </li>
          <li :class="$style['list__content']">
            Dùng tay bóp kẹp và gắp mắc cài, sau đó giữ kẹp không tạo lực và gắn mắc cài lên răng.
            Sau đó bóp kẹp và lấy kẹp ra.
          </li>
        </ul>
        <ul>
          <p :class="$style.list__title">2. Thông tin thương hiệu</p>
          <li :class="$style['list__content']">
            TL Dental Group là một trong những đơn vị cung cấp dụng cụ chỉnh nha uy tín và đảm bảo
            chất lượng dẫn đầu thị trường.
          </li>
          <li :class="$style['list__content']">
            Tất cả các sản phẩm đều có nguồn gốc xuất xứ rõ ràng, có nhãn mác và chứng nhận của bộ y
            tế.
          </li>
          <li :class="$style['list__content']">
            Khách hàng sẽ nhận được những sản phẩm với mức giá vô cùng cạnh tranh và ưu đãi, đảm bảo
            mang tới cho khách hàng sự hài lòng tuyệt đối.
          </li>
        </ul>
      </div>
    </div>
    <similar-product />
    <service-quality />
  </div>
</template>

<style module scoped lang="scss">
@import './DetailPage.module.scss';
</style>
