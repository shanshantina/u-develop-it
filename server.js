const express = require('express');
const db = require('./db/database');

// this one connect to the index.js file in routes/apiRoutes folder
const apiRoutes = require('./routes/apiRoutes');

// create PORT
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// use apiRoutes
app.use('/api', apiRoutes);


// default response for any other request(Not Found) catch all
app.use((req, res) => {
    res.status(404).end();
});


// start server after DB connection
db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});


