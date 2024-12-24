const express = require('express');
const sqlite3 = require('sqlite3');

const app = express();
const port = 3001;
app.use(express.json())




app.listen(port, () => {
    createTable();
    console.log(`Server is running on http://localhost:${port}`);
});
