import "dotenv/config";
import express from "express";
import cors from "cors";
import { UnauthorizedError } from "express-jwt";
import { connect } from "./providers/mongoose";
import checkJwt from "./middleware/auth";
import { tramitesRouter } from "./routes/tramites";

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());

app.use((req, _res, next) => {
  console.log(`→ ${req.method} ${req.originalUrl}`);
  next();
});

app.get("/health", (_req, res) => res.json({ ok: true }));

app.use("/api/tramites", checkJwt, tramitesRouter);

// express-jwt tira un error especial cuando el token falta o es inválido —
// sin este handler, Express responde con una página HTML de error en vez de JSON.
app.use((err: unknown, _req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (err instanceof UnauthorizedError) {
    return res.status(401).json({ error: "Token inválido o expirado" });
  }
  next(err);
});

const PORT = process.env.PORT || 4000;

connect().then(() => {
  app.listen(PORT, () => console.log(`API corriendo en http://localhost:${PORT}`));
});
