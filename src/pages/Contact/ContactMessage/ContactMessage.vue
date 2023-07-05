<script setup lang="ts">
import MessageV2 from '@/assets/imgs/Contact/MessageV2.png';
import Close from '@/assets/imgs/Contact/Close.png';
import MessengerV2 from '@/assets/imgs/Contact/MessengerV2.png';
import ZaloV2 from '@/assets/imgs/Contact/ZaloV2.png';
import { ref } from 'vue';

const isOpen = ref(false);
const move1 = ref(0);
const move2 = ref(0);

const handleMessage = () => {
  const circleWidth = document.getElementById('circle');
  const circle1 = document.getElementById('circle1');
  const circle2 = document.getElementById('circle2');
  // console.log(circle1);

  isOpen.value = !isOpen.value;

  if (isOpen.value)
    (move1.value = -circleWidth.offsetHeight),
      (move2.value = -circleWidth.offsetHeight - circle1.offsetHeight - 6);
  else (move1.value = 0), (move2.value = 0);
};
</script>
<template>
  <div :class="$style.contact__message">
    <div :class="$style['contact__message-circle']" id="circle" @click="handleMessage">
      <img :src="isOpen ? Close : MessageV2" alt="" :class="isOpen ? $style.show : ''" />
    </div>

    <div :class="[$style.contact__close]">
      <div
        :class="$style['contact__close-circle-social']"
        id="circle1"
        :style="{ transform: 'translateY' + '(' + move1 + 'px' + ')' }"
      >
        <img :src="MessengerV2" alt="" />
      </div>

      <div
        :class="$style['contact__close-circle-social']"
        id="circle2"
        :style="{ transform: 'translateY' + '(' + move2 + 'px' + ')', zIndex: '-2' }"
      >
        <img :src="ZaloV2" alt="" />
      </div>
    </div>
  </div>
</template>

<style module scoped lang="scss">
@import './ContactMessage.module.scss';
</style>
