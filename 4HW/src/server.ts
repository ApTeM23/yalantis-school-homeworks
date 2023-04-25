import * as dotenv from "dotenv";

import { HttpError } from "http-errors";
import express, { NextFunction, Request, Response } from "express";

import { usersController } from "./controllers/users.controller";
import { postsController } from "./controllers/posts.controller";
import { createConnection } from "./database";

dotenv.config();


export class Server {
  private app = express();

  async start() {
    await this.initDatabase();
    this.initMiddlewares();
    this.initRoutes();
    this.initErrorHandling();
    this.startListening();
  }

  async initDatabase() {
    try {
      await createConnection();

      console.log("Successfully connected to database");
    } catch (err) {
      console.log("Database connection failed", err);
      process.exit(1);
    }
  }

  private initMiddlewares() {
    this.app.use(express.json({ limit: "5mb" }));
  }

  private initRoutes() {
    this.app.use("/users", usersController);
    this.app.use("/posts", postsController);
  }

  private initErrorHandling() {
    this.app.use(
      (err: HttpError, req: Request, res: Response, next: NextFunction) => {
        const statusCode = err.status || 500;
        res.status(statusCode).send({
          message: err.message,
          status: statusCode,
        });
      }
    );
  }

  private startListening() {
    this.app.listen(8000);
    console.log("Server started listening on port", 8000);
  }
}
