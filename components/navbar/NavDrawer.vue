<template>
  <v-card class="rounded-lg elevation-cs fill-height mx-auto" height="600">
      <div class="d-flex flex-column justify-space-between fill-height">
        <div>
          <div class="pb-2 pt-5 px-4">
            <v-list-item-title class="text-uppercase font-weight-bold">渡部 優貴(Watanabe Yuki)</v-list-item-title>
            <v-list-item-subtitle class="grey--text text--darken-1">Web Developer</v-list-item-subtitle>
          </div>

          <v-img
            style="clip-path: polygon(0 6%, 100% 0, 100% 94%, 0 100%);"
            src="profile.jpg"
            height="180"
            max-height="180"
          ></v-img>
          <Timeline />
        </div>
        <div class="w-100 text-center my-6">
          <v-btn outlined color="primary darken-2" class="text-none" href="https://www.wantedly.com/id/yuki0920">
            <v-icon left>mdi-file-document-multiple</v-icon>Resume(Wantedly)
          </v-btn>
        </div>
      </div>
  </v-card>
</template>
