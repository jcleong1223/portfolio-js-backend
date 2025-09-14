export function checkSecret(req, res, next) {
  const clientKey = req.headers["x-api-key"]; // e.g. from request header
  const serverKey = process.env.API_SECRET_KEY; // store securely in .env

  if (!clientKey || clientKey !== serverKey) {
    return res.status(401).json({ status: false, message: "Unauthorized: Invalid secret key" });
  }

  next();
}