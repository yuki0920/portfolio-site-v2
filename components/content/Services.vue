<template>
  <v-expand-transition>
    <div v-if="isExpandedServices">
      <v-row class="d-flex justify-space-around">
        <v-col cols="auto" v-for="service in services" :key="service.title" class="pl-0">
          <v-card :width="$vuetify.breakpoint.smAndUp? '185' : ''" class="elevation-cs-2 pa-4">
            <div class="d-flex justify-center pt-4 pb-5">
              <v-img :src="require(`~/assets/svg/${service.icon}`)" max-width="60"></v-img>
            </div>
            <div class="font-weight-bold fs-14">{{service.title}}</div>
            <div class="fs-14">{{service.text}}</div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-expand-transition>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('custom', ['isExpandedServices']),
  },
  data() {
    return {
      services: [
        {
          title: 'Web Development',
          text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
          icon: 'online-shopping.svg',
        },
        {
          title: 'Branding Identity',
          text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
          icon: 'checklist.svg',
        },
        {
          title: 'Designing',
          text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
          icon: 'paint.svg',
        },
        {
          title: 'Fast Delivery',
          text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
          icon: 'schedule.svg',
        },
      ],
    }
  },
}
</script>

<style>
</style>