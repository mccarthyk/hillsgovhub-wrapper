//
window.helpLink = {
  name: 'Help',
  icon: 'mdi-help-circle-outline',
  href: 'https://www.hillsboroughcounty.org/HillsGovHubHelp',
  target: '_blank',
}

//
window.navLinks = [
  {
    name: 'Home',
    icon: 'mdi-home',
    href: '/hcfl/Welcome.aspx?TabName=Home&TabList=Home',
  },
  {
    name: 'Search',
    icon: 'mdi-magnify',
    children: [
      {
        name: 'My Dashboard',
        href: '/hcfl/Dashboard.aspx?TabName=Home&TabList=Home',
      },
      {
        name: 'My Records',
        href: '/hcfl/Cap/MyRecordsCap.aspx?TabName=Home&TabList=Home',
      },
      {
        name: 'Property Information',
        href: '/hcfl/APO/APOLookup.aspx?TabName=APO',
      },
      {
        name: 'Admin Records',
        href:
          '/hcfl/Cap/CapHome.aspx?module=Administrative&TabName=Administrative',
      },
      {
        name: 'Building & Site Records',
        href: '/hcfl/Cap/CapHome.aspx?module=Building&TabName=Building',
      },
      {
        name: 'Fire Records',
        href: '/HCFL/Cap/CapHome.aspx?module=Fire&TabName=Fire',
      },
      {
        name: 'License Records',
        href:
          '/HCFL/GeneralProperty/PropertyLookUp.aspx?isLicensee=Y&TabName=APO',
      },
    ],
  },
  {
    name: 'New',
    icon: 'mdi-plus',
    children: [
      // {
      //   name: 'Admin Application',
      //   href:
      //     '/hcfl/Cap/CapApplyDisclaimer.aspx?module=Administrative&TabName=Administrative',
      // },
      {
        name: 'Building & Site Application',
        href:
          '/hcfl/Cap/CapApplyDisclaimer.aspx?Module=Building&TabName=Building',
      },
      {
        name: 'Contractor License Application',
        href:
          '/hcfl/Cap/CapApplyDisclaimer.aspx?module=Licenses&TabName=Licenses',
      },
      {
        name: 'Fire Application',
        href: '/hcfl/Cap/CapApplyDisclaimer.aspx?Module=Fire&TabName=Fire',
      },
    ],
  },
  {
    name: 'Request',
    icon: 'mdi-bell',
    children: [
      {
        name: 'Inspections',
        href:
          '/hcfl/Cap/CapHome.aspx?IsToShowInspection=yes&module=Building&TabName=Building',
      },
    ],
  },
  { ...window.helpLink },
]

//
window.footerLinks = [
  {
    name: 'County Website',
    href: 'https://hillsboroughcounty.org/',
  },
  {
    name: 'Board of County Commissioners',
    href:
      'https://hillsboroughcounty.org/government/board-of-county-commissioners',
  },
  {
    name: 'County Locations',
    href: 'https://hillsboroughcounty.org/residents/citizens/county-locations',
  },
  {
    name: 'Jobs',
    href: 'https://hillsboroughcounty.org/about-hillsborough/jobs',
  },
  {
    name: 'Contact Us',
    href: 'https://hillsboroughcounty.org/about-hillsborough/contact-us',
  },
]

//
window.socialLinks = [
  {
    name: 'Facebook',
    icon: 'mdi-facebook',
    href: 'https://www.facebook.com/HillsboroughFL/',
  },
  {
    name: 'Twitter',
    icon: 'mdi-twitter',
    href: 'https://twitter.com/HillsboroughFL',
  },
  {
    name: 'YouTube',
    icon: 'mdi-youtube',
    href: 'https://www.youtube.com/user/HillsboroughCounty',
  },
  {
    name: 'Instagram',
    icon: 'mdi-instagram',
    href: 'https://www.instagram.com/hillsboroughfl/',
  },
  {
    name: 'LinkedIn',
    icon: 'mdi-linkedin',
    href: 'https://www.linkedin.com/company/hillsboroughfl',
  },
]
