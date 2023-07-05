<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faLocationDot,
  faEnvelope,
  faPhoneVolume,
  faCircleCheck
} from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from 'vue-router';
import qr from '../../assets/imgs/QR.png';
</script>
<template>
  <div :class="$style.footer">
    <div :class="$style.footer__info">
      <div :class="$style['footer__info-item']">
        <p>TL DENTAL GROUP</p>
        <img :src="qr" alt="logo" width="100" />
      </div>
      <div :class="$style['footer__info-item']">
        <h4 :class="$style['footer__info-item--title']">Sản phẩm</h4>
        <ul :class="$style['footer__info-item--list']">
          <li><router-link to="">Vật liệu chỉnh nha ABC</router-link></li>
          <li><router-link to="">Vật liệu chỉnh nha ABC</router-link></li>
          <li><router-link to="">Vật liệu chỉnh nha ABC</router-link></li>
          <li><router-link to="">Vật liệu chỉnh nha ABC</router-link></li>
        </ul>
      </div>
      <div :class="$style['footer__info-item']">
        <h4 :class="$style['footer__info-item--title']">Công ty</h4>
        <ul :class="$style['footer__info-item--list']">
          <li><router-link to="/gioithieu">Giới thiệu công ty</router-link></li>
          <li><router-link to="/tuyendung">Tuyển dụng</router-link></li>
        </ul>
      </div>
      <div :class="$style['footer__info-item']">
        <h4 :class="$style['footer__info-item--title']">Chính sách</h4>
        <ul :class="$style['footer__info-item--list']">
          <li><router-link to="">Chính sách bảo mật</router-link></li>
          <li><router-link to="">Chính sách bảo hàng</router-link></li>
          <li><router-link to="">Chính sách giao hàng</router-link></li>
          <li><router-link to="">Chính sách đổi trả</router-link></li>
        </ul>
      </div>
      <div :class="$style['footer__info-item']">
        <h4 :class="$style['footer__info-item--title']">Liên hệ</h4>
        <ul :class="$style['footer__info-item--list']">
          <li>
            <font-awesome-icon :icon="faLocationDot" />
            <p>
              <router-link to="/lienhe"
                >45 Thạch Thị Thanh, phường Tân Định, Quận 1, Ho Chi Minh City, Vietnam</router-link
              >
            </p>
          </li>
          <li>
            <font-awesome-icon :icon="faEnvelope" />
            <p><router-link to="/lienhe">ceo.tldental.group@gmail.com</router-link></p>
          </li>
          <li>
            <font-awesome-icon :icon="faPhoneVolume" />
            <p><a href="tel:+1234567890">078 404 3456</a></p>
          </li>
        </ul>
      </div>

      <div :class="$style['footer__info-contact']">
        <div :class="$style['footer__info-contact--item']">
          <p>Nhà cung cấp thiết bị y tế</p>
          <ul>
            <li><font-awesome-icon :icon="faCircleCheck" /> Uy tín</li>
            <li><font-awesome-icon :icon="faCircleCheck" /> Chính hãng</li>
            <li><font-awesome-icon :icon="faCircleCheck" /> Chất lượng</li>
          </ul>
        </div>
        <div :class="$style['footer__info-contact--item']">
          <router-link to="/gioithieu">Giới thiệu chi tiết</router-link>
        </div>
      </div>
    </div>
    <div :class="$style.footer__license">© 2023 All Rights Reserved</div>
  </div>
</template>

<style module scoped lang="scss">
@import './BaseFooter.module.scss';
</style>
