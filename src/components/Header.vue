<template>
  <div>
    <!-- header -->
    <v-app-bar
      fixed
      app
      color="#054173"
      dark
      shrink-on-scroll
      elevate-on-scroll
      fade-img-on-scroll
      clipped-left
      :src="$root.customizationPath('/images/bg-park.jpg')"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to bottom right, rgba(122,191,215,.8), rgba(5,65,115,.8)"
        ></v-img>
      </template>

      <v-avatar class="mr-5" color="#fff">
        <v-img :src="$root.customizationPath('/images/avatar.png')"></v-img>
      </v-avatar>

      <v-toolbar-title v-text="$root.appBarTitle"></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        :href="$root.helpLink.href"
        class="ma-2"
        outlined
        rounded
        small
        :target="$root.helpLink.target ? $root.helpLink.target : '_blank'"
      >
        <v-icon left small v-text="$root.helpLink.icon"></v-icon>
        {{ $root.helpLink.name }}
      </v-btn>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-app-bar-nav-icon
            @click="navDrawer = !navDrawer"
            v-bind="attrs"
            v-on="on"
          ></v-app-bar-nav-icon>
        </template>
        <span>{{ $root.appBarNavTooltip }}</span>
      </v-tooltip>

      <!-- <v-app-bar-nav-icon @click="navDrawer = !navDrawer"></v-app-bar-nav-icon> -->
    </v-app-bar>
    <!-- /header -->

    <!-- drawer -->
    <v-navigation-drawer
      v-model="navDrawer"
      app
      left
      clipped
      mobile-breakpoint="xs"
      width="275"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title
            class="title"
            v-text="$root.navDrawerTitle"
          ></v-list-item-title>
          <v-list-item-subtitle
            v-text="$root.navDrawerSubtitle"
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <div v-for="link in $root.navLinks" :key="link.name">
          <!-- without children -->
          <v-list-item
            v-if="!link.children"
            :href="link.href"
            :target="link.target ? link.target : '_self'"
          >
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-title :title="link.name">{{
              link.name
            }}</v-list-item-title>
          </v-list-item>
          <!-- with children -->
          <v-list-group v-else :prepend-icon="link.icon">
            <template v-slot:activator>
              <v-list-item-title :title="link.name">{{
                link.name
              }}</v-list-item-title>
            </template>

            <v-list-item
              v-for="(child, i) in link.children"
              :href="child.href"
              :target="child.target ? child.target : '_self'"
              :key="i"
            >
              <v-list-item-icon></v-list-item-icon>
              <v-list-item-title :title="child.name">{{
                child.name
              }}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </div>
      </v-list>
    </v-navigation-drawer>
    <!-- /drawer -->
  </div>
</template>

<script>
let navDrawer

try {
  navDrawer = JSON.parse(localStorage.navDrawer) === false ? false : null
} catch (error) {
  navDrawer = null
}

export default {
  data: () => ({
    navDrawer,
  }),

  watch: {
    navDrawer: function(newVal) {
      localStorage.navDrawer = newVal
    },
  },
}
</script>
