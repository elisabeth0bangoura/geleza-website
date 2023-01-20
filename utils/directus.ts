import { Directus } from '@directus/sdk'

const directus = new Directus('http://localhost:8055', {
  auth: {
    autoRefresh: true,
    mode: 'cookie',
  },
})

export default directus
