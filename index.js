import express from "express";
import router from "./routes/index.route.js";
import pinoHttp from "pino-http";
import logger from "./config/logger.config.js";

const app = express();
const port = 3000;

// Middleware untuk parsing JSON pada request body
app.use(pinoHttp());
app.use(express.json());
app.use(router);

if (process.env.ENV !== "production") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    logger.info(`Example app listening on port ${port}`);
    logger.info("Application started successfully");
  });
}

export default app;
