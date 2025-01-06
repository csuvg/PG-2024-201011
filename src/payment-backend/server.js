const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const port = 3000;



// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configuración de la conexión a PostgreSQL
const pool = new Pool({
  user: "",
  host: "",
  database: "",
  password: "",
  port: 5432,
});

// Ruta para guardar el monto
app.post("/save-payment", async (req, res) => {
  const { amount } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO payments (amount, date) VALUES ($1, NOW()) RETURNING *",
      [amount]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al guardar el monto");
  }
});

// Ruta para obtener los pagos
app.get("/payments", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM payments ORDER BY date DESC");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los pagos");
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
