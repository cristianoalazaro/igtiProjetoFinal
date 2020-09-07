const TransactionModel = require('../models/TransactionModel.js');

const express = require('express');
const transactionRouter = express.Router();

//Find by Year-Month
transactionRouter.get('/:period', async (req, res) => {
  try {
    const period = req.params.period;
    const transaction = await TransactionModel.find({
      yearMonth: period,
    });
    if (transaction.length === 0) {
      res.status(404).send('Erro de busca');
    }
    res.send(transaction);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Create transaction
transactionRouter.post('/create', async (req, res) => {
  try {
    const transaction = new TransactionModel(req.body);
    await transaction.save();

    res.send(transaction);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Update transaction
transactionRouter.patch('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const transaction = await TransactionModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    res.send(transaction);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Delete transaction
transactionRouter.delete('/:id', async (req, res) => {
  try {
    const transaction = await TransactionModel.findByIdAndDelete({
      _id: req.params.id,
    });

    if (!transaction) {
      res.status(404).send('Documento não encontrado!');
    } else {
      res.status(200).send('Registro excluído com sucesso!');
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = transactionRouter;
