const express = require('express');
const { body } = require('express-validator/check');

const clientController = require('../controllers/client');

const router = express.Router();

// GET /client/get
router.get('', clientController.get);

// POST /client/post
router.post(
  '',
  [
    body('code')
      .trim(),
    body('name')
      .trim(),
    body('address')
      .trim(),
    body('phone')
      .trim()
  ],
  clientController.create
);


router.put(
  '',
  [
    body('code')
      .trim(),
    body('name')
      .trim(),
    body('address')
      .trim(),
    body('phone')
      .trim(),
    body('status')
    .isNumeric()
  ],
  clientController.edit
);

module.exports = router;
