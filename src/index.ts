import express, { Application } from "express";
import cors from "cors";

import auth from "./auth";
import echo from "./echo";
import echoDev from "./echoDev";
import query from "./query";

const expressApp: Application = express();

expressApp.use(express.json());
expressApp.use(cors());
expressApp.use(auth);

expressApp.post("/echo", echo);
expressApp.get("/query", query);

if (process.env.NODE_ENV === "development") {
  expressApp.post("/echo-dev", echoDev);
}

const port: number = 4001;
expressApp.listen(port, () => {
  console.log(`Running server at localhost:${port}`);
});
