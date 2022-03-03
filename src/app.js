import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import App from './App.vue'
import env from './lib/env'
import { fetchNavLinks, fetchFooterLinks, fetchSocialLinks } from './lib/links'

Vue.config.productionTip = false

Vue.config.ignoredElements = ['.aca_wrapper']

Vue.use(Vuetify)

Vue.prototype.$env = env()

export default function(data) {
  return new Vue({
    async mounted() {
      this.navLinks = await fetchNavLinks(this.$env)
      this.footerLinks = await fetchFooterLinks(this.$env)
      this.socialLinks = await fetchSocialLinks(this.$env)
    },

    vuetify: new Vuetify({
      theme: {
        themes: {
          light: {
            primary: '#103260',
            secondary: '#1E81B2',
            accent: '#F5CA0E',
          },
        },
      },
    }),
    components: {
      'hcflgov-wrapper': App,
    },
    data: () => ({
      navLinks: [],
      footerLinks: [],
      socialLinks: [],

      appBarTitle: 'HillsGovHub',
      appBarNavTooltip: 'Toggle Left Navigation',
      navDrawerTitle: 'Hillsborough County',
      navDrawerSubtitle: 'Online Government Services',

      // data overrides
      ...data,
    }),
  })
}
