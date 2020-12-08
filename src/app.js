import './links'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import App from './App.vue'

Vue.config.productionTip = false

Vue.config.ignoredElements = ['.aca_wrapper']

Vue.use(Vuetify)

export default function(data) {
  return new Vue({
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
      helpLink: window.helpLink,
      navLinks: window.navLinks,
      footerLinks: window.footerLinks,
      socialLinks: window.socialLinks,

      appBarTitle: '<strong>Hills</strong>Gov<strong>Hub</strong>',
      appBarNavTooltip: 'Toggle Left Navigation',
      navDrawerTitle: 'Hillsborough County',
      navDrawerSubtitle: 'Online Government Services',

      // data overrides
      ...data,
    }),
  })
}
