import { is_number_exist_db } from "../database/db.js";

/*
const isNumberExist = (req, res) => {
  const { number } = req.query;
  is_number_exist_db(number)
    .then((exists) => {
      res.json({ exists });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};
*/

const isNumberExist = (req, res) => {
  let { number } = req.params;
  number = parseInt(number);
  const exists = is_number_exist_db(number);
    res.send(`Number ${number} exists: ${exists}`);
};


export default isNumberExist;