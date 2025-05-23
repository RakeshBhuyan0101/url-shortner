import { checkCustomSlug, getCustomUrl, saveShortUrl } from "../dao/short_rul.js"
import { generateNanoId } from "../utils/helper.js"

export const createShortUrlWithoutUserId = async (url) => {
    const shortUrl = generateNanoId(7)
    if (!shortUrl) throw new Error("Short Url not generated")
    await saveShortUrl(shortUrl ,url )
    return shortUrl
}

export const createShortUrlWithUserId = async (url , userId , slug = null) => {
    const shortUrl = slug ||  generateNanoId(7)
    const exists = await getCustomUrl(slug)
    if (exists) throw new Error ("This custom URL already exists")

    await saveShortUrl(shortUrl ,url , userId)
    return shortUrl
}