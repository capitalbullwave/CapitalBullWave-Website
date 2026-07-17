import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import contactRoute from "./routes/contactRoutes.js";
import chatRoute from "./routes/chatRoutes.js";

const app = express();

/* ============================
   Middleware
============================ */

const allowedOrigins = [
  "http://localhost:5173",
  "https://capitalbullwave.com",
  "https://www.capitalbullwave.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests without an Origin header (e.g. Postman)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(helmet());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

/* ============================
   Rate Limiter
============================ */

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 Minutes
  max: 100,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});

app.use(limiter);

/* ============================
   Health Check
============================ */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Bull Wave Capital Backend Running 🚀",
  });
});

/* ============================
   API Routes
============================ */

app.use("/api/contact", contactRoute);
app.use("/api/chat", chatRoute);

/* ============================
   404 Route
============================ */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

/* ============================
   Global Error Handler
============================ */

app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

/* ============================
   Start Server
============================ */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});