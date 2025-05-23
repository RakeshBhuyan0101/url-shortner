import SortUrl from "../models/shortUrl.model.js";
import { ConflictError } from "../utils/errorHandler.js";

export const saveShortUrl = async (short_rul, long_url, userId) => {
  try {
    const newUrl = new SortUrl({
      full_url: long_url,
      short_url: short_rul,
    });

    if (userId) {
      newUrl.user = userId;
    }

    await newUrl.save();
  } catch (error) {
    if (err.code == 11000) {
      throw new ConflictError("Short URL already exists");
    }
    throw new Error(err);
  }
};

export const findUrlFromShortUrl = async (short_rul) => {
  return await SortUrl.findOneAndUpdate(
    { short_url: short_rul },
    { $inc: { clicks: 1 } }
  );
};
export const getCustomUrl = async (slug) => {
  return await SortUrl.findOne({ short_url: slug });
};

export const checkCustomSlug = async (slug) => {
  return await SortUrl.findOne({ short_url: slug });
};
