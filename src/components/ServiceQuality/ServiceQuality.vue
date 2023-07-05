<script setup lang="ts">
import Protect from '../../assets/icons/ServiceQuality/Protect.svg';
import Results from '../../assets/icons/ServiceQuality/Results.svg';
import Rollback from '../../assets/icons/ServiceQuality/Rollback.svg';
import Transit from '../../assets/icons/ServiceQuality/Transit.svg';
</script>
<template>
  <div>
    <div :class="$style.service">
      <div :class="$style['service__container']">
        <img :class="$style['service__container--ic']" :src="Protect" alt="protect" />
        <div :class="$style['service__container--content']">
          <div :class="$style['service__container--content-title']">Bảo hành</div>
          <div :class="$style['service__container--content-text']">Lên đến 12 tháng</div>
        </div>
      </div>
      <div :class="$style['service__container']">
        <img :class="$style['service__container--ic']" :src="Transit" alt="protect" />
        <div :class="$style['service__container--content']">
          <div :class="$style['service__container--content-title']">Vận chuyển</div>
          <div :class="$style['service__container--content-text']">Miễn phí toàn quốc</div>
        </div>
      </div>
      <div :class="$style['service__container']">
        <img :class="$style['service__container--ic']" :src="Results" alt="protect" />
        <div :class="$style['service__container--content']">
          <div :class="$style['service__container--content-title']">Kiểm thử</div>
          <div :class="$style['service__container--content-text']">Kiểm thử miễn phí</div>
        </div>
      </div>
      <div :class="$style['service__container']">
        <img :class="$style['service__container--ic']" :src="Rollback" alt="protect" />
        <div :class="$style['service__container--content']">
          <div :class="$style['service__container--content-title']">Đổi trả</div>
          <div :class="$style['service__container--content-text']">
            Trong 30 ngày (Chưa sử dụng)
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style module lang="scss" scoped>
@import '../ServiceQuality/ServiceQuality.module.scss';
</style>
