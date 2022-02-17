import { Request, Response } from "express";

const echo = (req: Request, res: Response) => {
  res.json({
    message: "This is the echo endpoint",
    data: req.body as unknown,
  });
};

export default echo;
