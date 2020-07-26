
module.exports = (req, res, next) => {

  omitPaths = ['/', '/about', '/contact'];
  if ( _.includes(omitPaths, req.path) ) return next();


  console.log('Middleware', req.path, req.method);
  next()
};