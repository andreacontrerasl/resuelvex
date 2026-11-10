import { Request, Response, NextFunction } from "express";

const NAMESPACE = "https://resuelvex.com";

export interface AuthedRequest extends Request {
  auth?: {
    sub: string;
    [key: string]: any;
  };
}

export function isAdmin(req: AuthedRequest) {
  const userInfo = req.auth?.[`${NAMESPACE}/user`];
  const roles = userInfo?.roles || [];
  return roles.includes("admin");
}

export function requireAdmin(req: AuthedRequest, res: Response, next: NextFunction) {
  if (!isAdmin(req)) {
    return res.status(403).json({ error: "No autorizado" });
  }
  next();
}