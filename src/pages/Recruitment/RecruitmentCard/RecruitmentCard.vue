<script setup lang="ts">
import { type PropType } from 'vue';
import { ref, onMounted, computed } from 'vue';

type FunctionScroll = (e: any) => void;
type FormartCardWork = {
  title: string;
  typeWork: string;
  time: string;
  location: string;
};

const props = defineProps({
  items: Object,
  content: Object,
  style: String,
  onSelected: Number
});

const indexSelected = ref(0);
const onActive = ref(-1);

const selectedContent = (index: any) => {
  if (screen.width > 739) {
    indexSelected.value = index;
    const element = document.getElementById(`type5-${indexSelected.value}`);
    element?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  } else {
    if (onActive.value !== index) onActive.value = index;
    else onActive.value = -1;
  }

  // console.log([props.content[0]]);
};

onMounted(() => {
  // console.log(document.getElementById(`type5-${indexSelected.value}`)?.style.top);
});
</script>

<template>
  <div
    v-for="(item, index) in props.items"
    :class="
      style !== 'type4'
        ? [$style[`container__card-${style}`], $style[`${style}-color-background-${index + 1}`]]
        : 'container__card-responsive'
    "
    :key="item.title.content"
    @click="style === 'type4' ? selectedContent(index) : {}"
  >
    <div
      :id="`${style}-${index}`"
      :class="
        style === 'type4'
          ? [$style[`container__card-${style}`], $style[`${style}-color-background-${index + 1}`]]
          : $style[`${style}-block`]
      "
    >
      <div :class="$style['container__card-icon']" v-if="item.icon !== ''">
        <div
          :class="[
            $style['container__card-icon-block'],
            $style[`container__card-icon-block-${item.icon.style}`],
            $style[`${item.icon.style}`]
          ]"
        >
          <img :src="`${item.icon.link}`" alt="none" />
        </div>
      </div>
      <div :class="$style[`container__card-${style}-block`]">
        <div
          :class="[
            $style[`container__card-${style}-title`],
            $style[
              Number(index) === props.onSelected ? `container__card-${style}-title-active` : ''
            ]
          ]"
        >
          <h3>{{ item.title.content }}</h3>
          <div
            id="icon-rotate"
            :class="[
              $style[`container__card-${style}-icon`],
              $style[onActive === Number(index) ? `container__card-${style}-icon-active` : '']
            ]"
            v-if="props.style === 'type4'"
          >
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#000000"
                  d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"
                ></path>
              </g>
            </svg>
          </div>
        </div>

        <div>
          <div
            :class="$style[`container__card-${style}-content`]"
            v-if="item.content.content !== ''"
          >
            {{ item.content.content }}
          </div>
          <div
            :class="$style[`container__card-${style}-content`]"
            v-else-if="item.content.style !== ''"
          >
            <ul>
              <li><span>Thứ 2 - 6 :</span> <span>08:00 - 17:00</span></li>
              <li><span>Thứ 2 - 6 :</span> <span>08:00 - 17:00</span></li>
              <li><span>Chủ Nhật :</span> <span>Nghỉ</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div :class="$style['container__card-image']" v-if="item.image.style !== ''">
        <img :src="item.image.link" alt="none" />
      </div>
      <div v-if="props.style === 'type3'">
        <div :class="$style[`container__card-${style}-bg1`]"></div>
        <div :class="$style[`container__card-${style}-bg2`]">
          <div :class="$style[`container__card-${style}-bg2-block`]">
            <div :class="$style[`container__card-${style}-bg2-title`]">
              <h3>{{ item.title.content }}</h3>
            </div>
            <div>
              <div
                :class="$style[`container__card-${style}-bg2-content`]"
                v-if="item.content.content !== ''"
              >
                {{ item.content.content }}
              </div>
              <div
                :class="$style[`container__card-${style}-bg2-content`]"
                v-else-if="item.content.style !== ''"
              >
                <ul>
                  <li><span>Thứ 2 - 6 :</span> <span>08:00 - 17:00</span></li>
                  <li><span>Thứ 2 - 6 :</span> <span>08:00 - 17:00</span></li>
                  <li><span>Chủ Nhật :</span> <span>Nghỉ</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      :class="[
        $style['container__card-responsive-item'],
        $style[onActive === Number(index) ? 'container__card-responsive-item-active' : '']
      ]"
      v-for="(item2, index2) in props.content"
      :key="index2"
    >
      <recruitment-card v-if="index === index2" :items="[item2]" :style="'type5'" />
    </div>
  </div>
</template>

<style module scoped lang="scss">
@import './RecruitmentCard.module.scss';
</style>
