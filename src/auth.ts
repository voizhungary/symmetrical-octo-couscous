import { Request, Response } from "express";

type Next = () => void;
const auth = (req: Request, res: Response, next: Next) => {
  const token: string = "abc123";

  if (
    !("x-auth-token" in req.headers) ||
    req.headers["x-auth-token"] !== token
  ) {
    res.status(401);
    res.json({
      errors: [
        {
          message: "Unauthorized!",
        },
      ],
    });
    res.send();
  } else {
    next();
  }
};

export default auth;
