<template>
  <v-card class="rounded-lg elevation-cs w-100">
    <div :class="$vuetify.breakpoint.lgAndUp ? 'd-flex align-center mr-4' : ''">
      <Tabs class="rounded-tl-lg rounded-bl-lg" />
      <v-spacer></v-spacer>

      <div class="d-flex" :class="$vuetify.breakpoint.mdAndDown ? 'justify-space-around my-4' : ''">
        <v-btn icon>
          <v-icon color="red">mdi-youtube</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="primary">mdi-twitter</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="purple">mdi-github</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="grey">mdi-instagram</v-icon>
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {}
</script>
