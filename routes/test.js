var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    res.send([{
        name: "2343",
        age:334
  }]);
});
module.exports = router;