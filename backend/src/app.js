import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(
    express.json({
        limit: "16kb",
    })
);
app.use(
    express.urlencoded({
        extended: true,
        limit: "16kb",
    })
);
app.use(express.static("public"));
app.use(cookieParser());

// import routes
import userRouter from "./routes/user.routes.js";

app.get("", (_req, res) => {
    res.status(200).json({
        message: "Server Health Alright",
    });
});

app.get("/health", (_req, res) => {
    res.status(200).json({
        message: "Server Health Alright",
    });
});

// Routes
app.use("/api/v1/users", userRouter);

export { app };
