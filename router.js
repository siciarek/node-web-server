module.exports = function(app) {
  app.get('/', function(req, res, next) {
    // req - request
    // res - response
    // next - ?

      res.send(['waterbottle', 'phone', 'paper']);
  });
}

