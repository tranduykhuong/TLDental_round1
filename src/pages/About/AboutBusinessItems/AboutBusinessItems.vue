<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import DCNK2 from '@/assets/imgs/Home/DCNK2.png';

const categories = ref([
  {
    title: 'DỤNG CỤ CHỈNH NHA ABC',
    src: DCNK2
  },
  {
    title: 'DỤNG CỤ CHỈNH NHA XYZ',
    src: DCNK2
  },
  {
    title: 'VẬT LIỆU CHỈNH NHA ABC',
    src: DCNK2
  },
  {
    title: 'MẪU HÀM TƯ VẤN XYZ1',
    src: DCNK2
  },
  {
    title: 'MẪU HÀM TƯ VẤN XYZ2',
    src: DCNK2
  },
  {
    title: 'MẪU HÀM TƯ VẤN XYZ3',
    src: DCNK2
  },
  {
    title: 'MẪU HÀM TƯ VẤN XYZ4',
    src: DCNK2
  }
]);

const colors = [
  // eslint-disable-next-line max-len
  `linear-gradient(143.33deg, #A300F0 24.48%, rgba(246, 76, 218, 0.547363) 78.16%, rgba(173, 0, 255, 0.74) 103.49%)`,
  // eslint-disable-next-line max-len
  `linear-gradient(119.43deg, #0168C8 28.13%, rgba(69, 108, 245, 0.547363) 80.05%, rgba(0, 194, 255, 0.74) 104.55%)`,
  // eslint-disable-next-line max-len
  `linear-gradient(148.87deg, #0085FF 26.28%, rgba(0, 200, 188, 0.547363) 78.26%, rgba(5, 223, 92, 0.74) 126.07%)`,
  // eslint-disable-next-line max-len
  `linear-gradient(143.33deg, #0168C8 24.48%, rgba(246, 76, 218, 0.547363) 78.16%, rgba(173, 0, 255, 0.74) 103.49%)`
];

//Handle Scroll
const MIN_SWIPE_DISTANCE_CM = 3;
const TOUCH_SENSITIVITY = 10;
const touchstartX = ref(0);
const touchendX = ref(0);

const wItem = ref(0);
const tranfX = ref(0);
let resizeListener: () => void;

const widthComputed = computed(() => {
  return wItem.value * categories.value.length + 'px';
});

const widthItemComputed = computed(() => {
  return wItem.value + 'px';
});

const scrollLeft = () => {
  if (tranfX.value < 0) tranfX.value += wItem.value;
};

const scrollRight = () => {
  if (window.innerWidth < 739) {
    if (-tranfX.value + wItem.value * 2 < wItem.value * categories.value.length) {
      tranfX.value -= wItem.value;
    } else {
      tranfX.value = 0;
    }
  } else {
    if (-tranfX.value + wItem.value * 4 < wItem.value * categories.value.length) {
      tranfX.value -= wItem.value;
    } else {
      tranfX.value = 0;
    }
  }
};

const getCategoryColor = (index: number) => {
  return colors[index % colors.length];
};

//Handle scroll list
const checkDirection = () => {
  const distanceX = Math.abs(touchendX.value - touchstartX.value);
  const distanceInCm = distanceX / TOUCH_SENSITIVITY;

  if (distanceInCm >= MIN_SWIPE_DISTANCE_CM) {
    if (touchendX.value < touchstartX.value) {
      scrollRight();
    }
    if (touchstartX.value < touchendX.value) {
      scrollLeft();
    }
  }
};

const handleTouchstart = (e: TouchEvent) => {
  touchstartX.value = e.changedTouches[0].screenX;
};

const handleTouchend = (e: TouchEvent) => {
  touchendX.value = e.changedTouches[0].screenX;
  checkDirection();
};

onMounted(() => {
  const container = document.getElementById('category-wrapper');
  if (container) {
    if (window.innerWidth < 739) {
      wItem.value = container.offsetWidth / 2;
    } else {
      wItem.value = container.offsetWidth / 4;
    }
  }

  resizeListener = function () {
    const container = document.getElementById('category-wrapper');
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
  <div :class="$style.about__businessitems">
    <h3>DANH MỤC NỔI BẬT</h3>
    <div :class="$style['about__businessitems-ctn']">
      <div :class="$style['about__businessitems-wrapper']" id="category-wrapper">
        <div
          @touchstart="handleTouchstart"
          @touchend="handleTouchend"
          :class="$style['about__businessitems-list']"
          id="category-list"
          :style="{ width: widthComputed, transform: 'translateX(' + tranfX + 'px)' }"
        >
          <div
            v-for="(item, index) in categories"
            :key="index"
            :class="$style['about__businessitems-item']"
            :style="{ background: getCategoryColor(index), width: widthItemComputed }"
          >
            <span>{{ item.title }}</span>
            <div :class="$style['about__businessitems-ctn']">
              <div :class="$style['about__businessitems-img']">
                <img :src="item.src" :alt="item.title" />
              </div>
            </div>
          </div>
        </div>
        <button :class="$style['about__businessitems-left']" @click="scrollLeft">
          <font-awesome-icon :icon="faChevronLeft" :class="$style['about__businessitems-ic']" />
        </button>
        <button :class="$style['about__businessitems-right']" @click="scrollRight">
          <font-awesome-icon :icon="faChevronRight" :class="$style['about__businessitems-ic']" />
        </button>
      </div>
    </div>
  </div>
</template>

<style module scoped lang="scss">
@import './AboutBusinessItems.module.scss';
</style>
