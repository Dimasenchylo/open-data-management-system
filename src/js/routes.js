const { Router, query } = require("express");
const mysql = require('mysql2/promise');
const { extend } = require('lodash');

const connectionUrl = 'mysql://root:@localhost:3306/imbaza';

const sql = {
  createDonate: `INSERT INTO DONATE(ID, CARD, OWNER) VALUES (:id, :card, :owner)`,
  readDonateByID: `SELECT * FROM DONATE WHERE ID= :id`,
  readAllDonate: `SELECT * FROM DONATE`,
  updateDonateByID: `UPDATE DONATE SET CARD= :card, OWNER= :owner WHERE ID= :id`,
  deleteDonateByID: `DELETE FROM DONATE WHERE ID= :id`,
};

const executeSQL = async (query, values) => {
  let connection;
  let sqlStatement;
  try {
    connection = await mysql.createConnection({
      uri: connectionUrl,
      password: '1234567890',
      namedPlaceholders: true
    });

    sqlStatement = await connection.format(query, values);

    const [ results, fields ] = await connection.execute(sqlStatement);
    return results;
  } catch (err) {
    throw new Error(`SQL: ${sqlStatement} - ${err.toString()}`);
  } finally {
    if (connection) connection.end();
  }
};

const router = Router();

router.post('/:id', async (req, res) => {
  try {
    const values = extend({}, req.body, req.params);
    let result = await executeSQL(sql.createDonate, values);
    result = await executeSQL(sql.readDonateByID, req.params);
    res.status(200).send(result);
  } catch (err) {
    return res.status(500).send({
      status: 500,
      error: err.toString()
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await executeSQL(sql.readAllDonate);
    res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err.toString());
  }
});

router.get('/:id', async (req, res) => {
  try {
    const result = await executeSQL(sql.readDonateByID, req.params);
    res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err.toString());
  }
});

router.put('/:id', async (req, res) => {
  try {
    const values = extend({}, req.body, req.params);
    let result = await executeSQL(sql.updateDonateByID, values);
    result = await executeSQL(sql.readDonateByID, req.params);
    res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err.toString());
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const result = await executeSQL(sql.readDonateByID, req.params);
    await executeSQL(sql.deleteDonateByID, req.params);
    res.status(200).send(result);
  } catch (err) {
    return res.status(500).send(err.toString());
  }
});

module.exports = router;
