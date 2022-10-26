<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          color="primary"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-avatar
        @click="() => $router.push('/')"
        tile
        color="primary"
        class="col-1"
      >
        <v-icon dark> mdi-folder-multiple-image</v-icon>
      </v-avatar>

      <v-row align-content="center" justify="center" class="d-none d-sm-flex">
        <v-btn-toggle
          v-model="toggleMenu"
          borderless
          mandatory
          active-class="primary--text"
          color="primary"
          style="background-color: inherit"
        >
          <v-hover
            v-for="(menu, index) in items"
            :key="index"
            v-slot="{ hover }"
            class="mx-4"
          >
            <v-btn
              :color="hover ? 'primary' : 'gray'"
              text
              v-text="menu.title"
              nuxt
              :to="menu.to"
            ></v-btn>
          </v-hover>
        </v-btn-toggle>
      </v-row>
      <v-spacer/>
      <v-app-bar-nav-icon
        class="d-xl-none d-lg-none d-md-none d-sm-none"
        @click.stop="drawer = !drawer"
      />
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt/>
      </v-container>
    </v-main>
    <v-footer class="text-center pa-1" absolute app>
      <span style="width: 100%"
      >COPYRIGHT &copy; {{ new Date().getFullYear() }}</span
      >
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          title: "หน้าหลัก",
          to: "/",
        },
        {
          title: "บริการของเรา",
          to: "/service",
        },
        {
          title: "ข่าวสาร",
          to: "/news",
        },
        {
          title: "เกี่ยวกับเรา",
          to: "/about-us",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
      toggleMenu: 0,
    };
  },
  beforeMount() {
    this.$nextTick(() => {
      let theme = '#50874d';
      if (theme) {
        console.log("theme : ", theme);
        console.log("$vuetify", this.$vuetify);
        this.$vuetify.theme.defaults.light.primary = theme.toUpperCase();
        this.$vuetify.theme.themes.light.primary = theme.toUpperCase();
        this.$vuetify.theme.themes.dark.primary = theme.toUpperCase();
      }
    });
  },
  mounted() {
    this.$meta().refresh();
  },
};
</script>
<style scoped>
.v-btn-toggle {
  background-color: inherit;
}

.v-container {
  font-family: "Prompt", serif;
}
</style>
