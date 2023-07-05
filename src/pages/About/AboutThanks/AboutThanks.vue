<script setup lang="ts">
// import Intro from '@/assets/imgs/About/Intro.png';
import { ref, Transition } from 'vue';

let b = 0;

const handleOpen = () => {
  if (b == 0) {
    const mobileElement = document.getElementById('haha');

    if (mobileElement) {
      window.scrollTo({
        top: mobileElement.offsetHeight / 1.7,
        behavior: 'smooth'
      });
    }
  }
  b++;
};

const handleB = () => {
  b = 0;
  const mobileElement = document.getElementById('haha');

  if (mobileElement) {
    window.scrollTo({
      top: mobileElement.offsetHeight,
      behavior: 'smooth'
    });
  }
};
</script>
<template>
  <div :class="$style.about__thanks">
    <span>LỜI CẢM ƠN</span>

    <div :class="$style['about__thanks-wrapper']" @mouseover="handleOpen" @mouseleave="handleB">
      <div :class="$style['about__thanks-mail']">
        <div :class="$style['about__thanks-cover']"></div>
        <div :class="$style['about__thanks-letter']" id="haha">
          <h1>LỜI CẢM ƠN</h1>

          <h2>
            Tiêu đề/lời nhắn/thư ngỏ của CEO<br />
            Slogan/tên cty/lời chào
          </h2>

          <p>
            Nội dung: Tôi xin gửi lời cảm ơn chân thành đến các công ty hợp tác và những nhà đồng
            sáng lập đã đồng hành cùng chúng tôi trong suốt thời gian qua. Sự hỗ trợ và đóng góp của
            các bạn đã góp phần quan trọng vào thành công và phát triển của chúng tôi.<br /><br />
            Các công ty hợp tác đã đồng hành và chia sẻ tầm nhìn cùng chúng tôi, tạo nên một môi
            trường làm việc chuyên nghiệp và sáng tạo. Chúng tôi đánh giá cao sự tin tưởng và cam
            kết của các bạn, giúp chúng tôi thực hiện những dự án đầy thách thức và mang lại giá trị
            cho khách hàng.<br /><br />
            Những nhà đồng sáng lập đã cùng chúng tôi khởi động và xây dựng nền tảng thành công. Sự
            tận tâm, năng lực và sự đổi mới của các bạn đã trở thành động lực để chúng tôi phát
            triển và vươn lên. Chúng tôi biết ơn những giá trị và tầm nhìn mà các bạn mang đến, và
            sẽ tiếp tục duy trì những giá trị đó trong tất cả các hoạt động của chúng tôi.<br /><br />
            Trân trọng.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style module scoped lang="scss">
@import './AboutThanks.module.scss';
</style>
