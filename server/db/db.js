const mongoose = require('mongoose');

const db_connect = () => {
    mongoose.connect('mongodb://myUser:user5246@161.246.127.24:9029/mydb?readPreference=primary&ssl=false',{ useNewUrlParser: true,useUnifiedTopology: true,authSource: 'mydb'})
    .catch((err) => console.error('Error connecting to database:',err))
    .then(() => console.log('Connected to database'))
}

export default db_connect