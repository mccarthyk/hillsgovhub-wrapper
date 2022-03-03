export default function() {
  let { host } = window.location

  if (process.env.NODE_ENV === 'development') {
    // host = 'aca-prod.accela.com'
  }

  switch (host.toLowerCase()) {
    case 'aca-supp.accela.com':
      return 'SUPPORT'

    case 'aca-test.accela.com':
      return 'TEST'

    case 'aca-nonprod.accela.com':
      return 'STAGE'

    case 'aca-prod.accela.com':
      return 'PRODUCTION'

    default:
      return 'DEV'
  }
}
