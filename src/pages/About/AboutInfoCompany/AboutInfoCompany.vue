<script setup lang="ts">
import InfoCompany from '@/assets/imgs/About/InfoCompany.png';
</script>
<template>
  <div :class="$style.about__infocompany">
    <p :class="$style['about__infocompany-title']">THÔNG TIN CÔNG TY</p>

    <div :class="$style['about__infocompany-content']">
      <div>
        <p>
          Apple Inc. là một công ty công nghệ đa quốc gia có trụ sở chính tại Cupertino, California,
          Hoa Kỳ. Được thành lập vào ngày 1 tháng 4 năm 1976 bởi Steve Jobs, Steve Wozniak và Ronald
          Wayne, Apple đã trở thành một trong những công ty công nghệ lớn nhất và được biết đến rộng
          rãi trên toàn thế giới.<br /><br />
          Apple nổi tiếng với việc phát triển, sản xuất và kinh doanh các sản phẩm điện tử tiêu
          dùng, phần mềm và dịch vụ liên quan. Các sản phẩm nổi tiếng của Apple bao gồm iPhone (dòng
          điện thoại thông minh), iPad (máy tính bảng), Mac (máy tính cá nhân và laptop), Apple
          Watch (đồng hồ thông minh), và AirPods (tai nghe không dây).
        </p>
        <div>
          <img :src="InfoCompany" alt="" />
        </div>
      </div>

      <div>
        <div>
          <img :src="InfoCompany" alt="" />
        </div>
        <p>
          Ngoài ra, Apple cũng phát triển và cung cấp nền tảng phần mềm như hệ điều hành macOS, iOS
          và watchOS, cùng với các ứng dụng và dịch vụ như iTunes, App Store, iCloud và Apple
          Music.<br /><br />
          Apple đã đạt được nhiều thành công và có ảnh hưởng lớn đến ngành công nghiệp công nghệ
          thông tin. Công ty này được biết đến với sự tập trung vào thiết kế, chất lượng và trải
          nghiệm người dùng, và thường được coi là một trong những công ty công nghệ hàng đầu thế
          giới.<br /><br />
          Đáng chú ý, Apple cũng đã đưa ra các dự án và nỗ lực về bảo vệ môi trường và bền vững, bao
          gồm cam kết sử dụng năng lượng tái tạo và tái chế các thành phần trong sản phẩm của họ.
        </p>
      </div>
    </div>
  </div>
</template>

<style module scoped lang="scss">
@import './AboutInfoCompany.module.scss';
</style>
