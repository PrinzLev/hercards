import { client } from "./client"

export const sanityFetch = async (query: string, params: object = {}) => {
    return await client.fetch(query, params, { cache: "no-cache" })
}
