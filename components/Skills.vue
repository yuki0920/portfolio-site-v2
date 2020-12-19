<template>
  <v-expand-transition>
    <div v-if="isExpanded">
      <v-row v-for="i in 4" :key="i" align="center">
        <v-col cols="12" sm="12" md="12" lg="12" xl="1">
          <div v-html="languages[i-1]"></div>
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="12" xl="11">
          <v-progress-linear
            active
            :buffer-value="rndNumber()"
            :color="rndColor()"
            stream
            background-opacity="1"
          ></v-progress-linear>
        </v-col>
      </v-row>
    </div>
  </v-expand-transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('custom', ['tab', 'isExpanded']),
  },
  methods: {
    rndColor() {
      return 'hsla(' + Math.random() * 360 + ', 70%, 65%, 1)'
    },
    rndNumber() {
      return Math.floor(Math.random() * (100 - 65)) + 65
    },
  },
  data() {
    return {
      languages: ['HTML', 'CSS', 'VueJS', 'Vuetify'],
    }
  },
}
</script>

<style>
</style>