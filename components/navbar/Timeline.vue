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
      <small class="ml-n3 align-left">
        <span class="font-weight-bold mr-1">{{item.title}}:</span>
        <br>
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
          title: '1990/09/20',
          text: '生誕',
        },
        {
          title: '2013/03',
          text: '慶應義塾大学 経済学部卒',
        },
        {
          title: '~2019/10',
          text: '京葉ガス 経理部',
        },
        {
          title: '~現在',
          text: '永和システムマネジメント アジャイル事業部',
        },
      ],
    }
  },
}
</script>

<style>
</style>
