
const mongoose = require('mongoose')

const url = `mongodb+srv://carrot269:%23goku260901@cluster0.es6fem4.mongodb.net/`;

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
