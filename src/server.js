import express from "express";
import mysql from "mysql2/promise";
import mongoose from "mongoose";

const app = express();

const client = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "hugo",
});

// const response = await client.query("SELECT 1 +1");
// console.log(response);

app.get("/", (re, res) => res.send("Hello word"));

const db = await mongoose.connect("mongodb://mymongo/dockertest");
console.log(db.connection.db.databaseName);

app.listen(3000, () => console.log("Server runing on port 3000"));
