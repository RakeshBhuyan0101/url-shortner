import { findUrlFromShortUrl } from "../dao/short_rul.js";
import {
  createShortUrlWithoutUserId,
  createShortUrlWithUserId,
} from "../services/shortUrl.service.js";
import tryCatchWrapper from "../utils/tryCatchWrapper.js";

export const createShortUrl = tryCatchWrapper(async (req, res) => {
  const data = req.body;
  const user = await req.user
  
  let shortUrl 
  if (req.user) {

     shortUrl = await createShortUrlWithUserId(data.url, user._id , data.slug );
  } else {

     shortUrl = await createShortUrlWithoutUserId(data.url);
  }
  res.status(200).json({ shortUrl: process.env.APP_URL + shortUrl });
});

export const createCustomShortUrl = tryCatchWrapper(async (req, rs) => {
  const { url, slug } = req.body;
  const shortUrl = await createShortUrlWithUserId(url , slug)
  res.status(200).json({shortUrl : process.env.APP_URL + shortUrl})
});

export const redirectFromShortUrl = tryCatchWrapper(async (req, res) => {
  const { id } = req.params;

  const url = await findUrlFromShortUrl(id);
  if (!url) throw new Error("Short url not found");
  res.redirect(url.full_url);
});
