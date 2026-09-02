import express from "express";
import type { Article } from "@news-portal/shared";

const app = express();

app.get("/api/articles", (_req, res) => {
  const articles: Article[] = [];
  res.json(articles);
});

app.listen(3000, () => console.log("Backend running on http://localhost:3000"));