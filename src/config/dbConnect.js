import mongoose from "mongoose";

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017/livraria';

mongoose.connect(MONGO_DB_URL);

let db = mongoose.connection;

export default db;