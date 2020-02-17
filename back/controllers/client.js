const { validationResult } = require('express-validator/check');

const Client = require('../models/client');

exports.get = (req, res, next) => {
  const clients = new Client();
  clients
    .fetchAll()
    .then(result => {
      res.status(201).json({
        message: 'Operação realizada com sucesso',
        result: result[0],
      });
    })
};

exports.create = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: 'Ocorreu um erro! ',
      errors: errors.array()
    });
  }
  const content = req.body;
  const post = new Client();
  post.code =content.code,
  post.name = content.name,
  post.address = content.address,
  post.phone = content.phone,
  post
    .save()
    .then(result => {
      res.status(201).json({
        message: 'Operação realizada com sucesso',
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.edit= (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: 'Ocorreu um erro! ',
      errors: errors.array()
    });
  }
  const content = req.body;
  const client = new Client();
  client.id =content.id,
  client.code =content.code,
  client.name = content.name,
  client.address = content.address,
  client.phone = content.phone,
  client.status = content.status
  client
    .edit()
    .then(result => {
      res.status(201).json({
        message: 'Operação realizada com sucesso',
      });
    })
    .catch(err => {
      console.log(err);
    });
};
