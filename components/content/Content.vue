<template>
  <v-card class="py-4 px-12 elevation-cs my-6 w-100 fs-15" style="z-index:1">
    <v-window v-model="currentTab" data-aos="fade-up">
      <v-window-item :value="0">
        <h4 class="my-6 primary--text">About me</h4>
        <p>
          <b>概要</b>
          <br>
          開発経験としては、少人数によるアジャイル開発によってバックエンドを主軸にフロントエンドまで担当してきました。特に、リファクタリングやテスト駆動開発といった開発の基盤となる技術に強みを持ちます。
          <br>
          開発経験以外では、前職で経理業務に長年携わっていたため、会計や金融分野に強みを持ちます。
          そのため、それらの業務知識と深く結びついたサービスや機能では特に高いパフォーマンスを発揮することができます。
        </p>
        <p>
          <b>3年後の目標や野望(短期的な目標)</b>
          <br>
          事業を伸ばせるエンジニアを目標としています。「よりよいサービスを開発したい」という気持ちがエンジニアとしての強いモチベーションとなっているためです。
        </p>
        <div class="d-flex justify-space-between w-100 align-center">
          <h4 class="my-6 primary--text">Strengths</h4>
          <v-btn icon @click="setExpandedServices" color="primary">
            <v-icon v-if="isExpandedServices">mdi-chevron-down</v-icon>
            <v-icon v-else>mdi-chevron-up</v-icon>
          </v-btn>
        </div>
        <Services />
        <div class="d-flex justify-space-between w-100 align-center">
          <h4 class="my-6 primary--text">Skills</h4>
          <v-btn icon @click="setExpandedSkills" color="primary">
            <v-icon v-if="isExpandedSkills">mdi-chevron-down</v-icon>
            <v-icon v-else>mdi-chevron-up</v-icon>
          </v-btn>
        </div>
        <Skills />
      </v-window-item>

      <v-window-item :value="1">
        <h4 class="my-6 primary--text">Portfolio</h4>
        <Portfolio />
      </v-window-item>
      <v-window-item :value="2">
        <Contact />
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters('custom', ['tab', 'isExpandedSkills', 'isExpandedServices']),
    currentTab: {
      get: function () {
        return this.tab
      },
    },
  },
  methods: {
    ...mapActions('custom', ['setTab', 'setExpandedSkills', 'setExpandedServices']),
  },
}
</script>
