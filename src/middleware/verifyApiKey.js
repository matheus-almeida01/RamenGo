function verifyApiKey (req, res, next) {

  const apiKey = req.headers['x-api-key']

  if (apiKey) {
    if (apiKey == 'ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf') {
      return next()
    } else {
      return res.status(403).json({ error: 'x-api-key header missing' })
    }
  } else {
    return res.status(403).json({ error: 'x-api-key header missing' });
  }

}

module.exports = { verifyApiKey }
