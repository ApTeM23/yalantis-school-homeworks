import { Middleware } from "../middleware.type";

export function asyncWrapper(middleware: Middleware): Middleware {
  return async (req, res, next) => {
    try {
      await middleware(req, res, next);
    } catch (err) {
      next(err);
    }
  };
}
