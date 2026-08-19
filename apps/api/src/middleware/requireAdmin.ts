import { Request, Response, NextFunction } from "express";

const NAMESPACE = "https://resuelvex.com";

export interface AuthedRequest extends Request {
  auth?: {
    sub: string;
    [key: string]: any;
  };
}

export function requireAdmin(req: AuthedRequest, res: Response, next: NextFunction) {
  const userInfo = req.auth?.[`${NAMESPACE}/user`];
  const roles = userInfo?.roles || [];
  if (!roles.includes("admin")) {
    return res.status(403).json({ error: "No autorizado" });
  }
  next();
}