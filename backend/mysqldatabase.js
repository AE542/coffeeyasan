const mysql= require('mysql2');
const fs= require('fs');
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
// create a new mysql connection

const connection = mysql.createConnection({
    host: process.env.DB_A_HOST,
    user: process.env.DB_A_USER,
    password: process.env.DB_A_PASSWORD,
    database: process.env.DB_A_NAME,
    port: process.env.DB_A_PORT,
    ssl: {
        ca: fs.readFileSync('../src/ca.pem')
    }

    // host: process.env.DB_HOST,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME
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
connection.query(sql, (error, results) => {
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