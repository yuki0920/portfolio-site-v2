<template>
  <v-expand-transition>
    <div v-if="isExpandedSkills">
      <v-row v-for="language in languages" :key="language.name" align="center">
        <v-col cols="12" sm="12" md="12" lg="12" xl="1">
          <div v-html="language.name"></div>
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="12" xl="11">
          <v-progress-linear
            active
            :buffer-value="language.experience"
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
    ...mapGetters('custom', ['tab', 'isExpandedSkills']),
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
      languages: [
        { name: 'Ruby', experience: 100 },
        { name: 'Ruby on Rails', experience: 100 },
        { name: 'JavaScript', experience: 80 },
        { name: 'Vue.js', experience: 80 },
        { name: 'HTML', experience: 60 },
        { name: 'CSS', experience: 40 }
        ],
    }
  },
}
</script>

<style>
</style>
