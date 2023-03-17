<template>
  <div>
    <section class="banner">
      <div class="banner-content-wrap">
        <h3 class="banner-title">關於我們</h3>
      </div>
    </section>
    <div class="container">
      <section class="about-wrap">
        <h3 class="about-title">商務旅行的新格局</h3>
        <p class="about-desc">
          商務旅行的新格局是一個不斷發展和變化的領域，企業和組織需要不斷地適應新的趨勢和技術，以滿足不斷變化的需求和挑戰，我們以個人化體驗為每位旅客提供獨特的體驗，以滿足他們的特定需求和偏好。
        </p>
      </section>
      <section class="about-content">
        <div class="row g-0" data-aos="fade-right">
          <div class="col-md-6">
            <img src="@/assets/img/aboutCard-01.png" alt=""/>
          </div>
          <div class="col-md-6" data-aos="fade-left" data-aos-delay="150">
            <div class="about-content-text-wrap">
            <h3 class="about-content-title">網絡技術和數字化</h3>
            <p class="about-content-desc">隨著網絡技術和數字化的發展，商務旅行的方式正在發生變化。例如，遠程會議和視頻會議等數字工具越來越流行，人們可以通過在家工作，不必長途跋涉進行商務旅行。同時，網絡技術也提供了更方便、更快捷的預訂和購票方式。</p>
            </div>
          </div>
        </div>
        <div class="row g-0" data-aos="fade-left">
          <div class="col-md-6" data-aos="fade-right" data-aos-delay="150">
            <div class="about-content-text-wrap">
            <h3 class="about-content-title">環保和可持續性</h3>
            <p class="about-content-desc">環保和可持續性已成為商務旅行的一個重要課題。越來越多的企業開始尋找更環保的旅行方式，例如使用低排放交通工具、減少單次出行次數等。同時，一些新的旅行方式和商務旅行模式正在崛起，例如綠色會議和可持續旅遊等。</p>
            </div>
          </div>
          <div class="col-md-6">
            <img src="@/assets/img/aboutCard-02.png" alt=""/>
          </div>
        </div>
        <div class="row g-0" data-aos="fade-right">
          <div class="col-md-6">
            <img src="@/assets/img/aboutCard-03.png" alt=""/>
          </div>
          <div class="col-md-6" data-aos="fade-left" data-aos-delay="150">
            <div class="about-content-text-wrap">
            <h3 class="about-content-title">安全和健康</h3>
            <p class="about-content-desc">在COVID-19疫情的背景下，安全和健康已成為商務旅行中的一個關鍵考慮因素。企業和組織需要采取更嚴格的健康和安全措施，例如要求旅行者進行COVID-19測試、實施社交距離和清潔措施等。</p>
            </div>
          </div>
        </div>
        <div class="row g-0" data-aos="fade-left">
          <div class="col-md-6" data-aos="fade-right" data-aos-delay="150">
            <div class="about-content-text-wrap">
            <h3 class="about-content-title">全球化和多元文化</h3>
            <p class="about-content-desc">全球化和多元文化正在影響商務旅行的方式和需求。企業和組織需要適應不同國家和文化背景下的商務習慣和需求，例如了解不同地區的商務禮儀、文化差異等。</p>
            </div>
          </div>
          <div class="col-md-6">
            <img src="@/assets/img/aboutCard-04.png" alt=""/>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
//引入AOS及其附帶的css
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  name: "AboutView",
  data() {
    return {};
  },
  methods: {},
  mounted () {
    AOS.init({
        offset: 400, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000 // values from 0 to 3000, with step 50ms
      })
  }
};
</script>

<style lang="scss" scoped>
.banner {
  background-image: url("@/assets/img/about.png");
}
.about-wrap {
  padding: 60px 0;
  text-align: center;
  .about-title {
    color: #2a2a2a;
    font-weight: 600;
    line-height: 1.5;
    padding-top: 8px;
  }
  .about-desc {
    color: #2a2a2a;
    padding-top: 8px;
    width: 70%;
    margin: auto;
  }
}

.about-content{
  max-width: 1366px;
  text-align: left;
  margin-bottom: 60px;
  color: #2a2a2a;
  .about-content-title{
    font-size: 24px;
    padding-bottom: 32px;
  }
  .about-content-desc{
    font-size: 20px;
  }
  .row .about-content-text-wrap {
    background-color: #fff;
    padding: 60px 16px;
    height: 100%;
  }
}
</style>
