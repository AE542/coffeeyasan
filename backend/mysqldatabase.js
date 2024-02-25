const mysql= require('mysql2');
const express = require('express');
const app = express();
const cors = require('cors');
// create a new mysql connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'coffeeyasan25',
    database: 'coffee_ya_san_local'
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    console.log(`CoffeeShops: http://localhost:${PORT}/coffeeshops`)
    console.log(`BlogPosts: http://localhost:${PORT}/blogposts`)
})

// connect to the database

// connection.connect((error) => {
//     if (error) {
//         console.error('Error connecting to MySQL database, check your configuration')
//     } else {
//         console.log('Connection to MySQL database successful!')
//     }
// })

// connection.query('SELECT * FROM CoffeeShops', (error, results, fields) => {
//     if (error) {
//       console.error('Error fetching data:', error);
//       return;
//     }
//     console.log('Retrieved data:', results);
//   });

// connection.end();