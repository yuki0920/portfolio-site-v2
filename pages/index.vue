<template>
  <v-container>
    <v-row data-aos="fade-up" data-aos-duration="800">
      <v-col cols="12" xl="9" :class="$vuetify.breakpoint.lgAndUp ? 'mx-auto' : ''">
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
            lg="3"
            xl="3"
            :class="$vuetify.breakpoint.smAndDown ? 'mx-auto' : ''"
          >
            <NavDrawer />
          </v-col>
          <v-col cols="12" sm="12" md="8" xl="9">
            <Header />
            <Content />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style>
.w-80 {
  width: 80% !important;
}
</style>