import { Request, Response } from "express";
import db from "./db";

db.init();
const connection = db.get();

const echo = async (req: Request, res: Response) => {
  const sql: string = "SELECT * FROM `mydb`.`books`";
  const result = await connection.execute(sql);

  res.json({
    message: "This is the query endpoint.",
    data: result[0],
  });
};

export default echo;
