import { Directus } from '@directus/sdk'

const directus = new Directus('https://admin.geleza.app', {
  auth: {
    staticToken: process.env.API_KEY,
  },
})

export default directus
