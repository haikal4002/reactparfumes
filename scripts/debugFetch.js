const { createClient } = require('contentful')

const SPACE = ''
const TOKEN = ''

const client = createClient({ space: SPACE, accessToken: TOKEN })

client
    .getEntries({ content_type: 'parfumes', limit: 5 })
    .then((res) => {
        console.log(`Got ${res.items.length} items`)
        res.items.forEach((it, idx) => {
            console.log('--- Item', idx, 'id=', it.sys?.id)
            console.log('fields keys:', Object.keys(it.fields))
            console.log('name:', it.fields.name || it.fields.title)
            console.log('image field:')
            console.log(JSON.stringify(it.fields.image, null, 2))
        })
    })
    .catch((err) => {
        console.error('Fetch error', err)
        process.exit(1)
    })
