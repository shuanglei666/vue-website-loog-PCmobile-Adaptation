
<template>
  <div class="main" :class="navShow ? '' : 'hidden'">
    <div class="main_box">
      <div class="left">
        <div class="icon">
          <img src="../../assets/images/Vector.png" style="width:20.38px;height:16.57px">
        </div>
        <div class="icon">
          <img src="../../assets/images/Vector (1).png" style="width:18px;height:18px">
        </div>
        <div class="icon">
          <img src="../../assets/images/Vector (2).png" style="width:10.5px;height:20px">
        </div>
        <div class="icon">
          <img src="../../assets/images/Vector (3).png" style="width:20px;height:20px">
        </div>
        <div class="icon">
          <img src="../../assets/images/Vector (4).png" style="width:18px;height:18px">
        </div>
      </div>
      <div class="right">
        <div class="right_rgt">
          <div class="icon">
            <img src="../../assets/images/wallet.png" style="width:24px;height:20px">
          </div>
          <div class="text"
            style="
                font-family: MicrosoftYaHei;font-size: 13px;font-weight: normal;line-height: 20px;color: #333333;padding-left:3px;">
            <!-- USD($) -->
            {{$t('Home.Myhead.USD')}}
          </div>
        </div>

        <!-- <div class="text" style="
                font-family: MicrosoftYaHei;font-size: 13px;font-weight: normal;line-height: 20px;color: #333333;
             " @click="$i18n.locale = $i18n.locale ===  'zh' ? 'en' : 'zh'">
          CN/EN
        </div> -->
        <!-- <div class="text" style="
                font-family: MicrosoftYaHei;font-size: 13px;font-weight: normal;line-height: 20px;color: #333333;
             " @click="$i18n.locale = $i18n.locale === 'zh' ? 'en' : 'zh'" >
          {{$t('Home.Myhead.CNEN')}}
        </div> -->
        <!-- <el-dropdown trigger="click" @command="handleSetLanguage" size='small' placement='top-end'>
          <div>
            <span class="el-dropdown-link">
              {{$t('Home.Myhead.language')}}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item :disabled="language === 'zh'" command="zh">
              CN
            </el-dropdown-item>
            <el-dropdown-item :disabled="language === 'en'" command="en">
              EN
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown> -->

        <select v-model="selLocale" placeholder="切换语言">
          <option value="zh">简体中文</option>
          <option value="en">English</option>
        </select>
      </div>
    </div>
  </div>
</template>
<script>
let that = null

export default {
  data () {
    return {
      selLocale: this.$i18n.locale,
      top: "",
      navShow: null,
    }
  },
  methods: {
    handleSetLanguage (lang) {
      this.$i18n.locale = lang;
      this.language = lang;
      localStorage.setItem("language", lang);
      this.$store.commit('SET_LANGUAGE', lang);
    },
  },
  created () {
    if (this.$i18n.locale == "en") {
      this.language = this.$t("English");
    } else {
      this.language = this.$t("中文");
    }
  },
  mounted () {
    let that = this
    window.addEventListener("scroll", () => {
      this.top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
    });
  },
  watch: {
    selLocale (newValue) {
      this.$i18n.locale = newValue;
      localStorage.setItem("language", newValue);
      console.log(this.$t("message.hello"));
      console.log(this.$i18n.t("message.hello"));
    },
    top (newValue, oldValue) {
      if (newValue == 0) {
        // if (newValue > oldValue) {
        this.navShow = true;
        // console.log(newValue);
        // } else {
        //   this.navShow = false;
        //   // this.navShow = true;
        // }
      } else {
        this.navShow = false;
      }
    },
  },
}
</script>

<style lang="less" scoped>
.main {
  min-width: 100%;
  height: 48px;
  display: flex;
  border-bottom: 1px solid #e0e0e0;
}

.main.hidden {
  opacity: 0;
}

.main_box {
  // width: 1200px;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  display: flex;
  margin-right: 40px;
  margin-left: 40px;
  // box-sizing: content-box;
}
.left {
  display: flex;
  justify-content: space-between;
  width: 166px;
  flex-direction: row;
}
.icon {
  width: 25px;
  height: 25px;
}
.icon img {
  width: 100%;
  height: 100%;
  // display: inline-flex;
}
.text {
  width: 45px;
  height: 20px;
  white-space: nowrap;
}
.right {
  width: 166px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.right_rgt {
  flex-direction: row;
  display: flex;
}
.right_rgt .icon {
}

@media screen and (max-width: 755px) {
  .main {
    display: none;
  }
}
</style>