<template>
  <v-card flat tile>
    <v-window v-model="window">
      <v-window-item v-for="(n) in length" :key="`card-${n}`">
        <v-hover v-slot:default="{ hover }">
          <v-card color="transparent" height="300" class="elevation-cs-2">
            <v-img :src="require(`~/assets/img/preview${n}.png`)" width="100%" height="100%" cover>
              <v-fade-transition>
                <div
                  v-if="hover"
                  @mouseenter="autorun = false"
                  @mouseleave="autorun = true"
                  class="fill-height w-100 gradient-dark white--text d-grid text-center align-center"
                >
                  <div
                    class="align-self-end"
                  >技術習得を目的としたWebアプリケーション/Webサイトです。</div>
                  <NuxtLink to="https://github.com/yuki0920" class="font-weight-bold">My GitHub Account</NuxtLink>
                </div>
              </v-fade-transition>
            </v-img>
          </v-card>
        </v-hover>
      </v-window-item>
    </v-window>

    <v-card-actions class="justify-space-between my-4">
      <v-btn text @click="prev">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-item-group v-model="window" class="text-center" mandatory>
        <v-item v-for="n in length" :key="`btn-${n}`" v-slot:default="{ active, toggle }">
          <v-btn :input-value="active" icon @click="toggle">
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </v-item>
      </v-item-group>
      <v-btn text @click="next">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    length: 3,
    window: 0,
    autorun: true,
  }),

  methods: {
    next() {
      this.window = this.window + 1 === this.length ? 0 : this.window + 1
    },
    prev() {
      this.window = this.window - 1 < 0 ? this.length - 1 : this.window - 1
    },
  },
  created() {
    setInterval(() => {
      if (!this.autorun) return
      if (++this.window >= this.length) this.window = 0
    }, 1500)
  },
}
</script>
