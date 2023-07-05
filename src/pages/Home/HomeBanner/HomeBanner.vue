<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import Capgemini from '@/assets/imgs/Home/Capgemini.png';
import Yamaha from '@/assets/imgs/Home/Yamaha.png';
import DELL from '@/assets/imgs/Home/DELL.png';
import Biocon from '@/assets/imgs/Home/Biocon.png';

const bannerItems = [
  { src: Capgemini, alt: 'capgemini', width: '127', height: '30' },
  { src: Yamaha, alt: 'yamaha', width: '127', height: '26' },
  { src: Biocon, alt: 'biocon', width: '101', height: '40' },
  { src: DELL, alt: 'dell', width: '82.42', height: '25' }
];

//Scroll Properties
const MIN_SWIPE_DISTANCE_CM = 3.5;
const TOUCH_SENSITIVITY = 15;
const touchstartX = ref(0);
const touchendX = ref(0);
const circleActive = ref(0);

//MOBILE
const tranfX = ref(0);
const widthItemMB = ref(0);
const mobilestatus = ref(true);

//WEB
const activeIndex = ref(0);
const activeBanner = ref(bannerItems[0]);
const showBannerBg = ref(true);
const lineWidth = ref(0);
let resizeListener: () => void;

const widthComputed = computed(() => {
  return widthItemMB.value * bannerItems.length + 'px';
});

const widthItemComputed = computed(() => {
  return widthItemMB.value + 'px';
});

//Scroll Handle
const scrollRight = () => {
  const container = document.getElementById('list_item');
  if (container) {
    const containerWidth = container.offsetWidth;
    const itemWidth = container.offsetWidth;

    const maxScrollLeft = container.scrollWidth - containerWidth;

    const currentScrollLeft = container.scrollLeft;
    const targetScrollLeft = currentScrollLeft + itemWidth + 10;

    if (targetScrollLeft > maxScrollLeft) {
      circleActive.value = 0;
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      if (circleActive.value == bannerItems.length - 1) {
        circleActive.value = 0;
      } else {
        circleActive.value++;
      }

      container.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
    }
  }
};

const scrollLeft = () => {
  const container = document.getElementById('list_item');
  if (container) {
    const itemWidth = container.offsetWidth;

    const currentScrollLeft = container.scrollLeft;
    const targetScrollLeft = currentScrollLeft - itemWidth - 10;

    if (targetScrollLeft < 0) {
      circleActive.value = bannerItems.length - 1;
      container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
    } else {
      circleActive.value--;
      container.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });
    }
  }
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

//Transform line active
const lineTransform = computed(() => {
  let selectedItemLeft = 0;
  for (let i = 0; i < activeIndex.value; i++) {
    const itemWidth = Number(bannerItems[i].width) + 30;
    selectedItemLeft += itemWidth;
  }
  selectedItemLeft += (Number(bannerItems[activeIndex.value].width) - lineWidth.value) / 2;
  return `translateX(${selectedItemLeft}px)`;
});

const selectedItem = computed(() => {
  return bannerItems[activeIndex.value];
});

//Set background for banner
const bannerBgColor = computed(() => {
  const colors = [
    `radial-gradient(50% 50% at 50% 50%, rgba(135, 255, 126, 0.8) 0%, rgba(242, 255, 255, 0) 100%)`,
    `radial-gradient(50% 50% at 50% 50%, rgba(252, 126, 255, 0.8) 0%, rgba(242, 255, 255, 0) 100%)`,
    `radial-gradient(50% 50% at 50% 50%, rgba(255, 126, 126, 0.8) 0%, rgba(242, 255, 255, 0) 100%)`,
    `radial-gradient(50% 50% at 50% 50%, rgba(126, 232, 255, 0.8) 0%, rgba(242, 255, 255, 0) 100%)`
  ];
  return colors[activeIndex.value];
});

//Set 4 ellipse color for web
const elipseColor = computed(() => {
  const elcolors = [
    [
      // eslint-disable-next-line max-len
      `radial-gradient(50% 50% at 50% 50%, rgba(248, 131, 131, 0.9) 0%, rgba(242, 255, 255, 0) 100%)`,
      // eslint-disable-next-line max-len
      `radial-gradient(50% 50% at 50% 50%, rgba(248, 131, 131, 0.9) 0%, rgba(242, 255, 255, 0) 100%)`,
      // eslint-disable-next-line max-len
      `radial-gradient(50% 50% at 50% 50%, rgba(126, 232, 255, 0.9) 0%, rgba(242, 255, 255, 0) 100%)`,
      // eslint-disable-next-line max-len
      `radial-gradient(50% 50% at 50% 50%, rgba(126, 232, 255, 0.9) 0%, rgba(242, 255, 255, 0) 100%)`
    ],
    [
      // eslint-disable-next-line max-len
      `radial-gradient(50% 50% at 50% 50%, rgba(248, 131, 131, 0.9) 0%, rgba(242, 255, 255, 0) 100%)`,
      // eslint-disable-next-line max-len
      `radial-gradient(50% 50% at 50% 50%, rgba(126, 232, 255, 0.9) 0%, rgba(242, 255, 255, 0) 100%)`,
      // eslint-disable-next-line max-len
      `radial-gradient(50% 50% at 50% 50%, rgba(248, 131, 131, 0.9) 0%, rgba(242, 255, 255, 0) 100%)`,
      // eslint-disable-next-line max-len
      `radial-gradient(50% 50% at 50% 50%, rgba(126, 232, 255, 0.9) 0%, rgba(242, 255, 255, 0) 100%)`
    ],
    [
      // eslint-disable-next-line max-len
      `radial-gradient(50% 50% at 50% 50%, rgba(248, 131, 131, 0.9) 0%, rgba(242, 255, 255, 0) 100%)`,
      // eslint-disable-next-line max-len
      `radial-gradient(50% 50% at 50% 50%, rgba(252, 126, 255, 0.9) 0%, rgba(242, 255, 255, 0) 100%)`,
      // eslint-disable-next-line max-len
      `radial-gradient(50% 50% at 50% 50%, rgba(183, 255, 126, 0.9) 0%, rgba(242, 255, 255, 0) 100%)`,
      // eslint-disable-next-line max-len
      `radial-gradient(50% 50% at 50% 50%, rgba(126, 232, 255, 0.9) 0%, rgba(242, 255, 255, 0) 100%)`
    ],
    [
      // eslint-disable-next-line max-len
      `radial-gradient(50% 50% at 50% 50%, rgba(248, 131, 131, 0.9) 0%, rgba(242, 255, 255, 0) 100%)`,
      // eslint-disable-next-line max-len
      `radial-gradient(50% 50% at 50% 50%, rgba(183, 255, 126, 0.9) 0%, rgba(242, 255, 255, 0) 100%)`,
      // eslint-disable-next-line max-len
      `radial-gradient(50% 50% at 50% 50%, rgba(252, 126, 255, 0.9) 0%, rgba(242, 255, 255, 0) 100%)`,
      // eslint-disable-next-line max-len
      `radial-gradient(50% 50% at 50% 50%, rgba(126, 232, 255, 0.9) 0%, rgba(242, 255, 255, 0) 100%)`
    ]
  ];
  return elcolors[activeIndex.value];
});

//Set 4 ellipse color for mobile
const elipseColorMB = [
  [
    // eslint-disable-next-line max-len
    `radial-gradient(50% 50% at 50% 50%, rgba(248, 131, 131, 0.9) 0%, rgba(242, 255, 255, 0) 100%)`,
    // eslint-disable-next-line max-len
    `radial-gradient(50% 50% at 50% 50%, rgba(248, 131, 131, 0.2) 0%, rgba(242, 255, 255, 0) 100%)`,
    // eslint-disable-next-line max-len
    `radial-gradient(50% 50% at 50% 50%, rgba(126, 232, 255, 0.2) 0%, rgba(242, 255, 255, 0) 100%)`,
    // eslint-disable-next-line max-len
    `radial-gradient(50% 50% at 50% 50%, rgba(126, 232, 255, 0.2) 0%, rgba(242, 255, 255, 0) 100%)`
  ],
  [
    // eslint-disable-next-line max-len
    `radial-gradient(50% 50% at 50% 50%, rgba(126, 232, 255, 0.9) 0%, rgba(242, 255, 255, 0) 100%)`,
    // eslint-disable-next-line max-len
    `radial-gradient(50% 50% at 50% 50%, rgba(126, 232, 255, 0.2) 0%, rgba(242, 255, 255, 0) 100%)`,
    // eslint-disable-next-line max-len
    `radial-gradient(50% 50% at 50% 50%, rgba(248, 131, 131, 0.2) 0%, rgba(242, 255, 255, 0) 100%)`,
    // eslint-disable-next-line max-len
    `radial-gradient(50% 50% at 50% 50%, rgba(126, 232, 255, 0.2) 0%, rgba(242, 255, 255, 0) 100%)`
  ],
  [
    // eslint-disable-next-line max-len
    `radial-gradient(50% 50% at 50% 50%, rgba(183, 255, 126, 0.9) 0%, rgba(242, 255, 255, 0) 100%)`,
    // eslint-disable-next-line max-len
    `radial-gradient(50% 50% at 50% 50%, rgba(252, 126, 255, 0.2) 0%, rgba(242, 255, 255, 0) 100%)`,
    // eslint-disable-next-line max-len
    `radial-gradient(50% 50% at 50% 50%, rgba(126, 232, 255, 0.2) 0%, rgba(242, 255, 255, 0) 100%)`,
    // eslint-disable-next-line max-len
    `radial-gradient(50% 50% at 50% 50%, rgba(126, 232, 255, 0.2) 0%, rgba(242, 255, 255, 0) 100%)`
  ],
  [
    // eslint-disable-next-line max-len
    `radial-gradient(50% 50% at 50% 50%, rgba(252, 126, 255, 0.9) 0%, rgba(242, 255, 255, 0) 100%)`,
    // eslint-disable-next-line max-len
    `radial-gradient(50% 50% at 50% 50%, rgba(126, 232, 255, 0.2) 0%, rgba(242, 255, 255, 0) 100%)`,
    // eslint-disable-next-line max-len
    `radial-gradient(50% 50% at 50% 50%, rgba(252, 126, 255, 0.2) 0%, rgba(242, 255, 255, 0) 100%)`,
    // eslint-disable-next-line max-len
    `radial-gradient(50% 50% at 50% 50%, rgba(126, 232, 255, 0.2) 0%, rgba(242, 255, 255, 0) 100%)`
  ]
];

//To do when moveline
const moveLine = (index: number) => {
  activeIndex.value = index;
  activeBanner.value = bannerItems[index];
  showBannerBg.value = false;

  setTimeout(() => {
    showBannerBg.value = true;
  }, 100);
};

onMounted(() => {
  //Find active and set width for line
  const lineActive = document.getElementById('line_active');
  if (lineActive) {
    lineWidth.value = lineActive.offsetWidth;
  }

  mobilestatus.value = false;

  //Find width slider
  widthItemMB.value = window.innerWidth;

  //Auto scroll
  const container = document.getElementById('list_item');

  const startScroll = () => {
    setInterval(() => {
      scrollRight();
    }, 6000);
  };

  startScroll();

  //Resize Screen
  resizeListener = function () {
    const lineActive = document.getElementById('line_active');
    if (lineActive) {
      activeIndex.value = 0;
      lineWidth.value = lineActive.offsetWidth;
    }

    if (container) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    }

    if (window.innerWidth < 739) {
      mobilestatus.value = true;
      widthItemMB.value = window.innerWidth;
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
  <div :class="$style.home__banner">
    <div :class="$style['home__banner-left']">
      <h2>TL Dental Group</h2>
      <p>Nhà cung cấp thiết bị y tế chính hãng, uy tín hàng đầu Việt Nam.</p>
      <div id="bannerList" :class="$style['home__banner-list']">
        <div
          v-for="(item, index) in bannerItems"
          :key="index"
          :class="[$style['home__banner-item'], { active: activeIndex === index }]"
          @click="moveLine(index)"
        >
          <img :src="item.src" :alt="item.alt" :width="item.width" :height="item.height" />
        </div>
        <div id="line_active" :class="$style['line']" :style="{ transform: lineTransform }"></div>
      </div>
    </div>
    <div :class="$style['home__banner-right']">
      <div
        v-if="showBannerBg"
        :class="$style['home__banner-bg']"
        :style="{ background: !mobilestatus ? bannerBgColor : '' }"
      >
        <div :class="$style['home__banner-radial']">
          <div :class="$style['home__banner-circle']">
            <div :class="$style['home__banner-logo']">
              <img :src="selectedItem.src" :alt="selectedItem.alt" width="127" height="30" />
            </div>
            <div :class="$style['home__banner-product']"></div>
          </div>
          <p>Trụ Implant Highness Hàn Quốc</p>
        </div>
      </div>
    </div>
    <div :class="$style['home__banner-elipse1']" :style="{ background: elipseColor[0] }"></div>
    <div :class="$style['home__banner-elipse2']" :style="{ background: elipseColor[1] }"></div>
    <div :class="$style['home__banner-elipse3']" :style="{ background: elipseColor[2] }"></div>
    <div :class="$style['home__banner-elipse4']" :style="{ background: elipseColor[3] }"></div>
  </div>
  <div :class="$style.home__bannerMB">
    <div
      id="list_item"
      :class="$style['home__bannerMB-list']"
      :style="{ width: widthComputed, transform: 'translateX(' + tranfX + 'px)' }"
      @touchstart="handleTouchstart"
      @touchend="handleTouchend"
    >
      <div
        :class="$style['home__bannerMB-item']"
        v-for="(item, index) in bannerItems"
        :key="index"
        :style="{ width: widthItemComputed }"
      >
        <div :class="$style['home__bannerMB-left']">
          <h2>TL Dental Group</h2>
          <p>Nhà cung cấp thiết bị y tế chính hãng, uy tín hàng đầu Việt Nam.</p>
        </div>
        <div :class="$style['home__bannerMB-right']">
          <div v-if="showBannerBg" :class="$style['home__bannerMB-bg']">
            <div :class="$style['home__bannerMB-radial']">
              <div :class="$style['home__bannerMB-circle']">
                <div :class="$style['home__bannerMB-logo']">
                  <img :src="item.src" :alt="item.alt" width="60" height="30" />
                </div>
                <div :class="$style['home__bannerMB-product']"></div>
              </div>
              <p>Trụ Implant Highness Hàn Quốc</p>
            </div>
          </div>
        </div>
        <div
          :class="$style['home__bannerMB-item-elipse5']"
          :style="{ background: elipseColorMB[index][0] }"
        ></div>
        <div
          :class="$style['home__bannerMB-item-elipse6']"
          :style="{ background: elipseColorMB[index][1] }"
        ></div>
        <div
          :class="$style['home__bannerMB-item-elipse7']"
          :style="{ background: elipseColorMB[index][2] }"
        ></div>
        <div
          :class="$style['home__bannerMB-item-elipse8']"
          :style="{ background: elipseColorMB[index][3] }"
        ></div>
      </div>
    </div>
    <div :class="$style['home__bannerMB-active']">
      <div
        :class="$style['home__bannerMB-circle']"
        v-for="index in bannerItems.length"
        :id="index.toString()"
        :key="index"
        :style="{ backgroundColor: index - 1 === circleActive ? '#2696E9' : '' }"
      ></div>
    </div>
  </div>
</template>

<style module scoped lang="scss">
@import './HomeBanner.module.scss';
</style>
