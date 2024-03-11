require('dotenv').config();
const mongoose = require('mongoose')

const url = process.env.url;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
        console.log("sdfsdfsdg")
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
// block arko
// baler college