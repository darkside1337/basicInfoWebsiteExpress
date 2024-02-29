import express from "express";
const app = express();
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url); // Gets the file path of the current module.
const __dirname = path.dirname(__filename); // Gets the directory name of the current module.
app.use(express.static("public"));
const PORT = process.env.PORT || 5000;



/* -------------------------------- HOMEPAGE -------------------------------- */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
/* ------------------------------- ERROR PAGE ------------------------------- */
app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});
/* ------------------------------- ABOUT PAGE ------------------------------- */
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});
/* ----------------------------- CONTACT ME PAGE ---------------------------- */
app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "contact-me.html"));
});

/* ------------------------------ SERVER START ------------------------------ */
app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
