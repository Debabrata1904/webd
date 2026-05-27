import { get_all_numbers_db } from "../database/db.js";

function getAllNumbers(req, res) {
  //const numbers = require("../database/db").get_all_numbers_db();
  const numbers = get_all_numbers_db();
    res.status(200).json({ numbers });
}

export default getAllNumbers;
