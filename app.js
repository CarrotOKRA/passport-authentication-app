const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const app = express();

// db config
const db = require('./config/keys').mongoURI;

// connect to MongoDB
// console.log(db);
mongoose.connect(db, {
	useNewUrlParser: true, 
})
.then(console.log("mongodb is connected"))
.catch(err=>console.log(err))

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//bodyparser
app.use(express.urlencoded({extender:false})); 

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = 5000;

app.listen(PORT, console.log(`Server started on ${PORT}`));
