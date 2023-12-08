var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:name', function(req, res, next) {
  var name = req.params.name
  res.send({
    "facebook": "https://facebook.com/"+name,
    "twitter": "@"+name,
    "linkedin": "https://linkedin.com/"+name
  });
});

module.exports = router;
