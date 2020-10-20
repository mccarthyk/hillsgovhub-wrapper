import Vue from 'vue'
import HcflgovWrapper from './app'

HcflgovWrapper({
  // appBarTitle: 'Citizen Access',
  // appBarNavTooltip: 'Toggle Left Navigation',
  // navDrawerTitle: 'Hillsborough County',
  // navDrawerSubtitle: 'Online Government Services',
}).$mount('#app')

// fake app
new Vue({
  el: '.aca_wrapper',
})

/* eslint-disable */
let $acaWrapper = $('.aca_wrapper')
$acaWrapper.prependTo('#app-container')
/* eslint-enable */
