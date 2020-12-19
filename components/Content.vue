<template>
  <v-card class="py-4 px-12 elevation-cs my-6 w-100 fs-15" style="z-index:1">
    <v-window v-model="currentTab" data-aos="fade-up">
      <v-window-item :value="0">
        <h4 class="my-6 primary--text">About me</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem et illum similique modi veniam eum quas pariatur, vel magnam harum inventore aperiam labore distinctio ipsa, magni id autem incidunt. Voluptatem perferendis, eum asperiores minus nam maiores delectus expedita fugit, architecto ad qui nihil modi nisi deleniti, dolorum sunt. Ullam quae a, temporibus saepe cumque sit hic tempore id consequuntur necessitatibus quas, sunt in accusantium labore fuga similique? Beatae molestiae obcaecati facere modi esse dolores maxime numquam ut qui deserunt exercitationem possimus dicta consectetur labore ipsum ratione dolor ducimus officiis, rerum fuga? Rem tempore corrupti reiciendis maxime. Molestias ab similique vitae.</p>
        <div class="d-flex justify-space-between w-100 align-center">
          <h4 class="my-6 primary--text">Services</h4>
          <v-btn icon @click="setExpandedServices" color="primary">
            <v-icon v-if="isExpandedServices">mdi-chevron-down</v-icon>
            <v-icon v-else>mdi-chevron-up</v-icon>
          </v-btn>
        </div>
        <Services />
        <div class="d-flex justify-space-between w-100 align-center">
          <h4 class="my-6 primary--text">Skills</h4>
          <v-btn icon @click="setExpanded" color="primary">
            <v-icon v-if="isExpanded">mdi-chevron-down</v-icon>
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
    ...mapGetters('custom', ['tab', 'isExpanded', 'isExpandedServices']),
    currentTab: {
      get: function () {
        return this.tab
      },
    },
  },
  methods: {
    ...mapActions('custom', ['setTab', 'setExpanded', 'setExpandedServices']),
  },
}
</script>
