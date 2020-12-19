<template>
  <v-app data-aos="fade-down" data-aos-duration="400">
    <v-main class="align-center justify-center image">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {}
</script>

<style>
.image {
  background: url('~@/assets/img/bg.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.elevation-cs {
  box-shadow: 0 1px 12px #33333321 !important;
}

.elevation-cs-2 {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
}

.w-100 {
  width: 100% !important;
}

a {
  text-decoration: none;
}

.d-grid {
  display: grid !important;
}

.fs-15 {
  font-size: 15px !important;
}

.fs-14 {
  font-size: 14px !important;
}

.gradient-dark {
  background: linear-gradient(45deg, #0a0a0ac9, #0a0a0ac9);
}
</style>