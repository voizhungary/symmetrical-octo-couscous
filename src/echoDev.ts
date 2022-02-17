import { Request, Response } from "express";

const echoDev = (req: Request, res: Response) => {
  res.json({
    message: "This is the echo dev endpoint",
    data: req.body as unknown,
  });
};

export default echoDev;
