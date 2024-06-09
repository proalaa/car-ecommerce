import express from "express";
import bodyParser from "body-parser";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import multer from "multer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;
const carsFilePath = path.join(__dirname, "../public/cars.json");

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// API to read cars.json
app.get("/api/cars", async (req, res) => {
  try {
    const data = await fs.readFile(carsFilePath, "utf8");
    res.json(JSON.parse(data));
  } catch (err) {
    res.status(500).json({ error: "Unable to read file" });
  }
});

// API to update cars.json
app.post("/api/cars", async (req, res) => {
  const newCarsData = req.body;
  try {
    await fs.writeFile(carsFilePath, JSON.stringify(newCarsData, null, 2));
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Unable to write file" });
  }
});

// API to handle file uploads
app.post("/api/upload", upload.array("images", 3), (req, res) => {
  const files = req.files;
  const fileUrls = files.map((file) => `/uploads/${file.filename}`);
  res.json({ files: fileUrls });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
