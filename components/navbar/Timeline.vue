<template>
  <v-timeline dense class="my-2">
    <v-timeline-item
      v-for="item in  items"
      :key="item.title"
      small
      right
      class="d-flex align-center"
      icon="mdi-chevron-right"
      color="white"
      icon-color="indigo"
    >
      <small class="d-flex ml-n3 align-center">
        <span class="font-weight-bold mr-1">{{item.title}}:</span>
        {{item.text}}
      </small>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Age',
          text: '21',
        },
        {
          title: 'Availability',
          text: 'Full-time',
        },
        {
          title: 'Work Experience',
          text: '2 years',
        },
        {
          title: 'Country',
          text: 'The Netherlands',
        },
      ],
    }
  },
}
</script>

<style>
</style>