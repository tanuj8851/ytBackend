import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

app.use(cors({ origin: true, credentials: true }));
app.use(cookieParser());

const app = express();

export { app };
