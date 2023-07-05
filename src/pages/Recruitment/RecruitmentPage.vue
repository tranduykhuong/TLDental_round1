<script setup lang="ts">
import {
  girl1,
  girl2,
  img1,
  img2,
  img3,
  img4,
  img5,
  ceo,
  imgHand
} from '@/assets/imgs/Recruitment/RecruitmentImgs';
import {
  posterItems,
  visionItems,
  valueItems,
  recStep,
  recStepItems,
  recruitWorkItems
} from './RecruitmentHandle';
import RecruitmentCard from './RecruitmentCard/RecruitmentCard.vue';
import RecruitmentCardWork from './RecruitmentCardWork/RecruitmentCardWork.vue';
import { ref, onMounted, computed, type PropType } from 'vue';

const itemSeleted = ref(0);
const hiddenElement = ref(false);
const showMore = ref(false);
const moreRecruitWorkItems = ref();

//Hàm set animation của element tuyển dụng
const handleScroll = () => {
  const element = document.getElementById('page');
  const rect = element?.getBoundingClientRect();
  const oneItemHeight = Number(element?.offsetHeight) / recStep.length;
  const topParent = Number(rect?.top);
  // console.log(rect?.top, element?.offsetHeight);

  if (topParent < 0 && screen.width > 739) {
    const index = Math.abs(topParent / oneItemHeight);
    itemSeleted.value = Number(index.toFixed());
    // console.log(itemSeleted.value);

    const locationHidden = (recStep.length - 19 / 20) * oneItemHeight;

    if (-topParent > locationHidden) hiddenElement.value = true;
    else hiddenElement.value = false;
    // console.log(locationHidden, hiddenElement.value);
  }
};

//Hàm cập nhật item sau khi loading
const showPageCompleted = () => {
  showMore.value = false;

  if (!moreRecruitWorkItems.value) {
    moreRecruitWorkItems.value = [...recruitWorkItems];
  } else recruitWorkItems.forEach((item) => moreRecruitWorkItems.value.push(item));

  console.log(moreRecruitWorkItems.value, recruitWorkItems);
};

//Hàm loading
const openLoading = () => {
  showMore.value = true;
  setTimeout(showPageCompleted, 3000);
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
</script>
<template>
  <div :class="$style.container">
    <div :class="$style.container__poster">
      <div :class="$style['container__poster-img']">
        <div :class="$style['container__poster-img-content']">
          <div class="">
            <img :src="girl1" alt="none" />
          </div>
          <div class="">
            <img :src="girl2" alt="none" />
          </div>
        </div>
      </div>
      <div :class="$style['container__poster-title']">
        <h4>Với bề dày hơn <span>2 năm</span> kinh doanh và phát triển</h4>
        <h3>Công ty sở hữu số lượng vật liệu và dụng cụ nha khoa</h3>
        <h2>LỚN NHẤT VIỆT NAM</h2>
        <h1>#TOP1</h1>
      </div>
      <div :class="$style['container__poster-value']">
        <div :class="$style['container__poster-value-item']">
          Hơn <span>2000</span> vật liệu chỉnh nha
        </div>
      </div>
      <div :class="$style['container__poster-btn']">
        <div :class="$style['container__poster-btn-item']">
          <p>Xem vị trí tuyển dụng</p>
        </div>
      </div>
      <div :class="$style['container__poster-block']">
        <div :class="$style['container__poster-block-card']">
          <recruitment-card :items="posterItems" :style="'type1'" />
        </div>
      </div>
    </div>
    <div :class="$style.container__vision">
      <div :class="$style['container__vision-block']">
        <div :class="$style['container__vision-block-img1']">
          <img :src="imgHand" alt="none" />
        </div>
        <div :class="$style['container__vision-block-img2']">
          <img :src="ceo" alt="none" />
        </div>
      </div>
      <div :class="$style['container__vision-content']">
        <recruitment-card :items="visionItems" :style="'type2'" />
      </div>
    </div>
    <div :class="$style.container__value">
      <div :class="$style['container__value-heading']">
        <div :class="$style['container__value-heading-title']">
          <div :class="$style['container__value-heading-title-main']">
            <div :class="$style['container__value-heading-title-main-1']">Giá Trị</div>
            <div :class="$style['container__value-heading-title-main-2']">Cốt Lõi</div>
          </div>
          <div :class="$style['container__value-heading-title-3']">Từ TL Dental Group</div>
        </div>
        <div :class="$style['container__value-heading-content']">
          <p>
            Tài sản đầu tiên là Sức khỏe. Chúng ta không chỉ xây dựng thương hiệu cá nhân, mà chúng
            ta xây dựng đội ngũ và đội ngũ xây dựng Thương hiệu
          </p>
        </div>
      </div>
      <div :class="$style['container__value-list']">
        <recruitment-card :items="valueItems" :style="'type3'" />
      </div>
    </div>
    <div :class="$style.container__envir">
      <div :class="$style['container__envir-title']">Môi Trường Làm Việc Chuyên Nghiệp</div>
      <div :class="$style['container__envir-block']">
        <div
          :class="[
            $style['container__envir-block-img1'],
            $style['container__envir-block-img1-bottom']
          ]"
        >
          <img :src="img1" alt="none" />
        </div>
        <div :class="$style['container__envir-block-img2']">
          <img :src="img2" alt="none" />
          <div
            :class="[
              $style['container__envir-block-img2-circle'],
              $style['container__envir-block-img2-circle-1']
            ]"
          ></div>
        </div>
        <div
          :class="[
            $style['container__envir-block-img1'],
            $style['container__envir-block-img1-center']
          ]"
        >
          <img :src="img3" alt="none" />
        </div>
        <div
          :class="[
            $style['container__envir-block-img2'],
            $style['container__envir-block-img2-bottom']
          ]"
        >
          <div>
            <div
              :class="[
                $style['container__envir-block-img2-circle'],
                $style['container__envir-block-img2-circle-2']
              ]"
            ></div>
            <img :src="img4" alt="none" />
          </div>
        </div>
        <div
          :class="[
            $style['container__envir-block-img1'],
            $style['container__envir-block-img1-top']
          ]"
        >
          <img :src="img5" alt="none" />
        </div>
      </div>
    </div>
    <div :class="$style.container__recruit">
      <div
        :class="[
          $style['container__recruit-left'],
          $style['sticky-container'],
          $style[hiddenElement ? 'display-none' : '']
        ]"
      >
        <div :class="$style['container__recruit-left-title']">
          <span>Tuyển dụng TL Dental Group</span>
          <h2>Quy Trình Tuyển Dụng</h2>
        </div>
        <div :class="$style['container__recruit-left-nav']">
          <recruitment-card
            :items="recStep"
            :content="recStepItems"
            :style="'type4'"
            :on-selected="itemSeleted"
          />
        </div>
      </div>
      <div :class="$style['container__recruit-right']" id="page">
        <recruitment-card :items="recStepItems" :style="'type5'" />
      </div>
    </div>
    <div :class="$style.container__work">
      <div :class="$style['container__work-heading']">
        <div :class="$style['container__work-heading-title']">Các Vị Trí Tuyển Dụng</div>
        <div :class="$style['container__work-heading-filter']">
          <input type="text" name="filter" id="" placeholder="Tìm kiếm" />
        </div>
      </div>
      <div :class="$style['container__work-staff']">
        <div
          :class="$style['container__work-staff-item']"
          v-for="(item, index) in recruitWorkItems"
          :key="index"
        >
          <recruitment-card-work :infor="item" />
        </div>
      </div>
      <div :class="[$style['container__work-staff'], $style['animate-bottom']]">
        <div
          :class="$style['container__work-staff-item']"
          v-for="(item, index) in moreRecruitWorkItems"
          :key="index"
        >
          <recruitment-card-work :infor="item" />
        </div>
      </div>
      <div :id="$style.loader" v-if="showMore === true"></div>
      <div :class="$style['container__work-btn']" v-else @click="openLoading">
        <p>Xem thêm</p>
      </div>
    </div>
  </div>
</template>

<style module scoped lang="scss">
@import './RecruitmentPage.module.scss';
</style>
