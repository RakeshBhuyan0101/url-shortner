export const cookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "Strict",
  maxAge: 24 * 60 * 60 * 1000, // 1 day
};
