const errorMiddleware = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging
  
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
  
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
  };
  
  module.exports = errorMiddleware;
  