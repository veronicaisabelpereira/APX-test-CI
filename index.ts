import * as express from "express";

const app = express();
const PORT = 3000;

console.log("Mi nombre es ", process.env.NAME);


app.get("/hola", (req, res) => {
  res.json({
    message: "Hola mundo, desde el servidor",
  });
});
app.get("/env", (req, res) => {
  res.json({
    environment: process.env.ENVIRONMENT,
  });
});
app.listen(PORT, () => {
  console.log("Server is running on port: ", PORT);
});
