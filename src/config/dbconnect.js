import mongoose from "mongoose";

mongoose.connect("mongodb+srv://root:root@cluster0.amcuito.mongodb.net/");

const db = mongoose.connection;

export default db;
