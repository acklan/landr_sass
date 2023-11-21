import {  defineConfig } from 'tinacms'

const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD

export default defineConfig({
  token: '858a9f87dc6f45fbbc3cead5981c1be57cd13188' // generated on app.tina.io
  clientId: 'c9be7ee2-38c8-4a4b-ac19-440f07d29d2c', // generated on app.tina.io
  branch,
  schema: {
    // ...
  },
})
