<template>
  <v-app>
    <a href="#main-content" class="d-sr-only-focusable">Skip to main content</a>
    <WrapperHeader />
    <v-main id="main-content">
      <div class="container">
        <slot></slot>
      </div>
      <WrapperFooter />
    </v-main>
  </v-app>
</template>

<script>
import WrapperHeader from './components/Header'
import WrapperFooter from './components/Footer'

export default {
  components: {
    WrapperHeader,
    WrapperFooter,
  },
}
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900');
@import url('https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css');
@import url('https://cdn.jsdelivr.net/npm/vuetify@2.3.10/dist/vuetify.min.css');
</style>
