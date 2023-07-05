<script setup lang="ts">
import Facility from '@/assets/imgs/About/Facility.png';
import Location from '@/assets/imgs/About/Location.png';
import Telephone from '@/assets/imgs/About/Telephone.png';
import Message from '@/assets/imgs/About/Message.png';
import Facebook from '@/assets/imgs/About/Facebook.png';
import Signpost from '@/assets/imgs/About/Signpost.png';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronRight, faDiamondTurnRight } from '@fortawesome/free-solid-svg-icons';
</script>
<template>
  <div :class="$style.about__facility">
    <h3>CƠ SỞ CỦA CÔNG TY</h3>

    <div :class="$style['about__facility-wrap']">
      <div :class="$style['about__facility-left']">
        <h4>Cơ sở TP HCM</h4>

        <div>
          <img :src="Location" :class="$style['about__facility-ic']" />
          <p>45 Thạch Thị Thanh, phường Tân Định, Quận 1, TP Hồ Chí Minh</p>
        </div>

        <div>
          <img :src="Telephone" :class="$style['about__facility-ic']" />
          <p>070 404 2234</p>
        </div>

        <div>
          <img :src="Message" :class="$style['about__facility-ic']" />
          <p>ceo.tldental.group@gmail.com</p>
        </div>

        <div>
          <img :src="Facebook" :class="$style['about__facility-ic']" />
          <a href="">https://www.facebook.com/BiomeawTLG</a>
        </div>

        <button :class="$style['about__facility-button']">
          <a href="https://goo.gl/maps/4KYphAyVoQMALkfUA">
            <font-awesome-icon
              :icon="faDiamondTurnRight"
              :class="$style['about__facility-button-ic']"
            />
            <p>Đường đi</p>
          </a>
        </button>
      </div>
      <img :src="Facility" alt="" />
    </div>
  </div>
</template>

<style module scoped lang="scss">
@import './AboutFacility.module.scss';
</style>
