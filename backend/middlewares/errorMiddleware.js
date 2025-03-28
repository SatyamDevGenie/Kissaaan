// Middleware to handle "not found" errors
export const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}

// Middleware to handle all other errors
export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: errorHandler.messsge,
    stack: process.env.NODE_ENV === 'production' ? err.stack : null   // Include stack trace in development
  })
}
