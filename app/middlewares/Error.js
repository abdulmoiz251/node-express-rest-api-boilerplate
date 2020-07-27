
module.exports = (err, req, res, next) => {

  console.log('Error middleware');
  console.log(err.stack);

  res.status(500).send('Something went wrong!')

};