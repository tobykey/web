var express = require('express');
var router = express.Router();

/* 도서관리 page. */
router.get('/', function(req, res, next) {
  res.render('books', { title: '도서관리', name:'김토비' });
});

module.exports = router;
