const Mongoose = require('mongoose');
const debug = require('debug')('app:database');

const dbhost = process.env.DBHOST || 'localhost';
const dbport = process.env.DBPORT || '27017';
const dbname = process.env.DBNAME || 'professionnet-db';

// const dburi = process.env.DBURI || `mongodb://${dbhost}:${dbport}/${dbname}`;
// const dburi = `mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.0`;
//const dburi = `mongodb+srv://professionnet:nDE08ZncGV5TXeel@cluster0.7mwfzlk.mongodb.net/professionnet-db?retryWrites=true&w=majority`
const dburi = "mongodb+srv://asdf1234:Nz8uwurG1bseF5Sb@professionnet-cluster-b.snmmv.mongodb.net/?retryWrites=true&w=majority&appName=professionnet-cluster-bd"

// Connecting to the database
const connect = async () => {
    console.log("Intentando conectar a:", dburi);
    try {
        await Mongoose.connect(dburi);
        debug("Connected to database");
        console.log("Conexión exitosa a la base de datos");
    } catch (error) {
        console.error("Error al conectar con la base de datos:", error);
        debug("Cannot connect to database");
        process.exit(1);
    }
}

// Disconnecting from the database
const disconnect = async () => {
    try {
        await Mongoose.disconnect();
        debug("Disconnected from database");
    } catch (error) {
        process.exit(1);
    }
}

module.exports = {
    connect,
    disconnect
}