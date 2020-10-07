<template>
  <v-footer dark padless>
    <v-card dark flat tile color="#054173" class="text-center" width="100%">
      <v-card-text class="white--text">
        <v-row justify="center" no-gutters>
          <v-btn
            v-for="link in $root.footerLinks"
            :href="link.href"
            target="_blank"
            color="white"
            text
            rounded
            class="my-2"
            v-text="link.name"
            :key="link.name"
          >
          </v-btn>
        </v-row>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text>
        <v-btn
          v-for="link in $root.socialLinks"
          :href="link.href"
          icon
          :title="link.name"
          target="_blank"
          :key="link.name"
        >
          <v-icon v-text="link.icon"></v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {}
</script>
