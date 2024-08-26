import express from "express";
import cors from cors
import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV || "development"}` });

async function loadDependencies() {
  const allRoutes = await import("./routes/index.js");

  const app = express();
  const port = process.env.PORT || 5000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(cors());

  app.use("/api", allRoutes.default);

  app.listen(port, () => {
    console.log(`Server: running on port ${port}`);
  });
}

loadDependencies();
