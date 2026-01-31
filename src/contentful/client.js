import { createClient } from 'contentful'

const SPACE = import.meta.env.VITE_CONTENTFUL_SPACE
const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN

let client

if (!SPACE || !ACCESS_TOKEN) {
    // Friendly fallback to avoid app crash when env vars are missing (e.g. misconfigured deploy)
    // We expose a minimal client API that returns an empty list and logs a clear warning.
    console.warn(
        'Contentful credentials not set. Set VITE_CONTENTFUL_SPACE and VITE_CONTENTFUL_ACCESS_TOKEN when building for production.',
    )

    client = {
        getEntries: () => Promise.resolve({ items: [] }),
    }
} else {
    client = createClient({ space: SPACE, accessToken: ACCESS_TOKEN })
}

export default client

