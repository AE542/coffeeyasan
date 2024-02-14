const mysql= require('mysql2');
const express = require('express');
const app = express();
const cors = require('cors');
// create a new mysql connection
const connection = mysql.createConnection({
    host: '35.189.71.193',
    user: 'root',
    password: 'coffeenomitai25',
    database: 'coffeeshopdata'
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