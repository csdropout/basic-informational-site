import express from "express";
process.loadEnvFile(".env");
const app = express();

app.get("/", (req, res) => res.sendFile("index.html", { root: "." }));
app.get("/about", (req, res) => res.sendFile("about.html", { root: "." }));
app.get("/contact-me", (req, res) =>
  res.sendFile("contact-me.html", { root: "." }),
);

app.use((req, res, next) => {
  res.status(404).sendFile("404.html", { root: "." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`My first Express app - listening on port ${PORT}`);
});
