var express = require('express');
var router = express.Router();

/* GET Post page. */
router.get('/', function(req, res, next) {
  res.render('post', { title: 'Странице поста' });
});

module.exports = router;
