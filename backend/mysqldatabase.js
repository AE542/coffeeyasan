const mysql= require('mysql2');
const fs= require('fs');
const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

// read directory path from env var
// const certDirectory = process.env.CERT_DIRECTORY;

// const certFilePath = path.join(certDirectory, 'ca.pem')

const caPemFile = ""

// create a new mysql connection

const connection = mysql.createConnection({
    host: process.env.DB_A_HOST,
    user: process.env.DB_A_USER,
    password: process.env.DB_A_PASSWORD,
    database: process.env.DB_A_NAME,
    port: process.env.DB_A_PORT,
    ssl: {
        ca: caPemFile
        //ca: fs.readFileSync('../src/ca.pem') 
        // running locally. Need to call it as its own file in Render
    }

    // host: process.env.DB_HOST,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME
});

const blogpostsConnection = mysql.createConnection({
    host: process.env.DB_A_HOST,
    user: process.env.DB_A_USER,
    password: process.env.DB_A_PASSWORD,
    database: process.env.DB_BLOGPOSTS,
    port: process.env.DB_A_PORT,
    ssl: {
        ca: fs.readFileSync('../src/ca.pem')
    }

});

app.use(cors());
app.get('/coffeeshops', (request, result) => {
    const sql = 'SELECT * FROM CoffeeShops';
    connection.query(sql, (error, results) => {
        if (error) {
            console.error('Error connecting to MySQL database, check your configuration', error);
            result.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        console.log('Connection to MySQL database successful! Results:', results);
        result.json(results);
    })
    
})

app.get('/blogposts',(request, result) => {
const sql = 'SELECT * FROM BLOGPOSTS';
blogpostsConnection.query(sql, (error, results) => {
    if (error) {
        console.error('Error connecting to MySQL database, check your configuration', error);
        result.status(500).json({ error: 'Internal Server Error' });
        return;
    }
    console.log('Connection to MySQL database successful! Results:', results);
    result.json(results);
})
    
});


// start server

const PORT = process.env.DB_PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    console.log(`CoffeeShops: http://localhost:${PORT}/coffeeshops`)
    console.log(`BlogPosts: http://localhost:${PORT}/blogposts`)
})

// connect to the database