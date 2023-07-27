// const express = require('express');
// it is not experimental feature just typescript that is going to be compiled
import express from "express"; // now you have it
import todoRoutes from "./routes/todos";

const app = express();

app.use("/todos", todoRoutes);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

app.listen(3000);
