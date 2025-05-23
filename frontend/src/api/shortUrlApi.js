import axiosInstance from "../utils/axiosInstance"

export const createShortUrl = async (url , slug) => {
    const {data} =  await axiosInstance.post("/api/create" , {
        url, slug
    })
    return data.shortUrl
}

export const getAllUrls = async () => {
    const {data} =  await axiosInstance.get("/api/auth/all-urls")
    return data.urls
}