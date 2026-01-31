const { createClient } = require('contentful')

const SPACE = 'e0x7i0aawesw'
const TOKEN = 'c9L2q9gUQw_UdmyIfybApTUbDvgmfNvXcq73QIN2_2w'

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
