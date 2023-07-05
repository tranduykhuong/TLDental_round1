<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faChevronLeft, faChevronRight, faL } from '@fortawesome/free-solid-svg-icons';

import Motto from '@/assets/imgs/About/Motto.png';
import Time from '@/assets/imgs/NewsDetail/Time.png';
import Test from '@/assets/imgs/NewsDetail/Test.png';
</script>
<template>
  <div :class="$style.newsdetail__content">
    <h1>HOẠT ĐỘNG CHỐNG DỊCH TÌNH NGUYỆN</h1>

    <div :class="$style['newsdetail__content-time']">
      <img :src="Time" alt="" />

      <p>Thứ 6, 26/05/2023, 11:00 GMT+7</p>
    </div>

    <div :class="$style['newsdetail__content-main']">
      <div :class="$style['newsdetail__content-main-header']">
        <p>
          Chúng tôi đã tham gia vào các hoạt động chống dịch tình nguyện tại địa phương, cùng nhau
          chung tay chống dịch góp phần giúp người dân và tổ quốc vượt qua khó khăn.
        </p>
        <img :src="Test" alt="" />
      </div>

      <div :class="$style['newsdetail__content-main-body']">
        <h3>Lẫy mẫu test Covid - 19</h3>
        <div>
          <p>
            Phát huy tinh thần “Đâu cần thanh niên có, đâu khó có thanh niên”, chúng tôi thực hiện
            lấy mẫu cho người dân ở địa phương mỗi ngày, giúp đỡ những người dân cần lấy mẫu để đi
            xa. Những ngày lâm bệnh, anh chia sẻ rằng rất nhớ những ngày cùng mọi người đi hỗ trợ
            lấy mẫu xét nghiệm, phát gạo, chuyển thức ăn đến các hộ dân, rồi lại lo lắng anh em sẽ
            phải gánh thêm phần việc của mình... Chỉ sau 7 ngày tự cách ly, điều trị tại nhà, anh
            hầu như khỏi bệnh. Và ngay sau khi hoàn thành đợt cách ly, anh Hải đã lập tức quay trở
            lại và tiếp tục công việc của mình tại địa phương.
          </p>
          <img :src="Test" alt="" />
        </div>
      </div>

      <div :class="$style['newsdetail__content-main-body']">
        <h3>Lẫy mẫu test Covid - 19</h3>
        <div>
          <p>
            Phát huy tinh thần “Đâu cần thanh niên có, đâu khó có thanh niên”, chúng tôi thực hiện
            lấy mẫu cho người dân ở địa phương mỗi ngày, giúp đỡ những người dân cần lấy mẫu để đi
            xa. Những ngày lâm bệnh, anh chia sẻ rằng rất nhớ những ngày cùng mọi người đi hỗ trợ
            lấy mẫu xét nghiệm, phát gạo, chuyển thức ăn đến các hộ dân, rồi lại lo lắng anh em sẽ
            phải gánh thêm phần việc của mình... Chỉ sau 7 ngày tự cách ly, điều trị tại nhà, anh
            hầu như khỏi bệnh. Và ngay sau khi hoàn thành đợt cách ly, anh Hải đã lập tức quay trở
            lại và tiếp tục công việc của mình tại địa phương.
          </p>
          <img :src="Test" alt="" />
        </div>
      </div>

      <div :class="$style['newsdetail__content-main-footer']">
        <button :class="$style['newsdetail__content-main-footer-button-left']">
          <font-awesome-icon
            :icon="faChevronLeft"
            :class="$style['newsdetail__content-main-footer-button-left-ic']"
          />
          <p :class="$style['newsdetail__content-main-footer-button-left-content']">
            Chỉnh Nha Thay Phẫu Thuật Hàm – Kỹ Thuật Meaw – Geaw
          </p>
        </button>
        <button :class="$style['newsdetail__content-main-footer-button-right']">
          <p :class="$style['newsdetail__content-main-footer-button-right-conten']">
            Tác Dụng Và Quy Trình Của Kỹ Thuật Đánh Lún Răng
          </p>
          <font-awesome-icon
            :icon="faChevronRight"
            :class="$style['newsdetail__content-main-footer-button-right-ic']"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<style module scoped lang="scss">
@import './NewsDetailContent.module.scss';
</style>
