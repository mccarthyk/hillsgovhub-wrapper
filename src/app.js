import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import App from './App.vue'

Vue.config.productionTip = false

Vue.config.ignoredElements = ['.aca_wrapper']

Vue.use(Vuetify)

export default function(data) {
  return new Vue({
    vuetify: new Vuetify(),
    components: {
      'hcflgov-wrapper': App,
    },
    data: () => ({
      helpLink: window.helpLink,
      navLinks: window.navLinks,
      footerLinks: window.footerLinks,
      socialLinks: window.socialLinks,

      appBarTitle: 'Citizen Access',
      navDrawerTitle: 'Hillsborough County',
      navDrawerSubtitle: 'Online Government Services',

      // data overrides
      ...data,
    }),
    methods: {
      customizationPath(file) {
        return window.$customizationPath + file
      },
    },
  })
}
