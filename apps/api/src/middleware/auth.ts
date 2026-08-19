import { expressjwt as jwt } from "express-jwt";
import jwks from "jwks-rsa";

const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    cacheMaxEntries: 5,
    cacheMaxAge: 600000, // 10 minutos
    rateLimit: true,
    jwksRequestsPerMinute: 10,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ["RS256"],
});

export default checkJwt;
