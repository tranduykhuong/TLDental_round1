<script setup lang="ts">
import Comp from '@/assets/imgs/Home/ABComp.png';
import Icon1 from '@/assets/imgs/Home/RSIcon1.png';
import Icon2 from '@/assets/imgs/Home/RSIcon2.png';
import Icon3 from '@/assets/imgs/Home/RSIcon3.png';
import Meeting from '@/assets/imgs/Home/Meeting.png';
import CEO from '@/assets/imgs/Home/CEO.png';
import Logo from '@/assets/imgs/logo_nobg.png';
</script>
<template>
  <div :class="$style.home__reason">
    <div :class="$style['home__reason-left']">
      <img :src="Comp" alt="company" />
    </div>
    <div :class="$style['home__reason-right']">
      <h4 :class="$style['home__reason-title']">TẠI SAO NÊN LỰA CHỌN TL DENTAL GROUP</h4>
      <h4>#1 Nhà Cung Cấp Sản Phẩm Nha Khoa - Chỉnh Nha Tại Việt Nam</h4>
      <div :class="$style['home__reason-list']">
        <div :class="$style['home__reason-item']">
          <div :class="$style['home__reason-icon']">
            <img :src="Icon1" alt="icon1" />
          </div>
          <div :class="$style['home__reason-description']">
            <h5>Sản phẩm chính hãng</h5>
            <p>
              Quý khách hàng sẽ được trải nghiệm những sản phẩm chính hãng từ các thương hiệu uy
              tín, chất lượng cao.
            </p>
          </div>
        </div>
        <div :class="$style['home__reason-item']">
          <div :class="$style['home__reason-icon']">
            <img :src="Icon2" alt="icon2" />
          </div>
          <div :class="$style['home__reason-description']">
            <h5>Mức giá cạnh tranh</h5>
            <p>
              TL Gental Group với phương châm kinh doanh đôi bên cùng có lợi, quý khách được cung
              cấp giá cả cạnh tranh hàng đầu thị trường.
            </p>
          </div>
        </div>
        <div :class="$style['home__reason-item']">
          <div :class="$style['home__reason-icon']">
            <img :src="Icon3" alt="icon3" />
          </div>
          <div :class="$style['home__reason-description']">
            <h5>Chân thành, tin cậy và uy tín</h5>
            <p>
              Sự phát triển của quý bác sỹ cũng chính là sự thành công của TL Gental Group. Từ đó,
              tạo nên hệ thống đối tác bền vững và lâu dài.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div :class="$style.home__motto">
    <div :class="$style['home__motto-left']">
      <h4>PHƯƠNG CHÂM</h4>
      <span
        >Lấy uy tín khách hàng là hàng đầu. <br />
        <br />
        Sản phẩm cho mọi người. An toàn và chất lượng. Trao sản phẩm và bảo hành trọn đời. <br />
        Sản phẩm cho mọi người. An toàn và chất lượng. Trao sản phẩm và bảo hành trọn đời. <br />
        Sản phẩm cho mọi người. An toàn và chất lượng. Trao sản phẩm và bảo hành trọn đời. Sản
        người. An toàn và chất lượng. <br />
        <br />
        Trao sản phẩm và bảo hành trọn đời. Lấy uy tín khách hàng <br />
        hàng đầu. Sản phẩm cho mọi người. An toàn và chất lượng. Trao sản phẩm và bảo hành trọn đời.
      </span>
    </div>
    <div :class="$style['home__motto-right']">
      <h4 :class="$style['home__motto-title']">PHƯƠNG CHÂM</h4>
      <img :src="Meeting" alt="meeting" />
    </div>
  </div>
  <div :class="$style.home__intro">
    <div :class="$style['home__intro-left']">
      <h3>Lời ngỏ từ <strong>CEO NGUYEN HOANG</strong></h3>
      <button :class="$style['home__intro-btn']">XEM CHI TIẾT</button>
    </div>
    <div :class="$style['home__intro-center']">
      <img :src="CEO" alt="ceo" />
      <div :class="$style['home__intro-description']">
        <div :class="$style['home__intro-logo']">
          <img :src="Logo" alt="logo" />
          <h3>Group</h3>
        </div>
        <div :class="$style['home__intro-speach']">
          <span
            >"I used to have a bunch of different tools I had to pay for, with Circle you get
            everything in one bundle."</span
          >
        </div>
        <div :class="$style['home__intro-signature']">
          <strong>Michel Dedrick</strong>
          <span>Senior Conversion Optimizer</span>
        </div>
      </div>
    </div>
    <div :class="$style['home__intro-right']"></div>
  </div>
</template>

<style module scoped lang="scss">
@import './HomeReason.module.scss';
</style>
