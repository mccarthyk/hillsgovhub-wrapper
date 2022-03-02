import axios from 'axios'

const TABLE_ID = `appMPDyS7z5C6dIiS`

export const airtable = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? `https://api.airtable.com/v0/${TABLE_ID}`
      : `https://hc-caching-proxy.herokuapp.com/airtable/${TABLE_ID}`,
  headers:
    process.env.NODE_ENV === 'development'
      ? { Authorization: `Bearer key1XrFuYhG1GKHvu` }
      : undefined,
})
