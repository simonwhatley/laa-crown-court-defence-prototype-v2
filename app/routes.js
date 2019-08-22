const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.render('index');
});

router.get('/claim-list', (req, res) => {

  let data = require('./views/data/claims_litigators.json');

  // console.log(data);

  res.render('claim-list', {
    claims: data
  });
});

router.get('/claim-summary', (req, res) => {
  res.render('claim-summary');
});

router.get('/claim-details', (req, res) => {
  res.render('claim-details');
});

// Add your routes here - above the module.exports line

module.exports = router;
